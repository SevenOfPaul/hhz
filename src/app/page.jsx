import styles from "./page.module.css";
import {Button, Table} from "antd"
import process from "process"
import fs from "node:fs"
import path from "path";
const curPth=process.cwd();
const games=JSON.parse(fs.readFileSync(path.join(curPth,"./src/app/games.json5")));
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
export default async function Home() {
  const info = (title,content) => {
    Modal.info({
      title,
      content: (
        <div>
          <p>{content}</p>
        </div>
      ),
      onOk() {},
    });
  };
  return (
    <div className={styles.page}>
      <h1>游戏合集</h1>
      <div className={styles.header}>
      {/* <Button type="primary" onClick={()=>info("关注博主")}>关注博主</Button>
        <Button type="primary" onClick={()=>info("加入我们","q群：221666602")}>加入我们</Button> */}
      </div>
      <Table columns={columns} dataSource={games} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
    </div>
  );
}
