import React from "react";
import Header from "@/components/Header";
import styles from "./gameDocs.module.css";
import Meta from "../../components/Meta";
import { List, Image } from "antd";
import docs from "./docs";
export default function index() {
  return (
    <div className={styles.docs}>
      <Meta title={"教程页，简介"} />
      <Header title={"游戏前置教程"}>
        <p style={{ padding: "3px" }}></p>
      </Header>
      <div className={styles.content}>
        <p>大家好，这其实是一篇知识普及如果你是大佬完全可以不用看。</p>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={docs}
          renderItem={(item, idx) => (
            <List.Item
              key={item.question}
              extra={
                <Image width={272} alt="logo" src={item.img.src} />
              }
            >
              <List.Item.Meta
                title={`${idx + 1}. ${item.question}`}
                description={item.description}
              />
              {item.answer}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
