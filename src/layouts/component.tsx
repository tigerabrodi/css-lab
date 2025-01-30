import { Outlet } from 'react-router'

export function ComponentLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  )
}
