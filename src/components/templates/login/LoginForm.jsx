import { Formik, Form } from 'formik';
import { RegisterFormMap } from './LoginFormMap';
import { createMessageSlice } from '../../../store/slices/createMessageSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import postService from '../../../services/post_services/postService';
import { routes } from '../../../store/models/routes'
import useLoginFormData from './useLoginFormData';

const LogInForm = () => {

    const { addMessage } = createMessageSlice();
    const { initialValues, registerSchema, formFields } = useLoginFormData();
    const [sendingEmail, setSendingEmail] = useState(false);
    const navigate = useNavigate();

    const handleSubmitForm = async (values) => {
        setSendingEmail(true)
        const response = await postService('/auth/login', values); // TODO: Poner endpoint existente
        console.log(response);
        addMessage(response.message);
        if (response.message.type === "success-message")
            navigate(routes.login);
    };

    return (
        <div className='template'>
            <div>
                <Formik initialValues = { initialValues } validationSchema = { registerSchema } onSubmit={handleSubmitForm}>
                {({ errors, touched }) => (
                    <Form className='form'>
                        <RegisterFormMap formFields={formFields} errors={errors} touched={touched} />
                        <div className='form-button'>
                            <Button type="submit" variant="primary" disabled={sendingEmail} id='largePrimaryButtonForLogin'>
                                Login
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