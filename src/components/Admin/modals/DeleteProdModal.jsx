import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Form, Field } from "react-final-form";

import StyledProductModal from "./StyledProductModal";

const DeleteProductModal = ({ isOpen, onClose }) => {
  const handleOnSubmit = async (values) => {

    const deletedProduct = await deletedProduct(values.id);

    if (deletedProduct) {
      onClose();
      window.alert("Producto eliminado");
    }

    return deletedProduct;
  };

  const handleReset = (form) => {
    form.reset();
    setSelectedProject(null);
  };

  return (
    <StyledProductModal onClick={() => onClose()} $isOpen={isOpen}>
      {isOpen && (
        <div
          className="customModal"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2>Delete product</h2>
              <button className="close-btn" onClick={onClose}>
                &times;
              </button>
            </div>
            <Form
              onSubmit={handleOnSubmit}
              render={({ handleSubmit, form }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Product ID</label>
                    <Field name="id" component="input" type="text" />
                  </div>
                  <div>
                    <button type="submit">Delete</button>
                    <button type="button" onClick={() => handleReset(form)}>
                      Reset
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      )}
    </StyledProductModal>
  );
};

export default DeleteProductModal;
