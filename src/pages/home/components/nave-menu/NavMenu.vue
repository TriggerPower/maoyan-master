<template>
    <div class="nav-menu">
        <router-link  to="/city">
            <div class="left">
                <span>{{getCity}}</span>
                <i class="iconfont icon-jiantou"></i>
            </div>
        </router-link>
        <div class="center">
            <span class="menu" :class="[menuActive==item.id?'active':'']" @click="changeMenu(item.id)" v-for="item of menuList" :key="item.id">
                {{item.title}}
            </span>
        </div>
        <router-link  to="/search">
            <div class="right">
                <span class="iconfont icon-sousuo"></span>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            menuList:[
                {
                    id: 0,
                    title: '正在热映'
                },
                {
                    id: 1,
                    title: '即将上映'
                }
            ]
        }
    },
    props:{
        menuActive:{
            type: Number,
            default: 0
        }
    },
    methods:{
        changeMenu(id){
            this.$emit("changeMenu", id);
        }
    },
    computed:{
        ...mapGetters(['getCity'])
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/comm.scss";
    .nav-menu{
        height: 44px;
        display: flex;
        flex-flow:row nowrap; 
        .left{
            flex:1;
            line-height: 44px;
            padding-left: 10px;
        };
        .center{
            flex:1;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            display: flex;
            // justify-content: space-around;
            height: 100%;
            .menu{
                display: block;
                position: relative;
                line-height: 44px;
                flex:1;
                &.active{
                    color: $themeColor;
                    &::after{
                        content: "";
                        display: block;
                        position: absolute;
                        left:20px;
                        bottom: 0;
                        width: calc(100% - 40px);
                        height: 2px;
                        background-color: $themeColor;
                    }
                }
            }
            
        };
        .right{
            flex:1;     
            line-height: 44px;
            padding-right: 10px;
            >span{
                font-size: 20px;
                color: $themeColor;
            }
           
        }
    }

</style>
