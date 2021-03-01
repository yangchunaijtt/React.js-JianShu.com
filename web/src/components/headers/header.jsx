import React, { Component } from 'react';
import { connect } from 'react-redux'
import "./index.css";
import {
    Icon,
    Nav,
    NavItem,
    SearchWarpper,
    SearchItem,
    Addtion,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from './style.js'
import { headerCreators } from './store'
import { CSSTransition } from 'react-transition-group'

class Headers extends Component {
    getSearchInfo(focused, mouseIn) {
        const { handleMouseEnter, handleMouseLeave, handleChangeSearchInfo, searchInfo, page } = this.props;
        const searchInfoData = searchInfo.toJS();
        let searchInfoList = [];
        searchInfoData.forEach((item, index) => {
            if (
                index + 1 >= (page-1) * 10 + 1 && index + 1 <= (page-1) * 10 + 10
            ) {
                searchInfoList.push([<SearchInfoItem key={item}>{item}</SearchInfoItem>]);
            } else if (
                index + 1 > (page-1) * 10 + 10
            ) {
                return
            }
        });
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangeSearchInfo(this.spinIcon)}>
                            <i ref={(icon) => { this.spinIcon = icon }} className="spin iconfont">&#xe751;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {searchInfoList}
                    </SearchInfoList>
                </SearchInfo>
            );
        }
    };
    render() {
        const { focused, handleInputFocus, handleInputBlur, mouseIn, searchInfo } = this.props;
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
                        <SearchWarpper className='searchWarp' >
                            <CSSTransition
                                in={focused}
                                timeout={300}
                                classNames="yu"
                            >
                                <SearchItem onFocus={() => { handleInputFocus(searchInfo) }} onBlur={handleInputBlur} className={focused ? "searchWpfocuesd" : ''} />
                            </CSSTransition>
                            <i className={focused ? "iconfont searchIcon focuesd" : 'iconfont searchIcon '}>&#xe600;</i>
                            {this.getSearchInfo(focused, mouseIn)}
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

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused'),
        mouseIn: state.header.get('mouseIn'),
        searchInfo: state.header.get('searchInfo'),
        page: state.header.get('page'),
        totalPage: state.header.get('totalPage'),
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(searchInfo) {
            searchInfo.size === 0 && dispatch(headerCreators.getUserInfo());
            dispatch(headerCreators.SearchInputFocus());
        },
        handleInputBlur() {
            dispatch(headerCreators.SearchInputBlur());
        },
        handleMouseEnter() {
            dispatch(headerCreators.handleMouseEnter());
        },
        handleMouseLeave() {
            dispatch(headerCreators.handleMouseLeave());
        },
        handleChangeSearchInfo(iconRef) {
            let rotateDeg =iconRef.style.transform.replace(/[^0-9]/ig, '');
            rotateDeg = Number(rotateDeg);
            let degNum = 0;
            if (!rotateDeg) {
                degNum = 360;
            } else {
                degNum = 0;
            };
            iconRef.style.transform =`rotate(${degNum}deg)`;
            dispatch(headerCreators.handleChangeSearchInfo());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Headers);