import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function MovieItem({ info }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {info.title}
        </h1>

        <p>{info.overview}</p>

        <img src={`https://image.tmdb.org/t/original${info.backdrop_path}`} width="40px" height="auto" alt={info.title} />

        <Link href="/busca">Ir para a Busca</Link>

        
      </main>
    </div>
  )
}

export async function getServeSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await res.json();

  return {
    props: {
      info: json.info
    }
  }
}