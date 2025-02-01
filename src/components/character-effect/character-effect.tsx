import Logo from './logo.png'
import NarutoInKonohaImage from './naruto-in-konoha.webp'
import NarutoImg from './naruto.png'

import './styles.css'

export function CharacterEffect() {
  return (
    <div className="character-effect-body flex min-h-screen w-full items-center justify-center">
      <div className="character-container">
        <img src={NarutoImg} alt="Naruto" className="shown-image" />
        <img
          src={NarutoInKonohaImage}
          alt="Naruto in Konoha"
          className="background-image"
        />

        <img src={Logo} alt="Logo" className="logo" />
      </div>
    </div>
  )
}
