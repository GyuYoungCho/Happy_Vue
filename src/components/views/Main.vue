<template>
  <div>
    <b-carousel
      id="carousel"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="120"
      style="text-shadow: 1px 1px 2px #333;"
      
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/120/?image=52"
        
      ></b-carousel-slide>

     
      <b-carousel-slide img-src="https://picsum.photos/1024/120/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      
      <b-carousel-slide img-src="https://picsum.photos/1024/120/?image=58"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="https://picsum.photos/1024/120/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>


    <b-container fluid class="p-4 bg-dark">
      <b-row class="text-center">
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
          
          <h4 style="color:white">아파트</h4>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
          <h4 style="color:white">원룸</h4>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
          <h4 style="color:white">아파트 검색</h4>
        </b-col>
      </b-row>
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

<script>
import ArticleItems from "../article/ArticleItems.vue";
import AptGet from "../apart/Aptget.vue";
import Maps from "../apart/Maps.vue";
export default{
  name: "Main",
  components: {
    ArticleItems,
    AptGet,
    Maps,
  },
};
</script>

<style>
    
</style>
