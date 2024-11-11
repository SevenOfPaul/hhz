import styles from "./findSouce.module.scss";
import Header from "@/components/Header";
import axios from "../../request/index";
import Meta from "@/components/Meta";
import { Input,Button,Form,Typography  } from 'antd';
import { useRouter } from 'next/navigation'
import { EditFilled } from "@ant-design/icons/lib";
import {Gamepad} from "@/hooks/Adapter"
import { message } from "antd";
const { TextArea } = Input;
const { Title, Paragraph, Text, Link } = Typography;
export default function findSouce() {
  const router = useRouter()
async function submit(data){
  
const res=await axios.post("/postSouce",JSON.stringify({game:Gamepad(data,["name","desc"])}));
  if(res.success){
      message.info(res.message+"即将回到首页");
      setTimeout(()=>{
        router.push("/")
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
        <Link href="./souceTable">查看所有“求资源”提交记录</Link>
      </Header>
      <Typography>
          <Title><EditFilled/>须知 <span styles={{color:"red"}}>暂未开放</span></Title>
           <Paragraph>
             <Text strong>
           免费的资源查找不具有时效性，如果实在着急可以在咸鱼付费下单，找不到免费退款！
      </Text>
    </Paragraph>
               <Link href="https://m.tb.cn/h.TZAp2nj?tk=lM9P3JOOx3o" targe="_blank">
         点击进入咸鱼！
       </Link>
      </Typography>

      <Form
    name="basic"
    labelCol={{ span:3 }}
    wrapperCol={{ span: 20 }}
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
        <TextArea rows={4} placeholder="游戏描述" maxLength={2000} />
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
