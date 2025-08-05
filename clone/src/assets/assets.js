// import bell_icon from './bell.png'
// import home_icon from './home.png'
// import like_icon from './like.png'
// import loop_icon from './loop.png'
// import mic_icon from './mic.png'
// import next_icon from './next.png'
// import play_icon from './play.png'
// import pause_icon from './pause.png'
// import plays_icon from './plays.png'
// import prev_icon from './prev.png'
// import search_icon from './search.png'
// import shuffle_icon from './shuffle.png'
// import speaker_icon from './speaker.png'
// import stack_icon from './stack.png'
// import zoom_icon from './zoom.png'
// import plus_icon from './plus.png'
// import arrow_icon from './arrow.png'
// import mini_player_icon from './mini-player.png'
// import queue_icon from './queue.png'
// import volume_icon from './volume.png'
// import arrow_right from './right_arrow.png'
// import arrow_left from './left_arrow.png'
// import spotify_logo from './spotify_logo.png'
// import clock_icon from './clock_icon.png'
// import img1 from './img1.jpg'
// import img2 from './img2.jpg'
// import img3 from './img3.jpg'
// import img4 from './img4.jpg'
// import img5 from './img5.jpg'
// import img6 from './img6.jpg'
// import img7 from './img7.jpg'
// import img8 from './img8.jpg'
// import img9 from './img9.jpg'
// import img10 from './img10.jpg'
// import img11 from './img11.jpg'
// import img12 from './img12.jpg'
// import img13 from './img13.jpg'
// import img14 from './img14.jpg'
// import img15 from './img15.jpg'
// import img16 from './img16.jpg'
// import song1 from  './song1.mp3'
// import song2 from  './song2.mp3'
// import song3 from  './song3.mp3'
// import blindinglights from "../assets/m52b25-e36-exhaust-sound-238996.mp3";

// export const assets = {
//     bell_icon,
//     home_icon,
//     like_icon,
//     loop_icon,
//     mic_icon,
//     next_icon,
//     play_icon,
//     plays_icon,
//     prev_icon,
//     search_icon,
//     shuffle_icon,
//     speaker_icon,
//     stack_icon,
//     zoom_icon,
//     plus_icon,
//     arrow_icon,
//     mini_player_icon,
//     volume_icon,
//     queue_icon,
//     pause_icon,
//     arrow_left,
//     arrow_right,
//     spotify_logo,
//     clock_icon
// }

// export const albumsData = [
//     {
//         id:0,
//         name: "Top 50 Global",
//         image: img8,
//         desc:"Your weekly update of the most played tracks",
//         bgColor:"#2a4365"
//     },
//     {
//         id:1,
//         name: "Top 50 India",
//         image: img9,
//         desc:"Your weekly update of the most played tracks",
//         bgColor:"#22543d"
//     },
//     {
//         id:2,
//         name: "Trending India",
//         image: img10,
//         desc:"Your weekly update of the most played tracks",
//         bgColor:"#742a2a"
//     },
//     {
//         id:3,
//         name: "Trending Global",
//         image: img16,
//         desc:"Your weekly update of the most played tracks",
//         bgColor:"#44337a"
//     },
//     {
//         id:4,
//         name: "Mega Hits,",
//         image: img11,
//         desc:"Your weekly update of the most played tracks",
//         bgColor:"#234e52"
//     },
//     {
//         id:5,
//         name: "Happy Favorites",
//         image: img15,
//         desc:"Your weekly update of the most played tracks",
//         bgColor:"#744210"
//     }
// ]
import weeknd from "../assets/ab67616d0000b273f0f6528e4eb6588b48d5128e.jpeg";
import img1 from "../assets/ab67616d00001e028863bc11d2aa12b54f5aeb36 (1).jpeg";
import img3 from "../assets/ab67616d00001e021215b8e057e5bc838f736655.jpeg";
import song1 from "../assets/blindinglights.m4a";
import song2 from "../assets/espacefromla.m4a";
import song3 from "../assets/Prismo, Shreya - Coexist (Vip) [feat. Shreya].flac";



