import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:info@arthatutorials.com
      ?subject=PUC Enquiry
      &body=First Name: ${formData.firstName}%0D%0A
      Last Name: ${formData.lastName}%0D%0A
      Phone: ${formData.phone}%0D%0A
      Subject: ${formData.subject}`;

    window.location.href = mailtoLink;

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      subject: "",
    });
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

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject / Course Interested"
            value={formData.subject}
            onChange={handleChange}
            required
            className="
              w-full border border-gray-800 px-6 py-4
              focus:outline-none focus:border-primary
            "
          />

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              className="
                px-14 py-4
                bg-primary text-white font-semibold
                tracking-widest
                hover:opacity-90 transition
              "
            >
              SUBMIT
            </button>
          </div>
        </form>

        {/* Brochure */}
        <div className="mt-20">
          <a
            href="/brochure.pdf"
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
