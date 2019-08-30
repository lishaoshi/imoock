import React from 'react'
import './index.less'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  render() {
    return (
      <div className='home-box'>
        <span>欢迎来到学习React系统</span>
      </div>
    );
  }
  
}