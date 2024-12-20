'use client'
import { useEffect, useState } from "react"
import styles from './page.module.css'

export default function Efeitos() {

    //const [cont1, setCont1] = useState(0);
    //const [cont2, setCont2] = useState(0);
    const [ufs, setUfs] = useState([])
    const [estado, setEstado] = useState('')
    const [cidades, setCidades] = useState([])
    const [cidade, setCidade] = useState('')

    const getUfs = async() => {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados: '+response.statusText)
        }
        const data = await response.json();
        setUfs(data);
        console.log(data)
    }

    const getCidades = async() => {
        const response = await fetch (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios?orderBy=nome`)
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados: '+response.statusText)
        }
        const data = await response.json();
        setCidades(data);
        console.log(data);
    }
    
    useEffect (() => {
        getUfs()
    },[])

    useEffect (() => {
        getCidades()
    },[estado])

    return (

        <div>
            <h1 className={styles.titulo}>Use Effect / Efeitos colaterais</h1>
            <div className={styles.div}>

            <select className={styles.select}
                onChange={(ev) => {setEstado(ev.target.value), setCidade('')}}
            >
                <option value="">Selecione o estado</option>
                {ufs.map((uf) => (
                    <option value={uf.id} key={uf.id}>{uf.nome}</option>
                ))}
            </select>

            <select className={styles.select}
                onChange={(ev) => setCidade(ev.target.value)}
            >
                <option value="">Selecione a cidade</option>
                {cidades.map((cidade) => (
                    <option value={cidade.nome} key={cidade.id}>{cidade.nome}</option>
                ))}
            </select>
            {cidade? <p className={styles.paragrafo}>{cidade}</p>: <p className={styles.paragrafo}>Escolha a cidade</p>}
            </div>
                    
            {/*<button onClick={() => setCont1 (cont1 + 1)}>Adicionar</button>
            <p>Cont 1 = {cont1}</p>
            <button onClick={() => setCont2 (cont2 + 1)}>Adicionar</button>
            <p>Cont 2 = {cont2}</p>*/}
        </div>
    )
}