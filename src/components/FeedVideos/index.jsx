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
    src: 'https://v16-webapp.tiktok.com/b95c2b2d4ce8d481d010f2a288a07418/625cefc7/video/tos/maliva/tos-maliva-ve-0068c799-us/b7be1c721a734cc2bb1ef6cfacda421e/?a=1988&br=5550&bt=2775&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8Zo9swwe2NF_0yl7Gb&l=2022041722571701022307413327F0072F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajU0Zmc6Zm51PDMzZzczNEApaGQ7Zjw2ZWRmNzkzZzNnaWdgNmhhcjQwcjFgLS1kMS9zcy5iLy5hMV8uMzAxLy0xMjQ6Yw%3D%3D&vl=&vr='
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
    src: 'https://v16-webapp.tiktok.com/4672462e6d444dd0a56633a3ef79dd90/625cf484/video/tos/useast2a/tos-useast2a-pve-0068/060b395a6c354db8839bf3505fe2e64b/?a=1988&br=3448&bt=1724&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8ZWvuwwe2N1lwyl7Gb&l=2022041723173901019104101900EB0608&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am04bDY6ZmxtOjMzNzczM0ApZjg5NDs6NmQ7N2k7OzRnZmdoLmFrcjRna3JgLS1kMTZzc2EvYy8wMjY2MmE1LzRhLWI6Yw%3D%3D&vl=&vr='
  },
  {
    id: 3,
    author: 'supercarblondie',
    description: 'This world\'s first Hermes Edition Pagani has $1 million worth of extras',
    likes: 46,
    share: 45885,
    comments: 54,
    songTitle: 'The Journey to the Grey Havens (feat. Sir James Galway) - Howard Shore',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/b6459430c33a486c9574acff89cd5271~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/be3ce7d4983e0479ddbd88c1728c60dd/625cf483/video/tos/useast2a/tos-useast2a-pve-0068/a3c71e1c6aae4489b522b0bc18ebb43d/?a=1988&br=3320&bt=1660&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8ZWvuwwe2N1lwyl7Gb&l=2022041723173901019104101900EB0608&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MztwdzM6ZjlvOzMzNzczM0ApPDg5aDZpOGU4NzllZTc6N2dscW4ycjQwbC1gLS1kMTZzc2FiYDUwLTEvY2BfLTA2YGE6Yw%3D%3D&vl=&vr='
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
