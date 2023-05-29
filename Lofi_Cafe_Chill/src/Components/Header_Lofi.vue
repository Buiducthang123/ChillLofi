<template >
    <header>
        <h1 class="font-bold mb-6">
            <span class="inline-block text-[32px] w-[100%] text-center">Your calm, digital</span>
            <span class="inline-block text-[32px] w-[100%] text-center">environment to</span>
            <ul class="dynamic-txts inline-block text-[32px] w-[100%] text-center">
                <li><span>focus</span></li>
                <li><span>word</span></li>
                <li><span>study</span></li>
                <li><span>relax</span></li>

            </ul>
        </h1>
        <div class="flex justify-center mb-[48px]">
            <button class="h-[52px] w-[260px] bg-[#161616] rounded-[10px] "><a
                    class="text-[20px] font-bold text-[#fbfafa]" href="">Get Started For Free</a></button>
        </div>
        <div class="flex justify-center flex-wrap rounded-[20px] overflow-hidden mb-[48px]">
            <div class="flex justify-center flex-wrap rounded-[8px] overflow-hidden w-[80%]" style="box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;">
                <div class="w-[100%] rounded-tl-[8px] rounded-tr-[8px] overflow-hidden ">
                    <img src="../assets/Image/Header/chrome-toolbar-1e7be5309b2ddadaa1c8141110416666.png" alt=""
                        srcset="">
                </div>
                <div class="w-[100%] rounded-bl-[8px] rounded-br-[8px] overflow-hidden">
                    <video autoplay loop src="https://lofi.co/static/landing-d2a0b6bf78215840a76d22599c731834.mp4"></video>
                </div>
                <div>
                </div>
            </div>
        </div>
        
        
    </header>
</template>
<script setup>

</script>
<style >
.dynamic-txts {
    height: 48px;
    line-height: 48px;
    overflow: hidden;
}

.dynamic-txts li {
    position: relative;
    top: 0;
    animation: slide 6s steps(4) infinite;

}

.dynamic-txts li span {
    position: relative;
}

.dynamic-txts li span::after {
    content: '';
    position: absolute;
    height: 110%;
    width: 100%;
    border-left: 2px solid black;
    left: 0;
    background: #fbfafa;
    animation: typing 1.5s steps(4) infinite;
}

@keyframes typing {
    100% {
        left: 100%;
        margin: 0 -32px 0 32px;
    }
}

@keyframes slide {
    100% {
        top: -192px;
    }
}
</style>