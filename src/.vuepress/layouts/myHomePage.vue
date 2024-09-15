// docs/theme/src/.vuepress/layouts/CustomBlogHome.vue
<script setup lang="ts">
import { usePageFrontmatter } from "@vuepress/client";
import { computed } from "vue";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
import bgImage from "@bgImage";

import MarkdownContent from "@theme-hope/components/MarkdownContent";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import ArticleList from "@theme-hope/modules/blog/components/ArticleList";
import BlogHero from "@theme-hope/modules/blog/components/BlogHero";
import InfoPanel from "@theme-hope/modules/blog/components/InfoPanel";
import ProjectPanel from "@theme-hope/modules/blog/components/ProjectPanel";
import { useArticles } from "@theme-hope/modules/blog/composables/index";
import BlogWrapper from "@theme-hope/modules/blog/components/BlogWrapper";

import type { ThemeBlogHomePageFrontmatter } from "vuepress-theme-hope/client";

import "vuepress-theme-hope/modules/blog/styles/home.scss";
import live2d from 'vue-live2d'

const articles = useArticles();
const frontmatter = usePageFrontmatter<ThemeBlogHomePageFrontmatter>();
const projects = computed(() => frontmatter.value.projects ?? []);
const style = {
  position: 'fixed',
  // right: '0',
  bottom: '0',
  zIndex: 99999,
}
const direction = 'right'
const width = 500
const height = 50
const size = 300
const tips = {
        mouseover: [{
          selector: '.vue-live2d',
          // texts: ['这样可以修改默认语句']
        }]
      }
</script>

<template>
  <BlogWrapper>
    
    <div class="vp-page vp-blog">
      <BlogHero>
        <template #heroInfo="theHeroInfo">
          <HitokotoBlogHero v-bind="theHeroInfo" />
        </template>
        <!-- <template #heroBg>
          <BingHeroBackground />
        </template> -->
        <template #heroBg>
          <!-- 加入自定义背景 -->
          <bgImage />
        </template>
      </BlogHero>
      <div class="blog-page-wrapper custom">
        <main class="vp-blog-home" id="main-content">
          <DropTransition appear :delay="0.16">
            <ProjectPanel :items="projects" />
          </DropTransition>
          <DropTransition appear :delay="0.24">
            <ArticleList :items="articles.items" />
          </DropTransition>
        </main>
        <DropTransition appear :delay="0.16">
          <InfoPanel />
        </DropTransition>
      </div>
      <DropTransition appear :delay="0.28">
        <MarkdownContent />
      </DropTransition>
      <live2d
      :style="style"
      :model="['Potion-Maker/Pio', 'school-2017-costume-yellow']"
      :direction="direction"
      :size="size"
      :tips="tips"
    ></live2d>
    </div>
    
  </BlogWrapper>
  
</template>

<style lang="scss">
.blog-page-wrapper.custom {
  direction: rtl;

  > * > * {
    direction: ltr;
  }
}
</style>