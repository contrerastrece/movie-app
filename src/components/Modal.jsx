import React from "react";

const Modal = ({ idvideo }) => {
  return (
    <div
      id="hs-modal-upgrade-to-pro"
      class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <h2>Soy un modal {id}</h2>
      </div>
    </div>
  );
};

export default Modal;
