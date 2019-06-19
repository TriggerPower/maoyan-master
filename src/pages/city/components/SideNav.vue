<template>
    <div>
        <ul class="sidenav">
            <li class="" 
                v-for='(item, index) of firstP' 
                :key='index'
                :data-index='index'
                @touchstart.stop.prevent='ontouchstart'
                @touchend.stop.prevent='ontouchend'
                @touchmove.stop.prevent='ontouchmove'
            >{{item}}
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
    name: 'SideNav',
    props:{
        cities: Object
    },
    data(){
        return {
            touch:{},
            currentIndex: 0
        }
    },
    computed:{
        firstP(){
            let arr = [];
            for(let i in this.cities){
                arr.push(i);
            }
            return arr;
        }
    },
    methods:{
        ontouchstart(e){
            this.touch.initiated = true;
            let li = e.target;
            let index = li.getAttribute("data-index");
            let firstTouch = e.touches[0]
            this.touch.y1 = firstTouch.pageY
            this.currentIndex = index;
            this.$emit('setletter', this.firstP[this.currentIndex]);
        },
        ontouchend(e){
            this.touch.initiated = false;
            this.$emit('endletter');
        },
        ontouchmove(e){
            if(!this.touch.initiated){
                return;
            }
            let firstTouch = e.touches[0];
            this.touch.y2 = firstTouch.pageY;
            let delta = (this.touch.y2 - this.touch.y1) / 20 | 0;
            let index = parseInt(this.currentIndex) + delta;
            this.$emit('setletter', this.firstP[index])
        }
    }

}
</script>

<style lang='scss' scoped>
@import '@/assets/style/comm.scss';
.sidenav{
    height: 100%;
    position: fixed;
    top: 20%;
    right: 10px;
    z-index: 99;
    li{
        padding: 2px 0;
        color: $themeColor;
    }
    
}
</style>
