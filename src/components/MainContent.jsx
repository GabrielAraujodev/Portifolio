import AboutContainer from './AboutContainer'
import ProjetoContainer from './ProjetoContainer'
import TecnologiasContainer from './TecnologiasContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {
   return (<main id="maincontent">
      <AboutContainer/>
      <TecnologiasContainer/>
      <ProjetoContainer/>

   </main>
   )
}

export default MainContent