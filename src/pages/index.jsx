import styles from "./page.module.css";
import { Table,Skeleton,Input } from "antd"
import Link from 'next/link'
import Header from "@/components/Header";
import axios from "../request/index";
import { useEffect, useState } from "react";
import Meta from "@/components/Meta";
import { code1HasCode2 } from '@/hooks/searchHook'
export default function Home() {
  const columns = [
    {
      title: '序号',
      dataIndex: 'idx',
      width: 100,
      align:"center",
      render(text,record,idx){
       return <p>{idx+1}</p>
      }
    },
    {
      title: '游戏名',
      dataIndex: 'name',
      width: 200,
      align:"center",
      render(text,record){
       return <Link href={record.desc}>{text}</Link>
      }
    },
    {
      title: '安卓链接',
      dataIndex: 'android',
      width: 300,
        align:"center",
    },
    {
      title: 'pc下载链接',
      dataIndex: 'pc',
        align:"center",
      width: 200,
    },{
      title: '备注',
      dataIndex: 'info',
        align:"center",
      width: 200,
    }
  ];
  let [defaultGames,setDefaultGames]=useState([]);
  function onSearch(cin){
    console.log(defaultGames,defaultGames.filter(g=>g.name.indexOf(cin)))
    setData({loading:false,games:defaultGames.filter(g=>code1HasCode2(g.name,cin))});
  }
  let [data,setData]=useState({loading:true,games:[]});
   useEffect(async ()=>{
    const games=(await axios.get("/game")).games;
    setDefaultGames(games);
    setData({loading:false,games});
    // return ()=>{}
   },[])
  return (
    <div className={styles.page}>
   <Meta title={"游戏合集，你喜欢的游戏都在这里"}>
     <meta property="og:title" content={data.games.map(g=>g.name).join(" ")} key={data.games.map(g=>g.name).join(" ")} /></Meta>
       <Header title={"游戏合集"}>
       <Input.Search placeholder="搜索" allowClear onSearch={onSearch} style={{ width: 200,maxHeight:40 }} />
        </Header>
     {data.loading?  
     <Skeleton  paragraph={{ rows: 8 }} />
     :<Table columns={columns}  dataSource={data.games} key={"id"} pagination={{ pageSize: 30 }} scroll={{ y: 400 }} />}
    </div>
  );
}
