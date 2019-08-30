import React from 'react'
import {Row,Col } from 'antd';
import '../../style/header.less'
import {getDateTime} from '../../utils/dateTime'
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            dateTime: getDateTime(new Date().getTime())
        }
    }
    
    componentDidMount() {
        this.setState({
            userName: 'admin'
        })
        setInterval(()=>{
            let data = getDateTime(new Date().getTime())
            this.setState({
                dateTime: data
            })
        }, 1000)
    }
    render() {
        return (
            <div className="header-box">
                <Row>
                    <Col span={24} className="user-info">
                        <span>欢迎， {this.state.userName}</span>
                        <span>退出</span>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="title">
                        <Col className="title-info" span={2}>
                            <span>首页</span>
                        </Col>
                        <Col className="header-right" span={22}>
                            <span>{this.state.dateTime}</span>
                            <span>多云转晴</span>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
    
}