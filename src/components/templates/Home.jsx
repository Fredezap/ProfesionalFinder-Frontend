import { useContext } from 'react';
import MessageManagerContext from '../molecules/messageManager/MessageManagerContext';
import AppContext from '../../AppContext';
import WhiteButton from '../atoms/buttons/WhiteButton';

const Home = () => {

    const { messageHandler } = useContext(MessageManagerContext);
    const { routes } = useContext(AppContext)

    const consultaBackEndPrueba = async () => {
        try {
            // const response = await fetch('ENDPOINT') // TODO: Agregar el endpoint de prueba
            const response = {ok:true} // De prueba
            if (!response.ok) {
                const errorText = 'Error al realizar consulta al backend'; // TODO: Ver que mensaje mostrar
                const errorMessage = { type: 'error', text: errorText };
                messageHandler(errorMessage);
            } else {
                const data = await response.json();
                // TODO: obtener los datos necesarios de data y mostrarlos con un success message
                // TODO: si es necesario
                const successText = 'Success al realizar consulta al backend'; // TODO: Ver que mensaje mostrar
                const successMessage = { type: 'success', text: successText };
                messageHandler(successMessage);
            }
        } catch (err) {
            const errorText = 'Error en catch al realizar consulta al backend'; // TODO: Ver que mensaje mostrar
            const errorMessage = { type: 'error', text: errorText };
            messageHandler(errorMessage);
        }
    }

    return (
        <div>
        <WhiteButton to={routes.login}>Login</WhiteButton>
            <h1>Bienvenido a profesional finder</h1>
            <button className='m-8' onClick={consultaBackEndPrueba}>Consulta backend prueba</button>
        </div>
    );
}

export default Home;
