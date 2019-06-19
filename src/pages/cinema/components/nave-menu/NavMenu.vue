<template>
    <div class="nav-menu">
        <router-link  to="/city">
            <div class="left">
                <span>{{ getCity }}</span>
                <i class="iconfont icon-jiantou"></i>
            </div>
        </router-link>
        <div class="right">
            <input type="text" placeholder="搜影院">
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Navmenu',
    data(){
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'getCity'
        ])
    },
    props:{
        
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/comm.scss";
.nav-menu{
    height: 44px;
    display: flex;
    flex-flow:row nowrap; 
    background-color: #f5f5f5;
    .left{
        flex:1;
        line-height: 44px;
        padding-left: 10px;
    };
    .right{
        flex:1;     
        line-height: 44px;
        >input{
            width: 70%;
            height: 60%;
            border: 1px solid #eee;
            border-radius: 5px;
            text-align: center;
        }
    }
}

</style>
