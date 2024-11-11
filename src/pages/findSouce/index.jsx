import styles from "./findSouce.module.scss";
import Head from "next/head";
import Header from "@/components/Header";
import axios from "../../request/index";
import Meta from "@/components/Meta";
import { Input,Button,Form,Typography  } from 'antd';
import { redirect } from 'next/navigation'
import { EditFilled } from "@ant-design/icons/lib";
import { message } from "antd";
const { TextArea } = Input;
const { Title, Paragraph, Text, Link } = Typography;
export default function findSouce() {

async function submit(data){
// const res=await axios.post("/addGame",JSON.stringify({game:Gamepad(data)}));
  message.info(res.message);
  if(res.success){
      message.info(res.message);
      setTimeout(()=>{
            redirect("./")
      },1000)
  }else{
        message.error(res.message);
  }
  for(let key in data){
    data[key]="";
  }
  
}
  return (
    <div className={styles.page}>
     <Meta title={"求资源"}/>
      <Header title={"求资源板块"}>
      </Header>
      <Typography>
          <Title><EditFilled/>须知</Title>
           <Paragraph>
             <Text strong>
           免费的资源查找不具有时效性，如果实在着急可以在咸鱼付费下单，找不到免费退款！
      </Text>
    </Paragraph>
               <Link to="https://m.tb.cn/h.TZAp2nj?tk=lM9P3JOOx3o">
         点击进入咸鱼！
       </Link>
      </Typography>

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
      label="游戏描述"
      name="desc"
      rules={[{required: true, message: '把你想要的游戏的简介复制粘贴下来，帮助博主确定游戏！' }]}
    >
        <TextArea rows={4} placeholder="游戏描述" maxLength={4} />
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
