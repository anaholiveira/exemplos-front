'use client';
import { useState } from "react";
import styles from './page.module.css';

export default function Filtro() {

    const nums = [1,2,3,4,5,6,7,8,9,10];
    const pares = nums.filter((num) => (num%2==0));
    const nomes = ['Ana','Isabella','Priscila','Leticia','Thamylla'];
    const [busca, setBusca] = useState('');
    const nomesBusca = nomes.filter((nome) => (nome.toLowerCase().includes(busca.toLowerCase())))

    console.log(nums);
    console.log(pares);

    return (
        <div>
            <h1 className={styles.titulo}>Filtro</h1>

            <div className={styles.div}>
            <input className={styles.input} 
                value={busca}
                type="text"
                onChange={(ev) => setBusca(ev.target.value)}
            />
            <ul className={styles.ul}>
                {nomesBusca.map((nome, i) => (
                    <li className={styles.li} key={i}>{nome}</li>
                ))}
            </ul>
            </div>
            
        </div>
    )
}