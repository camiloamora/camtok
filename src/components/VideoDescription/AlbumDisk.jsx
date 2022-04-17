import styles from './styles.module.css'

export default function AlbumDisk ({ albumCover }) {
  return (
      <div className={styles.album}>
          <img src={albumCover} alt='albumImage' className={styles.albumImage} />
      </div>
  )
}
