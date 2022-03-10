<template>
  <client-only>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="image in DetailData.image" :key="image.img.url">
        <img :src="image.img.url" class="works-image" />
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-white"
      ></div>
      <div
        slot="button-prev"
        class="swiper-button-prev swiper-button-white"
      ></div>
      <div
        slot="button-next"
        class="swiper-button-next swiper-button-white"
      ></div>
    </swiper>
  </client-only>
</template>

<script>
export default {
  props: ["DetailData"],
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 20000,
          disableOnInteraction: true,
        },
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
<style>
.swiper {
  width: 60vw;
  height: auto;
}
.works-image {
  width: 60vw;
}
/*============
tablet
=============*/
@media screen and (max-width: 1024px) {
  .swiper {
    width: 80vw;
    height: auto;
  }
  .works-image {
    width: 80vw;
  }
}
</style>