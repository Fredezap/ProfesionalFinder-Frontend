import { Formik, Form } from 'formik';
import { createMessageSlice } from '../../../store/slices/createMessageSlice';
import { useNavigate } from "react-router-dom";
import { routes } from '../../../store/models/routes';
import useRegisterFormData from './useRegisterFormData';
import postService from '../../../services/post_services/postService';
import { RegisterFormMap } from './RegisterFormMap';
import { useState } from 'react';
import { backendErrorMessageProcessor } from '../../molecules/messageManager/backendErrorMessageProcessor';

const RegisterForm = () => {
    const { addMessage } = createMessageSlice();
    const { initialValues, registerSchema, formFields } = useRegisterFormData();
    const [submitingForm, setSubmitingForm] = useState(false);
    const navigate = useNavigate();

    const handleSubmitForm = async (values) => {
        setSubmitingForm(true)
        console.log(values)
        const response = await postService('/auth/register', values);
        console.log(response);
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors);
            addMessage({ type: "error", content: errors });
            setSubmitingForm(false)
            return;
        }
        console.log(response);
        addMessage({ type: "success", content: "Te has registrado exitosamente" });
        navigate(routes.login);
        };

    return (
        <div className='template'>
            <Formik initialValues = { initialValues } validationSchema = { registerSchema } onSubmit={handleSubmitForm}>
            {({ errors, touched }) => (
                <Form className='form'>
                    <RegisterFormMap formFields={formFields} errors={errors} touched={touched} />
                    <div className='form-button'>
                        <button type="submit" disabled={submitingForm}>
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