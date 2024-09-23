import React from 'react'
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
      {/* <Button type="primary" onClick={submit}>提交</Button> */}
      </Header>
    
    <iframe className={styles.iframe} src="https://pan88.fun66.cn/user"></iframe>
    </div>
  )
}
