import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />,Text_link:"https://www.linkedin.com/in/gabriel-augusto-alves-de-araujo-98b89b23a/"},
    { name: "github", icon: <FaGithub />,Text_link:"https://github.com/GabrielAraujodev "},
    { name: "instagram", icon: <FaInstagram />,Text_link:"https://www.instagram.com/gabrielalves_16/"},
  ];

const SocialNetworkContainer = () => {
    return (
        <section id="social-networks">
        
      {socialNetworks.map((network) => (
        <a href={network.Text_link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
        
           
      ))}
    </section>
        );
    };   

    export default SocialNetworkContainer;