import React from 'react'
import Link from 'next/link';
import Head from "next/head";
import Header from "@/components/Header";
import styles from "./download.module.css"
import Meta from "@/components/Meta";
export default function index() {
  return (
    <div className={styles.download}>
      <Meta title={"下载页，你喜欢的游戏都在这里"}/>
      <Header title={"加速下载"}>
      <p style={{padding:'3px'}}>我这就是个转发页面，欢迎大家直接联系原作者 </p>
      <Link style={{padding:'3px'}} href="../docs">教程地址</Link>
      <Link style={{padding:'3px'}} href="https://motrix.app">motrix软件下载地址</Link>
      </Header>
    
    <p>1.只能win系统电脑使用，不需要登录账号，将文件分享出来即可下载，可参考压缩包里面视频教程；</p>
    <p>2，尽量关闭360，电脑管家等杀毒软件，否则软件很容易被杀毒软件删除（win系统自带的杀毒软件和让防护也尽量关闭），你也可以将软件纳入杀毒信任也成；</p>
    <p>3，如果分享链接报错的，可以将文件保存到自己网盘再分享，多刷新几次。</p>

   <Link href="https://www.lanzoue.com/ioIzW2cas0dg">网盘高速下载器地址：</Link>
   <Link href="https://www.ixigua.com/7310526900030407205">下载视频教程：</Link>

    </div>
  )
}
