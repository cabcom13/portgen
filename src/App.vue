<template>
  <v-app id="app" dark="" class="pt-3 ">
    <v-toolbar app dense fixed  style="z-index:110">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="download">.pdf Download</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  <v-container>
    
    <v-content>
      <v-layout wrap >
        <v-flex xs1>
          <v-card>
 
            <v-btn block @click="addItem('text')" >Text</v-btn>
            <v-btn block @click="addItem('letterbox')" >Schreibfeld</v-btn>
            <v-btn block @click="addItem('imagebox913')" >Foto 9x13</v-btn>
            <v-btn block @click="addItem('imagebox139')" >Foto 13x9</v-btn>
            <v-btn block @click="addItem('clipart')" >Clipart</v-btn>

          </v-card>
        </v-flex>
        <v-flex xs6 offset-xs1 align-self-center style="position:relative">
<div id="page">
       <div id="ignoreElements">
            <v-btn
              absolute
              dark
              fab
              top
              right
              color="pink"
            >
              <v-icon>add</v-icon>
            </v-btn>
        </div>
         <div class="a4"  :style="{    
                    'background-color': page_background_color,
                    'opacity': 1
                  }">
 
                  <div class="filler" 
                  :style="{   
                    'background-position': '0 0 ',
                    'background-repeat': 'no-repeat',
                    'background':'transparent url(./img/bg/'+ page_background_image + ')',
                    'opacity': page_background_image_opacity
                  }"></div>

                <VueDragResize v-for="(rect, index) in rects"
                :key="index"
                :w="rect.width"
                :h="rect.height"
                :x="rect.left"
                :y="rect.top"
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
 
                  <div class="copyright noselect">Portfolio Vorlagen </div>
            </div>
          </div>
        </v-flex>
        <v-flex xs4>
  
            <toolbar></toolbar>
        </v-flex>
      </v-layout>
    
    </v-content>
  </v-container>
  <div id="pdf"></div>

    <loading :active.sync="isLoading" loader="dots"></loading>

  </v-app>
</template>

<script>

import VueDragResize from 'vue-drag-resize';
import toolbar from './components/toolbar';
import html2canvas from 'html2canvas'
import * as JsPDF from 'jspdf'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'App',
  components: {
    Loading,
    VueDragResize,
    toolbar
  },
  data(){
      return {
          isLoading: false
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
      async download () {
          this.isLoading = true
           await html2canvas(document.querySelector('#page'), {
            imageTimeout: 5000,
            useCORS: true,
            scale:2,
            allowTaint:true,
            scrollX:0,
            scrollY:0,
            foreignObjectRendering:false,
            backgroundColor:'#ffffff'
          }).then(canvas => {
            document.getElementById('pdf').innerHTML = ''
            document.getElementById('pdf').appendChild(canvas)

           let pdf = new JsPDF({
                        orientation: 'p',
                        unit: 'mm',
                        format: 'a4',
                        putOnlyUsedFonts:true
                      })

            let img = canvas.toDataURL('image/png')
            const imgProps= pdf.getImageProperties(img);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
 
            pdf.addImage(img, 'PNG', -2, 0, pdfWidth, pdfHeight)
            pdf.save('relatorio-remoto.pdf')
            document.getElementById('pdf').innerHTML = ''
            this.isLoading = false
          })
      },

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
        var element = {}
        switch (typ) {
          case 'text':
            element= {
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
            element= {
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
              element= {
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
                    "padding-top" :'220px'
                    
                }
              }
              this.$store.dispatch('rect/addElement', {data:element});
              break;

              case 'imagebox139':
              element= {
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
                    "padding-top" :'150px'
                    
                }
              }
              this.$store.dispatch('rect/addElement', {data:element});
              break;


              case 'clipart':
              element= {
                "width": 150,
                "height": 150,
                "top": 0,
                "left": 0,
                "draggable": true,
                "resizable": true,
                "minw": 50,
                "minh": 50,
                "axis": "both",
                "parentLim": true,
                "snapToGrid": true,
                "aspectRatio": false,
                "zIndex": 1,
                "active": false,
                "class":"clipart",
                "text":"clipart",
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

@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Architects+Daughter|Handlee|Permanent+Marker|Satisfy&display=swap');

#page{
 font-family: 'Amatic SC', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 210mm;
  height: 297mm;
  overflow: hidden;
  position: static;
}
.a4{
    background:white;
    width:210mm;
    height:297mm;
    position: relative;
    margin:0;
    padding:0;
    overflow: hidden;
}
.copyright{
  position: absolute;
  bottom:0;
  width:100%;
  color:rgba(21,21,21,.8);
  text-align: right;
  padding:.3rem .5rem;
  font-size:.8rem;
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
    margin:0;
    padding:0;
    display: inline-block;
    position: absolute;
    cursor: pointer;
    overflow: hidden;
}
.active::before{
      outline: 2px dashed #ff0000!important;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>