export const songs = [
  {
    id: 0,
    name: "Blinding Lights",
    file: song1,
    img: img1,
    artist: "The Weeknd",
    content:
      "The Weeknd, whose real name is Abel Tesfaye, is a Canadian singer, songwriter, and record producer known for his unique blend of R&B, pop, and electronic music. He gained fame with his mixtapes in 2011 and later achieved global success with hits like Blinding Lights, Starboy, and Save Your Tears. His music often explores themes of love, fame, and heartbreak, and he is known for his mysterious persona and cinematic storytelling. With multiple Grammy Awards and record-breaking albums, The Weeknd has become one of the biggest artists in the music industry.",
    liked: false,
  },
  {
    id: 1,
    name: "Escape From LA",
    file: song2,
    img: weeknd,
    artist: "The Weeknd",
    liked:true,
    content:
      "The Weeknd, whose real name is Abel Tesfaye, is a Canadian singer, songwriter, and record producer known for his unique blend of R&B, pop, and electronic music. He gained fame with his mixtapes in 2011 and later achieved global success with hits like Blinding Lights, Starboy, and Save Your Tears. His music often explores themes of love, fame, and heartbreak, and he is known for his mysterious persona and cinematic storytelling. With multiple Grammy Awards and record-breaking albums, The Weeknd has become one of the biggest artists in the music industry.",
  },
  {
    id: 2,
    name: "Coexist (Vip) [feat. Shreya]",
    file: song3,
    img: img3,
    liked: false,
    artist: "Prismo",
    content:
      "Prismo is a music producer and DJ known for his energetic blend of electronic, bass, and trap music. His tracks often feature powerful drops, emotional melodies, and a mix of heavy and melodic elements. Prismo gained popularity with songs like Stronger, Senses, and Solo, which showcase his signature style of blending bass-driven beats with deep, emotional lyrics. His music has been featured on major platforms like Monstercat and Lowly, making him a rising name in the electronic music scene.",
  },
  {
    id: 3,
    name: "Coexist (Vip) [feat. Shreya]",
    file: song3,
    img: img3,
    liked: false,
    artist: "Prismo",
    content:
      "Prismo is a music producer and DJ known for his energetic blend of electronic, bass, and trap music. His tracks often feature powerful drops, emotional melodies, and a mix of heavy and melodic elements. Prismo gained popularity with songs like Stronger, Senses, and Solo, which showcase his signature style of blending bass-driven beats with deep, emotional lyrics. His music has been featured on major platforms like Monstercat and Lowly, making him a rising name in the electronic music scene.",
  },
  {
    id: 4,
    name: "Coexist (Vip) [feat. Shreya]",
    file: song3,
    img: img3,
    liked: true,
    artist: "Prismo",
    content:
      "Prismo is a music producer and DJ known for his energetic blend of electronic, bass, and trap music. His tracks often feature powerful drops, emotional melodies, and a mix of heavy and melodic elements. Prismo gained popularity with songs like Stronger, Senses, and Solo, which showcase his signature style of blending bass-driven beats with deep, emotional lyrics. His music has been featured on major platforms like Monstercat and Lowly, making him a rising name in the electronic music scene.",
  },
  {
    id: 5,
    name: "Coexist (Vip) [feat. Shreya]",
    file: song3,
    img: img3,
    liked: true,
    artist: "Prismo",
    content:
      "Prismo is a music producer and DJ known for his energetic blend of electronic, bass, and trap music. His tracks often feature powerful drops, emotional melodies, and a mix of heavy and melodic elements. Prismo gained popularity with songs like Stronger, Senses, and Solo, which showcase his signature style of blending bass-driven beats with deep, emotional lyrics. His music has been featured on major platforms like Monstercat and Lowly, making him a rising name in the electronic music scene.",
  },
  {
    id: 6,
    name: "Coexist (Vip) [feat. Shreya]",
    file: song3,
    img: img3,
    liked: false,
    artist: "Prismo",
    content:
      "Prismo is a music producer and DJ known for his energetic blend of electronic, bass, and trap music. His tracks often feature powerful drops, emotional melodies, and a mix of heavy and melodic elements. Prismo gained popularity with songs like Stronger, Senses, and Solo, which showcase his signature style of blending bass-driven beats with deep, emotional lyrics. His music has been featured on major platforms like Monstercat and Lowly, making him a rising name in the electronic music scene.",
  },
  {
    id: 7,
    name: "Coexist (Vip) [feat. Shreya]",
    file: song3,
    img: img3,
    liked: false,
    artist: "Prismo",
    content:
      "Prismo is a music producer and DJ known for his energetic blend of electronic, bass, and trap music. His tracks often feature powerful drops, emotional melodies, and a mix of heavy and melodic elements. Prismo gained popularity with songs like Stronger, Senses, and Solo, which showcase his signature style of blending bass-driven beats with deep, emotional lyrics. His music has been featured on major platforms like Monstercat and Lowly, making him a rising name in the electronic music scene.",
  },
  {
    id: 8,
    name: "Coexist (Vip) [feat. Shreya]",
    file: song3,
    img: img3,
    liked: false,
    artist: "Prismo",
    content:
      "Prismo is a music producer and DJ known for his energetic blend of electronic, bass, and trap music. His tracks often feature powerful drops, emotional melodies, and a mix of heavy and melodic elements. Prismo gained popularity with songs like Stronger, Senses, and Solo, which showcase his signature style of blending bass-driven beats with deep, emotional lyrics. His music has been featured on major platforms like Monstercat and Lowly, making him a rising name in the electronic music scene.",
  },
  {
    id: 9,
    name: "Coexist (Vip) [feat. Shreya]",
    file: song3,
    img: img3,
    liked: false,
    artist: "Prismo",
    content:
      "Prismo is a music producer and DJ known for his energetic blend of electronic, bass, and trap music. His tracks often feature powerful drops, emotional melodies, and a mix of heavy and melodic elements. Prismo gained popularity with songs like Stronger, Senses, and Solo, which showcase his signature style of blending bass-driven beats with deep, emotional lyrics. His music has been featured on major platforms like Monstercat and Lowly, making him a rising name in the electronic music scene.",
  },
  {
    id: 10,
    name: "Coexist (Vip) [feat. Shreya]",
    file: song3,
    img: img3,
    liked: false,
    artist: "Prismo",
    content:
      "Prismo is a music producer and DJ known for his energetic blend of electronic, bass, and trap music. His tracks often feature powerful drops, emotional melodies, and a mix of heavy and melodic elements. Prismo gained popularity with songs like Stronger, Senses, and Solo, which showcase his signature style of blending bass-driven beats with deep, emotional lyrics. His music has been featured on major platforms like Monstercat and Lowly, making him a rising name in the electronic music scene.",
  },
  {
    id: 11,
    name: "Coexist (Vip) [feat. Shreya]",
    file: song3,
    img: img3,
    liked: false,
    artist: "Prismo",
    content:
      "Prismo is a music producer and DJ known for his energetic blend of electronic, bass, and trap music. His tracks often feature powerful drops, emotional melodies, and a mix of heavy and melodic elements. Prismo gained popularity with songs like Stronger, Senses, and Solo, which showcase his signature style of blending bass-driven beats with deep, emotional lyrics. His music has been featured on major platforms like Monstercat and Lowly, making him a rising name in the electronic music scene.",
  },
];
