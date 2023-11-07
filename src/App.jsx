import NavBar from './assets/NavBar'
import Card from './assets/Card'
import CardData from './CardData'
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
    </div>
  )
}

export default App
