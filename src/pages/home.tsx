import { Link } from 'react-router'
import { ROUTES } from '../lib/constants'

export function Home() {
  const practiceRoutes = Object.values(ROUTES.practice)

  return (
    <div className="flex items-center gap-10 p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Practice</h1>
        <div className="flex flex-col gap-2">
          {practiceRoutes.map((route) => (
            <Link to={route} key={route} className="text-blue-600 underline">
              {route}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
