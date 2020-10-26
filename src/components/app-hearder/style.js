import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height:75px;
  background-color: #242424;

  .user-input{
    width:250px;
  }
  .password{
    margin-top:30px;
  }
  .content{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:70px;
  }

  .divider{
    height:5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display:flex;
  justify-content:space-between;

  .logo{
    display:block;
    width:176px;
    height:69px;
    background-position:0 0;
  }

.nav-item-container  {
  position: relative;
  padding:0 19px;
  height:69px;
  line-height:69px;
  font-size:14px;
  color:#cccccc;
 
  &:hover{
    background-color: #000000;
    color:#fff;
    text-decoration:none;
    cursor: pointer;
  }

  .hot-icon{
    display:inline-block;
    position:absolute;
    right:-15px;
    top:16px;
    width:30px;
    height:20px;
    background: url(${require("../../assets/img/sprite_01.png")}) no-repeat -190px 0px;
  }
}

.nav-active{
  background-color: #000000;
  color:#fff;
  text-decoration:none;
  cursor: pointer;

  .select-icon{
    display:inline-block;
    position:absolute;
    z-index:9;
    left:50%;
    bottom:0px;
    transform:translateX(-50%);
    width:30px;
    height:10px;
    background: url(${require("../../assets/img/sprite_01.png")}) no-repeat -218px 4px;
  }
}
  .nav-bar{
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
`

export const HeaderRight = styled.div`
  position: relative;
  .ant-input-affix-wrapper{
    width: 80%;
    border-radius: 20px;
    border-color: #fff; 
    &:hover{
    border-color: #fff; 
    }
  }

   
  .search-input{
    width: 158px;
    height: 32px;
    input{
      &::placeholder{
      font-size:12px;
      }
    }
  }

  .search-button{
    margin:0 20px;
    font-size:12px;
    border-radius:20px;
    border: 1px solid #4F4F4F;
    background-color: #242424;
    color:#ccc;
    &:hover{
      border: 1px solid #cccccc;
      color:#fff;
    }
  }

  .search-login{
    font-size:12px;
    color:#666;
    line-height:12px;
  }

  .user-login{
    position:absolute;
    right:-50px;
    top:0px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    color:#e0e0e0;
    cursor: pointer;
  }

  .hearder-logo{
    width:30px;
    width:30px;
    border-radius:50%;
  }

  .closeWindow{
    position:absolute;
    right:-80px;
    top:-8px;
    .icon-guanbi{
      font-size:30px;
      color:#eee;

      &:hover{
        color:#fff;
      }
    }
    cursor: pointer;
  }
`