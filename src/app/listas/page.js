import styles from './page.module.css'

export default function Listas (){
    const nomes = ['Ana','Isabella','Priscila','Leticia','Thamylla']
    const carros = [
        {
            id: 1,
            modelo: 'Fusca',
            ano: 1975,
            cor: 'Rosa'
        },
        {
            id: 2,
            modelo: 'Corolla',
            ano: 2022,
            cor: 'Preto'
        },
        {
            id: 3,
            modelo: 'Camaro',
            ano: 2019,
            cor: 'Amarelo'
        },
        {
            id: 4,
            modelo: 'Ferrari',
            ano: 2020,
            cor: 'Vermelho'
        },
        {
            id: 5,
            modelo: 'Mustang',
            ano: 2023,
            cor: 'Branco'
        }
    ]

    return (
        <div>
            <h1 className={styles.titulo}>˙⋆ Listas ⋆˙</h1>
            <div>
            <h2 className={styles.subtitulo}>Lista Comum</h2>

            <ul className={styles.ul}>
                {nomes.map((nome, id) => (
                    <li className={styles.li} key={id}>{id+1} - {nome}</li>
                ))}
            </ul>
            </div>

            <div>   
                <h2 className={styles.subtitulo}>Lista de objetos</h2>
                {
                    carros.map((carro)=>(
                        <div className={styles.objetos}  key={carro.id}>
                            <h3 className={styles.idmodelo}>{carro.id} - {carro.modelo}</h3>
                            <p className={styles.paragrafos}>Cor: {carro.cor}</p>
                            <p className={styles.paragrafos}>Ano: {carro.ano}</p>
                        </div>
                    ))
                }
            </div> 
        </div>
    )
}