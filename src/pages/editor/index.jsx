import styles from "./editor.module.css";
// import { Button} from "antd"
import Head from "next/head";
import Header from "@/components/Header";
import axios from "../../request/index";
import { useEffect, useState } from "react";
import ico from "../../public/favicon.ico"
import { Gamepad } from "@/hooks/Adapter";
import { Input,Button,Form } from 'antd';
import { message } from "antd";
export default function Edit() {

async function submit(data){
const res=await axios.post("/addGame",JSON.stringify({game:Gamepad(data)}));
  message.info(res.message);
}
  return (
    <div className={styles.page}>
            <Head>
      <title>{"编辑游戏"}</title>
        <link rel="icon" type="image/x-icon" href={ico.src}></link>
      </Head>
      <Header title={"编辑游戏"}>
      </Header>
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    autoComplete="off"
    onFinish={submit}
    // onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="游戏名"
      name="name"
      rules={[{ required: true, message: '请输入游戏名' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="安卓链接"
      name="android"
      rules={[{ message: '请输入游戏链接！' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="pc链接"
      name="pc"
      rules={[{ message: '请输入游戏链接！' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="游戏备注"
      name="info"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="游戏描述"
      name="desc"
    >
      <Input />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
    </div>
  );
}
