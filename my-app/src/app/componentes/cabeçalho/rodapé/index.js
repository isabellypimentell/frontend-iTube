import Image from 'next/image';

import styles from './index.module.css'; 


export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <p>iTube , Brasil | 00.000.000/0000-00</p>
            <p>Rua Capital, 1000 - centro - Pompeia/SP | iTube123@email.com</p>
        </footer>
    );
}