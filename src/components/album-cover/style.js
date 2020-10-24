import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  .album-image {
    position: relative;
    width: ${props => props.width};
    height: ${props => props.size};
    overflow: hidden;
    margin-top: 15px;

    .icon-bofang{
      position:absolute;
      left:45%;
      top:50%;
      transform:translate(-50%,-50%);
      color:rgba(255,255,255,0.6); 
      font-size:30px;
      cursor: pointer;

      &:hover{
        color:rgba(255,255,255,0.9); 
      }
    }

    img {
      width: ${props => props.size};
      height: ${props => props.size};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`