import styled from 'styled-components';

export const SearchWrapper = styled.div`
    padding:40px;
    background-color: #fff;
    border-left:1px solid #d3d3d3;
    border-right:1px solid #d3d3d3;
    
    .music-name{
      /* position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%); */
      display:flex;
      font-size:20px;
      cursor: pointer;

      span{
        margin-left:70px;
        font-size:12px;
      }
    }
`

export const SearchHeader = styled.div`
  text-align:center;
  .search-input{
    width: 420px;
    height: 40px;
    border-radius:4px;
  }
`

export const SearchContent = styled.div`
.ant-table table{
  font-size:12px;
}
`