<template>
  <div class="home">
        <v-container fluid grid-list-md>
           <v-layout row wrap>
             <v-toolbar>
               <div class="points">
                  <div class="point_item" 
                  v-for="(item, key, i) in menu" 
                  :key="'point' + i" 
                  :class="item.active ? 'active': ''">
                     <span>{{i+1}}</span>
                  </div>
               </div>
             </v-toolbar>
              <v-card :color="'#ccccc'" height="67vh" width="100%" v-for="(item, key, i) in menu" v-if="item.active" :key="'slide' + i" >
                <v-card-title>
                  <h2>{{item.name}}</h2>
                </v-card-title>
                 <v-card-text height="100%">
                   
                 </v-card-text>
                 <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="i < slidesLength-1" @click.native="updateSlides(key, 'next', i)">
                     Вперед
                    </v-btn>
                    <v-btn v-if="i > 0" @click.native="updateSlides(key, 'prev', i)">
                      Назад
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
              </v-card>
           </v-layout>
           <v-layout row wrap>
                  <v-card>
                      <v-card-title primary class="title">Тезисы</v-card-title>
                      <v-card-text>
                         <v-list dense>
                            <v-list-tile>
                              <v-list-tile-content>
                                Почему нам нужно дробить клиентский код
                              </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>
                                Какие системы у нас на поддержке
                              </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>
                                Почему мы выбрали вебпак
                              </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>
                               Система фронтенд разработки на сегодняшний день
                              </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>
                                Система разработки фронтенда в будующем
                              </v-list-tile-content>
                            </v-list-tile>
                         </v-list>
                      </v-card-text>
                   </v-card>
           </v-layout>
        </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import firebase from 'firebase';
import { mapActions, mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      curr: 0,
      menu: null,
    };
  },
  computed: {
    ...mapState(['user']),
    slidesLength() {
      if (this.menu) {
        return Object.keys(this.menu).length;
      }
    },
  },
  created() {
    firebase.database().ref('slider').on('value', (snapshot) => {
      const res = snapshot.val();
      this.menu = res;
    });
  },
  methods: {
    ...mapActions(['getSlides']),
    updateSlides(key, way, i) {
      if (way === 'next') {
        let next = Object.keys(this.menu)[i+1]
        console.log(next)
        const postDataDeactive = {
          active: false,
          seen: true,
        }
        const postDataActive = {
          active: true,
          seen: false,
        }
        const updates = {};
        updates[key] = Object.assign(this.menu[key], postDataDeactive);
        updates[next] = Object.assign(this.menu[next], postDataActive);
        firebase.database().ref('slider').update(updates);
      } else if (way === 'prev') {
        let next = Object.keys(this.menu)[i-1]
        const postDataDeactive = {
          active: false,
          seen: false,
        }
        const postDataActive = {
          active: true,
          seen: false,
        }
        const updates = {};
        updates[key] = Object.assign(this.menu[key], postDataDeactive);
        updates[next] = Object.assign(this.menu[next], postDataActive);
        firebase.database().ref('slider').update(updates);
      }
      console.log('update');
    },
  },
};
</script>
<style scoped lang="scss">
 .test {
   & div {
     width: 200px;
     height:100px;
     background: green;
     &.active {
       background: red;
     }
   }
 }
 .points {
   display: flex;
   justify-content: space-between;
   width:100%;
   align-content: center;
   align-items: center;
   padding: 0 2%;
 }
 .point_item {
   background: #cccccc;
   color: #2c3e50;
   width: 30px;
   height: 30px;
   display: flex;
   align-content: center;
   justify-content: center;
   border-radius: 50%;
   line-height: 30px;
   &.active {
     color:#fff;
     background: #2196f3;
   }
   &.seen {
     color:#2196f3;
   }
 }
</style>
