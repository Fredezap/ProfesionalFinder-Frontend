import useBackendConnectionStore from "../../store/backendConnectionStore";

const Home = () => {
  const { fetchText, text } = useBackendConnectionStore();

  const handleClick = async () => {
    fetchText();
  };

  return (
    <div>
      {text && <p className="text-green-800">{text}</p>}
      <h1>Bienvenido a profesional finder</h1>
      <button className="m-8" onClick={handleClick}>
        Consulta backend prueba
      </button>
    </div>
  );
};

export default Home;
