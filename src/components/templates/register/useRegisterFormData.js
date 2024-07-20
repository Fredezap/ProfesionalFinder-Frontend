import * as Yup from 'yup';

const UseRegisterFormData = () => {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        state: '',
        city: '',
        address: '',
        postalCode: '',
    }

    // TODO: Ver de validar ciudades, provincias, direcciones y codigos postales. Como lo hacemos?
    const registerSchema = Yup.object().shape(
        {
        username: Yup.string()
            .min(2, 'Nombre de usuario muy corto')
            .max(50, 'Nombre de usuario muy largo')
            .required('usuario es obligatorio'),
        email: Yup.string()
            .email('Formato email invalido')
            .required("Email es obligatorio"),
        password: Yup.string()
            .required("Contraseña es obligatoria")
            .min(8, 'Contraseña debe tener al menos 8 caracteres')
            .max(50, 'Contraseña muy larga')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                'Contraseña debe incluir al menos una mayuscula, una minuscula, un numero y un caracter especial'),
        confirmPassword: Yup.string()
        .required("Contraseña de confirmacion es obligatoria")
        .oneOf([Yup.ref('password'), null], 'Contraseña deben coicidir'),
        state: Yup.string()
            .required('Provincia es obligatoria'),
        city: Yup.string()
            .required('Ciudad es obligatoria'),
        address: Yup.string()
            .required('Direccion es obligatoria'),
        postalCode: Yup.string()
            .required('Codigo postal obligatorio'),
        }
    )

    const formFields = [
        { id: "username", type: "text", label: "Nombre de usuario", placeholder: "Su nombre de usuario aquí..." },
        { id: "email", type: "email", label: "Correo electrónico", placeholder: "Su correo electrónico aquí..." },
        { id: "password", type: "password", label: "Contraseña", placeholder: "Su contraseña aquí..." },
        { id: "confirmPassword", type: "password", label: "Confirmar contraseña", placeholder: "Confirme su contraseña aquí..." },
        { id: "state", type: "text", label: "Provincia", placeholder: "Su provincia aquí..." },
        { id: "city", type: "text", label: "Ciudad", placeholder: "Su ciudad aquí..." },
        { id: "address", type: "text", label: "Dirección", placeholder: "Su dirección aquí..." },
        { id: "postalCode", type: "text", label: "Código postal", placeholder: "Su código postal aquí..." }
    ];      

    return { initialValues, registerSchema, formFields }
}

export default UseRegisterFormData;
