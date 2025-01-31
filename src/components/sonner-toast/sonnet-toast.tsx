import { useEffect, useState } from 'react'
import './styles.css'

export function SonnerToast() {
  const [toasts, setToasts] = useState(0)

  return (
    <div className="wrapper">
      <div className="toaster">
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} length={toasts} index={i} />
        ))}
      </div>
      <button
        className="button"
        onClick={() => {
          setToasts(toasts + 1)
        }}
      >
        Add toast
      </button>
    </div>
  )
}

function Toast({ length, index }: { length: number; index: number }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div
      className="toast"
      data-mounted={isMounted}
      style={
        {
          // inverse the index to make the toast appear from the bottom
          // if last one, itll have index 0
          // imagine 3
          // 3 - (2 + 1) = 0
          // Last one is always the one at the bottom
          // if 2 in this case
          // 3 - (1 + 1) = 1
          // index 1 is the second element
          // it would be in the middle here
          // if the first one which should be the last one in the list
          // it would be 3 - (0 + 1) = 2
          // the higher the index, the higher the toast
          // we push it up with negative translateY in the css file
          '--index': `${length - (index + 1)}`,
        } as React.CSSProperties
      }
    >
      <span className="title">Event Created </span>
      <span className="description">Monday, January 3rd at 6:00pm</span>
    </div>
  )
}
