import { Heart } from '../Icons/Heart'
import { Share } from '../Icons/Share'
import { Comment } from '../Icons/Comment'
import styles from './styles.module.css'

export default function VideoPlayerActions ({
  likes = 120,
  comments = 1200,
  shares = 127,
  hearted = 12
}) {
  const handleLike = () => {

  }

  const handleComment = () => {

  }

  const handleShares = () => {

  }

  return (
    <aside className={styles.actions}>
      <button onClick={handleLike} className={styles.action}>
        <Heart width='45' />
        <span title='likes'>{likes}</span>
      </button>

      <button onClick={handleComment} className={styles.action}>
        <Comment width='45' />
        <span title='comments'>{comments}</span>
      </button>
      <button onClick={handleShares} className={styles.action}>
        <Share width='45' />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}
