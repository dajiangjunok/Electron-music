import styled from "styled-components";

export const UserLoginWrapper = styled.div`
    width:248px;
    height:126px;
    background-position: 0 0;
    
    .message-tag{
        width: 205px;
        margin: 0 auto;
        padding: 16px 0;
        line-height: 22px;
        color:#666;
    }

    .btn{
        display: block;
        margin:0 auto;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
        background-position: 0px -195px;
        text-decoration:none;

        &:hover{
        background-position: -110px -195px
        }
    }
     
`