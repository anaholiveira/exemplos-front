import Card from '@/components/Card';
import styles from './page.module.css';

export default function Props(){
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

    return(
        <div>
            <h1 className={styles.titulo}>˙⋆ Props ⋆˙</h1>
            {
                carros.map((carro) =>(
                    <Card key={carro.id} id={carro.id} modelo={carro.modelo} ano={carro.ano} cor={carro.cor}/>
                ))
            }
        </div>
    )
}