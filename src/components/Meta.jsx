import React from 'react'
import Head from "next/head";
import ico from "../public/favicon.ico"
export default function Meta(props) {
  return (
    <>       <Head>
    <title>{props.title}</title>
    {props.children}
    <meta name="google-adsense-account" content="ca-pub-6085331651697044"/>
     <link rel="icon" type="image/x-icon" href={ico.src}></link>
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6085331651697044"
  crossorigin="anonymous"></script>
   </Head></>
  )
}
