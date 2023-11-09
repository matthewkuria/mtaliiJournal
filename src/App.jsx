import NavBar from './assets/NavBar'
import Card from './assets/Card'
import CardData from './CardData'
import Footer from './assets/Footer'
import './App.css'

function App() {
  
  const cardElements = CardData.map(item =>{
    return(
      <Card
      key={item.id}
      {...item}
       />
    )
  })

  return (
    <div>
    <NavBar />
    {cardElements}
    <Footer />
    </div>
  )
}

export default App
