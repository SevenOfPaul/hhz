import React from 'react'
import Head from "next/head"
import Link from 'next/link'
import Header from '@/components/Header'
import styles from "./docs.module.css"
import ico from "../../public/favicon.ico"
import step2 from "../../public/step2.1.png"
import step3 from "../../public/step3.1.png"
import step4 from "../../public/step3.2.png"
import step5 from "../../public/step4.png"
export default function index() {
  return (
    <div className={styles.docs}>
            <Head>
      <title>{"下载页，你喜欢的游戏都在这里"}</title>
        <link rel="icon" type="image/x-icon" href={ico.src}></link>
      </Head>
      <Header title={"加速下载"}>
      <p style={{padding:'3px'}}>我这就是个转发页面，欢迎大家直接联系原作者 </p>
      <Link style={{padding:'3px'}} href="https://wwqg.lanzoub.com/i7wOX2al8jef">ari2软件下载地址 密码为6u3d</Link>
      </Header>
      <div className={styles.content}>
        <h2>步骤1 安装下载器这里使用air2进行下载，idm其实也可以但是我比较讨厌idm的捆绑</h2>
        <p>下载air2软件 安装完成进入步骤2如果不会可以参照这篇文章
            <Link href="https://www.52pojie.cn/thread-1662232-1-1.html#:~:text=Aria2%E6%98%AF%E4%B8%80%E6%AC%BE%E5%BC%80%E6%BA%90">
        [Windows] Aria2-AriaNg 1.24便携版【一键启动Aria2下载工具】  </Link></p>
        <h2>步骤2 解析百度直链</h2>
        <img src={step2.src}/>
        <p>在百度网盘本盘分享链接拷到网页中分析出<b>“快速下载链接”</b></p>
        <img src={step3.src}/>
        <img src={step4.src}/>
        <h3>步骤3在air2中新建下载 拷入<b>“快速下载链接”</b>享受快速下载</h3>
        <img src={step5.src}/>
      </div>
    </div>
  )
}
