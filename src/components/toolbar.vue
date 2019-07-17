<template>
<div  @mousedown.stop>

  <v-dialog v-model="newPreset_dialog" persistent max-width="600px" light>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Neue Vorlage erstellen</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Neue Vorlage anlegen</span>
        </v-card-title>
        <v-card-text>
    <v-layout wrap align-center>
        <v-flex xs12 sm12 d-flex>
            {{items}}
            <!-- <v-select
            light
            :items="items"
            v-model="selectedCategory"
            label="Kategorie"
            ></v-select> -->
        </v-flex>
        <v-flex xs12 sm12 d-flex>
            <v-text-field light v-model="newPresetName" label="Bezeichnung / Title / Name" placeholder="z.b. Ich kann alleine ..."> </v-text-field>
        </v-flex>
    </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="newPreset_dialog = false">Abbrechen</v-btn>
          <v-btn color="success" :disabled="newPresetName == null || selectedCategory == null"  @click="addNewPreset">Weiter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


<v-btn color="pink" :disabled="loadedPreset != null ? false: true" @click="save">Speichern</v-btn>
        <v-expansion-panel dark focusable>

            <v-expansion-panel-content ripple expand true>
            <template v-slot:header>
                <div>Vorlagen</div>
            </template>
            <v-card>
                <v-list>
                <v-list-group
                    v-for="item in items"
                    :key="item.value"
                    v-model="item.active"
                  
                    no-action
                >
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-content>
                            <v-list-tile-title ripple>{{ item.text }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                        <ul class="slim_list">
                            <li v-ripple :class="loadedPreset == subItem.id?'active':''" v-for="subItem in item.items" :key="subItem.id" @click="loadData(subItem.id)">{{ subItem.title }}</li>
                        </ul>
          
                </v-list-group>
                </v-list>

            </v-card>
            </v-expansion-panel-content>


            <v-expansion-panel-content ripple expand true>
            <template v-slot:header>
                <div>Element</div>
            </template>
            <v-card>
            
                <v-card-text>
                   
                    <div style="border-bottom:1px solid rgba(21,21,21,.5);" class="py-3">
                        <v-layout row wrap>
                            <v-flex xs12 sm4 align-self-center>
                                <strong class="grey--text text--lighten-1">Hintergrundfarbe</strong>
                            </v-flex>
                            <v-flex xs12 sm8 >
    
                                <swatches show-border shapes="circles" :colors="owncolors" v-model="elementbackgroundcolor"  background-color="#212121" :disabled="activeRect == null ? true: false"></swatches>
                            </v-flex>
                        </v-layout>                 
                    </div>
                    <!-- <div style="border-bottom:1px solid rgba(21,21,21,.5);" class="py-3">
                        <v-layout row wrap>
                            <v-flex xs12 sm4 align-self-center>
                                <strong class="grey--text text--lighten-1">Drehung</strong>
                            </v-flex>
                            <v-flex xs12 sm8 >
                                {{rotation}}
                                <v-slider v-model="rotation" max="180" min="-180"></v-slider>
                            </v-flex>
                        </v-layout>                 
                    </div> -->
   
                    <div style="border-bottom:1px solid rgba(21,21,21,.5);" class="py-3" v-show="recttype == 'clipart'">
                        <v-layout row wrap>
                            <v-flex xs12 sm4 align-self-center>
                                <strong class="grey--text text--lighten-1">Hintergrundbild</strong>
                            </v-flex>
                            <v-flex xs12 sm8 >
                                <v-layout row >
                                    <v-dialog z-index="999"  v-model="dialog"  hide-overlay transition="dialog-bottom-transition" dark >
                                    <template v-slot:activator="{ on }" >
                                        <v-btn color="primary" dark v-on="on" :disabled="activeRect == null ? true: false">Bild suchen</v-btn>
                                    </template>
                                    <v-card>
                                        <v-toolbar dark color="primary">
                                        <v-btn icon dark @click="dialog = false">
                                            <v-icon>close</v-icon>
                                        </v-btn>
                                        <v-toolbar-title>Settings</v-toolbar-title>
                                        <v-spacer></v-spacer>
                                        <v-toolbar-items>
                                            <v-btn dark flat >Save</v-btn>
                                        </v-toolbar-items>
                                        </v-toolbar>
                                        <v-card-text>

                                            <v-layout row wrap>
                                                <v-flex xs12 sm4 align-self-center>
                                                    
                                                </v-flex>
                                                <v-flex xs12 sm8 align-self-center>
                                                    <vue-select-image @mousedown.stop :dataImages="clipartImages" h="150" @onselectimage="takeSelectedImage"></vue-select-image>
                                                </v-flex>
                                            </v-layout> 
                                        </v-card-text>
                  
                                    </v-card>
                                    </v-dialog>
                                </v-layout>                           

                            </v-flex>
                        </v-layout>                 
                    </div>

                    <!-- <div style="border-bottom:1px solid rgba(21,21,21,.5);" class="py-3" v-show="recttype == 'clipart'">
                        <v-layout row wrap>
                            <v-flex xs12 sm4 align-self-center>
                                <strong class="grey--text text--lighten-1">Hintergrund Wiederholung</strong>
                            </v-flex>
                            <v-flex xs12 sm8 >

                            </v-flex>
                        </v-layout>
                    </div> -->

                    <div style="border-bottom:1px solid rgba(21,21,21,.5);" class="py-3">
                        <v-layout row wrap>
                        <v-flex xs12 sm4 align-self-center>
                            <strong class="grey--text text--lighten-1">Ebene</strong>
                        </v-flex>
                        <v-flex xs12 sm8 align-self-center>
                            <v-btn name="toBottom" :disabled="activeRect!==null && zIndex !== 'isFirst' ? false : true"  @click.native="toBottom" dark><v-icon>expand_more</v-icon> nach Unten</v-btn>
                            <v-btn name="toTop" :disabled="activeRect!==null && zIndex !== 'isLast' ? false : true"  @click.native="toTop" dark> <v-icon>expand_less</v-icon> nach Oben</v-btn>
                        </v-flex>
                        </v-layout> 
                    </div>
                    <!-- <v-text-field :disabled="activeRect == null ? true: false" label="Höhe" placeholder="" v-model="height" dark></v-text-field> -->
                    <!-- <v-text-field :disabled="activeRect == null ? true: false" label="Breite" placeholder="" v-model="width" dark></v-text-field> -->
                    <div style="border-bottom:1px solid rgba(21,21,21,.5);" class="py-3" v-show="recttype == 'text'">
                        <v-layout row wrap>
                        <v-flex xs12 sm4 align-self-center>
                            <strong class="grey--text text--lighten-1">Ausrichtung</strong>
                        </v-flex>
                        <v-flex xs12 sm8 align-self-center>
                            <v-btn-toggle v-model="textalign" dark>
                                    <v-btn flat :disabled="activeRect == null ? true: false">
                                    <v-icon>format_align_left</v-icon>
                                    </v-btn>
                                    <v-btn flat :disabled="activeRect == null ? true: false">
                                    <v-icon>format_align_center</v-icon>
                                    </v-btn>
                                    <v-btn flat :disabled="activeRect == null ? true: false">
                                    <v-icon>format_align_right</v-icon>
                                    </v-btn>
                                    <v-btn flat :disabled="activeRect == null ? true: false">
                                    <v-icon>format_align_justify</v-icon>
                                    </v-btn>
                                </v-btn-toggle>
                        </v-flex>
                        </v-layout>
                    </div>
                    <div style="border-bottom:1px solid rgba(21,21,21,.5);" class="py-3" v-show="recttype == 'text'">
                        <v-layout row wrap>
                            <v-flex xs12 sm4 align-self-center>
                                <strong class="grey--text text--lighten-1">Schriftart</strong>
                            </v-flex>
                            <v-flex xs12 sm8 >
                               {{fontfamily}}
                               <select>
                                   <option>asdasdasd</option>
                                   <option>asdasdasd123</option>
                               </select>
                                <!-- <select @mousedown.stop single-line  dark :items="fontfamilys" label="Standard"></select>  -->
                            </v-flex>
                        </v-layout>                 
                    </div>
                    <div style="border-bottom:1px solid rgba(21,21,21,.5);" class="py-3" v-show="recttype == 'text'">
                        <v-layout row wrap>
                        <v-flex xs12 sm4 align-self-center>
                            <strong class="grey--text text--lighten-1">Schrift Style</strong>
                        </v-flex>
                        <v-flex xs12 sm8 align-self-center>
                                <v-btn-toggle v-model="fontweight" dark>
                                    <v-btn flat>
                                    <v-icon>format_bold</v-icon>
                                    </v-btn>

                                </v-btn-toggle>
                        </v-flex>
                        </v-layout>
                    </div>
                    <div style="border-bottom:1px solid rgba(21,21,21,.5);" v-show="recttype == 'text'">
                        <v-layout row wrap>
                        <v-flex xs12 sm4 align-self-center>
                            <strong class="grey--text text--lighten-1">Text</strong>
                        </v-flex>
                        <v-flex xs12 sm8 align-self-center class="mt-3">
                            <v-text-field :disabled="activeRect == null ? true: false" v-model="text" dark  single-line></v-text-field>
                        </v-flex>
                        </v-layout>
                    </div>

                    <div style="border-bottom:1px solid rgba(21,21,21,.5);" class="py-3" v-show="recttype == 'text'">
                            <v-layout row wrap>
                            <v-flex xs12 sm4 align-self-center>
                                <strong class="grey--text text--lighten-1">Schriftfarbe</strong>
                            </v-flex>
                            <v-flex xs12 sm8>
                                <swatches  show-border :colors="owncolors" v-model="color" shapes="circles" background-color="#212121"></swatches>
                            </v-flex>
                            </v-layout>
                    </div>

                    <div style="border-bottom:1px solid rgba(21,21,21,.5);" class="py-3" v-show="recttype == 'text'">
                        <v-layout row wrap>
                        <v-flex xs12 sm4 align-self-center>
                            <strong class="grey--text text--lighten-1">Schriftgröße</strong>
                        </v-flex>
                        <v-flex xs12 sm8 align-self-center>
                            <v-slider :readonly="activeRect == null ? true: false" v-model="fontsize" dark></v-slider>
                        </v-flex>
                        </v-layout> 
                    </div>
                    <v-btn ripple color="error" @click="removeElement(activeRect)" :disabled="activeRect == null ? true: false">Löschen</v-btn>
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>


            <v-expansion-panel-content ripple expand >
            <template v-slot:header>
                <div>Seite</div>
            </template>
            <v-card >
                <v-card-text class="grey darken-4">
                    <div style="border-bottom:1px solid black;" class="mb-3">
                        <strong class="grey--text text--lighten-1">Hintergrundfarbe</strong>
                        <swatches :colors="owncolors" v-model="pagebackgroundColor" shapes="circles" inline background-color="transparent"></swatches>
                    </div>
                    <div style="border-bottom:1px solid black;" class="mb-3">
                        <strong class="grey--text text--lighten-1">Transparenz</strong>
                        <v-slider v-model="backgroundopacity" max="1" step="0.1" dark></v-slider>
                    </div>
                    <strong class="grey--text text--lighten-1">Hintergrundbild</strong>
                        <vue-select-image h="100" :dataImages="dataImages"
                            @onselectimage="onSelectImage"
                            :selectedImages="[background_image.id]"
                            :isMultiple="false"
                            >
                        </vue-select-image>
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>

        </v-expansion-panel>
</div>
</template>
<style scope>
.vue-swatches__trigger{
    border:1px solid #212121;
}
ul.slim_list{
    margin:0;
    padding:0;
    margin-bottom:1rem;
}
ul.slim_list li{
    list-style: none;
    border-bottom:1px solid rgba(21,21,21,.8);
    padding:.8rem 1rem .8rem 3rem; 
    font-size:1.1rem;
    cursor: pointer;
}
ul.slim_list li.active{
    background:rgb(97, 184, 101)
}
ul.slim_list li.active:hover{
    background:rgb(106, 196, 109)
}
ul.slim_list li:hover{
    background:rgba(21,21,21,.4)
}

</style>

<script>
// Import component
import Swatches from 'vue-swatches'
import VueSelectImage from 'vue-select-image'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import FontPicker from 'font-picker-vue';

// add stylesheet
require('vue-select-image/dist/vue-select-image.css')
require('vue-loading-overlay/dist/vue-loading.css');
require("vue-swatches/dist/vue-swatches.min.css");


export default {
    components: { VueSelectImage, Swatches,  Loading},
    data: () => ({
        fontfamilys:['Amatic SC', 'Satisfy', 'Permanent Marker', 'Architects Daughter', 'Handlee'],
        dataImages:[],
        clipartImages:[],

        newPreset_dialog:false,
        selectedCategory:null,
        newPresetName: null,
        dialog: false,
        owncolors:[
            'transparent','#000000','#1FBC9C','#1CA085','#2ECC70','#27AF60','#3398DB','#2980B9','#A463BF','#8E43AD','#3D556E','#222F3D','#F2C511','#F39C19','#E84B3C','#C0382B','#DDE6E8','#BDC3C8','#FFFFFF'
        ],
        isLoading: false,
        initialSelected:[],
        items: []
    }),
    async created() {
       
        try{
            const res = await axios.get('http://localhost:3000/backgroundimages')
            this.dataImages = res.data
            this.isLoading = false
        } catch(e){
               
        }
        try{
            const res = await axios.get('http://localhost:3000/clipartimages')
            this.clipartImages = res.data
            this.isLoading = false
        } catch(e){
                
        }
        try{
            const res = await axios.get('http://localhost:3000/presets')
            console.log(res.data)
            this.items = res.data
            this.isLoading = false
        } catch(e){
                
        }


        window.addEventListener('keydown', this.onkey)
 
    },
    beforeDestroy: function () {
        window.removeEventListener('keydown', this.onkey)
    },
    computed: {
        loadedPreset(){
            return this.$store.state.editor.loadedPresetID
        },
        recttype(){
            return this.activeRect === null ? 0 : this.$store.state.rect.rects.childs[this.activeRect].type
        },
        rotation:{
            get: function() {
                return this.activeRect === null ? 0 : this.$store.state.rect.rects.childs[this.activeRect].transform
            },
            set: function(newValue) {
               // this.$store.dispatch('rect/changeBackgroundColor', {"color":newValue});
            }
        },
        pagebackgroundColor:{
            get: function() {
                return this.$store.state.rect.rects.page.backgroundcolor
            },
            set: function(newValue) {
                this.$store.dispatch('rect/changeBackgroundColor', {"color":newValue});
            }
        },
        backgroundopacity:{
            get: function() {
                return this.$store.state.rect.rects.page.opacity
            },
            set: function(newValue) {
                this.$store.dispatch('rect/changeBackgroundOpacity', {"opacity":newValue});
            }
        },
        
        background_image(){
            return {
                id: this.$store.state.rect.rects.page.backgroundimageID,
                filename:this.$store.state.rect.rects.page.backgroundimage
            }
        },
        fontsize:{
            get: function() {
                return this.activeRect === null ? 0 : this.$store.state.rect.rects.childs[this.activeRect].style['font-size'].replace('px','')
            },
            set: function(newValue) {
                this.$store.dispatch('rect/changeFontSize', {id: this.activeRect,"fontsize":newValue+'px'});
            }
        },
        fontweight:{
            get: function() {
                if(this.activeRect === null) {
                    return ''
                } else {
                    let typ = null;
                    if(this.$store.state.rect.rects.childs[this.activeRect].style['font-weight'] === 400){
                        typ = null
                    } else if(this.$store.state.rect.rects.childs[this.activeRect].style['font-weight'] === 800){
                        typ = 0     
                    }
                    
                    return typ
                }


                
            },
            set: function(newValue) {
                if(newValue === 0){
                    this.$store.dispatch('rect/changeFontWeight', {id: this.activeRect,"fontweight":800});
                } else {
                    this.$store.dispatch('rect/changeFontWeight', {id: this.activeRect,"fontweight":400});
                }
                 
            }
        },
        fontfamily:{
            get: function() {
                if(this.activeRect === null) {
                    return
                } else {
                    return this.$store.state.rect.rects.childs[this.activeRect].style['font-family']
                }
            },set: function(newValue) {
               
            }
        },
        textalign:{
            get: function() {

                if(this.activeRect === null) {
                    return ''
                } else {
                    let typ = 0;
                    if(this.$store.state.rect.rects.childs[this.activeRect].style['text-align'] === 'left'){
                        typ = 0
                    } else if(this.$store.state.rect.rects.childs[this.activeRect].style['text-align'] === 'center'){
                        typ = 1
                    } else if(this.$store.state.rect.rects.childs[this.activeRect].style['text-align'] === 'right'){
                        typ = 2
                    } else if(this.$store.state.rect.rects.childs[this.activeRect].style['text-align'] === 'justify'){
                        typ = 2
                    }
                    return typ
                    
                }

              
            },
            set: function(newValue) {
                let typ = 'left';
                if(newValue === 0){
                    typ = 'left'
                } else if(newValue === 1){
                    typ = 'center'    
                } else if(newValue === 2){
                    typ = 'right'
                } else if(newValue === 3){
                    typ = 'justify'
                }
                
                this.$store.dispatch('rect/changeFontAlign', {id: this.activeRect,"textalign":typ});
            }
            
        },
        text:{
            get: function() {
                return this.activeRect === null ? '' : this.$store.state.rect.rects.childs[this.activeRect].text
            },
            set: function(newValue) {
                 this.$store.dispatch('rect/changeText', {id: this.activeRect,"text":newValue});
            }
            
        },

        color:{
            get: function() {
                return this.activeRect === null ? '' : this.$store.state.rect.rects.childs[this.activeRect].style.color
            },
            set: function(newValue) {
                this.$store.dispatch('rect/changeFontColor', {id: this.activeRect,"color":newValue});
            }
            
        },
        elementbackgroundcolor:{
            get: function() {
                return this.activeRect === null ? '' : this.$store.state.rect.rects.childs[this.activeRect].style['background-color']
            },
            set: function(newValue) {
                this.$store.dispatch('rect/changeElementBackgroundColor', {id: this.activeRect,"color":newValue});
            }
            
        },
        activeRect() {
            return this.$store.getters['rect/getActive'];
        },

        width() {
            return this.activeRect === null ? '' : this.$store.state.rect.rects.childs[this.activeRect].width
        },

        height() {
            return this.activeRect === null ? '' : this.$store.state.rect.rects.childs[this.activeRect].height
        },

        top() {
            return this.activeRect === null ? '' : this.$store.state.rect.rects.childs[this.activeRect].top
        },

        left() {
            return this.activeRect === null ? '' : this.$store.state.rect.rects.childs[this.activeRect].left
        },

        minw() {
            return this.activeRect === null ? '' : this.$store.state.rect.rects.childs[this.activeRect].minw
        },

        minh() {
            return this.activeRect === null ? '' : this.$store.state.rect.rects.childs[this.activeRect].minh
        },

        aspectRatio() {
            return this.activeRect === null ? false : this.$store.state.rect.rects.childs[this.activeRect].aspectRatio;
        },

        parentLim() {
            return this.activeRect === null ? false : this.$store.state.rect.rects.childs[this.activeRect].parentLim;
        },

        draggable() {
            return this.activeRect === null ? false : this.$store.state.rect.rects.childs[this.activeRect].draggable;
        },

        resizable() {
            return this.activeRect === null ? false : this.$store.state.rect.rects.childs[this.activeRect].resizable;
        },

        snapToGrid() {
            return this.activeRect === null ? false : this.$store.state.rect.rects.childs[this.activeRect].snapToGrid;
        },

        topIsLocked() {
            if (this.activeRect === null) {
                return false;
            }
            return (this.$store.state.rect.rects.childs[this.activeRect].axis === 'x' ||
                this.$store.state.rect.rects.childs[this.activeRect].axis === 'none')
        },

        leftIsLocked() {
            if (this.activeRect === null) {
                return false;
            }
            return (this.$store.state.rect.rects.childs[this.activeRect].axis === 'y' ||
                this.$store.state.rect.rects.childs[this.activeRect].axis === 'none')
        },

        zIndex() {
            if (this.activeRect === null) {
                return null;
            }

            return this.$store.state.rect.rects.childs[this.activeRect].zIndex === 1 ? 'isFirst' :
                this.$store.state.rect.rects.childs[this.activeRect].zIndex === this.$store.state.rect.rects.childs.length ? 'isLast' : 'normal'

        }
    },
    methods: {
        save(){

                axios.post(`http://localhost:3000/elements/${this.$store.state.editor.loadedPresetID}`, {
                    id:this.$store.state.editor.loadedPresetID,
                    data:this.$store.state.rect.rects.childs
                })
                .then(response => {})
                .catch(e => {
                    this.errors.push(e)
                })

          
        },
        addNewPreset(){
            let id = 'new'
            this.$store.dispatch('editor/setloadedPreset',{id});

            this.newPreset_dialog = false
            console.log(this.selectedCategory, this.newPresetName)
            this.$store.dispatch('rect/clearState');

        },
        takeSelectedImage(index){
            this.dialog = false
            this.$store.dispatch('rect/changeElementBackgroundImage', {id: this.activeRect, image:index.src});
        },
        myFunc(e){
            if (this.activeRect === null) {
                return
            }

            this.$store.dispatch('rect/changeFont', {id: this.activeRect, font:e.family});
            
        },
        removeElement:function(index){
            if (this.activeRect === null) {
                return
            }
            this.$store.dispatch('rect/removeElement', {id: this.activeRect});
        },
        loadData:function(id){
            this.isLoading = true
                
            this.$store.dispatch('editor/setloadedPreset',{id});

            return fetch("http://localhost:3000/elements/"+id)
                .then(res => res.json())
                .then(res =>(this.$store.dispatch('rect/reloaddata', res)))
                .then(this.isLoading = false);
        },
        onSelectImage:function(index){
           
            this.$store.dispatch('rect/changePageBackgroundImage', {file: index.filename, id:index.id});
            
        },
        toggleYLock() {
            if (this.activeRect === null) {
                return
            }

            this.$store.dispatch('rect/changeYLock', {id: this.activeRect});
        },
        toggleXLock() {
            if (this.activeRect === null) {
                return
            }

            this.$store.dispatch('rect/changeXLock', {id: this.activeRect});
        },

        toggleAspect() {
            if (this.activeRect === null) {
                return
            }
            if (!this.$store.state.rect.rects.childs[this.activeRect].aspectRatio) {
                this.$store.dispatch('rect/setAspect', {id: this.activeRect});
            } else {
                this.$store.dispatch('rect/unsetAspect', {id: this.activeRect});
            }
        },

        toggleParentLimitation() {
            this.$store.dispatch('rect/toggleParentLimitation', {id: this.activeRect});
        },

        toggleResizable() {
            this.$store.dispatch('rect/toggleResizable', {id: this.activeRect});
        },

        toggleDraggable() {
            this.$store.dispatch('rect/toggleDraggable', {id: this.activeRect});
        },

        toggleSnapToGrid() {
            this.$store.dispatch('rect/toggleSnapToGrid', {id: this.activeRect});
        },

        toTop() {
            this.$store.dispatch('rect/changeZToTop', {id: this.activeRect});
        },

        toBottom() {
            this.$store.dispatch('rect/changeZToBottom', {id: this.activeRect});
        },

        changeMinWidth(ev) {
            let minw = parseInt(ev.target.value);
            if (typeof minw !== 'number' || isNaN(minw)) {
                minw = 1;
            }

            if (minw <= 0) {
                minw = 1;
            } else if (minw > this.$store.state.rect.rects.childs[this.activeRect].width) {
                minw = this.$store.state.rect.rects.childs[this.activeRect].width;
            }

            ev.target.value = minw;

            this.$store.dispatch('rect/setMinWidth', {id: this.activeRect, width: minw});
        },

        changeMinHeight(ev) {
            let minh = parseInt(ev.target.value);

            if (typeof minh !== 'number' || isNaN(minh)) {
                minh = 1;
            }

            if (minh <= 0) {
                minh = 1;
            } else if (minh > this.$store.state.rect.rects.childs[this.activeRect].height) {
                minh = this.$store.state.rect.rects.childs[this.activeRect].height;
            }

            ev.target.value = minh;

            this.$store.dispatch('rect/setMinHeight', {id: this.activeRect, height: minh});
        },

        changeTop(ev) {
            let top = parseInt(ev.target.value);

            if (typeof top !== 'number' || isNaN(top)) {
                top = this.$store.state.rect.rects.childs[this.activeRect].top;
                ev.target.value = top;
                return
            }

            this.$store.dispatch('rect/setTop', {id: this.activeRect, top: top});
        },

        changeLeft(ev) {
            let left = parseInt(ev.target.value);

            if (typeof left !== 'number' || isNaN(left)) {
                left = this.$store.state.rect.rects.childs[this.activeRect].left;
                ev.target.value = left;
            }

            this.$store.dispatch('rect/setLeft', {id: this.activeRect, left: left});
        },

        changeWidth(ev){
            let width = parseInt(ev.target.value);

            if (typeof width !== 'number' || isNaN(width)) {
                width = this.$store.state.rect.rects.childs[this.activeRect].width;
                ev.target.value = width;
            }

            this.$store.dispatch('rect/setWidth', {id: this.activeRect, width: width});
        },

        changeHeight(ev){
            let height = parseInt(ev.target.value);

            if (typeof height !== 'number' || isNaN(height)) {
                height = this.$store.state.rect.rects.childs[this.activeRect].height;
                ev.target.value = height;
            }

            this.$store.dispatch('rect/setHeight', {id: this.activeRect, height: height});
        }
    }
}
</script>
