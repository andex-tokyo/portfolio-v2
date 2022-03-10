<template>
  <div>
    <div class="works-title">
      <span class="works-title-text">{{ DetailData.title }}</span>
    </div>
    <div class="works-description">
      <div class="works-description-left" v-html="DetailData.description"></div>
      <div
        class="works-description-right"
        v-html="DetailData.description_right"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["DetailData"],
};
</script>
<style>
.works-title {
  width: 96vw;
  margin-top: 50px;
  margin-bottom: 30px;
}

.works-title-text {
  font-size: 33pt;
  font-weight: bold;
  letter-spacing: 20px;
}

.works-description {
  display: flex;
  flex-direction: row;
}

.works-description-left {
  width: 45%;
  margin-bottom: 10%;
}

.works-description-right {
  margin-left: 10%;
  width: 45%;
}

.works-description-right p {
  line-height: 25px;
}

.works-description p {
  width: 100%;
  font-size: 15px;
  font-weight: bold;
}
.works-description a {
  color: #1f1f1f;
}
/*============
tablet
=============*/
@media screen and (max-width: 1024px) {
  .works-title-text {
    font-size: 25px;
    letter-spacing: 5px;
  }
}
/*============
sp
=============*/
@media screen and (max-width: 649px) {
  .works-title-text {
    font-size: 14px;
    letter-spacing: 5px;
  }

  .works-description {
    flex-direction: column;
  }

  .works-description-left {
    width: 96%;
  }

  .works-description-right {
    margin-left: 0;
    width: 96%;
  }

  .works-description p {
    font-size: 8px;
    font-weight: bold;
  }
}
</style>