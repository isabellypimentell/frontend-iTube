
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
      <h2>Insira seus dados para se cadastrar</h2>
      <div className={styles.inputContainer}>
        <div className={styles.inputbox}>
          <label>Nome de Usuário</label>
          <input type="text" required />
        </div>
        <div className={styles.inputbox}>
          <label>Nome Completo</label>
          <input type="name" required/>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputbox}>
          <label>E-mail</label>
          <input type="email" required />
        </div>
        <div className={styles.inputbox}>
          <label>Confirmar e-mail</label>
          <input type="email" required />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputbox}>
          <label>Senha</label>
          <input type="password" required/>
        </div>
        <div className={styles.inputbox}>
          <label>Confirmar senha</label>
          <input type="password" required/>
        </div>
      </div>
      <div className={styles.button}>Entrar</div>
      <div className={styles.linksContainer}>
      <div className={styles.link}>
        Esqueceu a senha?<a href="#"> Redifina</a>
      </div>
      <div className={styles.links}>
        Já tem conta? <a href="#"> Faça Login</a>
      </div>
    </div>
    </div>
    
  </div>
</div>
  );
}
          
       