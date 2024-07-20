import { Formik, Form } from 'formik';
import { createMessageSlice } from '../../../store/slices/createMessageSlice';
import { useNavigate } from "react-router-dom";
import { routes } from '../../../store/models/routes';
import useRegisterFormData from './useRegisterFormData';
import postService from '../../../services/post_services/postService';
import { RegisterFormMap } from './RegisterFormMap';
import { useState } from 'react';

const RegisterForm = () => {
    const { addMessage } = createMessageSlice();
    const { initialValues, registerSchema, formFields } = useRegisterFormData();
    const [sendingEmail, setSendingEmail] = useState(false);
    const navigate = useNavigate();

    const handleSubmitForm = async (values) => {
        setSendingEmail(true)
        const response = await postService('/auth/register', values);
        console.log(response);
        addMessage(response.message);
        if (response.message.type === "success-message")
            navigate(routes.login);
    };

    return (
        <div className='template'>
            <Formik initialValues = { initialValues } validationSchema = { registerSchema } onSubmit={handleSubmitForm}>
            {({ errors, touched }) => (
                <Form className='form'>
                    <RegisterFormMap formFields={formFields} errors={errors} touched={touched} />
                    <div className='form-button'>
                        <button type="submit" disabled={sendingEmail}>
                            Registrarme
                        </button>
                    </div>
                </Form>
            )}
            </Formik>
        </div>
    );
};

export default RegisterForm;