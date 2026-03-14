import React from 'react';
import img1 from '../../assets/gallery/Picture1.png';
import img2 from '../../assets/gallery/Picture2.png';
import img3 from '../../assets/gallery/Picture3.png';
import img4 from '../../assets/gallery/Picture4.png';

const galleryImages = [
  { id: 1, src: img1, alt: "Memory 1" },
  { id: 2, src: img2, alt: "Memory 2" },
  { id: 3, src: img3, alt: "Memory 3" },
  { id: 4, src: img4, alt: "Memory 4" },
];

const Gallery = () => {
  return (
    <>
      <span id="gallery"></span>
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              data-aos="fade-up"
              className="text-4xl font-bold uppercase tracking-widest text-gray-900"
            >
              Memories of Artha
            </h2>
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="w-24 h-1.5 bg-primary mx-auto mt-6 rounded-full"
            ></div>
            <p 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Glimpses of our vibrant learning environment, dedicated faculty, and student journey.
            </p>
          </div>
          
          {/* Flex/Grid Layout for Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-72"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D768C]/80 via-[#0D768C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
