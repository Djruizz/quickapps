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
                        <span v-if="!isDark">Moon</span>
                        <span v-else>Sun</span>
                    </button>
                </div>
            </div>
        </nav>    
    </header>

</template>

<script>
export default{
    name: 'NavbarComponent',
    data() {
        return {
            // Add any data properties you need here
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