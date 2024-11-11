import styles from "./souceTable.module.scss";
import { Table, Skeleton, Input, message } from "antd";
import Link from "next/link";
import Header from "@/components/Header";
import axios from "../../request/index";
import { useEffect, useState } from "react";
import Meta from "@/components/Meta";
export default function Home() {
  const columns = [
    {
      title: "序号",
      dataIndex: "idx",
      width: 100,
      align: "center",
      render(text, record, idx) {
        return <p>{idx + 1}</p>;
      },
    },
    {
      title: "游戏名",
      dataIndex: "name",
      width: 200,
      align: "center"
    },
    {
      title: "游戏描述",
      dataIndex: "desc",
      width: 300,
      align: "center",
    },
    {
      title: "状态",
      dataIndex: "status",
      align: "center",
      width: 200,
      render(text, record) {
      if(record.status==1){
        return "资源已上传，快去公众号查看吧！"
      }else{
        return "群主正在奋力寻找，请耐心等待！"
      }
      },
    },
  ];
  let [defaultGames, setDefaultGames] = useState([]);
  let [data, setData] = useState({ loading: true, games: [] });
  useEffect(() => {
    (async () => {
      const games = (await axios.get("/getSouce")).games;
      setDefaultGames(games);
      setData({ loading: false, games });
      // return ()=>{}
    })();
  }, []);
  return (
    <div className={styles.page}>
      <Meta title={"paul的资源小屋，资源们都在这了"}>
        <Meta
          property="og:title"
          content={defaultGames.map((g) => g.name).join(" ")}
          key={defaultGames.map((g) => g.name).join(" ")}
        />
      </Meta>
      <script
        async
        src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
      ></script>
      <Header title={'“求资源”历史记录”'}>
        <Link
          href="./findSouce"
          className={styles.link}
          style={{ paddingRight: "10px" }}
        >
          求资源
        </Link>
        <Link
          href="./"
          className={styles.link}
          style={{ paddingRight: "10px" }}
        >
          回到首页
        </Link>
      </Header>
      {data.loading ? (
        <Skeleton paragraph={{ rows: 8 }} />
      ) : (
        <Table
          columns={columns}
          dataSource={data.games}
          key={"id"}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 400 }}
        />
      )}
    </div>
  );
}
