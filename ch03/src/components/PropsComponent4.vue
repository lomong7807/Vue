<script>
export default {
  name: "PropsComponent4",
  props: ["c4Name", "c4Age"],
};
</script>

<template>
  <h4>PropsComponent4</h4>
  <p>c4Name : {{ c4Name }} c4Age : {{ c4Age }}</p>
</template>

<style scoped></style>
