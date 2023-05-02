import React from 'react'
import { Icon } from 'antd'
import SvgIcon from '@/components/SvgIcon'

import Href from '@/components/Href'
import MyInfo from '@/views/web/about/MyInfo'

// API_BASE_URL
export const API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:6060' : 'http://47.122.22.236:6060'

// project config
export const HEADER_BLOG_NAME = 'LM的博客' // header title 显示的名字

// === sidebar
export const SIDEBAR = {
  avatar: require('@/assets/images/avatar.jpg'), // 侧边栏头像
  title: 'LM', // 标题
  subTitle: '学而知不足', // 子标题
  // 个人主页
  homepages: {
    github: {
      link: 'https://github.com/zhangliumingZLM',
      icon: <Icon type='github' theme='filled' className='homepage-icon' />
    },
    juejin: {
      link: 'https://juejin.cn/user/847052002037912',
      icon: <SvgIcon type='iconjuejin' className='homepage-icon' />
    }
  }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

/**
 * github config
 */
export const GITHUB = {
  enable: true, // github 第三方授权开关
  client_id: 'c6a96a84105bb0be1fe5', // Setting > Developer setting > OAuth applications => client_id
  url: 'https://github.com/login/oauth/authorize' // 跳转的登录的地址
}

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true, // 关于页面是否开启讨论
  renderMyInfo: <MyInfo /> // 我的介绍 自定义组件 => src/views/web/about/MyInfo.jsx
}

// 公告 announcement
export const ANNOUNCEMENT = {
  enable: true, // 是否开启
  content: (
    <>
      个人项目，请访问
      <Href href='https://github.com/zhangliumingZLM'> LM's note</Href>
    </>
  )
}
