import { FC, useState } from 'react'
import { useSound } from 'use-sound'
import { FaPlay, FaPause } from 'react-icons/fa'
import Sound from '../sound/sample.mp3'

const App: FC = () => {
  const [play, { pause }] = useSound(Sound)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true)
      return play()
    } else {
      setIsPlaying(false)
      return pause()
    }
  }

  return (
    <>
      <div>
        <button onClick={handlePlay}>{isPlaying ? <FaPause size="3em" /> : <FaPlay size="3em" />}</button>
      </div>
    </>
  )
}

export default App
