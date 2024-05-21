import Link from 'next/link';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Hello World!</h1>
        <h2>Subtitulo</h2>
        <p>Mais outro paragrafo</p>
        <br />
        <p>Um texto</p>
        <div className={styles.container}>
        <h2>Outro</h2>
    </div>
    <p><Link href={'/userlogin'}>Login</Link></p>
    <p><Link href={'/products'}>Produtos</Link></p>  
    </main>
    
  );
}
