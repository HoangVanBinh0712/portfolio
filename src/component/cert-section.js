import { useState } from 'react';

const Certificate = ({ certificates, openModal }) => {
  return (
    <section id="section-certificates" className="mx-auto my-12 w-full scroll-mt-48 md:scroll-mt-48" data-aos="fade-up">
      <h1 className="mb-8 text-center text-2xl font-bold md:text-5xl">Certificates</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sn hover:cursor-pointer hover:shadow-md"
            onClick={() => openModal(cert.image)}
          >
            <div className="overflow-hidden border-b border-gray-300 h-48">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover hover:scale-105" />
            </div>
            <div className="space-y-4 p-6">
              <h3 className="text-xl font-bold">{cert.title}</h3>

              <div className="flex justify-between text-sm">
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-500">Achieved Date</h4>
                  <p>{cert.achievedDate}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-500">Valid Until</h4>
                  <p>{cert.validUntil}</p>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="mb-2 text-sm font-medium text-gray-500">Description</h4>
                <p className="text-gray-700">{cert.description}</p>
              </div>
              <div className="mt-2 border-t border-neutral-200 pt-3 text-center hover:underline">Click to view image</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Certificate;
