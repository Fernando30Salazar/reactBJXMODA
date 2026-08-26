import { useRegistrationForm } from '../hooks/useRegistrationForm';
import Loader from './Loader';

/**
 * Formulario de registro reutilizable por las 4 marcas.
 * Un solo componente, configurado por props (project + extraField),
 * en vez de 4 formularios / 4 JS distintos como en el sitio original.
 *
 * @param {Object} props
 * @param {string} props.project - identificador para Google Sheets ("bjxmoda", "cedice", ...)
 * @param {'featured'|'standard'} props.variant
 * @param {string} props.heading
 * @param {string} [props.description]
 * @param {string} [props.highlight]
 * @param {string} props.image
 * @param {string} props.imageAlt
 * @param {string} [props.logo] - logo (usado en variante "featured")
 * @param {string} [props.logoText] - texto de marca (usado en variante "standard")
 * @param {string} props.submitLabel
 * @param {Object} props.extraField - { name, label, type: 'text'|'select', options?, placeholder? }
 */
export default function RegistrationForm({
  project,
  variant = 'standard',
  heading,
  description,
  highlight,
  image,
  imageAlt,
  logo,
  logoText,
  submitLabel,
  extraField,
}) {
  const { values, errors, status, feedback, handleChange, handleSubmit, isLoading } = useRegistrationForm({
    project,
    extraFieldName: extraField?.name,
  });

  const isFeatured = variant === 'featured';

  const fieldValue = (name) => values[name] || '';

  const renderExtraField = () => {
    if (!extraField) return null;

    if (extraField.type === 'select') {
      return (
        <div className={`reg-form__group${errors[extraField.name] ? ' reg-form__group--error' : ''}`}>
          <label htmlFor={extraField.name}>{extraField.label}</label>
          <select
            id={extraField.name}
            name={extraField.name}
            value={fieldValue(extraField.name)}
            onChange={(e) => handleChange(extraField.name, e.target.value)}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {extraField.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors[extraField.name] && <span className="reg-form__error-text">{errors[extraField.name]}</span>}
        </div>
      );
    }

    return (
      <div className={`reg-form__group${errors[extraField.name] ? ' reg-form__group--error' : ''}`}>
        <label htmlFor={extraField.name}>{extraField.label}</label>
        <input
          type="text"
          id={extraField.name}
          name={extraField.name}
          placeholder={extraField.placeholder}
          value={fieldValue(extraField.name)}
          onChange={(e) => handleChange(extraField.name, e.target.value)}
        />
        {errors[extraField.name] && <span className="reg-form__error-text">{errors[extraField.name]}</span>}
      </div>
    );
  };

  const formFields = (
    <>
      <div className="reg-form__logo">
        {isFeatured ? <img src={logo} alt="Logo" /> : <h3>{logoText}</h3>}
      </div>

      <div className={`reg-form__group${errors.nombre ? ' reg-form__group--error' : ''}`}>
        <label htmlFor={`${project}-nombre`}>Nombre</label>
        <input
          type="text"
          id={`${project}-nombre`}
          placeholder="Ingresa tu nombre"
          value={fieldValue('nombre')}
          onChange={(e) => handleChange('nombre', e.target.value)}
        />
        {errors.nombre && <span className="reg-form__error-text">{errors.nombre}</span>}
      </div>

      <div className={`reg-form__group${errors.apellido_paterno ? ' reg-form__group--error' : ''}`}>
        <label htmlFor={`${project}-ap`}>Apellido Paterno</label>
        <input
          type="text"
          id={`${project}-ap`}
          placeholder="Ingresa tu apellido"
          value={fieldValue('apellido_paterno')}
          onChange={(e) => handleChange('apellido_paterno', e.target.value)}
        />
        {errors.apellido_paterno && <span className="reg-form__error-text">{errors.apellido_paterno}</span>}
      </div>

      <div className={`reg-form__group${errors.apellido_materno ? ' reg-form__group--error' : ''}`}>
        <label htmlFor={`${project}-am`}>Apellido Materno</label>
        <input
          type="text"
          id={`${project}-am`}
          placeholder="Ingresa tu apellido"
          value={fieldValue('apellido_materno')}
          onChange={(e) => handleChange('apellido_materno', e.target.value)}
        />
        {errors.apellido_materno && <span className="reg-form__error-text">{errors.apellido_materno}</span>}
      </div>

      {renderExtraField()}

      <div className={`reg-form__group${errors.telefono ? ' reg-form__group--error' : ''}`}>
        <label htmlFor={`${project}-telefono`}>Teléfono</label>
        <input
          type="tel"
          id={`${project}-telefono`}
          placeholder="Ingresa tu teléfono"
          value={fieldValue('telefono')}
          onChange={(e) => handleChange('telefono', e.target.value)}
        />
        {errors.telefono && <span className="reg-form__error-text">{errors.telefono}</span>}
      </div>

      <div className={`reg-form__group${errors.correo ? ' reg-form__group--error' : ''}`}>
        <label htmlFor={`${project}-correo`}>Correo</label>
        <input
          type="email"
          id={`${project}-correo`}
          placeholder="Ingresa tu correo"
          value={fieldValue('correo')}
          onChange={(e) => handleChange('correo', e.target.value)}
        />
        {errors.correo && <span className="reg-form__error-text">{errors.correo}</span>}
      </div>

      {feedback && (
        <div
          className={`reg-form__feedback ${
            status === 'success' ? 'reg-form__feedback--success' : 'reg-form__feedback--error'
          }`}
          role="status"
        >
          {feedback}
        </div>
      )}

      <button type="submit" className="reg-form__submit" disabled={isLoading}>
        {isLoading ? <Loader /> : submitLabel}
      </button>
    </>
  );

  if (isFeatured) {
    return (
      <section className="reg-form-section reg-form-section--featured" id="contacto">
        <div className="reg-form-section__intro">
          <h3>{heading}</h3>
          <p>
            {description} {highlight && <span>{highlight}</span>}
          </p>
        </div>

        <div className="reg-form-grid reg-form-grid--featured">
          <div className="reg-form-grid__image">
            <img src={image} alt={imageAlt} />
          </div>
          <div className="reg-form-grid__content">
            <form onSubmit={handleSubmit} noValidate>
              {formFields}
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="reg-form-section" id="contacto">
      <div className="reg-form-section__title">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>

      <div className="reg-form-grid">
        <div className="reg-form-grid__image">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="reg-form-grid__content">
          <form onSubmit={handleSubmit} noValidate>
            {formFields}
          </form>
        </div>
      </div>
    </section>
  );
}
