<template>
<div class="row text-center">
        <h2>Apps</h2>
    </div>
    <div class="row">
        <div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6" v-for="route, index in visibleRoutes" :key="index" >
            <div class="card">
                <img :src="getImgSrc(route.name)" alt="" width="100%" class="card-img-top px-4 pt-4">
                <div class="card-body text-center">
                    
                    <h5 class="card-title">{{route.name}}</h5>
                    <button class="btn btn-outline-success" @click="launchApp(route.path)"><div v-html="playIcon"></div>Launch App </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router/index.js';
import feather from 'feather-icons'
export default{
    name: 'HomeView',
    components: {
        
    },
    data(){
        return{
            routes: [],
            playIcon: feather.icons['play'].toSvg()
        }
    }, 
    methods:{
        launchApp(targetRoute){
            router.push(targetRoute)
        },

        getImgSrc(name) {
            name = name.replace(/\s+/g, '')
            try {
            return require(`@/assets/${name}_img.png`);
            } catch (e) {
            return require('@/assets/logo.png'); // Imagen por defecto si falla desde el inicio
            }
        },
    },
    mounted(){
        this.routes = router.getRoutes().map(r => ({
            name: r.name,
            path: r.path
        }))
    },
    computed:{
        visibleRoutes(){
            return this.routes.filter(route => {
                return (
                    route.name !== 'HomeView' &&
                    route.path.split('/').filter(Boolean).length < 2
                );
            });
        }
    }
}
</script>

<style scoped>

</style>