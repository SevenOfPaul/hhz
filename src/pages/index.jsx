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
  const [page,setPage]=useState(1);
  let [defaultGames,setDefaultGames]=useState([]);
  function onSearch(cin){
    setData({loading:false,games:defaultGames.filter(g=>code1HasCode2(g.name,cin))});
  }
  let [data,setData]=useState({loading:true,games:[]});
//  async function changePage(newPage){
//   if(newPage>page){
//   setPage(newPage+1);
//   setData({loading:true,games:[...data.games]});
//   const games= (await axios.get("/game",{params:{page:page}})).games;
//   setData({loading:false,games:[...data.games,...games]});
//   }else{
//     setPage(newPage-1);
//   }
//   }
   useEffect(async ()=>{
    const games=(await axios.get("/game",{params:{page:page}})).games;
    setDefaultGames(games);
    setData({loading:false,games});
    // return ()=>{}
   },[])
  return (
    <div className={styles.page}>
   <Meta title={"游戏合集，你喜欢的游戏都在这里"}>
     <meta property="og:title" content={defaultGames.map(g=>g.name).join(" ")} key={defaultGames.map(g=>g.name).join(" ")} /></Meta>
       <Header title={"游戏合集"}>
        {/* <Link style={{paddingRight:"10px"}} href="https://mp.weixin.qq.com/s?__biz=Mzg5OTYzNTQ1Mg==&mid=2247484105&idx=1&sn=e3ae778c7c3cc3be4179d5a964867c38&chksm=c051035af7268a4cc43bb252abc60eb33f391a83c3f6fa0e83e79b804c13357d96ebd4924b46&token=1379698303&lang=zh_CN#rd">
          网盘快速下载链接
        </Link> */}
       <Input.Search placeholder="搜索" allowClear onSearch={onSearch} style={{ width: 200,maxHeight:40 }} />
        </Header>
     {data.loading?  
     <Skeleton  paragraph={{ rows: 8 }} />
     :<Table columns={columns}  dataSource={data.games} key={"id"} pagination={{ pageSize: 30}} scroll={{ y: 400 }} />}
    </div>
  );
}
