<template>
    <div>
        <Commheader :back='back' :title='title' @goBack='goBack'></Commheader> 
        <NavMenu></NavMenu>   
        <div class="container">
            <Scroll class="wrap_content">
                <div>
                    <div class="cinema" v-for='item of cinemadata' :key='item.id'>
                        <div class="c-info">
                            <span class="c-name">{{item.nm}}</span><span class="c-price">{{item.sellPrice || 0}} 元起</span>
                        </div>
                        <div class="c-addr">{{item.addr}} {{item.distance}}</div>
                        <div class="c-tag">
                            <span class="c-tag1">改签</span><span class="c-tag2">小吃</span>
                        </div>
                        <div class="c-promo">
                            <span class="card">卡</span><span class="promotion">{{item.promotion.cardPromotionTag}}</span>
                        </div>
                    </div>
                </div>
            </Scroll>
        </div> 
        <Footer :bottom-active='bottomActive'></Footer> 
        <Loading v-if='showloading'></Loading>
    </div>
</template>

<script>
import Commheader from '@/components/header/Commheader'
import Footer from '@/components/footer/Footer'
import NavMenu from './components/nave-menu/NavMenu'
import Loading from '@/components/loading/Loading'
import {getCinema} from '@/api/searchApi'
import Scroll from "@/components/scroll/Scroll"
export default {
    name: 'cinema',
    data(){
        return {
            back: true,
            title: "影院",
            bottomActive: 1,
            showloading: true,
            cinemadata: []
        }
    },
    mounted(){
        getCinema().then((res) => {
            this.cinemadata = res.cinemas;
            this.showloading = false;
        })
    },
    components:{
        Commheader, Footer, NavMenu, Scroll, Loading
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped lang='scss'>
@import '@/assets/style/comm.scss';
.container{
    width: 100%;
    position: fixed;
    top: 94px;
    bottom: 56px;
    .wrap_content{
        height: 100%;
        text-align: left;
        overflow: hidden;
        .cinema{
            display: flex;
            flex-flow: column nowrap;
            box-sizing: border-box;
            padding: 18px;
            >div{
                padding: 3px;
            };
            .c-info{
                .c-name{
                    color: #000;
                };
                .c-price{
                    color: $themeColor;
                    margin-left: 10px;
                }
            };
            .c-addr{
                font-size: 14px;
                color: #666;
            };
            .c-tag{
                font-size: 12px;
                >span{padding: 0 2px;margin-right: 5px;}
                .c-tag1{
                    color:#589daf;
                    border: 1px solid #589daf;
                    
                };
                .c-tag2{
                    color:#f90;
                    border: 1px solid #f90;
                }
            };
            .c-promo{
                font-size: 12px;
                color: #666;
                >span{margin-right: 10px;}
                .card{
                    font-size: 10px;
                    color: $themeColor;
                    border: 1px solid $themeColor;
                }
            }

        }
    }
}
</style>
