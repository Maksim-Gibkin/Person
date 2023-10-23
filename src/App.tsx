import { useEffect, useState } from 'react'
import './App.css'
import Parameters from './components/Parameters/Parameters'
import Header from './components/Header/Header'
import { Attributes, Skill } from './Model/ParametersType'
import { FileData } from './Service/FileService'

const App = () => {
  const [attributes, setAttributes] = useState<Attributes>({
    strength: 0,
    agility: 0,
    intelligence: 0,
    charisma: 0,
  })
  const [name, setName] = useState<string>('')
  const [uploaded, setUploaded] = useState<FileData | null>(null)
  const [skills, setSkills] = useState<Skill[]>([
    {
      id: 0,
      value: 0,
      name: 'Attack',
      view: 'Атака',
      branch: 'strength',
    },
    {
      id: 1,
      value: 0,
      name: 'Stealth',
      view: 'Стелс',
      branch: 'agility',
    },
    {
      id: 2,
      value: 0,
      name: 'Archery',
      view: 'Cтрельба из лука',
      branch: 'agility',
    },
    {
      id: 3,
      value: 0,
      name: 'Learnability',
      view: 'Обучаемость',
      branch: 'intelligence',
    },
    {
      id: 4,
      value: 0,
      name: 'Survival',
      view: 'Выживание',
      branch: 'intelligence',
    },
    {
      id: 5,
      value: 0,
      name: 'Medicine',
      view: 'Медицина',
      branch: 'intelligence',
    },
    {
      id: 6,
      value: 0,
      name: 'Intimidation',
      view: 'Запугивание',
      branch: 'charisma',
    },
    {
      id: 7,
      value: 0,
      name: 'Insight',
      view: 'Проницательность',
      branch: 'charisma',
    },
    {
      id: 8,
      value: 0,
      name: 'Appearance',
      view: 'Внешний вид',
      branch: 'charisma',
    },
    {
      id: 9,
      value: 0,
      name: 'Manipulation',
      view: 'Манипулирование',
      branch: 'charisma',
    },
  ])

  useEffect(() => {
    if (uploaded) {
      setAttributes(uploaded.attributes)
      setName(uploaded.name)
      setSkills(uploaded.skills)
    }
  }, [uploaded])
  return (
    <div className="App">
      <Header attributes={attributes} name={name} setName={setName} skills={skills} setUploaded={setUploaded} />
      <div className="wrapper">
        <Parameters attributes={attributes} setAttributes={setAttributes} skills={skills} setSkills={setSkills} />
      </div>
    </div>
  )
}

export default App
