<template>
  <div id="app">
    <v-app >
      <div class="btn-holder">
        <v-btn color="info" @click="auth=true">Контроль</v-btn>
      </div>
      <router-view/>
      <v-dialog v-model="auth" max-width="500px">
          <v-card>
            <v-card-title>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
              <v-text-field
                type="password"
                id="testing"
                name="input-1"
                label="Пароль"
                v-model="password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" flat @click.stop="auth=false; authorize()">Войти</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-app>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      auth: false,
      password: '',
    };
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapMutations(['setUserAuth']),
    authorize() {
      if (this.password === '123') {
        this.setUserAuth(true);
      } else {
        this.setUserAuth(false);
      }
    },
  },
  created() {
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.btn-holder {
  position: fixed;
  bottom:0;
  right:0;
  z-index: 100;
}
#nav {
  display: flex;
  justify-content: flex-end;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
