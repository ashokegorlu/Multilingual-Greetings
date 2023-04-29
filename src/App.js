import {useState} from 'react'
import Button from './components/Button'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

const App = () => {
  const [state, setState] = useState(languageGreetingsList[0].id)

  const changeState = () => {
    const result = languageGreetingsList.find(i => i.id === state)
    return result
  }

  const setBut = id => {
    setState(id)
  }

  const {imageUrl, imageAltText} = changeState()

  return (
    <div className="bg-container">
      <div className="card-container">
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(eachlanguage => (
            <Button
              buttonDetails={eachlanguage}
              key={eachlanguage.id}
              setBut={setBut}
              isActive={eachlanguage.id === state}
            />
          ))}
        </ul>
        <img src={imageUrl} alt={imageAltText} className="image" />
        <p>{}</p>
      </div>
    </div>
  )
}

export default App
