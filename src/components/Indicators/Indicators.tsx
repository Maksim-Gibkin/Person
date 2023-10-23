import './index.css'
import { Indicator, IndicatorsFields } from '../../Model/ParametersType'

interface IIndicatorsProps {
  indicators: Indicator
}

const Indicators = ({ indicators }: IIndicatorsProps) => {
  const fields = Object.keys(indicators).map((indicator: string) => {
    return (
      <li key={indicator} className="indicator-field">
        <div>{(IndicatorsFields as { [key: string]: string })[indicator]}</div>
        <div className="indicator-value">{indicators[indicator]}</div>
      </li>
    )
  })

  return <ul className="indicator-list">{fields}</ul>
}

export default Indicators
