<template>
  <div class="home">
    <img src="../assets/logo.png">
    Vty {{menu}}
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      menu: {},
    };
  },
  computed: {
  },
  created() {
    firebase.database().ref('slider').on('value', (snapshot) => {
      const test = snapshot.val();
      this.menu = { ...this.menu, test };
      console.log(test);
    });
  },
};
</script>
