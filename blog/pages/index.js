import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import { Row, Col, List, Icon } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/list.css'



const Home = (props) => {

  const [mylist, setMylist] = useState(props.data);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>

            <List
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">
                    <Link href={{pathname: '/detailed', query: {id: item.id}}}>
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <span><Icon type="calendar" /> {item.date}</span>
                    <span><Icon type="folder" /> {item.type_name}</span>
                    <span><Icon type="fire" /> {item.visit_num}人</span>
                  </div>
                  <div className="list-context"> {item.introduce}</div>
                </List.Item>
              )}
            />

          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />

    </>
  )

}

Home.getInitialProps = async () => {
  const promise = new Promise((resolve, reject) => {
    axios('http://127.0.0.1:7001/default/article/list').then(res => {
      resolve(res.data)
    })
  })
  return await promise
}

export default Home
