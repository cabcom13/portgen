<template>
  <v-app dark="">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>
  <v-container>
    
    <v-content>
      <v-layout wrap >
        <v-flex xs1>
          <v-card>
 
            <v-btn block @click="addItem('text')" >Text</v-btn>
            <v-btn block @click="addItem('letterbox')" >Schreibfeld</v-btn>
            <v-btn block @click="addItem('imagebox913')" >Bild 9x13</v-btn>
            <v-btn block @click="addItem('imagebox139')" >Bild 13x9</v-btn>
          </v-card>
        </v-flex>
        <v-flex xs6 offset-xs1 align-self-center>
          
         <div class="a4">

                <VueDragResize v-for="(rect, index) in rects"
                :key="index"
                :w="rect.width"
                :h="rect.height"
                :x="rect.left"
                :y="rect.top"
                :parentW="listWidth"
                :parentH="listHeight"
                :axis="rect.axis"
                :snapToGrid="true"
                :gridX="20"
                :gridY="20"
                :isActive="rect.active"
                :minw="rect.minw"
                :minh="rect.minh"
                :isDraggable="rect.draggable"
                :isResizable="rect.resizable"
                :parentLimitation="rect.parentLim"
                
                :aspectRatio="rect.aspectRatio"
                
                :z="rect.zIndex"
                v-on:activated="activateEv(index)"
                v-on:deactivated="deactivateEv(index)"
                v-on:dragging="changePosition($event, index)"
                v-on:resizing="changeSize($event, index)"
                >
                <div :class="rect.class +' filler'" :style="rect.style"> 
                  {{rect.text}}
                </div>

                
                </VueDragResize>
                <div class="filler" 
                  :style="{    
                    'background-color': page_background_color,
                    'opacity': 1
                  }"></div>
                  
                  <div class="filler" 
                  :style="{    
                    'background':'transparent url(./img/bg/'+ page_background_image + ')',
                    'opacity': page_background_image_opacity
                  }"></div>
            </div>
        </v-flex>
        <v-flex xs4>
  
            <toolbar></toolbar>
        </v-flex>
      </v-layout>

    </v-content>
  </v-container>
  </v-app>
</template>

<script>

import VueDragResize from 'vue-drag-resize';
import toolbar from './components/toolbar';

