import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import Message from '@/plugins/message'


const routes = [
  {
    path: '/',
    name: 'welcome',
    component: HomeView
  },
  {
    path: '/user/center',
    name: 'userCenter',
    component: () => import('@/views/user/usercenter/UserCenterView.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')).userAccount) {
        next()
      } else {
        Message({ type: 'warning', text: '登录才能进入哦！', delay: 2500 })
      }
    },
    children: [
      {
        path: 'post',
        name: 'myPost',
        component: () => import('@/views/user/usercenter/MyUploadPostView.vue')

      },
      {
        path: 'creation',
        name: 'myCreation',
        component: () => import('@/views/user/usercenter/MyCreationView.vue')
      },
      {
        path: 'collect',
        name: 'myCollect',
        component: () => import('@/views/user/usercenter/MyCollectView.vue')
      },
      {
        path: 'change',
        name: 'myChange',
        component: () => import('@/views/user/usercenter/ChangeInformationView.vue')
      },
      {
        path: 'comment',
        name: 'myComment',
        component: () => import('@/views/user/usercenter/MyCommentView.vue')
      },
      {
        path: 'level',
        name: 'myLevel',
        component: () => import('@/views/user/usercenter/MyLevelView.vue')
      },
    ]

  },
  {
    path: "/user/update_password",
    name: "update_password",
    component: () => import("@/views/user/ForgetPassword.vue")
  },
  {
    path: '/navigation/home',
    name: 'home',
    component: () => import('@/views/firstpage/HomeView.vue'),
    meta: {
      type: 'home'
    }
  },
  {
    path: '/navigation/role/detail',
    name: 'roleDetail',
    component: () => import('@/views/role/RoleView.vue'),
    meta: {
      type: 'role'
    }

  },
  {
    path: '/navigation/role/class',
    name: 'roleClass',
    component: () => import('@/views/role/RoleClassView.vue'),
    meta: {
      type: 'role'
    }
  },
  {
    path: '/navigation/abyss',
    name: 'abyss',
    component: () => import('@/views/abyss/AbyssView.vue'),
    meta: {
      type: 'abyss'
    },
    children: [
      {
        path: 'floor',
        name: 'abyssFloor',
        component: () => import('@/views/abyss/AbyssFloorView.vue'),
        meta: {
          type: 'abyss'
        },
      }
    ]
  },
  {
    path: "/navigation/news",
    name: "news",
    component: () => import('@/views/news/NewsView.vue'),
    meta: { type: 'news' },
    children: [
      {
        path: '0',
        name: 'latest',
        meta: {
          index: 0,
          type: 'news'
        },
        component: () => import('@/components/news/NewsBody.vue')

      },
      {
        path: '1',
        name: 'newsNews',
        meta: {
          index: 1,
          type: 'news'
        },
        component: () => import('@/components/news/NewsBody.vue')
      },
      {
        path: '3',
        name: 'notice',
        meta: {
          index: 3,
          type: 'notice'
        },
        component: () => import('@/components/news/NewsBody.vue')
      },
      {

        path: "2",
        name: 'activity',
        meta: {
          index: 2,
          type: 'activity'
        },
        component: () => import('@/components/news/NewsBody.vue')
      }]
  },
  {
    path: '/navigation/world',
    name: 'world',
    component: () => import('@/views/world/WorldView.vue'),
    meta: { type: 'world' }
  },
  {
    path: '/navigation/world/town',
    name: 'worldTown',
    meta: { type: 'world' },
    component: () => import('@/views/world/WorldTown.vue')
  },
  {
    path: '/navigation/news/detail',
    name: 'newsDetail',
    component: () => import('@/views/news/NewDetail.vue'),
    meta: { type: 'news' }
  },
  {
    path: '/navigation/forum',
    name: 'forum',
    component: () => import('@/views/forum/ForumView.vue'),
    meta: { type: 'forum' },
    children: [
      {
        path: 'home',
        name: 'forumHome',
        component: () => import('@/views/forum/ForumHomeView.vue')
      },
      {
        path: 'cosplay',
        name: 'cosplay',
        component: () => import('@/views/forum/CosplayView.vue')
      },
      {
        path: 'someperson',
        name: 'somePerson',
        component: () => import('@/views/forum/SomePersonView.vue')
      },
      {
        path: 'creation/upload',
        name: 'creationUpload',
        component: () => import('@/views/forum/CosAndSomePersonUpload.vue')
      },
      {
        path: '/navigation/forum/post/upload',
        name: 'postUpload',
        component: () => import('@/views/forum/PostUploadView.vue'),
        meta: { type: 'forum' }
      },
      {
        path: 'creation/detail',
        name: 'creationDetail',
        component: () => import('@/views/forum/CreationDetailView.vue')
      },
      {
        path: 'post/detail',
        name: 'postDetail',
        component: () => import('@/views/forum/PostDetailView.vue')
      },
      {
        path: 'photo',
        name: 'photo',
        component: () => import('@/views/forum/PictureOfTheDayView.vue')
      }
    ]
  },
  {
    path: '/navigation/news/upload',
    component: () => import('../views/news/UploadNewsView.vue')
  },
  {
    path: '/ys/music',
    name: 'music',
    component: () => import('@/views/music/MusciView.vue'),
    children: [
      {
        path: 'find',
        name: 'findMusic',
        component: () => import("@/views/music/FindMusicView.vue")
      },
      {
        path: 'song/list',
        name: 'musicList',
        component: () => import("@/views/music/MusicListView.vue")
      },
      {
        path: 'search/detail',
        name: 'searchDetail',
        component: () => import("@/views/music/SearchDetailView.vue")
      },
    ]
  },

  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404/ErrorView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
