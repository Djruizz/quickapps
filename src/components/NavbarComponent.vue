<template>
    <header>
        <nav class="navbar bg-dark-subtle">
            <div class="container-fluid">
                <div class="navbar-brand d-flex align-items-center">   
                    <img :src="require('@/assets/AppLogo.png')" alt="" width="50px"> 
                    <h1 class="mx-2">Quick Apps</h1>
                </div>
                <div class="nav-item">

                    <button class="btn" @click="toggleTheme()"> 
                        <!-- <span class="" id="moonIcon"><i data-feather='moon' class=""></i></span>
                        <span class="d-none" id="sunIcon"><i data-feather='sun' class=""></i></span> -->
                        <span v-if="!isDark"><div v-html="moonIcon"></div></span>
                        <span v-else><div v-html="sunIcon"></div></span>
                    </button>
                </div>
            </div>
        </nav>    
    </header>

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
        }
    }
}
</script>

<style scoped>

</style>