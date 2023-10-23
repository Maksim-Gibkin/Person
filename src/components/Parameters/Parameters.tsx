import './index.css'
import Card from '../Card/Card'

import { Attributes, IndicatorsFields, Skill } from '../../Model/ParametersType'

interface IParametersProps {
  setAttributes: (atr: Attributes) => void
  attributes: Attributes
  skills: Skill[]
  setSkills: (skl: Skill[]) => void
}
const Parameters = ({ attributes, setAttributes, skills, setSkills }: IParametersProps) => {
  const upLvlSkill = (id: number) => {
    setSkills(
      skills.map((s: Skill) => {
        if (s.id === id) s.value++
        return s
      })
    )
  }

  return (
    <div className="param-page">
      {Object.keys(attributes).map((key: string, i: number) => (
        <Card
          key={key + i}
          nameObj={{ view: IndicatorsFields[key as keyof typeof IndicatorsFields], name: key }}
          value={attributes[key]}
          setAttributes={setAttributes}
          skills={skills.filter((skl: Skill): boolean => skl.branch === key)}
          setSkills={(id: number) => upLvlSkill(id)}
          attributes={attributes}
        />
      ))}
    </div>
  )
}

export default Parameters
