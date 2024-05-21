import { createMessageSlice } from "../../store/slices/createMessageSlice";
import createUser from "../../requests/userRequests/posts/createUser.js";

const Home = () => {

  const handleClickBackend = async () => {
    const response = await createUser('http://localhost:3000/api/salute');
    addMessage(response.message)
    // I added this request to register form which is the correct component to make the request.
  };

  const { addMessage } = createMessageSlice();

  const message = {type:"success-message", content: "PROBANDO ZUSTAND"};

  const handleClickZustand = () => {
    addMessage(message)
  };

  return (
    <div>
    <div>
      <button onClick={handleClickZustand}>prueba zustand</button>
    </div>
      <h1>Bienvenido a profesional finder</h1>
      <button className="m-8" onClick={handleClickBackend}>
        Consulta backend nueva - register
      </button>
    </div>
  );
};

export default Home;
