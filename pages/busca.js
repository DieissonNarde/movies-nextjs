import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Busca({ list }) {
  const [searchText, setSearchText] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleSearch = async () => {
    if(sarchText !== '') {
      const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
      const json = await result.json();
      setMovieList(json.list);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Movies Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca
        </h1>

        <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
        <button onClick={handleSearch}>Buscar</button>
        
        <hr />

        <ul>
          {movieList.map(item => (
            <li>
              <a href={`/movie/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={`Image ${item.title}`} />
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}