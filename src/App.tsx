import { Route, Routes } from 'react-router'
import DownloadButton from './components/download-button/download-button'
import { SonnerToast } from './components/sonner-toast/sonnet-toast'
import { ComponentLayout } from './layouts/component'
import { ROUTES } from './lib/constants'
import { Home } from './pages/home'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route element={<ComponentLayout />}>
        <Route path={ROUTES.downloadButton} element={<DownloadButton />} />
        <Route path={ROUTES.sonnerToast} element={<SonnerToast />} />
      </Route>
    </Routes>
  )
}

export default App
