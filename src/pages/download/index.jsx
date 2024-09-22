import React from 'react'
import Head from "next/head";
import { useEffect, useState,startTransition } from "react";
import Header from "@/components/Header";
import styles from "./download.module.css"
<<<<<<< HEAD
import { Input,message,List,Form,Button  } from 'antd';
=======
import { Modal,Input,message,List  } from 'antd';
>>>>>>> parent of 75e1cdd (拆分逻辑)
import ico from "../../public/favicon.ico"
import axios from '../../request';
export default function index() {
  let codeInput="";
  const error = () => {
    message.open({
      type: 'error',
      content: '验证码错误，请关注微信公众号《游戏资讯官》获取',
      style: {
        zIndex: '101',
      },
    });
  };

  useEffect(()=>{
<<<<<<< HEAD
   init();
  try{
=======
>>>>>>> parent of 75e1cdd (拆分逻辑)
    (async()=>{
   const code=(await axios.get("/code")).code;
   function ok(codeInput,code){
       if(code==codeInput){
        return Promise.resolve()
       }else{
        startTransition(()=>{
          error();
        })
        return Promise.reject()
       }
   }
   const config={
    title: '验证码已过期，请输入验证码',
    mask:true,
    keyboard:false,
    zIndex:100,
    content: (
        <Input onChange={(e)=>{
          codeInput=e.target.value;
          localStorage.setItem("code",codeInput);
        }}/>
    ),
    onOk:()=>ok(codeInput,code),
    onCancel:()=>{}
  }
  console.log("error")
   if((localStorage.getItem("code")||"")!==code){
    Modal.info(config);
   }
  })();
},[])
  return (
    <div className={styles.download}>
                    <Head>
      <title>{"下载页，你喜欢的游戏都在这里"}</title>
        <link rel="icon" type="image/x-icon" href={ico.src}></link>
      </Head>
      <Header title={"加速下载"}>
      {/* <Button type="primary" onClick={submit}>提交</Button> */}
      </Header>
      <div className={styles.content}>
      <List
    itemLayout="horizontal"
    dataSource={["你哈","你哈你哈"]}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta onClick={async()=>await navigator.clipboard.writeText(item)}
          title={<p style={{height:"12px",color:"black"}}>{item}</p>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
      </div>
    </div>
  )
}
