import styles from "./page.module.css";
import { Table } from "antd"
import Header from "@/components/Header";
import process from "process"
import fs from "node:fs"
import path from "path";
const columns = [
  {
    title: '游戏名',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '安卓链接',
    dataIndex: 'andriod',
    width: 300,
  },
  {
    title: 'pc下载链接',
    dataIndex: 'pc',
    width: 200,
  },{
    title: '备注',
    dataIndex: 'info',
    width: 200,
  }
];
export const getStaticProps = (async (context) => {
  const curPth=process.cwd();
  const games=fs.readFileSync(path.join(curPth,"./src/pages/games.json5"));
  return { props:{games:games.toString()} };
})
export default function Home(props) {
  const games=JSON.parse(props.games);
  return (
    <div className={styles.page}>
       <Header title={"游戏合集"}/>
      <Table columns={columns} dataSource={games} pagination={{ pageSize: 50 }} scroll={{ y: 400 }} />
    </div>
  );
}
