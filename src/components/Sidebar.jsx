import Avatar from '../img/avatar.jpg'
import InformationContainer from "./InformationContainer";
import"../styles/components/sidebar.sass" 
import SocialNetworkContainer from './SocialNetworkContainer';


const Sidebar = () =>{
   return ( <aside id="sidebar">
    <img src={Avatar} alt="Gabriel Augusto" />
    <p className="title">Full Stack</p>
     <SocialNetworkContainer/>
     <InformationContainer/>
    
    
    <a href="https://docs.google.com/document/d/1dJRNTSADJTPrYUNb42O2kTfZQlJa0HTHuGAtXpwwKpA/edit?usp=sharing"  className="btn" >Download curriculo</a>

   </aside>
   
    )
};

export default Sidebar;