import router from '@/router' // 必须引入router
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 注意要引入css样式文件

router.beforeEach((to, from, next) => {
    NProgress.start() // 进度条开始
    next()
})

router.afterEach((to) => {
    NProgress.done() // 进度条结束
    const arr = ['newsDetail', 'roleDetail', 'creationDetail', 'postDetail']
    if (arr.includes(to.name)) {
        window.scrollTo(0, 0)
    }
})

// 进度条的配置项：ease可以设置css3动画，如ease，linear；speed是进度条从开始到结束的耗时
NProgress.configure({ ease: 'linear', speed: 800 });