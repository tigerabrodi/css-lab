import { Route, Routes } from 'react-router'
import { Coin } from './components/coin/coin'
import { DownloadButton } from './components/download-button/download-button'
import { Orbit } from './components/orbit/orbit'
import { SonnerToast } from './components/sonner-toast/sonnet-toast'
import { TextReveal } from './components/text-reveal/text-reveal'
import { ComponentLayout } from './layouts/component'
import { ROUTES } from './lib/constants'
import { Home } from './pages/home'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route element={<ComponentLayout />}>
        <Route
          path={ROUTES.practice.downloadButton}
          element={<DownloadButton />}
        />
        <Route path={ROUTES.practice.sonnerToast} element={<SonnerToast />} />
        <Route path={ROUTES.practice.textReveal} element={<TextReveal />} />
        <Route path={ROUTES.practice.orbit} element={<Orbit />} />
        <Route path={ROUTES.practice.coin} element={<Coin />} />
      </Route>
    </Routes>
  )
}

export default App
