import React from 'react'
import Link from 'next/link';
import Head from "next/head";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState,startTransition } from "react";
import Header from "@/components/Header";
import styles from "./download.module.css"
import ico from "../../public/favicon.ico"
export default function index() {
  return (
    <div className={styles.download}>
                    <Head>
      <title>{"下载页，你喜欢的游戏都在这里"}</title>
        <link rel="icon" type="image/x-icon" href={ico.src}></link>
      </Head>
      <Header title={"加速下载"}>
      <p style={{padding:'3px'}}>我这就是个转发页面，欢迎大家直接联系原作者 </p>
      <Link style={{padding:'3px'}} href="../docs">教程地址</Link>
      <Link style={{padding:'3px'}} href="https://wwqg.lanzoub.com/i7wOX2al8jef">软件下载地址 密码为63ud</Link>
      </Header>
    
    <iframe className={styles.iframe} src={"https://pan.gt288.top"}></iframe>
    </div>
  )
}
