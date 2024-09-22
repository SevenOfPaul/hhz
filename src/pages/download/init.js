import axios from '../../request';
import {Input,Modal,message } from "antd";
import {startTransition } from "react";
const error = () => {
    message.open({
      type: 'error',
      content: '验证码错误，请关注微信公众号《游戏资讯官》获取',
      style: {
        zIndex: '101',
      },
    });
  };
export default async function init(){
    let codeInput="";
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
    if((localStorage.getItem("code")||"")!==code){
     Modal.info(config);
    }
  }