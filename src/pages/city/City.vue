<template>
    <div class="">
        <Commheader :back='back' :title='title' @goBack='goBack'></Commheader>
        <div class="city">
            <Scroll class="wrap_scroll" ref="scroll">
                <div>
                    <div class="c-city c-cur">
                        <p class="c-tit">当前城市</p>
                        <div class="c-group">
                            <div class="c-btn">{{getCity}}</div>
                            <div class="c-btn">{{getCity}}</div>
                            <div class="c-btn">{{getCity}}</div>
                        </div>
                    </div>
                    <div class="c-city c-hot">
                        <p class="c-tit">热门城市</p>
                        <div class="c-group">
                            <div class="c-btn" v-for='(item, index) of hotcities' :key='index' @click="setCurCity(item.name)">{{item.name}}</div>
                        </div>
                    </div>
                    <div class="c-city c-todo" v-for='(value,key) of cities' :key='key' :ref='key'>
                        <p class="c-tit">{{key}}</p>
                        <div class="c-list">
                            <div v-for='(item) of value' :key='item.id' @click="setCurCity(item.name)">{{item.name}}</div>
                        </div>
                    </div>
                </div>
            </Scroll>
            <SideNav :cities='cities' @setletter="setletter" @endletter="endletter"></SideNav>
        </div>
        <transition name='fade'>
            <div class="fadeletter" v-show='letter'>
                {{letter}}
            </div>
        </transition>  
    </div>
</template>

<script>
import Commheader from '@/components/header/Commheader'
import Scroll from '@/components/scroll/Scroll'
import SideNav from './components/SideNav.vue'
import {getCity} from '@/api/searchApi.js'
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'city',
    data(){
        return {
            back: true,
            title: '城市选择',
            curCity: '长沙',
            hotcities: [],
            cities:[],
            letter: ""
        }
    },
    components:{
        Commheader, Scroll, SideNav
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        setletter(index){
            this.letter = index;
        },
        endletter(){
            setTimeout(() => {
                this.letter = "";
            }, 800); 
        },
        setCurCity(item){
            this.setCity(item);
            this.$router.push("/home");
        },
        ...mapMutations([
            'setCity'
        ])
    },
    mounted(){
        getCity().then((res) => {
            this.hotcities = res.hotCities;
            this.cities = res.cities;
        })
    },
    watch:{
        letter(){
            this.$refs.scroll.scrollToElement(this.$refs[this.letter][0])
        }
    },
    computed:{
        ...mapGetters(['getCity'])
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/comm.scss';
.city{
    width: 100%;
    position: fixed;
    top: 50px;
    bottom:0;
    .wrap_scroll{
        height: 100%;
        overflow: hidden;
    }
    .c-city{
        width: 100%;
        .c-tit{
            width: 100%;
            font-size: 12px;
            color: #666;
            background-color: #eee;
            text-align: left;
            padding: 5px 10px;
        };
        .c-group{
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            .c-btn{
                width: 28%;
                box-sizing: border-box;
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 5px 5px;
                margin: 10px 0;
                &:nth-child(n + 4){
                    margin-top: 0;
                }
                
            }
        };
        .c-list{
            >div{
                width: 100%;
                text-align: left;
                padding: 10px;
                border-bottom: 1px solid #eee;
            }
        }
    };
    .c-cur{
        .c-btn:nth-child(n+2){
            opacity: 0;
        }
    }

}
.fadeletter{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    background-color: #999;
    color: #fff;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);   
    opacity: 1;
    &.fade-enter-active, &.fade-leave-active{
        transition: opacity 0.5s;
    }
    &.fade-enter, &.fade-leave-to{
        opacity: 0;
    }
    
};


</style>
