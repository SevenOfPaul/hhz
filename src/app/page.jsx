import Image from "next/image";
import styles from "./page.module.css";
import {Skeleton} from "antd"
import axios from "../request/index";
const json=[
  {name:"游戏名",android:"安卓",pc:"pc",info:"备注"}
]
export default async function Home() {
  const games=await axios.get("/");
  console.log(games);
  return (
    <div className={styles.page}>
  <Skeleton   paragraph={{ rows: 7}} />
    </div>
  );
}
