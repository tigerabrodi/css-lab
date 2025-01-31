import { useState } from 'react'
import './styles.css'

export function TextReveal() {
  const [reset, setReset] = useState(0)
  const letters = 'Animations'.split('')

  return (
    <div>
      <div key={reset} className="reveal-wrapper">
        {letters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="reveal-letter"
            style={
              {
                '--index': index,
              } as React.CSSProperties
            }
          >
            {letter}
          </span>
        ))}
      </div>

      <button className="button" onClick={() => setReset(reset + 1)}>
        Replay animation
      </button>
    </div>
  )
}
