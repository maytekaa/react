import Footer from './Componentes/Footer/Footer'
import Header from './Componentes/Header/Header'
import {Outlet} from 'react-router-dom' //outlet é uma janela que fica os "filhos" (contato, sobre, servicos)

function App() {
 

  return (
    <>
     <Header/> 
     <Outlet/> 
     <Footer/> 
    </>
  )
}

export default App
