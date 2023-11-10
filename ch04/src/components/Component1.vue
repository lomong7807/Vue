<template>
  <h4>Component1</h4>
  <p>
    message1 : {{ message1 }}<br />
    <button @click="changeMessage">수정</button>
  </p>
  <p>
    message2 : {{ message2 }}<br />
    <button @click="changeMessage">수정</button>
  </p>
  <p>
    user1 : {{ user1.name }} / {{ user1.age }} / {{ user1.addr }}<br />
    <button @click="changeUser1">수정</button>
  </p>
  <p>
    user2 : {{ user2.name }} / {{ user2.age }} / {{ user2.addr }}<br />
    <button @click="changeUser2">수정</button>
  </p>
  <p>
    myValue : {{ myValue }} / myValue2x {{ myValue }}<br />
    <button @click="changeUser2">수정</button>
  </p>
</template>
<script>
import { reactive, ref } from "vue";

export default {
  name: "Component1",
  /*
    setup()
    - Composition API를 서술하기 위한 API
    - 기존 Options API data(), methods, computed 통합

    ref
    - 기본형 변수에 반응성을 부여하는 Composition API

    reactive
    - 참조형 변수(객체)에 반응성을 부여하는 Composition API
  */
  setup() {
    // 상태값 선언(반응성 X)
    let message1 = "Hello";
    let user1 = reactive({
      name: "김유신",
      age: 23,
      addr: "부산",
    });
    // 상태값 선언(반응성 O)
    let message2 = ref("Hello");
    let user2 = reactive({
      name: "김춘추",
      age: 21,
      addr: "부산",
    });

    const myValue = ref(10);
    const myValue2x = computed0l;

    const changeMessage = function () {
      message1 = "Welcome";
      message2.value = "Welcome";
    };

    const changeUser1 = () => {
      user1.age++;
      user1.addr = "경주";
    };
    const changeUser2 = () => {
      user2.age++;
      user2.addr = "경주";
    };

    return {
      message1,
      message2,
      user1,
      user2,

      changeMessage,
      changeUser1,
      changeUser2,
    };
  },
};
</script>
<style></style>
