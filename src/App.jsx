
import './App.css'
import Player from './components/Player'
import arsenal from '/public/arsenal.png'

function App() {
  

  return (
    <>
     
     <nav className="header container">
      <img src={arsenal} alt="arsenal-logo" className='logo'/>
     </nav>
     <div className="container">

     <Player/>
     </div>
    </>
  )
}

export default App
