import { useContext, useState } from 'react';
import Label from '../../atoms/formsParts/Label';
import LargePrimaryButton from '../../atoms/buttons/LargePrimaryButton';
import BlackButton from '../../atoms/buttons/BlackButton';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import AppContext from '../../../AppContext';
import MessageManagerContext from '../messageManager/MessageManagerContext';

const LogInForm = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { routes } = useContext(AppContext);
    const { messageHandler} = useContext(MessageManagerContext);

    const InitialValues = {
        email: '',
        password: ''
    }

    const registerSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
    });

    const logIn = async (credentials) => {
        try {
            const response = await fetch('http://localhost:3001/api/login', { // TODO: Poner endpoint existente
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
            });
        
            const message = await response.json();

            if (response.ok && message.success) {
                localStorage.setItem('token', message.token);
                const successText = 'Login exitoso'; // TODO: Ver que mensaje mostrar
                const successMessage = { type: 'success', text: successText };
                messageHandler(successMessage);
                navigate(routes.home);
            } else {
                const errorText = 'Error al hacer login'; // TODO: Ver que mensaje mostrar
                const errorMessage = { type: 'error', text: errorText };
                messageHandler(errorMessage);
            }
        } catch (error) {
            const errorText = 'Error en catch al realizar consulta al backend'; // TODO: Ver que mensaje mostrar
            const errorMessage = { type: 'error', text: errorText };
            messageHandler(errorMessage);
        }
    };

    return  (
        <div className="flex flex-col items-center justify-center w-screen align-center h-screen">
            <Formik
                initialValues = { InitialValues }

                validationSchema = { registerSchema }

                onSubmit={async (values) => {
                    await logIn(values);
                }}
            >

            {({
                values,
                errors,
                touched,
                isSubmitting
            }) => (
                <Form className='flex flex-col w-screen items-center justify-center'>
                    <Label>Email</Label>
                    <Field className='input w-3/12' id="email" name="email" placeholder="Email" autoComplete="username" type="email" />     
                    {errors.email && touched.email && (<ErrorMessage className='form-message error-message' component="div" name="email" />)}  

                    <Label>Password</Label>
                    <div className='flex items-center input-login justify-center ml-6 mb-10'>
                        <Field className='input ml-6'  id="password" name="password" placeholder="Password" autoComplete="current-password" type={showPassword ? "text" : "password"} />
                        {showPassword ? (
                            <FaRegEye className='showPassword ml-6' onClick={() => setShowPassword(!showPassword)} />
                        ) : (
                            <FaRegEyeSlash className='showPassword ml-6' onClick={() => setShowPassword(!showPassword)} />
                        )}
                        </div>
                    {errors.password && touched.password && (<ErrorMessage className='form-message error-message' component="div" name="password" />)}

                    <div className='w-3/12 mr-3'>
                    <LargePrimaryButton type='submit'>Login</LargePrimaryButton>
                    </div>
                        <div style={{marginTop: '10px'}}> 
                    {isSubmitting ? 
                        <div className='form-message login-message'>
                        Logueando al usuario, por favor espere
                        </div> :
                        null}
                    </div>
                </Form>

            )}
            </Formik>
        {/* TODO: agregar un onClick para hacer un navigate a otra ruta para recuperar contraseña */}
        <div className='w-3/12 mr-3 mt-16'>
                 <BlackButton>Olvide mi contraseña</BlackButton> 
                    </div>
        </div>
    );
}

export default LogInForm;