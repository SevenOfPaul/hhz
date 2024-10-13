import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import styles from "./docs.module.css"
import Meta from "../../components/Meta"
import step2 from "../../public/step2.1.png"
import step3 from "../../public/step3.1.png"
import step4 from "../../public/step3.2.png"
import step5 from "../../public/step4.1.png"

export default function index() {
  return (
    <div className={styles.docs}>
      <Meta title={"下载页，你喜欢的游戏都在这里"} />
      <Header title={"加速下载"}>
      <p style={{padding:'3px'}}>我这就是个转发页面，欢迎大家直接联系原作者 </p>
      <Link style={{padding:'3px'}} href="../download">返回下载页</Link>
      <Link style={{padding:'3px'}} href="https://motrix.app">motrix软件下载地址</Link>
      </Header>
      <div className={styles.content}>
        <h2>步骤1 安装下载器这里使用motrix进行下载，idm其实也可以但是我比较讨厌idm的捆绑</h2>
        <p>下载motrix软件 安装完成进入步骤2如果不会可以参照这篇文章
            <Link href="https://zhuanlan.zhihu.com/p/359680960">
            全能型下载神器 | Motrix  </Link></p>
        <h2>步骤1 安装motrix</h2>
        <img src={step2.src}/>
        <p>在百度网盘本盘分享链接拷到网页中分析出<b>“快速下载链接”</b></p>
        <img src={step3.src}/>
        <p>点击获取刷新列表等下面出现想要的文件后选择批量解析</p>
        <img src={step4.src}/>
        <h3>步骤3启动motrix。<p style={{color:"red",fontWeight:20,fontSize:'24px'}}>注意第一次下载要在设置里设置下载位置和端口（端口设置为16800）</p></h3>
        <img src={step5.src}/>
        <h3>步骤4在motrix中新建下载 拷入<b>“快速下载链接”</b>享受快速下载</h3>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  )
}
