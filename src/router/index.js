import Vue from 'vue'
import Router from 'vue-router'

let Start = (resolve) => {
    import ('@/pages/start/Start').then((module) => {
        resolve(module)
    })
}
let Home = (resolve) => {
    import ('@/pages/home/Home').then((module) => {
        resolve(module)
    })
}
let Cinema = (resolve) => {
    import ('@/pages/cinema/Cinema').then((module) => {
        resolve(module)
    })
}
let My = (resolve) => {
    import ('@/pages/my/My').then((module) => {
        resolve(module)
    })
}
let City = (resolve) => {
    import ('@/pages/city/City').then((module) => {
        resolve(module)
    })
}

// // import Start from '@/pages/start/Start'
// import Home from '@/pages/home/Home'
// import Cinema from '@/pages/cinema/Cinema'
// import My from '@/pages/my/My'
// import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
    mode: "history",
    scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
        console.log(to) // to：要进入的目标路由对象，到哪里去
        console.log(from) // from：离开的路由对象，哪里来
        console.log(savePosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
        if (savePosition) {
            return savePosition;
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [{
            path: '/',
            name: 'Start',
            component: Start
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/cinema',
            name: 'Cinema',
            component: Cinema
        },
        {
            path: '/my',
            name: 'My',
            component: My
        },
        {
            path: '/city',
            name: 'City',
            component: City
        }
    ]
})