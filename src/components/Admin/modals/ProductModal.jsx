
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Form, Field } from "react-final-form";

import StyledProductModal from "./StyledProductModal";
import { createProduct } from "@/services/products";
import { properties } from "@/lists/properties";
import axios from "axios";

const ProductModal = ({ isOpen, onClose }) => {

  const onDrop = useCallback((acceptedFiles) => {
    const file = new FileReader();
    console.log(acceptedFiles);

    file.onload = function () {
      setPreview(file.result);
    };

    acceptedFiles.map((accFile) => {
      file.readAsDataURL(accFile);
    });
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    });

  const [preview, setPreview] = useState(null);

  const handleOnSubmit = async (values) => {
    const formData = new FormData();


    const seventeen = acceptedFiles.map((file) => {
      formData.append("file", file);
      // formData.append("upload_preset", "upn1l4hd");
      formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
      // formData.append("api_key", "944181859311665");
      formData.append("api_key", process.env.CLODINARY_API_KEY);

      return axios.post(
        "https://api.cloudinary.com/v1_1/olivierpaspuel/image/upload",
        formData
      );
    });

    const imgsData = await Promise.all(seventeen);

    if (imgsData) {
      const res = imgsData.map((img) => {
        return img.data.secure_url;
      });

      const product = {
        ...values,
        price: Number(values.price),
        imgs: res,
      };

      const createdProduct = await createProduct(product);

      if (createdProduct) {
        onClose();
        window.alert("Producto creado");
      }

      return createdProduct;
    }
  };

  const handleReset = (form) => {
    form.reset();
    setSelectedProject(null);
  };

  return (
    <StyledProductModal onClick={() => onClose()} isOpen={isOpen}>
      {isOpen && (
        <div
          className="customModal"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add new product</h2>
              <button className="close-btn" onClick={onClose}>
                &times;
              </button>
            </div>
            <Form
              onSubmit={handleOnSubmit}
              render={({ handleSubmit, form }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Title</label>
                    <Field name="name" component="input" type="text" />
                  </div>
                  <div>
                    <label>Description</label>
                    <Field name="description" component="textarea" />
                  </div>
                  <div>
                    <label>Status</label>
                    <Field name="status" component="select">
                      <option value="mas-vendido">En stock</option>
                      <option value="en-stock">Más vendido</option>
                      <option value="agotado">Agotado</option>
                    </Field>
                  </div>

                  <div>
                    <label>Price</label>
                    <Field name="price" component="input" type="number" />
                  </div>

                  <div>
                    <label>Stock</label>
                    <Field name="stock" component="input" type="number" />
                  </div>

                  <div>
                    <label>Properties</label>
                    <Field name="properties" component="select" multiple>
                      {properties.map((property) => (
                        <option key={property} value={property}>
                          {property}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div>
                    <div className="mb-5">
                      <label htmlFor="img">Image</label>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                          <p>Drop the files here ...</p>
                        ) : (
                          <p>
                            Drag and drop some files here, or click to select
                            files
                          </p>
                        )}
                      </div>
                    </div>
                    {preview && (
                      <p className="mb-5">
                        {<img src={preview} alt="Upload preview" />}
                      </p>
                    )}
                  </div>
                  <div>
                    <button type="submit">Save</button>
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

export default ProductModal;
