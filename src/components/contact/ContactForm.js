import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
    user_phone: '',
  });

  const [formErrors, setFormErrors] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false); // Nuevo estado para el modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formValues.user_name) {
      errors.user_name = 'Nombre es requerido';
    }
    if (!formValues.user_email) {
      errors.user_email = 'correo es requerido';
    }
    if (!formValues.user_message) {
      errors.user_message = 'Menesaje es requerido';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        await emailjs.sendForm('service_4phnabd', 'template_j3jup86', event.target, 'bXH3dBFtJNZ8n4Ud3');
        setIsFormSubmitted(true);
        setIsModalOpen(true); 
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className='bg-gray-100 py-48 min-h-screen flex justify-center items-center'>
      <div className='bg-white p-16 rounded shadow-lg max-w-2xl w-full md:flex'>
        <div className='md:w-3/4'>
          <h1 className='text-2xl font-bold mb-4'>Contactanos</h1>
          {isFormSubmitted && isModalOpen && ( // Muestra el modal si se ha enviado el formulario y el modal está abierto
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-8 rounded shadow-lg text-center'>
                <p className='text-green-600 text-lg font-semibold mb-4'>Mensaje Enviado Correctamente!</p>
                <button
                  className='bg-orange-button hover:bg-black text-white py-2 px-4 rounded mx-auto'
                  onClick={() => setIsModalOpen(false)} // Cierra el modal al hacer clic en el botón
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <form className='space-y-4' onSubmit={sendEmail}>
          <div>
              <label className='block mb-1'>Nombre</label>
              <input
                type='text'
                name='user_name'
                value={formValues.user_name}
                onChange={handleChange}
                className={`w-full border rounded py-2 px-3 ${formErrors.user_name ? 'border-red-500' : ''}`}
              />
              {formErrors.user_name && <p className='text-red-500'>{formErrors.user_name}</p>}
            </div>
            <div>
            <label className='block mb-1'>Correo Electrónico</label>
              <div className='relative'>
               <input
                 type='email'
                  name='user_email'
                  value={formValues.user_email}
                  onChange={handleChange}
                  className={`pl-10 pr-3 w-full border rounded py-2 px-3 ${formErrors.user_email ? 'border-red-500' : ''}`}
                       />
              <EnvelopeIcon className='w-5 h-5 absolute top-3 left-3 text-gray-400' />
            </div>
            </div>
            
            <div>
              <label className='block mb-1'>Mensaje</label>
              <textarea
                name='user_message'
                value={formValues.user_message}
                onChange={handleChange}
                className={`w-full border rounded py-2 px-3 h-32 ${formErrors.user_message ? 'border-red-500' : ''}`}
              ></textarea>
              {formErrors.user_message && <p className='text-red-500'>{formErrors.user_message}</p>}
            </div>
            <div>
              <label className='block mb-1'>Celular</label>
              <div className='relative'>
               <input
                type='text'
                name='user_phone'
                value={formValues.user_phone}
                onChange={handleChange}
                className='pl-10 w-full border rounded py-2 px-3'
              />
              <PhoneIcon className='w-5 h-5 absolute top-3 left-3 text-gray-400' />

              </div>
            </div>
            <div>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
  
      </div>
    </div>
  );
};

export default ContactForm;
