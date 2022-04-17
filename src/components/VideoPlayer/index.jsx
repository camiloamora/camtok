import clsx from 'clsx'
import { useRef, useState } from 'react'
import styles from './styles.module.css'
import VideoDescription from '../VideoDescription/'
import VideoPlayerActions from './VideoPlayerActions'

export default function VideoPlayer ({
  author, albumCover,
  src, description
}) {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    const { current: videoEl } = video
    if (playing) {
      videoEl.pause()
    } else {
      videoEl.play()
    }

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <i className={playerClassName} />
      <VideoPlayerActions />
      <VideoDescription
        albumCover={albumCover}
        author={author}
        description={description}
      />
    </div>
  )
}
