import styles from "./page.module.css";
import {Button, Table,Modal } from "antd"
import Image from 'next/image'
import process from "process"
import fs from "node:fs"
import path from "path";
import img from "../public/gzh.jpg"
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
console.log(img)
export const getStaticProps = (async (context) => {
  const curPth=process.cwd();
  const games=fs.readFileSync(path.join(curPth,"./src/pages/games.json5"));
  return { props:{games:games.toString()} }
})
export default  function Home(props) {
  const games=JSON.parse(props.games)
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
      <Button type="primary" onClick={()=>info("关注博主",<img src={img.src}   width={300}
        height={300} />)}>关注博主</Button>
        <Button type="primary" onClick={()=>info("加入我们","q群：221666602")}>加入我们</Button>
      </div>
      <Table columns={columns} dataSource={games} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
    </div>
  );
}
