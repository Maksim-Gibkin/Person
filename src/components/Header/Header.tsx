import Input from '../Input/Input'
import './index.css'
import Indicators from '../Indicators/Indicators'
import { Attributes, Skill } from '../../Model/ParametersType'
import { createURLBlob, FileData } from '../../Service/FileService'
import { ChangeEvent, useEffect, useState } from 'react'

interface IHeaderProps {
  attributes: Attributes
  name: string
  setName: (name: string) => void
  skills: Skill[]
  setUploaded: (data: FileData) => void
}

const Header = ({ attributes, name, setName, skills, setUploaded }: IHeaderProps) => {
  const [indicators, setIndicators] = useState<Attributes>({
    lifeForce: attributes['strength'] + 3,
    evasion: attributes['agility'] + 10,
    energy: attributes['agility'] + attributes['intelligence'],
  })

  useEffect(() => {
    setIndicators({
      lifeForce: attributes['strength'] + 3,
      evasion: attributes['agility'] + 10,
      energy: attributes['agility'] + attributes['intelligence'],
    })
  }, [attributes])

  const parseUploadedFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0]
    const reader = new FileReader()

    reader.onload = (event) => {
      const data: FileData = JSON.parse(event?.target?.result as string)
      setUploaded(data)

      setIndicators({
        lifeForce: data.attributes['strength'] + 3,
        evasion: data.attributes['agility'] + 10,
        energy: data.attributes['agility'] + attributes['intelligence'],
      })
    }

    reader.readAsText(file as Blob)
  }

  return (
    <header className="header">
      <Input value={name} label="Имя" placeholder="Введите Имя" setValue={(str) => setName(str)} />
      <div className="header-link-wrap">
        <a
          className="header-link"
          href={createURLBlob({ name: name, skills: skills, attributes: attributes })}
          download={`${name}.json`}
        >
          Сохранить
        </a>
        <div className="header-input-file">
          <input className="header-link" type="file" onChange={parseUploadedFile} />
          <span className="header-link">Загрузить</span>
        </div>
        <button
          className="header-link"
          disabled={indicators.lifeForce === 0}
          onClick={() => {
            setIndicators({
              ...indicators,
              lifeForce: indicators.lifeForce - 1,
            })
          }}
        >
          Получить урон
        </button>
      </div>

      <Indicators indicators={indicators} />
    </header>
  )
}

export default Header
