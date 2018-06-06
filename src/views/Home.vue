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
                <v-card-title>
                  <h2 class="display-2 mb-5">{{item.name}}</h2>
                </v-card-title>
                 <v-card-text>
                   <div class="card-inner">
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
                        <div class="card-img" v-for="(item, n) in imgs[key]" :key="'img'+n" v-if="item.seen">
                          <v-stack v-if="i === 5 && n === 0 "></v-stack>                      
                          <img v-else :src="item.img">
                        </div>
                        <div class="robots-wrap" >
                            <v-robots></v-robots>
                        </div>
                      </div>

                   </div>
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
      console.log('img',this.imgs[key][i]);
      console.log('list', this.lists[key][i]);
      var updates = {};
      updates['/lists/' + key +'/'+ i] =  Object.assign(this.lists[key][i], listItemTrue);
      if (i>0) {
        updates['/imgs/' + key +'/'+ n] =  Object.assign(this.imgs[key][n], imageFalse);
      }
      updates['/imgs/' + key +'/'+ i] =  Object.assign(this.imgs[key][i], imageTrue);
      firebase.database().ref().update(updates);
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
        const updates = {};
        updates[key] = Object.assign(this.menu[key], postDataDeactive);
        updates[next] = Object.assign(this.menu[next], postDataActive);
        firebase.database().ref('slider').update(updates);
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
  .robots-wrap{
    position: relative;
    height: 400px;
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
 }
 .card-ico-row {
   display: grid;
   grid-template-columns: 80px 1fr;
   align-items: start;
   text-align: left;
 }
 .card-list {
   align-self: center;
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
   margin-top: -5%;
   display: block;
   margin: -5% auto 0 auto;
   max-height: 400px;
   }
 }
</style>
