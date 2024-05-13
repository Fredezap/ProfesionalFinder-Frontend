import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import MessageManagerContext from './MessageManagerContext';

// ATENCION: Si los mensajes se estan reenderizando 2 veces en desarrollo es
//           a causa de el <React.StrictMode> que es utilizado para prevenir
//           e identificar errores y efectos secundarios no deseados.
//           En produccion y con la build funcionando esto no sucede.

const MessageManager = ({ children }) => {
   
    const [messages, setMessages] = useState(null);
    const location = useLocation();
    
    useEffect(() => {

        const errorMessage = new URLSearchParams(location.search).get('errorMessage');
        const successMessage = new URLSearchParams(location.search).get('successMessage');
        const emailMessage = new URLSearchParams(location.search).get('emailMessage');

        if (errorMessage) {
            messageHandler({ type: 'error', text: errorMessage });
        } else if (successMessage) {
            messageHandler({ type: 'success', text: successMessage });
        } else if (emailMessage) {
            messageHandler({ type: 'email', text: emailMessage });
        } else {
            // Dejo este else para manejar posibles futuros mensajes por fuera de errors y success
            setMessages('')
        }

    }, [location.search]);
    
            // Maneja los mensajes, agregandolos a un array, a los 10 segundos los elimina.
            const messageHandler = async (newMessage) => {
            setMessages((messages) => messages?[...messages, newMessage]:[newMessage]);
        
            setTimeout(() => {
                setMessages((messages) => messages.filter((msg) => msg !== newMessage));
            }, 10000);
            };

  return (
    <MessageManagerContext.Provider value={{ messages, messageHandler }}>
    {messages && messages.map((msg, index) => (
        <div key={index}>
            {msg.type === 'email' ? (
                /* Esta condifional es para manejar un mensaje de email en caso de que
                    el usuario no este verificado y segun el texto, que abra su proveedor 
                    de email. Ej de msg.text para abrir gmail:
                    https://mail.google.com/mail/u/0/#inbox */
            <div onClick={() => window.open(`${msg.text}`, '_blank')}>
                <MdEmail />
                <span>VERIFY IT</span>
            </div>
            ) : (
            <p className={msg.type === 'success' ? 'manager-message success-message' : 
            (msg.type === 'error' ? 'manager-message error-message' : '')}>
                {msg.text}
            </p>
            )}
        </div>
        ))}
        {children}
    </MessageManagerContext.Provider>
  )
}

export default MessageManager;
