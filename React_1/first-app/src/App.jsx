import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {
  return (
    <>
    <Navbar/>
    <div className="cards" style={{overflow: "hidden"}}>
    <Card title="Card 1" description="This is card 1" />
    <Card title="Card 1" description="This is card 1" />
    <Card title="Card 1" description="This is card 1" />
    <Card title="Card 1" description="This is card 1" />
    </div>
    <Footer/>
    </>
  )
}

export default App
