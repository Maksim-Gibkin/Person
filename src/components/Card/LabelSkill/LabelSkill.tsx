import './index.css'
import { Skill } from '../../../Model/ParametersType'

interface ILabelSkillProps {
  skill: Skill
  viewUpBtn: boolean
  upLvlSkill: (id: number) => void
}

const LabelSkill = ({ skill, viewUpBtn, upLvlSkill }: ILabelSkillProps) => {
  const viewSkillLevel: string[] = ['Нетренированный', 'Новичок', 'Ученик', 'Адепт', 'Эксперт', 'Мастер']

  return (
    <div className="card-skill-wrap">
      <div className="card-skill-name">
        {skill.view}
        <span className="card-skill-value-view">{viewSkillLevel[skill.value]}</span>
      </div>

      <span className="card-skill-value">{skill.value}</span>
      {viewUpBtn && (
        <button className="card-skill-up" onClick={() => upLvlSkill(skill.id)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>+
        </button>
      )}
    </div>
  )
}

export default LabelSkill
