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
/*============
tablet
=============*/
@media screen and (max-width: 1024px) {
  .profile {
    width: 100%;
  }

  .profile-image {
    width: 40%;
  }
  .profile-name {
    font-size: 10px;
  }

  .profile-text p {
    font-size: 10px;
  }
  .profile-text span {
    font-size: 8px;
  }
}
/*============
sp
=============*/
@media screen and (max-width: 649px) {
  .profile {
    width: 100%;
    display: block;
  }

  .profile-image {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  .profile-text {
    width: 60%;
    margin: 0 auto;
  }

  .profile-text p {
    font-size: 10px;
    text-align: center;
    margin-top: 30px;
  }
  .profile-text span {
    font-size: 8px;
  }
}
/*============
small sp
=============*/
@media screen and (max-width: 360px) {
  .profile-image {
    width: 80%;
  }
  .profile-text {
    width: 80%;
  }
}
</style>