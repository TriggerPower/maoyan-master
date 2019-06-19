
<template>
    <div class="start-wrap">
        <div class="logen">娱乐看猫眼</div>
        <div class="bottom">
            <div class="icon"></div>
            <div class="title">{{title}}</div>
            <div class="copyright">@maoyan.com 美团云提供技术服务</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:"猫眼电影"
        }
    },
    mounted(){
        setTimeout(()=>{
            this.$router.push("/home");
        },2500)
    }
}
</script>

<style lang="scss" scope>
$themeolor: #e54847;
.start-wrap{
    display: flex;
    flex-direction:column;
    align-items: center;
    .logen{
        color:$themeolor;
        width: 70px;
        line-height: 50px;
        font-size: 36px;
        text-align: center;
        position: absolute;
        top: 20%;
    }
    .bottom{
        position: absolute;
        bottom: 10px;
        >div{
            margin-top: 5px;
        }
        .icon{
            width: 50px;
            height: 50px;
            background-image: url('./images/logo@2x.png');
            background-size: contain;
            position: relative;
            margin: 0 auto;
        }
        .title{
            font-size: 30px;
            color: $themeolor;
        }
        .copyright{
            color: #666;
            font-size: 12px;
        }
    }
}

</style>
