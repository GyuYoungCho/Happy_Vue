<template>
  <b-container v-if="regions && regions.length != 0" class="bv-example-row mt-3">
    <b-card no-body>
      <b-card-body
        style="position:relative; height:1000px; overflow-y:scroll;"
      >
    <apt-list-item v-for="(region, index) in regions" :key="index" :apt="region" />
      </b-card-body>
    </b-card>
  </b-container>
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>관심지역이 없습니다.</b-alert></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>

</style>