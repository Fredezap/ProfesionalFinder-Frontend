import { createMessageSlice } from '../../../store/slices/createMessageSlice';

// ATENCION: Si los mensajes se estan reenderizando 2 veces en desarrollo es
//           a causa de el <React.StrictMode> que es utilizado para prevenir
//           e identificar errores y efectos secundarios no deseados.
//           En produccion y con la build funcionando esto no sucede.

const MessageManager = () => {
   
    // The model for message is:
    // types ---> success-message || error-message
    // { type: types, content: any }

    const { messages } = createMessageSlice();

    return (
        <div className='flex flex-col fixed top-32 w-full items-center justify-center'>
            {messages.length > 0 ? messages.map((message, index) => 
                (<p className={`manager-message ${message.type}`} key={index}> {message.content} </p>)
            ) : (
                null
            )}
        </div>
  )
}

export default MessageManager;
