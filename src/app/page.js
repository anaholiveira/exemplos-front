import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.titulo}> ˙⋆ Hanni 𐙚 ⋆˙ </h1>

      <div className={styles.fotos}>
        <div>
            <Image className={styles.img} src='/images/heart1.jpg' alt="Imagem 01" width={240} height={170} / >
        </div>

        <div>
          <Image className={styles.img} src='/images/gifhanni.gif' alt="Imagem 02" width={240} height={170} / >
        </div>

        <div>
          <Image className={styles.img} src='/images/heart2.jpg' alt="Imagem 03" width={240} height={170} / >
          </div>
      </div>

    </div>
  );
}