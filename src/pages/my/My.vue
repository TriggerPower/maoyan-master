<template>
    <div class="my">
        <Commheader :back='back' :title='title' @goBack='goBack'></Commheader>
        <div class="center">
            <div class="m-top">
                <img :src="headicon" alt="" width="60">
                <p>{{myname}}</p>
            </div>
            <div class="m-middle">
                <p>我的订单</p>
                <div class="m-tab">
                    <div>
                        <img :src="dianyingicon" alt="" width="40">
                        <p>电影</p>
                    </div>
                    <div>
                        <img :src="shangchengicon" alt="" width="40">
                        <p>商城</p>
                    </div>
                </div>
            </div>
            <div class="m-bottom">
                <div class="m-todo">在线观影</div>
                <div class="m-todo">优惠券</div>
                <div class="m-todo">折扣卡</div>
            </div>
        </div>
        <Footer :bottom-active='bottomActive'></Footer>
    </div>
</template>

<script>
import Commheader from '@/components/header/Commheader'
import Footer from '@/components/footer/Footer'
export default {
    name: 'My',
    data(){
        return{
            title: '我的',
            back: true,
            bottomActive: 2,
            headicon: require('./image/icon.png'),
            dianyingicon: require('./image/movie.png'),
            shangchengicon: require('./image/store.png'),
            myname: 'peterjonas'
        }
    },
    components:{
        Commheader, Footer
    },
    methods:{
        goBack: function(){
            this.$router.go(-1);
        }
    }
}   
</script>

<style lang="scss" scoped>
@import '@/assets/style/comm.scss';

.center{
    width: 100%;
    position: fixed;
    top: 50px;
    height: 56px;
    .m-top{
        width: 100%;
        height: 150px;
        background-color: $themeColor;
        position: relative;
        text-align: center;
        img{
            vertical-align: middle;
            position: absolute;
            top: 20%;
            left: calc(50% - 30px);
            border-radius: 50%;
            border: 3px solid #fff;
        };
        p{
            position: absolute;
            width: 100%;
            top: 70%;
            text-align: center;
            color: #fff;
        }
    };
    .m-middle{
        width: 100%;
        p{
            padding:20px;
        }
        .m-tab{
            display: flex;
            >div{
                width: 50%;
            }
        }
        
    };
    .m-bottom{
        padding: 20px;
        text-align: left;
        .m-todo{
            border-bottom: 1px solid #eee;
            padding: 10px 0;
            position: relative;
            &:after{
                content: '\e60c';
                position: absolute;
                right: 0;
            }
        }
    }
}

</style>
