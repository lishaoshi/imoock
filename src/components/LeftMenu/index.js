import React from 'react'
import './index.less'
import  { Menu } from 'antd'
import MenuList from '../../config/menuConfig.js'
import {NavLink} from 'react-router-dom'
const { SubMenu } = Menu;


export default class LeftMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList: []
        }
    }

    filterMenuList= (data)=> {
        return data.map((item, index)=>{
            if(item.children) {
                return <SubMenu title={item.title} key={`sub${index}`}>
                    {this.filterMenuList(item.children)}
                </SubMenu>
            } 
            return  <Menu.Item key={item.key}><NavLink to={item.key}>{item.title}</NavLink></Menu.Item>
        })
    }
    componentDidMount() {
        this.setState({
            menuList: MenuList
        })
    }
    render() {
        // console.log(MenuList)
        return (
            <div className="left">
                <div className="logo-box">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h3>react项目</h3>
                </div>
                <Menu
                theme="dark">
                    {this.filterMenuList(this.state.menuList)}
                </Menu>
            </div>
        )
    }
}