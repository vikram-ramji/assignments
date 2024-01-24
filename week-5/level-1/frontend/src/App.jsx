import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [card, setCard] = useState({
    name: "VIkram",
    description: "whatever",
    interests: ["chess", "swimming"],
    linkedin: "www.linkedin.com/whatever",
    twitter: "www.twitter.com/whatever",
    otherSocialMedia: {
      link: "www.whatever.com",
      label: "whatever"
    }
  })

  return (
    <div className='card'>
      <Card props={card}></Card>
    </div>
  )
}

export default App
