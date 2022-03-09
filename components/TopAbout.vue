<template>
  <div class="about" id="about">
    <h3>-About-</h3>
    <div class="profile">
      <div class="profile-image">
        <img :src="AboutData.img.url" alt="" />
        <div class="profile-name">
          <span class="profile-name-ja">土田悠輝</span><br /><span
            class="profile-name-en"
            >YUKI TSUCHIDA</span
          >
        </div>
      </div>
      <div class="profile-text" v-html="AboutData.profile"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["AboutData"],
};
</script>
<style>
.about {
  width: 100%;
  margin-top: 10%;
}

.profile {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-top: 10%;
}
.profile-name {
  margin-top: 10px;
  font-size: 16px;
}
.profile-text {
  width: 50%;
}

.profile-text span {
  font-size: 16px;
  margin-top: 0;
}

.profile-image {
  width: 40%;
}

.profile-image img {
  width: 80%;
}
</style>