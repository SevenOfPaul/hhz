import styles from "./page.module.scss";
import { Table, Skeleton, Input, Modal, message } from "antd";
import Link from "next/link";
import Header from "@/components/Header";
import axios from "../request/index";
import { useEffect, useState } from "react";
import Meta from "@/components/Meta";
import img from "../public/gzh.jpg";
import { code1HasCode2 } from "@/hooks/searchHook";
import { BarChartOutlined } from "@ant-design/icons/lib";
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
      title: "安卓链接",
      dataIndex: "android",
      width: 300,
      align: "center",
    },
    {
      title: "pc下载链接",
      dataIndex: "pc",
      align: "center",
      width: 200,
    },
    {
      title: "备注",
      dataIndex: "info",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const [code, setCode] = useState("");
  function changeCode(e) {
    setCode(e.target.value);
  }
  const local_code=1935;
  const handleOk = () => {
    if (code == local_code) {
      setIsModalOpen(false);
      localStorage.setItem("code", local_code);
    } else {
      messageApi.open({
        type: "warning",
        content: "验证码输入错误，请关注博主！",
      });
    }
  };
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("code") != local_code) {
        showModal();
      }
      const games = (await axios.get("/game")).games;
      setDefaultGames(games);
      setData({ loading: false, games });
      // return ()=>{}
    })();
  }, []);
  return (
    <div className={styles.page}>
      {contextHolder}
      <Modal
        title="很抱歉"
        open={isModalOpen}
        okText={"提交"}
        onOk={handleOk}
        closable={false}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>由于接口存在被盗用现象，只好加入二维码来防止！</p>
        <img src={img.src} />
        <p>请输入验证码，验证码在关注公众号后发送验证码或点击菜单皆可。</p>
        <Input placeholder="请输入验证码" onChange={(e) => changeCode(e)} />
      </Modal>
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
      <Header title={"游戏合集"}>
        {/* <Link style={{paddingRight:"10px"}} href="https://mp.weixin.qq.com/s?__biz=Mzg5OTYzNTQ1Mg==&mid=2247484105&idx=1&sn=e3ae778c7c3cc3be4179d5a964867c38&chksm=c051035af7268a4cc43bb252abc60eb33f391a83c3f6fa0e83e79b804c13357d96ebd4924b46&token=1379698303&lang=zh_CN#rd">
          网盘快速下载链接
        </Link> */}
        <div className={styles.tip}>手机端的朋友注意右侧还有内容</div>
        <Link
          href="./gameDocs"
          className={styles.link}
          style={{ paddingRight: "10px" }}
        >
          前置教程
        </Link>
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
          pagination={{ pageSize: 35 }}
          scroll={{ y: 400 }}
        />
      )}
      <div className={styles.footer}>
          <span id="busuanzi_container_site_pv">
          <BarChartOutlined />本站总访问量<span id="busuanzi_value_site_pv"></span>次
          <BarChartOutlined />本站访客数<span id="busuanzi_value_site_uv"></span>人次
          </span>

      </div>
    </div>
  );
}
