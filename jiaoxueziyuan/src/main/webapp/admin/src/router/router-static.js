import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

         import users from '@/views/modules/users/list'
        import clazz from '@/views/modules/clazz/list'
        import dictionary from '@/views/modules/dictionary/list'
        import forum from '@/views/modules/forum/list'
        import gonggao from '@/views/modules/gonggao/list'
        import huida from '@/views/modules/huida/list'
        import kebiao from '@/views/modules/kebiao/list'
        import kecheng from '@/views/modules/kecheng/list'
        import kejian from '@/views/modules/kejian/list'
        import laoshi from '@/views/modules/laoshi/list'
        import shipin from '@/views/modules/shipin/list'
        import xiaozhang from '@/views/modules/xiaozhang/list'
        import yonghu from '@/views/modules/yonghu/list'
        import zuoye from '@/views/modules/zuoye/list'
        import config from '@/views/modules/config/list'
        import dictionaryForum from '@/views/modules/dictionaryForum/list'
        import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
        import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
        import dictionaryKecheng from '@/views/modules/dictionaryKecheng/list'
        import dictionaryKejian from '@/views/modules/dictionaryKejian/list'
        import dictionarySections from '@/views/modules/dictionarySections/list'
        import dictionarySex from '@/views/modules/dictionarySex/list'
        import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
        import dictionaryShipin from '@/views/modules/dictionaryShipin/list'
        import dictionaryXueqi from '@/views/modules/dictionaryXueqi/list'
        import dictionaryZuoye from '@/views/modules/dictionaryZuoye/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型名称',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型名称',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryKecheng',
        name: '课程形式类型名称',
        component: dictionaryKecheng
    }
    ,{
        path: '/dictionaryKejian',
        name: '课件类型名称',
        component: dictionaryKejian
    }
    ,{
        path: '/dictionarySections',
        name: '节数类型名称',
        component: dictionarySections
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型名称',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架名称',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShipin',
        name: '视频类型名称',
        component: dictionaryShipin
    }
    ,{
        path: '/dictionaryXueqi',
        name: '学期名称',
        component: dictionaryXueqi
    }
    ,{
        path: '/dictionaryZuoye',
        name: '作业类型名称',
        component: dictionaryZuoye
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/clazz',
        name: '班级',
        component: clazz
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/huida',
        name: '回答',
        component: huida
      }
    ,{
        path: '/kebiao',
        name: '课表',
        component: kebiao
      }
    ,{
        path: '/kecheng',
        name: '课程',
        component: kecheng
      }
    ,{
        path: '/kejian',
        name: '课件',
        component: kejian
      }
    ,{
        path: '/laoshi',
        name: '教师',
        component: laoshi
      }
    ,{
        path: '/shipin',
        name: '视频',
        component: shipin
      }
    ,{
        path: '/xiaozhang',
        name: '校长',
        component: xiaozhang
      }
    ,{
        path: '/yonghu',
        name: '学员',
        component: yonghu
      }
    ,{
        path: '/zuoye',
        name: '作业',
        component: zuoye
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
