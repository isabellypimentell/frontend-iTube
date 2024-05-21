import Link from 'next/link';
import styles from './page.module.css'

export default function () {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.logo}></div>
          <h2>Insira seus dados para entrar</h2>
          <form>
            <div className={styles.inputBox}>
              <input type="email" required />
              <label>E-mail</label>
            </div>
            <div className={styles.inputBox}>
              <input type="password" required />
              <label>Senha</label>
            </div>
            <div className={styles.button}>Entrar</div>
          </form>
          <div className={styles.linksContainer}>
            <div className={styles.linksb}>
              <a href="#">Esqueceu a senha? Redefina</a>
            </div>
            <div className={styles.links}>
              <a href="#">Não tem conta? Crie uma agora</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}