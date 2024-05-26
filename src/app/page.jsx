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
          href="https://clock.cos.tg"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            考场时钟 <span>-&gt;</span>
          </h2>
          <p>
            考试的时候不用担心不知道时间啦~
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

        <a
          href="https://chat.cos.tg"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            神曰 <span>-&gt;</span>
          </h2>
          <p>和考神聊聊天！</p>
        </a>
        <a
          href="https://img.cos.tg"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            图神庙 <span>-&gt;</span>
          </h2>
          <p>AI图片生成~</p>
        </a>
        <a
          href="https://tts.cos.tg"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            神吟阁 <span>-&gt;</span>
          </h2>
          <p>支持多语言的文字转语音~</p>
        </a>

        <a
          href="https://surf.cos.tg "
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            仙河漂流 <span>-&gt;</span>
          </h2>
          <p>Edge同款冲浪小游戏</p>
        </a>

      </div>
    </main >
  );
}
