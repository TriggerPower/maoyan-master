<template>
    <div>
        <Commheader :title="title" :back=true @goBack="goBack"></Commheader>    
        <NavMenu :menu-active="menuActive" @changeMenu="changeMenu"></NavMenu>
        <MovieContent :menu-active="menuActive"></MovieContent>    
        <Footer :bottom-active="bottomActive"></Footer>
    </div>
</template>
<script>
import Commheader from "@/components/header/Commheader"
import NavMenu from "./components/nave-menu/NavMenu"
import MovieContent from "./components/content/Content"
import Footer from "@/components/footer/Footer"
export default {
    name: 'Home',
    data(){
        return{
            title: "首页",
            menuActive: 0,
            bottomActive: 0
        }
    },
    components: {
        Commheader, NavMenu, MovieContent, Footer
    },
    methods:{
        goBack(){
            this.$router.push('/');
        },
        changeMenu(id){
            this.menuActive = id;
        }
    }
        
}
</script>
<style>

</style>
