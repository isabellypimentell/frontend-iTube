import Link from 'next/link'; 

import styles from './page.module.css';

export default function Produtos () {
    return (
        <div className={styles.container}>
            <h1>Lista de videos</h1> 
            <div>
                Video: Como aprender programação
                Data: 21/05/2024
                Criador: iTube10
                Descrição: aprenda de forma facil a progamar .
            </div>
            <div>
                Video: Como aprender programação
                Data: 21/05/2024
                Criador: iTube10
                Descrição: aprenda de forma facil a progamar .
            </div>
            <br />
            <p><Link href={'/'}>Voltar</Link></p>
        </div>
    );
}