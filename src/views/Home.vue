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
              <v-card :color="'#ccccc'" height="calc(100vh - 70px)" 
              class="grid-card"
               width="100%" 
               v-for="(item, key, i) in menu" 
               v-if="item.active" :key="'slide' + i" >
               <!---->
                <v-card-title>
                  <h2 class="display-2 mb-5">{{item.name}}</h2>
                </v-card-title>
                 <v-card-text>
                   <div class="card-inner">
                     <Cionfeti v-if="i===8"/>
                      <div class="card-list" v-if="lists">
                            <v-card class="mb-4 list-card" row v-for="(item, i) in lists[key]" 
                            :key="'list'+i"  @click.native="updateList(key, i)">
                            <v-card-title class="display-1 card-ico-row">
                                <span>
                                  <v-icon v-if="item.icon" color="pink">star</v-icon>
                                </span>
                                  <span>{{item.title}}</span>
                                </v-card-title>
                            </v-card>
                      </div>
                      <div v-if="imgs">
                      <template>
                         <div class="card-img" v-for="(item, n) in imgs[key]" :key="'img'+n " v-if="item.seen">
                          <v-stack v-if="i === 5 && n === 0 "></v-stack>
                          <img  v-else :src="item.img">                   
                        </div>
                      </template>
                     
                      </div>
                      <template>
                        <div class="robots-wrap" v-for="(item, n) in imgs[key]" :key="'img'+n " v-if="(i === 8 && n === 0) || i === 2 && n === 0">
                          <v-robots></v-robots>
                        </div>   
                      </template>
                     

                   </div>
                 </v-card-text>
                 <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="i > 0" @click.native="updateSlides(key, 'prev', i)">
                      Назад
                    </v-btn>
                     <v-btn v-if="i < slidesLength-1" @click.native="updateSlides(key, 'next', i)">
                     Вперед
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
              </v-card>
           </v-layout>
        </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Cionfeti from '@/components/Cionfeti.vue';
import firebase from 'firebase';
import { mapActions, mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Cionfeti
  },
  data() {
    return {
      curr: 0,
      menu: null,
      lists: null,
      imgs: null,
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
    firebase.database().ref('lists').on('value', (snapshot) => {
      const res = snapshot.val();
      this.lists = res;
    });
    firebase.database().ref('imgs').on('value', (snapshot) => {
      const res = snapshot.val();
      this.imgs = res;
    });
  },
  methods: {
    ...mapActions(['getSlides']),
    updateList(key, i) {
      console.log(key, i)
      const n = i - 1;
      const imageFalse = {
        seen:false
      };
      const imageTrue = {
        seen:true
      };
      const listItemTrue = {
        icon: true
      }
      this.imgs[key].forEach((element, k) => {
        if (k === i) {
          element = Object.assign(element, imageTrue);
        } else {
          element = Object.assign(element, imageFalse);
        }
      });
      if (this.user.auth) {
          var updates = {};
          updates['/lists/' + key +'/'+ i] =  Object.assign(this.lists[key][i], listItemTrue);
          updates['/imgs/' + key] =  this.imgs[key];
          firebase.database().ref().update(updates);
      }
    },
    updateSlides(key, way, i) {
      if (way === 'next') {
        const next = Object.keys(this.menu)[i + 1];
        const postDataDeactive = {
          active: false,
          seen: true,
        };
        const postDataActive = {
          active: true,
          seen: false,
        };
        if (this.user.auth){
          const updates = {};
          updates[key] = Object.assign(this.menu[key], postDataDeactive);
          updates[next] = Object.assign(this.menu[next], postDataActive);
          firebase.database().ref('slider').update(updates);
        } else {
          this.menu[key] = Object.assign(this.menu[key], postDataDeactive);
          this.menu[next] = Object.assign(this.menu[next], postDataActive);
        }
      } else if (way === 'prev') {
        const next = Object.keys(this.menu)[i - 1];
        const postDataDeactive = {
          active: false,
          seen: false,
        };
        const postDataActive = {
          active: true,
          seen: false,
        };
       if (this.user.auth){
          const updates = {};
          updates[key] = Object.assign(this.menu[key], postDataDeactive);
          updates[next] = Object.assign(this.menu[next], postDataActive);
          firebase.database().ref('slider').update(updates);
        } else {
          this.menu[key] = Object.assign(this.menu[key], postDataDeactive);
          this.menu[next] = Object.assign(this.menu[next], postDataActive);
        }
      }
      console.log('update');
    },
  },
};
</script>
<style scoped lang="scss">
  .robots-wrap{
    position: relative;
    height: 450px;
    width: 100%;
    grid-column: 1/3;
  }
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
 .card-inner {
   display:grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 2%;
 }
 .grid-card {
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 150px 1fr;
   height: calc(100vh - 68px);
   position: relative;
 }
 .card-ico-row {
   display: grid;
   grid-template-columns: 80px 1fr;
   align-items: start;
   text-align: left;
 }
 .card-list {
 }
 .list-card {
   cursor: pointer;
   &:hover {
     background: #cccccc;
   }
 }
 .card-img {
   position: relative;
   img {
    max-width: 80%;
   display: block;
   margin: 0 auto;
   max-height: 400px;
   }
 }
</style>
