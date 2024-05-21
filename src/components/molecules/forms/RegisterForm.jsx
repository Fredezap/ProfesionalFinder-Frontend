import { useState } from 'react';
import LargePrimaryButton from '../../atoms/buttons/LargePrimaryButton';
import Label from '../../atoms/formsParts/Label';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { createMessageSlice } from '../../../store/slices/createMessageSlice';
import { createRoutesSlice } from '../../../store/slices/createRoutesSlice';
import { useNavigate } from "react-router-dom";
import createUser from '../../../requests/userRequests/posts/createUser';

const RegisterForm = () => {
    
    const { addMessage } = createMessageSlice();
    const { routes } = createRoutesSlice();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const register = async (credentials) => {
        const response = await createUser('http://localhost:3000/api/auth/register', credentials);
        console.log(response)
        addMessage(response.message)
        response.message.type = "success-message"
        if (response.message.type === "success-message")
        navigate(routes.login);
      };
    
    // TODO: See if we handle this data here or we set it in suztand user
    const InitialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const registerSchema = Yup.object().shape(
        {
        username: Yup.string()
            .min(2, 'Username too short')
            .max(50, 'Username too long')
            .required('Username is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required("Mail is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, 'Password must be at least 8 characters long')
            .max(50, 'Password must be at most 50 characters long')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character'),
        confirmPassword: Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        }
    )

    return (
    <div className="flex flex-col items-center justify-center w-screen align-center h-screen">
        <Formik
            initialValues = { InitialValues }

            validationSchema = { registerSchema }

            onSubmit = {async (values) => {
                await register(values)
            }}
        >

        {({
            errors,
            touched,
            isSubmitting
        }) => (
            <Form className='flex flex-col w-screen items-center justify-center'>
                <Label>User name</Label>
                <Field className='input w-3/12' id="username" name="username" placeholder="Username" type="text"></Field>     
                {errors.username && touched.username && (<ErrorMessage className='form-message error-message' component="div" name="username"></ErrorMessage>)}  

                <Label>Mail</Label>
                <Field className='input w-3/12' id="email" name="email" placeholder="Mail" type="email"></Field>     
                {errors.email && touched.email && (<ErrorMessage className='form-message error-message' component="div" name="email"></ErrorMessage>)}  

                <Label>Password</Label>
                    <div className='flex items-center input-login justify-center ml-6'>
                        <Field className='input ml-6' id="password" name="password" autoComplete="" placeholder="Password" type={showPassword ? "text" : "password"}></Field>
                    {showPassword ? (
                        <FaRegEye className='showPassword ml-6' onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                        <FaRegEyeSlash className='showPassword ml-6' onClick={() => setShowPassword(!showPassword)} />
                    )}
                    </div>
                {errors.password && touched.password && (<ErrorMessage className='form-message error-message' component="div" name="password"></ErrorMessage>)}

                <Label>Confirm password</Label>
                    <div className='flex items-center input-login justify-center ml-6'>
                        <Field className='input ml-6' id="confirmPassword" name="confirmPassword" autoComplete="" placeholder="Confirm password" type={showConfirmPassword ? "text" : "password"}></Field>
                    {showConfirmPassword ? (
                        <FaRegEye className='showPassword ml-6' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                    ) : (
                        <FaRegEyeSlash className='showPassword ml-6' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                    )}
                    </div>
                {errors.confirmPassword && touched.confirmPassword && (<ErrorMessage className='form-message error-message' component="div" name="confirmPassword"></ErrorMessage>)}
                
                <div className='w-3/12 mr-2 mt-10'>
                    <LargePrimaryButton type="submit" disabled={!Formik.isValid || isSubmitting}>
                    Create user
                    </LargePrimaryButton>
                </div>

                <div style={{marginTop: '10px'}}> 
                {isSubmitting ? 
                    <div className='form-message login-message'>
                        Registrando usuario, por favor espere
                    </div> :
                    null}
                </div>
            </Form>
        )}
        </Formik>
    </div>
    );
}

export default RegisterForm;
