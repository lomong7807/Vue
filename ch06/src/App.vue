<script setup>
import { useMainStore } from "./store/mainStore";
import MyComponent1 from "./components/Mycomponent1.vue";
import Mycomponent2 from "./components/MyComponent2.vue";

const mainStore = useMainStore();
</script>

<template>
  <h3>ch06.Pinia 실습</h3>

  <p>
    mainStore title : {{ mainStore.title }}<br />
    mainStore title : {{ mainStore.count }}<br />
  </p>
  <p>cities : {{ mainStore.cities }}</p>

  <table border="1">
    <tr>
      <td>아이디</td>
      <td>이름</td>
      <td>나이</td>
    </tr>
    <tr v-for="person in mainStore.persons">
      <td>{{ person.uid }}</td>
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
    </tr>
  </table>

  <MyComponent1></MyComponent1>
  <Mycomponent2></Mycomponent2>
</template>

<style scoped></style>
