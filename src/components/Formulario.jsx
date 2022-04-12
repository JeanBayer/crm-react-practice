import React from "react";
import { Formik, Form, Field } from "formik";

const Formulario = () => {
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar Cliente
      </h1>
      <Formik>
        <Form className="mt-10">
          <div className="mb-4">
            <label htmlFor="nombre" className="text-gray-800">
              Nombre:
            </label>
            <Field
              id="nombre"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Nombre del cliente"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="empresa" className="text-gray-800">
              Empresa:
            </label>
            <Field
              id="empresa"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Empresa del cliente"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-800">
              Email:
            </label>
            <Field
              id="email"
              type="email"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Email del cliente"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="text-gray-800">
              Telefono:
            </label>
            <Field
              id="telefono"
              type="tel"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Telefono del cliente"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="notas" className="text-gray-800">
              Notas:
            </label>
            <Field
              as="textarea"
              id="notas"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50 h-40"
              placeholder="Notas del cliente"
            />
          </div>
          <input
            type="submit"
            value="Agregar Cliente"
            className="mt-5 uppercase text-white font-bold p-3 w-full bg-blue-800 hover:bg-blue-700 rounded-md hover:cursor-pointer text-lg"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Formulario;
