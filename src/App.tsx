import { Route, Routes } from 'react-router'
import { AnimePowerUp } from './components/anime-power-up/anime-power-up'
import { ChakraLoader } from './components/chakra-loader/chakra-loader'
import { CharacterEffect } from './components/character-effect/character-effect'
import { Coin } from './components/coin/coin'
import { DockCards } from './components/dock-cards/dock-cards'
import { DownloadButton } from './components/download-button/download-button'
import { EnergyFlow } from './components/energy-flow/energy-flow'
import { ImageGridHover } from './components/image-grid-hover/image-grid-hover'
import { Orbit } from './components/orbit/orbit'
import { RetroLoading } from './components/retro-loading/retro-loading'
import { SlideUpCards } from './components/slide-up-cards/slide-up-cards'
import { SonnerToast } from './components/sonner-toast/sonnet-toast'
import { StaggeredGridItem } from './components/staggered-grid-item/staggered-grid-item'
import { TerminalTypingEffect } from './components/terminal-typing-effect/terminal-typing-effect'
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

        {/* Own Creations */}
        <Route
          path={ROUTES.ownCreations.chakraLoader}
          element={<ChakraLoader />}
        />

        <Route
          path={ROUTES.ownCreations.animePowerUp}
          element={<AnimePowerUp />}
        />

        <Route path={ROUTES.ownCreations.energyFlow} element={<EnergyFlow />} />

        <Route
          path={ROUTES.ownCreations.retroLoading}
          element={<RetroLoading />}
        />

        <Route
          path={ROUTES.ownCreations.imageGridHover}
          element={<ImageGridHover />}
        />

        <Route
          path={ROUTES.ownCreations.staggeredGridItem}
          element={<StaggeredGridItem />}
        />

        <Route
          path={ROUTES.ownCreations.slideUpCards}
          element={<SlideUpCards />}
        />

        <Route
          path={ROUTES.ownCreations.terminalTypingEffect}
          element={<TerminalTypingEffect />}
        />

        <Route path={ROUTES.ownCreations.dockCards} element={<DockCards />} />

        <Route
          path={ROUTES.ownCreations.characterEffect}
          element={<CharacterEffect />}
        />
      </Route>
    </Routes>
  )
}

export default App
