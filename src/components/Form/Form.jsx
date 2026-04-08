import React, { useState } from "react";
import brochurePdf from "../../assets/ARTHA-BROCHURE.pdf";

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSehY9u5hwanXA5-DCNSHrOVCTEmxLxhPkeSQD-DCARhsiOGFQ/formResponse";

// Google Form entry IDs mapped to each field (inner field IDs)
const ENTRY_IDS = {
  name: "entry.2005620554",
  email: "entry.1045781291",
  phone: "entry.1166974658",
  course: "entry.1065046570",
};

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Combine first + last name to match Google Form's single "Name" field
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    // Prepare form data for POST
    const formBody = new URLSearchParams();
    formBody.append(ENTRY_IDS.name, fullName);
    formBody.append(ENTRY_IDS.email, formData.email);
    formBody.append(ENTRY_IDS.phone, formData.phone);
    formBody.append(ENTRY_IDS.course, formData.subject);

    try {
      // Direct POST request in background (no-cors ignores cross-origin response block)
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-widest mb-12">
          ENQUIRY FORM
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="
                w-full border border-gray-800 px-6 py-4
                focus:outline-none focus:border-primary
              "
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="
                w-full border border-gray-800 px-6 py-4
                focus:outline-none focus:border-primary
              "
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-full border border-gray-800 px-6 py-4
              focus:outline-none focus:border-primary
            "
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="
              w-full border border-gray-800 px-6 py-4
              focus:outline-none focus:border-primary
            "
          />

          {/* Subject / Course */}
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="
              w-full border border-gray-800 px-6 py-4
              focus:outline-none focus:border-primary
            "
          >
            <option value="" disabled>Select Subject / Course Interested</option>
            <option value="I PUC">I PUC</option>
            <option value="II PUC">II PUC</option>
          </select>

          {success && (
            <div className="text-green-600 font-semibold text-left mb-2">
              Thanks! Your enquiry has been submitted successfully.
            </div>
          )}

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className={`
                px-14 py-4
                bg-primary text-white font-semibold
                tracking-widest
                transition
                ${loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
              `}
            >
              {loading ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </form>

        {/* Brochure */}
        <div className="mt-20">
          <a
            href={brochurePdf}
            download
            className="
              inline-block w-full md:w-auto
              px-16 py-4
              bg-primary text-white font-semibold
              tracking-widest
              hover:opacity-90 transition
            "
          >
            DOWNLOAD E-BROCHURE
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
