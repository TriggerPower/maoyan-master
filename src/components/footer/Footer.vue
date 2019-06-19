<template>
    <div class="footer">
        <div class="btn-item" v-for="item of itemList" :key="item.id">
            <router-link :to="item.href" :class="[bottomActive == item.id ? 'active' : '']">
                <span class="iconfont" :class="item.icon"></span>
                <p>{{item.title}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props:{
        bottomActive:{
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            itemList: [
                {
                id: 0,
                title: '电影',
                icon: 'icon-dianying',
                href: '/home'
                },
                {
                id: 1,
                title: '影院',
                icon: 'icon-yingyuana',
                href: '/cinema'
                },
                {
                id: 2,
                title: '我的',
                icon: 'icon-wode',
                href: '/my'
                }
            ]
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/comm.scss";
.footer{
    width: 100%;
    height: 56px;
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 99999;
    .btn-item{
        flex: 1;
        text-align: center;
        a{  
            height: 100%;
            &.active{
                color: $themeColor
            }
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
        }
        span{
            font-size: 24px;
        }
        p{  
            font-size: 14px;
            vertical-align: middle;
        }
    }
}
</style>
