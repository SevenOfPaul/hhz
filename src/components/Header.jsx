import React from 'react'
import {Button,Modal} from "antd"
import styles from "./Header.module.scss"
import img from "../public/gzh.jpg"
export default function Header(props) {
    const info = (title,content) => {
        Modal.info({
          title,
          content: (
            <div>
              <p>{content}</p>
            </div>
          ),
          onOk() {},
        });
      };
  return (
    <div className={styles.header}>
    <h1>{props.title}</h1>
    <div className={styles.content}>
    {props.children}  
    <div>
     <Button type="primary"  className={styles.btn} onClick={()=>info("关注博主",<img src={img.src}   width={300}
      height={300} />)}>关注博主</Button>
      <Button type="primary"  className={styles.btn}  onClick={()=>info("加入我们","q群：221666602")}>加入我们</Button>
  </div>
    </div>
    </div>
  )
}
