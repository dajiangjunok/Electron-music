import styled from "styled-components";

export const YJDiscoverWrapper = styled.div`
 
`

export const TopMenu = styled.div`
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;

    .top-content{
      display:flex;
      padding-left:122px;
      height:100%;
      .link{
        display:inline-block;
        position:relative;
        padding:0 10px;
        margin:7px 17px 0;
        color:#fff;
        border-radius:10px;
        text-decoration:none; 
        font-size:12px;

        &.active{
          background-color: #9B0909;
        }
        &:hover{
          background-color: #9B0909;
        }
        .iconr{
          position:absolute;
          right:-2px;
          top:-5px;
          font-size:10px;
          opacity:.6;
          color:#fff;
        }
      }
    }
`