<script>
import PropsComponent4 from "./PropsComponent4.vue";

export default {
  name: "PropsComponent3",
  props: ["c3Name", "c3Age"],
  components: { PropsComponent4 },
};
</script>

<template>
  <h4>PropsComponent3</h4>
  <p>c3Name : {{ c3Name }} c3Age : {{ c3Age }}</p>

  <PropsComponent4></PropsComponent4>
</template>

<style scoped></style>
