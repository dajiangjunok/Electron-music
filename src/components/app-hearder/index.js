import React, { memo, useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";

import { Input, Button, Modal, Menu, Dropdown } from 'antd';
import { SearchOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { changeSearchSongsAction } from '../../pages/search/store/actioncreators';
import { changeUserInfoAction, layoutAction } from './store/actionCreators'

import { NavLink } from 'react-router-dom';
import { headerLinks } from '@/common/local-data';
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';
import { useDispatch, useSelector } from 'react-redux';

export default memo(function YJAppHeader () {
  const [searchText, setSearchText] = useState('');
  const [flag, setflag] = useState(false);
  const [visible, setvisible] = useState(false)
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')

  const {
    user
  } = useSelector(state => ({
    user: state.user
  }))

  const searchChange = (e) => {
    const value = e.currentTarget.value;
    setSearchText(value);
  }
  const dispatch = useDispatch();
  const searchSubmit = () => {
    dispatch(changeSearchSongsAction(searchText, 10, 1));
    setflag(true);
  }

  // 登录model
  const phoneChange = (e) => {
    setphone(e.currentTarget.value)
  }
  const passwordChange = (e) => {
    setpassword(e.currentTarget.value)
  }
  const showModal = () => {
    setvisible(true)
  }
  const handleOk = () => {
    dispatch(changeUserInfoAction({
      phone: phone,
      password: password
    }))
    setvisible(false)
  }
  const handleCancel = () => {
    setvisible(false)
  }
  // dropdown
  const menu = (
    <Menu>
      <Menu.Item>
        <span>{user.userInfo.nickname}</span>
      </Menu.Item>
      <Menu.Item danger onClick={e => layout()}>退出</Menu.Item>
    </Menu>
  );

  const layout = () => {
    // const uid = user.userInfo.userId
    dispatch(layoutAction())
  }

  // HOOKS
  useEffect(() => {
    return () => {
      setflag(false);
    }
  }, [flag])

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft >
          <NavLink to="/">
            <span href="#/" className="logo sprite_01"> </span>
          </NavLink>
          <div className="nav-bar">
            {
              headerLinks.map((item, index) => {
                if (index < 3) {
                  return <NavLink activeClassName="nav-active" to={item.link} className="nav-item-container" key={item.title}>
                    {item.title}
                    <i className="select-icon"></i>
                  </NavLink>
                } else {
                  return <a href={item.link} target="_blank"
                    rel="noopener noreferrer" className="nav-item-container" key={item.title}>{item.title}
                    {
                      index === 5 && <i className="hot-icon"></i>
                    }
                    <i className="select-icon"></i>
                  </a>
                }
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight >
          <Input className="search-input" value={searchText} placeholder="音乐/视频/电台/用户" onPressEnter={searchSubmit} prefix={<SearchOutlined />}
            onChange={e => searchChange(e)} />
          <Button className="search-button" >创作者中心</Button>
          {
            user.isLogin ? (
              <Dropdown overlay={menu} arrow={true}>
                <div className="user-login">
                  <img className="hearder-logo" src={user.userInfo.avatarUrl} alt="" />
                  {/* <span>{user.userInfo.nickname}</span> */}
                </div>
              </Dropdown>
            ) : <a href="#/" className="search-login" onClick={showModal}>登录</a>
          }

        </HeaderRight>
      </div>
      <div className="divider"></div>
      {
        flag && <Redirect to={{ pathname: "/search", state: { search: searchText } }} />
      }

      <Modal
        title="登录"
        visible={visible}
        maskClosable={false}
        width={300}
        onOk={handleOk}
        onCancel={handleCancel}
        getContainer={false}>
        <Input onChange={e => phoneChange(e)} value={phone} className="user-input phone" placeholder="请输入手机号" prefix={<UserOutlined />} />
        <Input onChange={e => passwordChange(e)} value={password} className="user-input password" placeholder="请输入密码" type="password" prefix={<LockOutlined />} />
      </Modal>
    </HeaderWrapper >

  )
})
