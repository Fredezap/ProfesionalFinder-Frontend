import { Formik, Form } from 'formik';
import { RegisterFormMap } from './LoginFormMap';
import { createMessageSlice } from '../../../store/slices/createMessageSlice';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postService from '../../../services/post_services/postService';
import { routes } from '../../../store/models/routes'
import useLoginFormData from './useLoginFormData';
import { backendErrorMessageProcessor } from '../../molecules/messageManager/backendErrorMessageProcessor';

const LogInForm = () => {

    const { addMessage } = createMessageSlice();
    const { initialValues, registerSchema, formFields } = useLoginFormData();
    const [submitingForm, setSubmitingForm] = useState(false);
    const navigate = useNavigate();

    const handleSubmitForm = async (values) => {
        console.log(values)
        setSubmitingForm(true)
        const response = await postService('/auth/login', values); // TODO: Poner endpoint existente
        console.log(response)
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors);
            addMessage({ type: "error", content: errors });
            setSubmitingForm(false)
            return;
        }
        console.log(response);
        addMessage({ type: "success", content: "Has iniciado secion correctamente" });
        navigate(routes.home);
    };

    return (
        <div className='template'>
            <div>
                <Formik initialValues = { initialValues } validationSchema = { registerSchema } onSubmit={handleSubmitForm}>
                {({ errors, touched }) => (
                    <Form className='form'>
                        <RegisterFormMap formFields={formFields} errors={errors} touched={touched} />
                        <div className='form-button'>
                            <Button type="submit" variant="primary" disabled={submitingForm}>
                                Iniciar sesión
                            </Button>
                        </div>
                    </Form>
                )}
                </Formik>
                {/* TODO: agregar un onClick para hacer un navigate a otra ruta para recuperar contraseña */}
                <div className='forgot-password-box'>
                    <button>Olvide mi contraseña</button> 
                </div>
            </div>
        </div>
    );
}

export default LogInForm;