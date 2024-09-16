// import Image from "next/image";
import Header from "@/components/Header";
import styles from "./editor.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header title={"编辑游戏"}/>
    </div>
  );
}
