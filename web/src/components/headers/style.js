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
    top:0px;
    left:0px;
    .yu-enter {
        width: 230px;
        transition: all .3s ease-out;
    }
    .yu-enter-active {
        width: 300px;    
    }
    .yu-exit {
        transition: all .3s ease-out;
    }
    .yu-exit-active {
        width: 230px;
    }
    &.searchWarp{
        .searchIcon{
            position: absolute;
            right:0px;
            bottom:8px;
            width:40px;
            height:40px;
            line-height: 40px;
            text-align: center;
            border-radius: 20px;
            font-weight: 400!important;
            color: #969696;
           &.focuesd{
               background-color:#969696;
               color:#fff;
           }
        }
    }
`

export const SearchItem = styled.input.attrs({
    placeholder: "搜索"
})`
    width:230px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    padding :0 35px 0 20px;
    box-sizing: border-box;
    background: #eee;
    font-size: 14px;
    margin-left: 20px;
    color: #777;
    outline:none;
    &.searchWpfocuesd {
        width: 300px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`;
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 12px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .3s ease-in;
		transform-origin: center center;
    }
`;
export const SearchInfoItem = styled.a`
    float: left;
    display: block;
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #333;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

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