<template >
    <div class="flex justify-center flex-wrap  items-center  pb-10">
        <div class="w-[100%] flex justify-center items-center flex-wrap text-3xl font-bold mb-20">
            <h2 class="w-full text-center mb-20">
                <span class=" block"> Our partner labels and</span>
                <span class="block">artists</span>
            </h2>
            <a href="" class="px-[32px] py-[12px] bg-black text-[18px] font-bold rounded-[10px] text-[#fff]">Partner
                Application</a>
        </div>
        <section class="mb-20 w-[100%] flex justify-center flex-wrap relative">
            <div class="w-[90%] flex justify-center flex-wrap p-2 lg:w-[70%]">
                <div class="w-[20%] h-36 flex justify-center items-center object-scale-down p-2 mb-6"
                    v-for="(item, index) in OurPartner" :key="index">
                    <button @click="show(index)">
                        <img class="h-auto max-h-32 md:h-32 " :src=item.imgUrl alt="">
                    </button>

                </div>
                <div class="absolute z-10 w-[90%] left-0 right-0 mx-auto  py-4 bg-[#fafafa] pb-20 md:w-[90%]"
                    style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" v-show="isShow == true">
                    <div class="md:flex md:flex-wrap md:px-8">
                        <div class="text-end md:w-[100%]">
                            <button class="text-3xl mr-6" @click="isShow = false"><i
                                    class="fa-regular fa-rectangle-xmark"></i></button>

                        </div>
                        <div class="md:w-[55%] md:flex items-center">
                            <div class="px-7 flex flex-wrap ">
                                <p class="w-full text-2xl md:text-3xl font-bold mb-4">{{ CurrentIndex[0].titlee }}</p>
                                <p class="w-full font-bold mb-4 text-xl" style="color: rgb(131, 126, 126);">
                                    {{ CurrentIndex[0].content }}</p>
                            </div>
                        </div>


                        <div class="w-[60%] flex justify-center mx-auto mb-6 object-cover md:w-[40%]">
                            <img class="w-[100%]" :src="CurrentIndex[0].imgUrl" alt="Kiwi Bear Records"
                                style="object-fit: scale-down;">
                        </div>

                    </div>
                    <div class="text-center md:mt-8">
                        <a href="" class="py-2 px-[20%] rounded-[20px] text-[#fff] text-xl font-bold"
                            style="background:rgb(61, 143, 79);">
                            <i class="fa-brands fa-spotify"></i>
                            Find us on Spotify</a>
                    </div>

                </div>

            </div>

        </section>
        <section class="w-[75%]  mx-auto flex justify-center mb-20 lg:w-[70%] ">
            <div class="flex flex-wrap justify-center w-[400px] lg:w-[100%] items-center  ">
                <div class="lg:w-[50%] lg:p-10">
                    <div class="w-full text-3xl mb-8 font-bold text-center lg:text-left lg:text-[40px]">
                        <h2>
                            Slowdown Records
                        </h2>
                    </div>
                    <div class="w-full mb-5 ">
                        <p class="text-center text-[16px] font-bold text-[#8d8d8d] lg:text-left lg:text-2xl">
                            Slowdown Records is lofi.co’s label, focusing on music crafted to give you a way of slowing
                            down and take things easy, even while studying or working.
                        </p>
                    </div>
                </div>
                <div class="w-full mb-8 lg:w-[50%] lg:flex justify-center">
                    <img src="https://lofi.co/static/8525d729706f2538d31eb32d2b981519/102d5/slowdown-records.webp"
                        alt="">
                </div>
                <div class="w-full flex items-center justify-center">
                    <a href="" class="px-[10%] py-[3%] bg-green-700 font-bold text-white rounded-[20px] mb-12 lg:py-5 mt-4 text-2xl"><i
                            class="fa-brands fa-spotify"></i> Find us on Spotify</a>
                </div>
            </div>
        </section>
        <div class="text-center w-[100%]">
            <h2 class="font-bold text-3xl sm:text-4xl mb-12">Want to release with us?</h2>
            <a href=""
                class="px-[32px] py-[12px] bg-black text-[18px] font-bold rounded-[10px] text-[#fff] mb-20 ">Contact us
            </a>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
const OurPartner = ref([
    {
        id: 1,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: 'https://lofi.co/static/kiwi-979420477e219ff2f01e5dec7f8e827d.png'
    },
    {
        id: 2,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/salad-e4b731ba4dacb8903a97f993ff4af3e8.png"
    },
    {
        id: 3,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/arya-a68bfe8e5eb855505b043fe7d6c050eb.png"
    },
    {
        id: 4,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/eupe-a724abfa08655d9ef3d1be715baf05d9.png"
    },
    {
        id: 5,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/lifted-ddd780eed0723047e7fa021aef93d179.png"
    },
    {
        id: 6,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/kyoto-d4b81bec0c88751e1765939354e11f4f.png"
    },
    {
        id: 7,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/wolf-e130f4631471b18cf51ad72f98df529d.png"
    },
    {
        id: 8,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/cudd-8b61a484de0542adf49cc6b1db96d63b.png"
    },
    {
        id: 9,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: 'https://lofi.co/static/purity-3307f71606e6d5083082cd3c0528a948.png'
    },
    {
        id: 10,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/clov-4aba002c7d751b99b0e1d68931357a65.png"
    },
    {
        id: 11,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/apa-1bc53549fb907e2a95dad616cc62c32b.png"
    },
    {
        id: 12,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/vv-5596a3b5e7cd8d6df76398dfef67ee48.png"
    },
    {
        id: 13,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/chil-515e9be21a883e084c7bd1f3458be855.png"
    },

    {
        id: 13,
        title: "Kiwi Bear Records",
        content: "Kiwi Bear Records is a husband and wife ran independent record label with the ethos of putting the artist first. We aim to provide full one-on-one support with all of our artists and their releases, laying out everything they may need to make their release a success.",
        imgUrl: "https://lofi.co/static/cudd-8b61a484de0542adf49cc6b1db96d63b.png"
    },
])
const isShow = ref(false)
const CurrentIndex = ref([
    {
        titlee: "aaa",
        content: "",
        imgUrl: "",
    }
])
//method
const show = (index) => {
    isShow.value = true
    CurrentIndex.value[0].titlee = OurPartner.value[index].title
    CurrentIndex.value[0].content = OurPartner.value[index].content
    CurrentIndex.value[0].imgUrl = OurPartner.value[index].imgUrl
}
</script>
<style >

</style>