<template>
    <div class="content" v-if="menuActive==0">
        <scroll class="wrap_content" :data="datalist">
            <div>
                <div class="wrap" v-for="item of datalist" :key="item.id">
                    <div class="left">
                        <img :src="item.img" alt="" >
                    </div>
                    <div class="center">
                        <div class="v-name">{{item.nm}}<span v-if="item.versio" class="iconfont icon-D"></span></div>
                        <div class="v-score">观众评 <span>{{item.sc}}</span></div>
                        <div class="v-star">主演:{{item.star}}</div>
                        <div class="v-info">{{item.showInfo}}</div>
                    </div>
                    <div class="right">
                        <button class="btn-goupiao">购票</button>
                    </div>
                </div>
            </div>
        </scroll>
        <Loading class="loading" v-if='showloadig'></Loading>
    </div>
    <div class="content" v-else-if="menuActive==1">
        <scroll class="wrap_content" :data="cominglist">
            <div>
                <div v-for="item of cominglist" :key="item.id">
                    <div class="c-title">{{item.rt}}  {{item.comingTitle.split(" ")[1]}}</div>
                    <div class="wrap">
                        <div class="left">
                            <img :src="item.img" alt="" >
                        </div>
                        <div class="center">
                            <div class="v-name">{{item.nm}}<span v-if="item.versio" class="iconfont icon-D"></span></div>
                            <div class="v-score">观众评 <span>{{item.sc}}</span></div>
                            <div class="v-star">主演:{{item.star}}</div>
                            <div class="v-info">{{item.showInfo}}</div>
                        </div>
                        <div class="right">
                            <button class="btn-yushou">预售</button>
                        </div>
                    </div>

                </div>
            </div>
        </scroll>
        <Loading class="loading" v-if='showloadig'></Loading>
    </div>
</template>

<script>
import {getMovieList} from "@/api/searchApi"
import Scroll from "@/components/scroll/Scroll"
import Loading from "@/components/loading/Loading"
export default {
    data(){
        return {
            datalist: [],
            cominglist: [],
            showloadig: true
        }
    },
    props:{
        menuActive:{
            type: Number,
            default: 0
        }
    },
    components:{
        Scroll, Loading
    },
    mounted(){
        getMovieList().then((res)=>{
            if(res.code){
                this.datalist = res.movieList;
                this.cominglist = res.comingList;
                this.showloadig = false;
            }
        })
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/comm.scss";
.content{
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    top: 94px;
    bottom: 56px;
    .wrap_content{
        overflow: hidden;
        height: 100%;
        .c-title{
            text-align: left;
            font-size: 14px;
            color: #666;
            padding: 5px 10px;
        }
        .wrap{
            height: 110px;
            display: flex;
            flex-flow: row nowarp;
            margin: 2.5px 0;
            .left{
                flex: 0 0 64px;
                overflow: hidden;
                padding: 5px 5px 5px 10px;
                img{
                    height: 100%;
                }
            }
            .center{
                flex: 1;
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
                padding: 10px;
                font-size: 14px;
                color: #666;
                overflow: hidden;
                >div{
                    padding-bottom: 10px;
                }
                .v-name{
                    font-size: 16px;
                    color: #333;
                    font-weight: bold;
                }
                .v-score{
                    span{
                        color: #faaf00;
                        font-weight: bold;
                    }
                }
                .v-star{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            .right{
                flex:0 0 64px;
                line-height: 120px;
                >button{
                    display: inline-block;
                    border: none;
                    color: #fff;
                    width: 47px;
                    height: 27px;
                    border-radius: 5px;
                    vertical-align: middle;
                }
                .btn-goupiao{
                    background-color: $themeColor;
                }
                .btn-yushou{
                    background-color: #3c9fe6;
                }
            }
        }
    };
    .loading{
        position: absolute;
        top: 10px;
    }
    
}
</style>
