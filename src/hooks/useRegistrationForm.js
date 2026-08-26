import { useCallback, useState } from 'react';
import { submitForm } from '../services/googleSheets';

const REQUIRED_FIELDS = ['nombre', 'apellido_paterno', 'apellido_materno', 'telefono', 'correo'];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\s()-]{7,20}$/;

function validate(values, extraFieldName) {
  const errors = {};

  REQUIRED_FIELDS.forEach((field) => {
    if (!values[field] || !String(values[field]).trim()) {
      errors[field] = 'Este campo es obligatorio';
    }
  });

  if (values.correo && !EMAIL_REGEX.test(values.correo)) {
    errors.correo = 'Ingresa un correo válido';
  }

  if (values.telefono && !PHONE_REGEX.test(values.telefono)) {
    errors.telefono = 'Ingresa un teléfono válido';
  }

  if (extraFieldName && (!values[extraFieldName] || !String(values[extraFieldName]).trim())) {
    errors[extraFieldName] = 'Este campo es obligatorio';
  }

  return errors;
}

/**
 * Hook reutilizable que centraliza: estado de valores, validación,
 * loading, prevención de doble envío, limpieza tras éxito y manejo
 * de errores de red. Usado por <RegistrationForm />.
 */
export function useRegistrationForm({ project, extraFieldName, initialValues = {} }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [feedback, setFeedback] = useState('');

  const handleChange = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      // Previene doble envío mientras ya hay una petición en curso.
      if (status === 'loading') return;

      const validationErrors = validate(values, extraFieldName);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setStatus('loading');
      setFeedback('');

      const result = await submitForm(project, values);

      if (result.ok) {
        setStatus('success');
        setFeedback('¡Registro enviado correctamente! Nos pondremos en contacto pronto.');
        reset();
      } else {
        setStatus('error');
        setFeedback(result.message || 'Ocurrió un error al enviar el formulario.');
      }
    },
    [values, status, project, extraFieldName, reset]
  );

  return {
    values,
    errors,
    status,
    feedback,
    handleChange,
    handleSubmit,
    isLoading: status === 'loading',
  };
}
