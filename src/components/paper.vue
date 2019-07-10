<template>
<v-container>
<v-content>
<v-btn color="success" @click="addText">Text</v-btn>
<v-btn color="success" @click="addHandwritebox">Handwritebox</v-btn>



      <v-layout wrap>
       
        <v-flex xs6>
            <div class="a4 black--text" :style="{'background-color': elements.page.background}">
                <div class="page_bg" :style="{ 
                    'background-image': 'url(/img/bg/' +  elements.page.backgroundimage + ')', 
                    'opacity': elements.page.backgroundOpacity
                    }">
                </div>
             
<VueDragResize 
v-for="(item, index) in elements.childs"
:key=index
:preventActiveBehavior="false"
:isActive="item.active"
:w="item.width"
:h="item.height"
:x="item.x"
:y="item.y"
:gridX="10"
:gridY="10"
:activated="activateEv(index)"
:deactivated="deactivateEv(index)"

:snapToGrid="true"
:style="item.style"
:class="item.active?' active ' + item.class :'' + item.class" 

>
<p>{{item.text}}</p>


</VueDragResize>
 
            </div>
        </v-flex>
        <v-flex xs6 @mousedown.stop>
            <div >
              
                <v-list>
                <v-list-group
                    v-for="item in items"
                    :key="item.title"
                    v-model="item.active"
                    :prepend-icon="item.action"
                    no-action
                >
                    <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    </template>

                    <v-list-tile
                    v-for="subItem in item.items"
                    :key="subItem.title"
                    
                    >
                    <v-list-tile-content >
                        <v-list-tile-title  @click="loadData(subItem.id)">
                            {{ subItem.title }}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action >
                        <v-icon>{{ subItem.action }}</v-icon>
                    </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
                </v-list>

<v-tabs dark>
    <v-tab>
        Seite
    </v-tab>
    <v-tab-item>
        <v-expansion-panel dark expand>
            <v-expansion-panel-content ripple true>
            <template v-slot:header>
                <div>Hintergrundfarbe</div>
            </template>
            <v-card>
                <v-card-text>
                
                    <swatches 
                        background-color="transparent"
                        :colors="colors"
                        show-fallback    
                        inline
                        v-model="elements.page.background" />
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content ripple>
            <template v-slot:header>
                <div>Hintergrundbild</div>
            </template>
            <v-card>
                <v-card-text>
                        <vue-select-image h="100" :dataImages="dataImages"
                            @onselectimage="onSelectImage"
                            :selectedImages="initialSelected"
                            >
                        </vue-select-image>
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>

        </v-expansion-panel>
      </v-tab-item>

        <v-tab>
                Elemente
            </v-tab>
            <v-tab-item>
                <v-card flat>
                <v-card-text>
                            <swatches 
                                background-color="transparent"
                                :colors="colors"
                                show-fallback    
                                inline
                                v-model="currentFontColor" />
                    <pre> {{currentFontColor}}</pre>
                </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
              
 

            </div>
        </v-flex>

      </v-layout>
       <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
</v-content>

</v-container>
</template>

<script>

// Import component
import Swatches from 'vue-swatches'
import VueSelectImage from 'vue-select-image'
import axios from 'axios'
import VueDragResize from 'vue-drag-resize';

import Loading from 'vue-loading-overlay';

// add stylesheet
require('vue-select-image/dist/vue-select-image.css')
require('vue-loading-overlay/dist/vue-loading.css');
require("vue-swatches/dist/vue-swatches.min.css");
  export default {
    components: { VueSelectImage, Swatches,  Loading, VueDragResize },
    computed: {
        currentFontColor: {
            get: function() {
                if(this.activeElement != null){
                    return this.elements.childs[this.activeElement].style.color
                } else {
                    
                }
            },
            set: function(newValue) {
                if(this.activeElement != null){
                    return this.elements.childs[this.activeElement].style.color = newValue
                } else {
                   
                }
            }
        }
    },
    data: () => ({
        isLoading: false,
        fullPage: true,
        initialSelected:[0,1,2],
        colors:"material-light",
        dataImages:[],
        editor:false,
        items: [
  
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              { 
                id:0,
                title: 'Breakfast & brunch',
                value:'fav'  
              },
              { 
                id:1,
                title: 'New American',
                value:'index'
              },
            
            ]
          }
          
        ],
        activeElement:null,
        elements:{
            page:{
                background:'#ffffff',
                backgroundimage:'no.png',
                backgroundOpacity:1
            },
            childs:[]
        }  
    }),
    async created() {
        this.isLoading = true
        try{
            const res = await axios.get('http://localhost:3000/backgroundimages')
            this.dataImages = res.data
            this.isLoading = false

        } catch(e){
           
    return e
        }
        window.addEventListener('keydown', this.onkey)
 
    },
    beforeDestroy: function () {
        window.removeEventListener('keydown', this.onkey)
    },
    methods: {
        onkey (event) {
            if(this.activeElement != null && event.key === 'Delete'){
         
                this.elements.childs.splice(this.activeElement, 1);
            }      
        },
        onSelectImage:function(index){
            return this.elements.page.backgroundimage  = index.filename
        },
        loadData:function(id){
            this.isLoading = true
            this.elements = {
                page:{
                    background:'#ffffff',
                    backgroundimage:'',
                    backgroundOpacity:1
                },
                childs:[]
            }  

         return fetch("http://localhost:3000/elements/"+id)
             .then(res => res.json())
             .then(res =>(this.elements = res))
             .then(this.isLoading = false);
            

        },
        // onClicked:function(index){
        //     //  this.active = true;
        //     this.elements.childs.map(function(value, key) {
        //         return value.active = false
        //     });


        //      this.activeElement = index
        //      this.elements.childs[this.activeElement].active = true
        // },
        activateEv(index) {
            this.$store.dispatch('rect/setActive', {id: index});
        },
        deactivateEv(index) {
            this.$store.dispatch('rect/unsetActive', {id: index});
        },
        addText: function(){

            let text =  {
                height:20,
                width:500,
                class:'text',
                resizable:true,
                text:'NEUER TEXT',
                y:0,
                x:0,
                active:false,
                style:{
                    color: '#000000',
                    'font-size': '12px',
                    'letter-spacing':'0em',
                    'font-weight':400,
                    'font-style': '',
                    'text-decoration':'',
                    'text-align': 'left'
                }
            
            }
            this.elements.childs.push(text)
            this.activeElement = null;

        },
        addHandwritebox: function(){

            let text =  {
            height:200,
            width:500,
            class:'handwritebox',
            resizable:true,
            text:'',
            y:0,
            x:0,
            active:false,
            style:{
                color: '#000000',
                'font-size': '12px',
                'letter-spacing':'0em',
                'font-weight':400,
                'font-style': '',
                'text-decoration':'',
                'text-align': 'left'
            }
            
            }
            this.elements.childs.push(text)
            this.activeElement = null;

        }

    }
  }
</script>

<style scoped>

.a4{
    background:white;
    width:210mm;
    height:297mm;
    position: relative;
    
}

 .page_bg{
    z-index: 0;
    position: relative;
    content:'asdasd';
    display: block;
    background:transparent url('../assets/logo.png') no-repeat 0 0;
    width:210mm;
    height:297mm;
}
.vdr{
    border-color:transparent;
}
.active{
    border:1px dashed red;
}
.handwritebox{
 background:transparent url('/img/box.png') repeat 0 bottom ;
}
</style>
