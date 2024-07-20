import * as Yup from 'yup';

const useLoginFormData = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const registerSchema = Yup.object().shape({
        email: Yup.string()
            .email("Formato email invalido")
            .required("Email es obligatorio"),
        password: Yup.string()
            .required("Contraseña es obligatoria")
    })

    const formFields = [
        { id: "email", type: "email", label: "Correo electrónico", placeholder: "Su correo electrónico aquí..." },
        { id: "password", type: "password", label: "Contraseña", placeholder: "Su contraseña aquí..." },
    ];      

    return { initialValues, registerSchema, formFields }
}

export default useLoginFormData;
