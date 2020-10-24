import React, { memo } from 'react';

import {
  footerLinks,
  footerImages
} from '../../common/local-data'
import { FooterWrapper, FooterLeft, FooterRight } from './style';

export default memo(function YJAppFooter () {
  return (
    <FooterWrapper >
      <div className="content wrap-v2">
        <FooterLeft>
          <div className="rule">
            {
              footerLinks.map((item, index) => {
                return (
                  <div key={item.title}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                  </div>
                )
              })
            }
          </div>
          <div>
            <span className="pading-right">网易公司版权所有©1997-2020</span>
            <span>杭州乐读科技有限公司运营：
              <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" target="_blank" rel="noopener noreferrer">浙网文[2018]3506-263号</a>
            </span>
          </div>
          <div>
            <span className="pading-right">违法和不良信息举报电话：0571-89853516</span>
            <span  >举报邮箱：
              <a href="#/" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
            </span>
          </div>

          <div>
            <span className="pading-right">粤B2-20090191-18</span>
            <span className="pading-right">
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">工业和信息化部备案管理系统网站</a>
            </span>
            <span>
              <i className="police-logo"></i>
              <a href="http://www.beian.gov.cn/" target="_blank" rel="noopener noreferrer"> 浙公网安备 33010902002564号</a>
            </span>
          </div>
        </FooterLeft>
        <FooterRight>
          {
            footerImages.map((item, index) => {
              return (
                <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.link}>
                  <div className={'background background' + index}></div>
                  <p>{item.title}</p>
                </a>
              )
            })
          }
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
