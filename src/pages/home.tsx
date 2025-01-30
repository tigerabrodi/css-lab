import { Link } from 'react-router'
import { ROUTES } from '../lib/constants'

export function Home() {
  const routes = Object.values(ROUTES)

  return (
    <div className="p-4 flex flex-col gap-2">
      {routes.map((route) => (
        <Link to={route} key={route} className="text-blue-600 underline">
          {route}
        </Link>
      ))}
    </div>
  )
}
