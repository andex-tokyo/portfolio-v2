<template>
  <div class="works" id="works">
    <h3>-Works-</h3>
    <div v-for="content in WorksData.contents" :key="content.id">
      <nuxt-link :to="`/works/${content.id}`">
        <div class="products">
          <img :src="content.image[0].img.url" alt="" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["WorksData"],
};
</script>
<style>
.works {
  width: 100%;
  margin-top: 10%;
  /*    margin-topを10%に*/
}

.works-name a {
  color: #1f1f1f;
  text-decoration: none;
}

.products {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
}

.products img {
  width: 80%;
  height: 80%;
  cursor: pointer;
}
</style>