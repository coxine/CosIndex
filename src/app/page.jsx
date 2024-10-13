import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>考神保佑，走向辉煌！💯💯💯</p>

      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="考神天国 Logo"
          layout="fill"
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://res.cos.tg"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            瑞治下载站 <span>-&gt;</span>
          </h2>
          <p>下载各类资源，破除版权壁垒！</p>
        </a>

        <a
          href="https://go.cos.tg"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            仙河传送门 <span>-&gt;</span>
          </h2>
          <p>快速缩短链接！</p>
        </a>

        <a
          href="https://e.cos.tg"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            电子神庙 <span>-&gt;</span>
          </h2>
          <p>
            在线拜考神～（建设中）
            <br />
          </p>
        </a>
        <a
          href="https://mooc.cos.tg"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            水课小助手 <span>-&gt;</span>
          </h2>
          <p>自动获取中国大学MOOC网的答案~</p>
        </a>
      </div>
    </main >
  );
}
