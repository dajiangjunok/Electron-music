import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  margin-top:40px;
  height:40px;
  box-sizing:border-box;
  /* border:1px solid #ccc;
  border-top:0px solid #ccc;
  border-bottom:0px solid #ccc; */
  box-sizing:border-box;

  .bar-item{
    float:left;
    width:112px;
    height:40px;
    line-height:40px;
    text-align:center;
    border-top:2px solid #ccc;
    border-bottom:1px solid #ccc;
    font-size:14px;
    cursor: pointer;

    &:first-child{
    border-left:1px solid #ccc;
    }
    &:last-child{
    border-right:1px solid #ccc;
    }
    &:hover{
      border-top:2px solid red;
    }
  }

  li.active{
    border-bottom:0px solid #ccc;
    border-right:1px solid #ccc;
    border-left:1px solid #ccc;
    border-top:2px solid red;
  }
`