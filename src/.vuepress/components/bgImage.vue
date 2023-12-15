<template>
    <div ref="container" class="vp-blog-mask">
        <div class="parallax-container">
            <div class="parallax-item" :style="parallaxStyle"></div>
        </div>
        
    </div>
</template>
  
<script>
import { ref, computed } from 'vue'
import { useParallax } from '@vueuse/core'

export default {
    setup() {
        const container = ref(null)
        const { tilt, roll } = useParallax(container)

        const parallaxStyle = computed(() => ({
            transform: `translate(${tilt.value * 50}px, ${roll.value * 50}px)`
        }))


        return {
            container,
            parallaxStyle
        }
    },
}
</script>
  
<style scoped>
.parallax-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.parallax-item {
    position: absolute;
    top: -50px;
    left: -50px;
    width: 120%;
    height: 120%;
    background-image: url('/assets/images/yuriali.jpg');
    background-size: cover;
}
</style>
  