import styles from "./editor.module.css";
// import { Table,Skeleton } from "antd"
import Head from "next/head";
import Header from "@/components/Header";
import axios from "../../request/index";
import { useEffect, useState } from "react";
import ico from "../../public/favicon.ico"
import { Input } from 'antd';
export default function Edit() {
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
  let [data,setData]=useState({loading:true,games:[]});
   useEffect(async ()=>{
    const games=await axios.get("/");
    setData({loading:false,games});
    // return ()=>{}
},[]);
  return (
    <div className={styles.page}>
            <Head>
      <title>{"游戏合集，你喜欢的游戏都在这里"}</title>
        <meta property="edit:title" content={data.games.map(g=>g.name).join(" ")} key={data.games.map(g=>g.name).join(" ")} />
        <link rel="icon" type="image/x-icon" href={ico.src}></link>
      </Head>
     
      <Header title={"编辑游戏"}>
      <Input.Password placeholder="请输入密钥" className={styles.secret} />
      </Header>
       
    </div>
  );
}
