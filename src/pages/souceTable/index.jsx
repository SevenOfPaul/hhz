import styles from "./souceTable.module.scss";
import { Table, Skeleton, Input, message } from "antd";
import Link from "next/link";
import Header from "@/components/Header";
import axios from "../../request/index";
import { useEffect, useState } from "react";
import Meta from "@/components/Meta";
import { code1HasCode2 } from "@/hooks/searchHook";
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
      align: "center",
      render(text, record) {
        return <Link href={record.desc}>{text}</Link>;
      },
    },
    {
      title: "游戏描述",
      dataIndex: "android",
      width: 300,
      align: "center",
    },
    {
      title: "状态",
      dataIndex: "pc",
      align: "center",
      width: 200,
    },
  ];
  let [defaultGames, setDefaultGames] = useState([]);
  function onSearch(cin) {
    setData({
      loading: false,
      games: defaultGames.filter((g) => code1HasCode2(g.name, cin)),
    });
  }
  let [data, setData] = useState({ loading: true, games: [] });
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("code") != local_code) {
        showModal();
      }
      const games = (await axios.get("/getSouce")).games;
      setDefaultGames(games);
      setData({ loading: false, games });
      // return ()=>{}
    })();
  }, []);
  return (
    <div className={styles.page}>
      <Meta title={"paul的资源小屋，游戏合集，你喜欢的游戏都在这里"}>
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
        <Input.Search
          placeholder="搜索"
          allowClear
          onSearch={onSearch}
          style={{ width: 200, maxHeight: 40 }}
        />
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
