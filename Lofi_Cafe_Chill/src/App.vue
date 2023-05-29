<template>
  <!-- 1rem=16px -->
  <div class="px-[8px] overflow-hidden bg-[#fbfafa] lg:px-[24px] lg:pt-[16px]">
    <NavBar></NavBar>
    
    <router-view to="/"></router-view>
  </div>
    <Footer_Lofi></Footer_Lofi>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer_Lofi from '../src/Components/Footer_Lofi.vue';
import NavBar from '../../Lofi_Cafe_Chill/src/Components/NavBar.vue';

</script>

<style>

</style>
