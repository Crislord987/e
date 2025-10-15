'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      setSubmitMessage('¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });

      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre completo <span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
            placeholder="Juan Pérez"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-pink-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
            placeholder="juan@empresa.com"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono <span className="text-pink-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
            placeholder="+57 300 123 4567"
          />
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      {/* Servicio */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
          Servicio de interés <span className="text-pink-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none bg-white"
        >
          <option value="">Selecciona un servicio</option>
          <option value="roll-up">Roll Up Banners</option>
          <option value="banner-stands">Banner Stands Premium</option>
          <option value="banners">Banners Personalizados</option>
          <option value="senalizacion">Señalización Corporativa</option>
          <option value="gran-formato">Impresión Gran Formato</option>
          <option value="material-pop">Material POP</option>
          <option value="papeleria">Papelería Comercial</option>
          <option value="remodelacion">Remodelación de Espacios</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Detalles del proyecto <span className="text-pink-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none resize-none"
          placeholder="Cuéntanos sobre tu proyecto, cantidad, medidas, fechas de entrega, etc."
        />
      </div>

      {/* Mensaje de éxito */}
      {submitMessage && (
        <div className="bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-lg">
          {submitMessage}
        </div>
      )}

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando...
          </span>
        ) : (
          'Solicitar Cotización'
        )}
      </button>
    </form>
  );
}
