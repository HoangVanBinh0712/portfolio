const CertificateModal = ({ selectedImage, closeModal }) => {
  return (selectedImage && 
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
      <div
        className="relative max-w-3xl p-4 bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <img src={selectedImage} alt="Certificate" className="rounded-lg max-h-[90vh] object-contain" />
        <button className="absolute top-2 right-2 rounded-full bg-white p-2 text-black hover:bg-gray-200" onClick={closeModal}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default CertificateModal;
