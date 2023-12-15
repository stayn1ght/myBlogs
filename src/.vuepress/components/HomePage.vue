<template>
<div class="home-container">
    <div class="hero">
    <p><span>{{descDom}}</span></p>
        <div class="person">
            <img src="/images/home-bg.png" alt="" class="pic1"/>
            <img src="/images/sitting-reading.svg" alt="" class="pic2"/>
        </div>
    </div>
</div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { usePageFrontmatter } from '@vuepress/client'
export default defineComponent({
name: "HomePage",
props: {
    frontmatter: {
    require: true,
    type: Object,
    },
},

setup() {
    // usePageFrontmatter 返回当前页面 Frontmatter 的 Ref 对象。它的值是页面数据的 frontmatter 属性
    const data = usePageFrontmatter();
    // 获取在md页面定义的tagline属性
    const desc = data._value.tagline;
    const descDom = ref('')
    onMounted(() => {
    // 打字机效果
    const wordsArray = desc.split('');
    let index = 0;
    function typewriter(){
        if (index < wordsArray.length){
        descDom.value += wordsArray[index];
        index++;
        setTimeout(typewriter,300)
        }
    }
    typewriter()
    })
   
    return {
    data,
    descDom
    };
},
});
</script>
<style lang="less">

</style>
