import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: relative;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .content{
    display:flex;
    height:115px;
    color:#666;
  }
`

export const FooterLeft = styled.div`
  flex:6;
  .pading-right{
    padding-right:20px;
  }
  .rule{
    display:flex;
    padding-top:15px;
    
    & a{
      padding:0 10px;
      border-right:1px solid #c2c2c2;
      color:#999999;
    }
    & div:first-child a{
      padding-left:0!important;
    }
  }
  .police-logo{
    display:inline-block;
    width:15px;
    height:15px;
    background: url(${require("../../assets/img/police.png")}) no-repeat 0 0;
    background-size: contain;
  }
`

export const FooterRight = styled.div`
  flex:5;
  display:flex;
  justify-content:space-evenly;
   a{
     width:100px;
     text-align:center;
   }
   a:hover{
    text-decoration:none;
  }
  .background{
    margin:20px auto 0 auto;
    width:45px;
    height:45px;
    background:url(${require("../../assets/img/sprite_footer_02.png")}) no-repeat 0 0;
    background-size: 100px;
  }
  .background0{
   background-position:-56px -95px;
  }
  .background1{
   background-position:0px 0px;
  }
  .background2{
   background-position:-58px 0px;
  }
  .background3{
   background-position:-58px -48px;
  }
  p{
    color:#999999;
    text-decoration:none;
    font-weight:bold;
  }
  
`