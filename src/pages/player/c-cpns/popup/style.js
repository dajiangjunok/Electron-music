import styled from 'styled-components';

export const PopupWrapper = styled.div`
  display:flex;
  position:fixed;
  left: 50%;
  bottom: 47px;
  transform:translateX(-50%);
  height:300px;
  background-color:#000;
  color: #ccc;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow:hidden;
`

export const PopupLeft = styled.div`
  flex:6;
  background-color: #222;

  .popup-left-hearder{
    height:40px;
    background-color: #111;

    .title{
    position: absolute;
    left: 25px;
    top: 0;
    height: 39px;
    line-height: 39px;
    font-size: 14px;
    color:#e2e2e2;
    font-weight:700;
    }
    .collect{
      position: absolute;
      left: 390px;
      top: 12px;
      height: 15px;
      line-height: 15px;
      cursor: pointer;

      &:hover{
        color:#fff;
      }
    }
    .delete{
      position: absolute;
      left: 490px;
      top: 12px;
      height: 15px;
      line-height: 15px;
      cursor: pointer;

      &:hover{
        color:#fff;
      }
    }
    .icon-yinpinwenjian, .icon-shanchu{
      margin-right:5px;
    }
  }
 
  .popup-left-content{
    border-right:5px solid #000;
      height:260px;
      overflow:auto;

    .song-list{
      display:flex;
      color:#ccc;
      height:30px;
      line-height:30px;
      cursor: pointer;

      .iconfont{
        display:none;
        margin:0 4px;
        cursor: pointer;
      }

      &:hover{
        background-color:#000;
        color:#fff;

        .iconfont{
          display:inline-block;;
          color:#ccc;
        }
      }

      .music-name{
        position:relative;
        flex:6;
        padding-left:30px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        .play{
            display:block;  
            position:absolute;
            left:10px;
            top:8px;
            width:20px;
            height:20px;
            background-position: -180px 0px;
        }
        .hidden-play{
          display:none;  
        }
      }
      .al-name{
        position:relative;
        flex:6;
        padding-left:100px;

        .icon{
          position:absolute;
          left:2px;
          top:0;

          .iconfont{
            &:hover{
              color:#fff;
            }
          }
        }
      }
      .dt{
        flex:2;
      }
    }
  }
`

export const PopupRight = styled.div`
  position:relative;
  flex:5;
  background-color: #202020;
  
  .popup-right-hearder{
    position:relative;
    height:40px;
    line-height:40px;
    background-color: #101010;

    .icon-guandiao{
      position:absolute;
      top:-4px;
      right:10px;
      color:#ccc;
      font-size:12px;
      cursor: pointer;

      &:hover{
        color:#fff;
      }
    }
    .title{
      color:#fff;
      font-size: 14px;
      text-align:center;
    }
  }

  .listlyric{
    position: absolute;
    right: 40px;
    top: 40px;
    z-index: 4;
    margin: 21px 0 20px 0;
    height: 219px;
    width: 354px;
    overflow: hidden;
    transition: all 0.7s ease;

    .j-flag{
      color: #989898;
      font-size:12px;
      text-align: center;
      line-height: 32px;
      height: auto !important;
      min-height: 32px;
      transition: color 0.7s linear;
    }

    .current-lyc{
      font-size:14px;
      color:#fff;
    }
  }

`