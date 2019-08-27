import React, { Fragment } from 'react';
import './style.less'
import {Row,Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import LeftMenu from './components/LeftMenu'
import './app.less'

function App() {
  return (
    <Fragment>
      <Row className="app">
        <Col className="leftNav" span={3}>
          <LeftMenu></LeftMenu>
        </Col>
        <Col className="right" span={21}>
          <Header></Header>
          <div>content</div>
          <Footer></Footer>
        </Col>
      </Row>
    </Fragment>
  );
}

export default App;
