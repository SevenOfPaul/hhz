import styles from "./editor.module.css";
// import { Button} from "antd"
import Head from "next/head";
import Header from "@/components/Header";
import axios from "../../request/index";
import { useEffect, useState } from "react";
import ico from "../../public/favicon.ico"
// import {RowEditorTable , nanoid} from "@ant-design/pro-components/lib"
import { Input,Button,Skeleton } from 'antd';
export default function Edit() {
  const columns = [
    {
      title: '游戏名',
      dataIndex: 'name',
      width: 200,
      editable: true
    },
    {
      title: '安卓链接',
      dataIndex: 'andriod',
      width: 300,
      editable: true
    },
    {
      title: 'pc下载链接',
      dataIndex: 'pc',
      width: 200,
      editable: true
    },{
      title: '备注',
      dataIndex: 'info',
      width: 200,
      editable: true
    }
  ];
  let [data,setData]=useState({loading:true});
  let [games,setGames]=useState([]);
  let [secret,setSecret]=useState("");
  function changeSecret(e){
    setSecret(e.target.value);
    localStorage.setItem("secret",secret);
  }
  /**
   * 确定游戏
   */
  function setDataSource(games,arg){
    games=games.filter(g=>(g.name||g.andriod||g.pc||g.info)!=="");
    setGames(games);
  }
   useEffect(()=>{
    (async()=>{
      let {games}=await axios.get("/");
      games=games.map(g=>{
        if(g.id){
       g.id=nanoid();
        }
        return g
      })
      setData({loading:false});
      setDataSource(games);
    })();
},[]);
function submit(){
  let subgames=[...games]
  subgames=subgames.filter(g=>(g.name||g.andriod||g.pc||g.info)!=="请编辑游戏");
  axios.post("/",{data:{
    secret:localStorage.getItem("secret")||"",
    diff:subgames
  }})
}
  return (
    <div className={styles.page}>
            <Head>
      <title>{"游戏合集，你喜欢的游戏都在这里"}</title>
        <meta property="edit:title" content={games.map(g=>g.name).join(" ")} key={games.map(g=>g.name).join(" ")} />
        <link rel="icon" type="image/x-icon" href={ico.src}></link>
      </Head>
     
      <Header title={"编辑游戏"}>
      <Button type="primary" onClick={submit}>提交</Button>
      <Input.Password placeholder="请输入密钥" className={styles.secret} defaultValue={secret}  onChange={changeSecret}/>
      </Header>
      {/* <div className={styles.edit}>
    {data.loading?  
     <Skeleton  paragraph={{ rows: 8 }} />
     : <RowEditorTable 
     columns={columns}
     rowKey="id"
     scroll={{
       x: 960,
     }}
     value={games}
     onChange={setDataSource}
     recordCreatorProps={{
       newRecordType: 'dataSource',
       record: () => ({
        id:nanoid(),
          name:"",
          andriod:"",
          pc:"",
          info:"请编辑游戏"
       }),
     }}
   />}
    </div> */}
    </div>
  );
}
