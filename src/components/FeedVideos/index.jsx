import VideoPlayer from '../VideoPlayer'
import styles from './styles.modules.css'

const VIDEOS = [
  {
    id: 1,
    author: 'expiredfilmclub',
    description: 'Taking photos on a film camera from 1903 🎞 do you like the results? Shop cameras, film & more from my profile 📸',
    likes: 46,
    share: 45885,
    comments: 54,
    songTitle: 'The Journey to the Grey Havens (feat. Sir James Galway) - Howard Shore',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/b6459430c33a486c9574acff89cd5271~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/b4ea38d630e417761f189c637267e454/625c901d/video/tos/useast2a/tos-useast2a-pve-0068/dd0df2f34d9e45638e7fe961cbd9802f/?a=1988&br=3734&bt=1867&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8Z5y3wwe2NXDJyl7Gb&l=2022041716090201022307503223A18698&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajl0Mzc6Zmo2OzMzNzczM0ApZzQ7MztlNTw4NzY5ZjYzOGdvM3FncjRva2NgLS1kMTZzczItXzQtLzAxYDJgMjBeNC86Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'supercarblondie',
    description: 'This world\'s first Hermes Edition Pagani has $1 million worth of extras',
    likes: 46,
    share: 45885,
    comments: 54,
    songTitle: 'The Journey to the Grey Havens (feat. Sir James Galway) - Howard Shore',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/b6459430c33a486c9574acff89cd5271~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/f9bcd05fc3f2addcdc678e871b05aa52/625c8f5b/video/tos/alisg/tos-alisg-pve-0037c001/76e464874c884db9b1eb953cb734a7c6/?a=1988&br=5920&bt=2960&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8ZqR3wwe2NQ60yl7Gb&l=2022041716054801022312016615A5C157&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amV3PGU6ZnlpPDMzODczNEApOzM3Nzk0Mzs3N2ZpaWY7OmdiNW82cjRfLzJgLS1kMS1zczI1YjFeMTBiXzM2MzYvNGE6Yw%3D%3D&vl=&vr='
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => {
      return (
        <div className={styles.item} key={video.id}>
          <VideoPlayer {...video} />
        </div>
      )
    })
  )
}
