import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Label from '../../atoms/formsParts/Label';
import { ErrorMessage, Field } from 'formik';

export const RegisterFormMap = ({ formFields, errors, touched }) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='form-columns'>
      {formFields.map((data, index) => (
        <div className='form-group' key={index}>
          <Label>{data.label}</Label>
        <div className={data.type === 'password' ? 'password-input' : ''}>
          <Field
            className='input'
            id={data.id}
            name={data.id}
            autoComplete={data.label}
            placeholder={data.placeholder}
            type={
              data.id === 'password'
                ? showPassword
                  ? 'text'
                  : 'password'
                : data.type
            }
          />
          {data.id === 'password' && (
            showPassword ? (
              <FaRegEye className='show-password' onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaRegEyeSlash className='show-password' onClick={() => setShowPassword(!showPassword)} />
            )
          )}
        </div>
        {errors[data.id] && touched[data.id] && (
            <ErrorMessage className='form-message error-message' component="div" name={data.id} />
        )}
        </div>
      ))}
    </div>
  );
};

RegisterFormMap.propTypes = {
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    })
  ).isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};
