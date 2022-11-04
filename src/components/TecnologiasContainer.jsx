import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
  } from "react-icons/di"



import "../styles/components/tecnologias.sass"


const Tecnologias =[
    { id: "html5", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "JavaScript", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "react", name: "React", icon: <DiReact /> },
  ]

const TecnologiasContainer =() =>{
    return(
        <section className="tecnologias-container">
            <h2>Tecnologias</h2>
            <div className="tecnologia-grid" >
                {Tecnologias.map((tech)=>(
                <div className="tecnologia-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                <div className="tecnologia-info" >
                    <h3>{tech.id}</h3>
                  
                    </div>    
                </div>
                ))}
            </div>

        </section>
    )
}

export default TecnologiasContainer