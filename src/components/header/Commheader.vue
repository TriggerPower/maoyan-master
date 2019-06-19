<template>
    <div class="header">
        <div class="icon" v-if="back" @click="goBack">
            <span class="iconfont icon-fanhui"></span>
        </div>
        <h1 class="title" v-text="title"></h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props: {
        back:{
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            default: ""
        }
    },
    methods:{
        goBack(){
            this.$emit("goBack");
        }
    }

}
</script>

<style lang="scss" scope>
@import "@/assets/style/comm.scss";
.header{
    width: 100%;
    height: 50px;
    background-color: $themeColor;
    text-align: center;
    line-height: 50px;
    color: #fff;
    .icon{
        font-weight: bold;
        position: absolute;
        left: 10px;
        cursor: pointer;
    }
}
</style>
