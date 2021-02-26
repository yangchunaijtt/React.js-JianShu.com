import styled from 'styled-components'
import jianshu from "../../static/image/jiansu.png"

export const Icon = styled.a.attrs({
    href: '/'
})`
    float: left;
    width:100px;
    height: 56px;
    padding: 0;
    background:url(${jianshu});
    background-size: contain;
    background-repeat:no-repeat;
`

export const Nav = styled.div`
    @media screen and (max-width: 3600px){
        min-width:945px;
    }
    @media screen and (max-width: 2000px){
        min-width:945px;
    }
    @media screen and (max-width: 1400px){
        min-width:605px;
    }
    @media screen and (max-width: 768px){
        min-width:500px;
    }
    height:100%;
    box-sizeing:border-box;
    float: left;
    &:after{
        clear: both;
    }
`

export const NavItem = styled.span`
    float:left;
    font-size: 17px;
    padding:0 15px;
    color: #969696;
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }
    &.active{
        color: #ea6f5a;
    }
    &.dowload{
        color:#333;
    }
`

export const SearchWarpper = styled.div`
    float:left;
    position: relative;
    margin:0 15px;
    box-sizing: border-box;
`

export const SearchItem = styled.input.attrs({
    placeholder: "搜索"
})`
    border-radius:40px;
    width: 240px;
    padding: 0 40px 0 20px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    &:focus{
        outline:none;
    }
`

export const Addtion = styled.div`
    float:right;
`

export const Button = styled.button`
    border-radius: 20px;
    line-height: 24px;
    font-size: 15px;
    &:click{
        outline:none;
    }
    &:focus{
        outline:none;
    }
    &.signIn{
        background-color:red;
        float: left;
        width: 80px;
        height: 38px;
        margin: 9px 5px 0 15px;
        border: 1px solid rgba(236,97,73,.7);
        color: #ea6f5a;
        background-color: transparent;
    }
    &.login{
        width: 100px;
        height: 40px;
        float: left;
        margin: 8px 12px 0;
        color: #fff;
        border:none;
        background-color: #ea6f5a;
    }
`