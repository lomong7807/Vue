<template>
  <h3>ch04.Composition API</h3>

  <h4>1) setup()</h4>
  <Component1></Component1>

  <h4>2) Reactivity()</h4>
  <h4>3) LifeCycle Hooks()</h4>
  <h4>4) Dependency Injection()</h4>
</template>

<script>
import Component1 from "./components/Component1.vue";

export default {
  name: "App",
  components: {
    Component1,
  },
};
</script>
