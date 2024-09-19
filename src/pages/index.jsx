import styles from "./page.module.css";
import { Table,Skeleton } from "antd"
import Header from "@/components/Header";
import process from "process"
import axios from "../request/index";
import { useEffect, useState } from "react";
export default function Home(props) {
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
   },[])
  return (
    
    <div className={styles.page}>
       <Header title={"游戏合集"}/>
     {data.loading?  
     <Skeleton  paragraph={{ rows: 8 }} />
     :<Table columns={columns}  dataSource={data.games} pagination={{ pageSize: 30 }} scroll={{ y: 400 }} />}
    </div>
  );
}
