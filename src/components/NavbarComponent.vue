<template>
    <nav class="navbar navbar-expand-md bg-dark-subtle mb-2">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="" @click="goHome">
                <img :src="require('@/assets/AppLogo.png')" alt="" width="50px"> 
                <h2 class="mx-2 mb-0">QuickApps</h2>
            </a>
            <div class="d-flex align-items-center">
                <ul class="navbar-nav">
                <li class="nav-item" @click="goHome">
                    <a class="nav-link m-0" href="" >Home</a>
                </li>
            </ul>
            <div class="nav-item">
                <button class="btn" @click="toggleTheme()"> 
                    <!-- <span class="" id="moonIcon"><i data-feather='moon' class=""></i></span>
                    <span class="d-none" id="sunIcon"><i data-feather='sun' class=""></i></span> -->
                    <span v-if="!isDark"><div v-html="moonIcon"></div></span>
                    <span v-else><div v-html="sunIcon"></div></span>
                </button>
            </div>
            </div>
        </div>
    </nav>    
    
    
</template>

<script>
import feather from 'feather-icons'
export default{
    name: 'NavbarComponent',
    data() {
        return {
            sunIcon: feather.icons["sun"].toSvg(),
            moonIcon: feather.icons["moon"].toSvg(),

        };
    },
    props:{
        isDark:{
            type:Boolean,
            required :true
        }
    },
    methods:{
        toggleTheme(){
            this.$emit('toggleTheme');
        },
        goHome(){
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>

</style>