<template>
<div>
  <div>
    <Create></Create>
    <Home></Home>
  </div>
  <h1>Hallo</h1>

  <pie-chart :data="state.data"></pie-chart>
</div>
</template>
<script setup>
import { reactive } from 'vue';
import Create from './components/Create.vue';
import Home from './components/Home.vue';


const state = reactive({
  data: [
    ['A', 10],
    ['B', 20],
    ['C', 30],
    ['D', 40],
    ['E', 50],
  ]
});

</script>
<style scoped></style>