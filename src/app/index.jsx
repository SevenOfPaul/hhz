import styles from "./page.module.css";
import { Table } from "antd"
import axios from "../request"
import Header from "@/components/Header";
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
  const res=await axios.get("/games");
  // const games=JSON.parse(res);
export default async function Home(props) {
  const games=JSON.parse(res);
  return (
    <div className={styles.page}>
       <Header title={"游戏合集"}/>
      <Table columns={columns} dataSource={games} pagination={{ pageSize: 50 }} scroll={{ y: 400 }} />
    </div>
  );
}
