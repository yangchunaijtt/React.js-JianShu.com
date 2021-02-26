import React, { Component } from 'react';
import "./index.css";
import {
    Icon,
    Nav,
    NavItem,
    SearchWarpper,
    SearchItem,
    Addtion,
    Button
} from './style.js'

class Headers extends Component {
    render() {
        return (
            <div className='header'>
                <div className="width-limit">
                    <Icon />
                    <Nav>
                        <NavItem className='left active'>
                            首页
                        </NavItem>
                        <NavItem className='left dowload' >
                            下载APP
                        </NavItem>
                        <SearchWarpper>
                            <SearchItem />
                            <i className="iconfont searchIcon">&#xe600;</i>
                        </SearchWarpper>
                        <NavItem className='right' >
                            登录
                        </NavItem>
                        <NavItem className='right'>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                    </Nav>
                    <Addtion>
                        <Button className='signIn'>注册</Button>
                        <Button className='login'>
                            <i className="iconfont">&#xe63d;</i>
                            登录
                        </Button>
                    </Addtion>
                </div>
            </div>
        )
    }
}

export default Headers;