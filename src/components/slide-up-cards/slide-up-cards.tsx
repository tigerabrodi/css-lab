import './styles.css'

const CARDS = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  title: `Card ${index + 1}`,
  description: `This is the description for card ${index + 1}`,
}))

export function SlideUpCards() {
  return (
    <div className="w-full p-32 flex flex-wrap gap-10 items-center justify-center">
      {CARDS.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-details">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
