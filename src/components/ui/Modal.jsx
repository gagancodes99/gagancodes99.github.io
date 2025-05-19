import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[100]"
        onClick={onClose}
      ></div>

        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]  bg-black shadow-lg min-h-80  w-full p-6 max-w-80  xs:max-w-96  sm:max-w-xl"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <button
            className="float-right text-white text-4xl font-light rounded-full grid place-content-center"
            onClick={onClose}
          >
            &times;
          </button>
          <section>
            {children}
          </section>
        </div>
    </>
  );
};

export default Modal;
