<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="value in list" :key="value.id">
          <img :src="value.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    // 为了保障轮播图样式结构一致， 也写在watch中  不过因为监听数据没有变化 需要立即执行一次
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          let mySwiper = new Swiper(".swiper", {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>