import axios from "axios";
import {  Modal } from 'antd';
const info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>数据获取失败请联系管理员</p>
        </div>
      ),
      onOk() {},
    });
  };
// axios.defaults.baseURL="https://h-bw3.pages.dev"
axios.interceptors.response.use((response)=>{
   if(response.status=="200"){
     return response.data;
   }else{
    info();
   }
});
export default axios;