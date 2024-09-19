
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
  axios.defaults.headers={
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
'Referer': 'https://www.google.com',
  };
axios.defaults.baseURL="https://api.blik.wang/"
axios.interceptors.response.use((response)=>{
    console.log(response)
   if(response.status=="200"){
     return response.data;
   }else{
    info();
   }
});
export default axios;