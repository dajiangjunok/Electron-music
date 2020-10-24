import styled from 'styled-components';

export const MusicAnchorWrapper = styled.div`
    margin-top:30px;
    padding:0 20px;
    width:250px;
`

export const MusicAnchorHeader = styled.div`
    display:flex;
    justify-content:space-between;
    margin:10px 0;
    height:24px;
    border-bottom: 1px solid #ccc;

    .title{
        color:#333;
        font-weight: bold;
    }
`
export const MusicAnchorContent = styled.div`
    margin-top:20px;
    .anthor-item{
      display:flex;
      margin:10px;
      height:45px;
      cursor: pointer;

      .text{
        margin-left:10px;
      }
    }
`