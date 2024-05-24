
import Link from 'next/link';
import styles from './page.module.css'
import Image from 'next/image';



export default function Login() {

  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.loginBox}>
          <div className={styles.logo}>
            <img src="/Image/logo.svg" alt="Logo" />
          </div>
          <h2>Insira seus dados para entrar</h2>
          <div className={styles.inputbox}>
            <label>E-mail</label>
            <input type="email" required />
          </div>
          <div className={styles.inputbox}>
            <label>Senha</label>
            <input type="password" required/>
          </div>
          <div className={styles.button}>Entrar</div>
          <div className={styles.linksContainer}>
          <div className={styles.link}>
            Esqueceu a senha?<a href="#"> Redefina</a>
          </div>
          <div className={styles.links}>
            Não tem conta?<a href="#"> Crie uma agora</a>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}
          
       