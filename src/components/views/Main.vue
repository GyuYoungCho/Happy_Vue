<template>
  <div id="main">
    <br><br><br>
    <b-container fluid>
      <b-carousel
        id="carousel"
        :interval="4000"
        controls
        indicators
        background="#343A40"
        img-width="1024"
        img-height="90"
        style="text-shadow: 1px 1px 2px #333;">

        <b-carousel-slide caption="최신 거래 정보를 검색해 보세요!" img-blank img-alt="house image">
          <template #img>
            <img
              class="d-block w-100"
              src='@/assets/house5.png'
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide caption="관심있는 지역을 등록해 보세요!" img-blank img-alt="map image">
          <template #img>
            <img
              class="d-block w-100"
              src='@/assets/map4.png'
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide caption="QnA 게시판을 통해 궁금한 것을 물어보세요!" img-blank img-alt="qna image">
          <template #img>
            <img
              class="d-block w-100"
              src='@/assets/qna.png'
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>
     </b-container>
    <b-container fluid class="p-4 bg-dark" style="border: 1px solid;">
      <div id="mention" class="ml-5">어떤 집을 찾으세요?</div><br>
      <b-row class="text-center">
        <b-col class="m-2">
          <b-img thumbnail fluid :src="require('@/assets/apart1.jpg')" alt="Image 1"/>
          <h4 style="color:white">아파트</h4>
        </b-col>
        <b-col class="m-2">
          <b-img thumbnail fluid :src="require('@/assets/house3.jpg')" alt="Image 2"/>
          <h4 style="color:white">하우스</h4>
        </b-col>
        <b-col class="m-2">
          <b-img thumbnail fluid :src="require('@/assets/house4.jpg')" alt="Image 3"/>
          <h4 style="color:white">원룸</h4>
        </b-col>
      </b-row>
      <div id="gohouse" class="text-right pr-3" style="color:#fff; font-size">집 보러 가기</div><br>
    </b-container>
    <br>
    <b-container>
      <b-row class="text-center">
        <b-col>
          <article-items></article-items>
        </b-col>
        <b-col>
          <maps></maps>
          <apt-get></apt-get>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
#main {
  background-color: #343A40;
}
#mention {
  background-color: #343A40;
  font-size: 30px;
  text-shadow: 1px 1px 2px #333;
  color: #fff
}
#gohouse {
  background-color: #343A40;
  font-size: 30px;
  text-shadow: 1px 1px 2px #333;
  color: #fff
}
</style>

<script>
// import Slide1 from "../main/Slide1.vue";
import ArticleItems from "../article/ArticleItems.vue";
import AptGet from "../apart/Aptget.vue";
import Maps from "../apart/Maps.vue";
export default{
  name: "Main",
  components: {
    ArticleItems,
    AptGet,
    Maps,
    // Slide1
  },
};
</script>

<style>
    
</style>
