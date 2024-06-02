import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>YouTube Clone</title>
        <meta name="description" content="YouTube Clone created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image src="/images/logo.png" alt="Logo" className={styles.logo} width={100} height={50} />
        </div>
        <input type="text" className={styles.searchBar} placeholder="Pesquisar" />
        <button className={styles.registerButton}>Cadastrar</button>
      </header>

      <aside className={styles.sidebar}>
        <div className={styles.logoWrapper}>
          <Image src="/images/youtube-logo.png" alt="YouTube Logo" width={100} height={50} />
        </div>
        <button className={styles.sidebarItem}>
          <Image src="/Images/home.png" alt="Início" width={300} height={24} />
        </button>
        <button className={styles.sidebarItem}>
          <Image src="/images/user.png" alt="Você" width={300} height={24} />
        </button>
        <button className={styles.sidebarItem}>
          <Image src="/images/historical.png" alt="Histórico" width={300} height={24} />
        </button>
        <button className={styles.sidebarItem}>
          <Image src="/images/play-button-arrowhead.png" alt="Meus Vídeos" width={300} height={24} />
        </button>
      </aside>

      <nav className={styles.navigation}>
        <button className={styles.navItem}>Alta</button>
        <button className={styles.navItem}>Tudo</button>
        <button className={styles.navItem}>Música</button>
        <button className={styles.navItem}>Jogos</button>
        <button className={styles.navItem}>Tecnologia</button>
        <button className={styles.navItem}>Saúde</button>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.videoGrid}>
          {videoData.map((video, index) => (
            <div className={styles.videoCard} key={index}>
              <Image src={video.thumbnail} alt={video.title} width={320} height={180} />
              <div className={styles.videoInfo}>
                <p className={styles.videoTitle}>{video.title}</p>
                <p className={styles.videoChannel}>{video.channel}</p>
                <p className={styles.videoViews}>{video.views}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const videoData = [
  {
    thumbnail: '/images/video.jpg',
    title: 'Cursos Online Grátis de Todas as Áreas...',
    channel: 'Prime Cursos do Brasil',
    views: 'Patrocinado'
  },
  {
    thumbnail: '/images/video1.jpg',
    title: 'Masha e o Urso 🐻🌟 Novo Episódio 2022...',
    channel: 'Masha e o Urso',
    views: '69 mi de visualizações • há 1 ano'
  },
  {
    thumbnail: '/images/video2.jpg',
    title: 'Miniature Rainbow Chocolate Cake...',
    channel: 'Baking Yummy',
    views: '756 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: '/images/video3.jpg',
    title: 'Pica-Pau Não Consegue Ficar Confortável...',
    channel: 'Pica-Pau em Português',
    views: '312 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: '/images/video4.jpg',
    title: 'Pink Panther Toots His Horn On The Trumpet...',
    channel: 'Pink Panther',
    views: ''
  },
  {
    thumbnail: '/images/video5.jpg',
    title: 'Tom & Jerry em Português | Brasil | Um Pouco...',
    channel: 'WB Kids',
    views: ''
  },
  {
    thumbnail: '/images/video6.jpg',
    title: '1 HOUR Compilation | Episodes 11-20...',
    channel: 'Shaun the Sheep',
    views: ''
  },
  {
    thumbnail: '/images/video7.jpg',
    title: 'Monte a Sua Rampage',
    channel: 'Rampage com 272 cv de Potência...',
    views: ''
  },
  {
    thumbnail: '/images/video8.jpg',
    title: 'Desempenho Extremo',
    channel: 'Velocidade Máxima Automóveis',
    views: '1.2M views'
  },
];