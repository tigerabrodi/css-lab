import './styles.css'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function DockCards() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div
        className="dock-container"
        style={
          {
            '--cards-length': cards.length,
          } as React.CSSProperties
        }
      >
        {cards.map((card) => (
          <div className="dock-card" key={card}>
            <div className="dock-card-inner">{card}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
