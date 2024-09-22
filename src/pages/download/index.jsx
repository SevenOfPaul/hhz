import React from 'react'
import Head from "next/head";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import styles from "./download.module.css"
import { Input,List,Form,Button  } from 'antd';
import ico from "../../public/favicon.ico"
// import parseQuery from './parseQuery';
import init from "./init"
export default function index() {
  const searchParams = useSearchParams()
  const url = searchParams.get('url')
  let initValue={};
  let [gameUrl,setGameUrl]=useState([]);


  useEffect(()=>{
    if(url){
      init();
    }
  try{
    (async()=>{
      // let parseResult=await parseQuery(url);
      //  initValue.url=parseResult.url;
      //  initValue.pwd=parseResult.pwd;
      //  initValue.surl=parseResult.surl;
      //  console.log(initValue)
    })()
  }catch(e){
    
  }
},[url])
console.log(initValue)
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  return (
    <div className={styles.download}>
                    <Head>
      <title>{"下载页，你喜欢的游戏都在这里"}</title>
        <link rel="icon" type="image/x-icon" href={ico.src}></link>
      </Head>
      <Header title={"加速下载"}>
      {/* <Button type="primary" onClick={submit}>提交</Button> */}
      </Header>
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={initValue}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="链接"
      name="url"
      rules={[{ required: true, message: '请输入链接!' }]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label="提取码"
      name="pwd"
      rules={[{ required: true, message: '提取码!' }]}
    >
      <Input/>
    </Form.Item>
    <Form.Item
    style={{display:"none"}}
      label="surl"
      name="surl"
      rules={[{ required: true, message: '解析码!' }]}
    >
      <Input/>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
      <div className={styles.content}>
      {gameUrl.length? <List
    itemLayout="horizontal"
    dataSource={gameUrl}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta onClick={async()=>await navigator.clipboard.writeText(item)}
          title={<p style={{height:"12px",color:"black"}}>{item.url}</p>}
          description={item.parseUrl}
        />
      </List.Item>
    )}
  />:<></>}
      </div>
    </div>
  )
}
