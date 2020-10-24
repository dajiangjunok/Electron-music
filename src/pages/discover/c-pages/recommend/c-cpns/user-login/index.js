import React, { memo, useState } from 'react';

import { UserLoginWrapper } from './style';

export default memo(function YJUserLogin() {

// const msg = '登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机'
const [msg] = useState('登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机')

    return (
        <UserLoginWrapper className="sprite_02">
            <p className="message-tag">{msg}</p>
            <a className="btn sprite_02" href="#/" target="_blank" rel="noopener noreferrer">用户登录</a>
        </UserLoginWrapper>
    )
})
