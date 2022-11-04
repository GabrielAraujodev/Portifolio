import '../styles/components/InformationContainer.sass'

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="#phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(62)983126539</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>Gabrielalves6p@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Goiânia/Go</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;

