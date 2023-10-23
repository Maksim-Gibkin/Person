import './index.css'
import { ChangeEvent } from 'react'

interface IInputNumberProps {
  onDecrease: () => void
  onIncrease: () => void
  value: number
  onInput: (val: number) => void
}

const InputNumber = ({ onDecrease, onIncrease, value, onInput }: IInputNumberProps) => {
  return (
    <div className="input-number-wrap" onClick={(e) => e.stopPropagation()}>
      <button className="value-button decrease" onClick={() => onDecrease()} disabled={value < 1}>
        -
      </button>
      <input
        className="input-number"
        type="number"
        max={999}
        min={0}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value: number = Math.min(999, Number(e.target.value))
          onInput(value)
        }}
      />
      <button className="value-button increase" onClick={() => onIncrease()}>
        +
      </button>
    </div>
  )
}

export default InputNumber
