import styles from './Card.module.css';

    export default function Card({id, modelo, ano, cor}){
    return (
        <div className={styles.div}>
            <h2 className={styles.idmodelo}>{id} - {modelo}</h2>
            <p className={styles.paragrafos}>{ano}</p>
            <p className={styles.paragrafos}>{cor}</p>
        </div>
    )
}