import './styles.css'

export function StaggeredGridItem() {
  return (
    <div className="min-h-screen bg-amber-50 w-full pt-20">
      <div className="grid-container">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            className="grid-item"
            key={index}
            style={{ '--index': index } as React.CSSProperties}
          ></div>
        ))}
      </div>
    </div>
  )
}