export default {
  name: 'App',
  components: {

    VueDragResize,
    toolbar
  },
  data(){
      return {
          
      }
  },


  computed: {
      rects() {
          return this.$store.state.rect.rects.childs
      },
      page_background_image(){
         return this.$store.state.rect.rects.page.backgroundimage == undefined ? 'no.png': this.$store.state.rect.rects.page.backgroundimage
      },
      page_background_image_opacity(){
         return this.$store.state.rect.rects.page.opacity == undefined ? '1': this.$store.state.rect.rects.page.opacity
      },
      page_background_color(){
         return this.$store.state.rect.rects.page.backgroundcolor == undefined ? '#ffffff': this.$store.state.rect.rects.page.backgroundcolor 
      }
  },

  methods: {
      activateEv(index) {
          this.$store.dispatch('rect/setActive', {id: index});
      },

      deactivateEv(index) {
          this.$store.dispatch('rect/unsetActive', {id: index});
      },

      changePosition(newRect, index) {

          this.$store.dispatch('rect/setTop', {id: index, top: newRect.top});
          this.$store.dispatch('rect/setLeft', {id: index, left: newRect.left});
          this.$store.dispatch('rect/setWidth', {id: index, width: newRect.width});
          this.$store.dispatch('rect/setHeight', {id: index, height: newRect.height});
      },

      changeSize(newRect, index) {
          this.$store.dispatch('rect/setTop', {id: index, top: newRect.top});
          this.$store.dispatch('rect/setLeft', {id: index, left: newRect.left});
          this.$store.dispatch('rect/setWidth', {id: index, width: newRect.width});
          this.$store.dispatch('rect/setHeight', {id: index, height: newRect.height});
      },
      addItem(typ){
        switch (typ) {
          case 'text':
            var element= {
                "width": 150,
                "height": 21,
                "top": 0,
                "left": 0,
                "draggable": true,
                "resizable": true,
                "minw": 10,
                "minh": 10,
                "axis": "both",
                "parentLim": true,
                "snapToGrid": true,
                "aspectRatio": false,
                "zIndex": 3,
                "active": false,
                "class":"text",
                "text":"Dein Text hier",
                "style":{
                    "backgroundcolor": "transparent",
                    "font-size": "16px",
                    "color": "#000000",
                    "letter-spacing":"0em",
                    "font-weight":400,
                    "font-style": "",
                    "text-decoration":"",
                    "text-align": "left"
                }
              }
              this.$store.dispatch('rect/addElement', {data:element});
            break;
          case 'letterbox':
            var element= {
                "width": 300,
                "height": 60,
                "top": 0,
                "left": 0,
                "draggable": true,
                "resizable": true,
                "minw": 100,
                "minh": 60,
                "axis": "both",
                "parentLim": true,
                "snapToGrid": true,
                "aspectRatio": false,
                "zIndex": 4,
                "active": false,
                "class":"letterbox",
                "text":"",
                "style":{
                    "backgroundcolor": "transparent",
                    "font-size": "12px",
                    "color": "#000000",
                    "letter-spacing":"0em",
                    "font-weight":400,
                    "font-style": "",
                    "text-decoration":"",
                    "text-align": "left"
               
                }
              }
              this.$store.dispatch('rect/addElement', {data:element});
              break;
            
            case 'imagebox913':
              var element= {
                "width": 340,
                "height": 491,
                "top": 0,
                "left": 0,
                "draggable": true,
                "resizable": false,
                "minw": 100,
                "minh": 60,
                "axis": "both",
                "parentLim": true,
                "snapToGrid": true,
                "aspectRatio": false,
                "zIndex": 1,
                "active": false,
                "class":"imagebox913",
                "text":"hier foto aufkleben",
                "style":{
                    "backgroundcolor": "transparent",
                    "font-size": "12px",
                    "color": "#000000",
                    "letter-spacing":"0em",
                    "font-weight":400,
                    "font-style": "",
                    "text-decoration":"",
                    "text-align": "left",
                    "width": "9cm",
                    "height": "13cm",
                    "text-align" :"center",
                    "padding-top" :'220px'
                    
                }
              }
              this.$store.dispatch('rect/addElement', {data:element});
              break;

              case 'imagebox139':
              var element= {
                "width": 491,
                "height": 340,
                "top": 0,
                "left": 0,
                "draggable": true,
                "resizable": false,
                "minw": 100,
                "minh": 60,
                "axis": "both",
                "parentLim": true,
                "snapToGrid": true,
                "aspectRatio": false,
                "zIndex": 1,
                "active": false,
                "class":"imagebox139",
                "text":"hier foto aufkleben",
                "style":{
                    "backgroundcolor": "transparent",
                    "font-size": "12px",
                    "color": "#000000",
                    "letter-spacing":"0em",
                    "font-weight":400,
                    "font-style": "",
                    "text-decoration":"",
                    "text-align": "left",
                    "width": "13cm",
                    "height": "9cm",
                    "text-align" :"center",
                    "padding-top" :'150px'
                    
                }
              }
              this.$store.dispatch('rect/addElement', {data:element});
              break;
        }
  




      }
  }
}
</script>
<style>
.a4{
    background:white;
    width:210mm;
    height:297mm;
    position: relative;
   
}
.letterbox{
  background:transparent url('img/box.png') repeat 0 0;
}
.imagebox913{
  border:1px solid black;
}
.imagebox139{
  border:1px solid black;
}
.filler {
    width: 100%;
    height: 100%;
    display: inline-block;
    position: absolute;
    cursor: pointer;
}
.active::before{
      outline: 2px dashed #ff0000!important;
}

</style>