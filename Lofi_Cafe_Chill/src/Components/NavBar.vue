<template >
    <nav class="h-[64px] w-[100%] flex items-center justify-between px-[8px] mt-[4px] mb-[80px] relative">
        <div class="logo w-[60px]">
            <router-link to="/"><img class="max-w-full" src="../assets/Image/Logo/lofi-logo-colour-512-300x300.png"
                alt="" srcset=""></router-link>
        </div>
        <button class="menu w-[40px] h-[40px] flex items-center justify-center bg-[#ececec] rounded-[8px] md:hidden" @click="isShowMenu=!isShowMenu">
        
        
        <i v-if="isShowMenu" class="fa-solid fa-xmark font-bold text-[20px]"></i>
        <i v-else class="fa-solid fa-bars font-bold text-[20px]"></i>
        </button>
        <div class="hidden md:flex ">
            <ul class="flex h-[64px] items-center">
                    <router-link to="/Contact"><li class="mb-[8px] mx-[0.7rem] font-bold"><a href="">Contact</a></li></router-link>
                    <router-link to="/Update"><li class="mb-[8px] mx-[0.7rem] font-bold"><a href="">Updates</a></li></router-link>
                    <router-link to="/Music"><li class="mb-[8px] mx-[0.7rem] font-bold"><a href="">Musics</a></li></router-link>
                    <li class="mb-[8px] mx-[0.7rem] font-bold"><a href="">FAQ</a></li>
                    <li class="mb-[8px] mx-[0.7rem] font-bold"><a href="">Pricing</a></li>
                    <li class="mb-[8px] bg-[#f48226] text-[#fff] font-bold p-[8px] rounded-[8px]"><a href="">Get Started Now</a>
                    </li>

            </ul>
        </div>
        
            <div  v-show="isShowMenu"
                class="absolute z-10 top-[100%] right-4 bg-[#212020] w-[200px] p-[16px] text-[1.2rem] text-[#ececec] font-[500] rounded-[10px]">
                <ul>
                    <router-link to="/Contact"><li class="mb-[8px]"><a href="">Contact</a></li></router-link>
                    <router-link to="/Update"><li class="mb-[8px]"><a href="">Updates</a></li></router-link>
                    <router-link to="/Music"><li class="mb-[8px]"><a href="">Music</a></li></router-link>

                    
                    <li class="mb-[8px]"><a href="">FAQ</a></li>
                    <li class="mb-[8px]"><a href="">Pricing</a></li>
                    <li class="mb-[8px] bg-[#ffab66] text-[#000] p-[8px] rounded-[8px]"><a href="">Get Started Now</a>
                    </li>

                </ul>

            </div>

        
    </nav>

</template>
<script setup>
import { ref } from 'vue'
const isShowMenu = ref(false)

</script>
<style >

</style>