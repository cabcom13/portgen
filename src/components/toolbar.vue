<template>
<div  @mousedown.stop>
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
<v-btn ripple color="error" @click="removeElement(activeRect)" :disabled="activeRect == null ? true: false">Löschen</v-btn>
{{color}}
{{activeRect}}
{{width}}
{{height}}

 <v-slider dark :readonly="activeRect == null ? true: false" v-model="fontsize"></v-slider>
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
                
 
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content ripple true>
            <template v-slot:header>
                <div>Hintergrundbild</div>
            </template>
            <v-card>
                <v-card-text>
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
      </v-tab-item>

</v-tabs>
</div>
</template>

<script>
// Import component
import Swatches from 'vue-swatches'
import VueSelectImage from 'vue-select-image'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
// add stylesheet
require('vue-select-image/dist/vue-select-image.css')
require('vue-loading-overlay/dist/vue-loading.css');
require("vue-swatches/dist/vue-swatches.min.css");

export default {
    components: { VueSelectImage, Swatches,  Loading },
    data: () => ({
        dataImages:[],
     
        isLoading: false,
        initialSelected:[],
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
            
          ]
    }),
    async created() {
       
        try{
            const res = await axios.get('http://localhost:3000/backgroundimages')
            this.dataImages = res.data
            this.isLoading = false
        } catch(e){
                console.error(e)
        }
        window.addEventListener('keydown', this.onkey)
 
    },
    beforeDestroy: function () {
        window.removeEventListener('keydown', this.onkey)
    },
    computed: {
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
        color(){
            return this.activeRect === null ? '' : this.$store.state.rect.rects.childs[this.activeRect].style.backgroundcolor
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
        removeElement:function(index){
            if (this.activeRect === null) {
                return
            }
            this.$store.dispatch('rect/removeElement', {id: this.activeRect});
        },
        loadData:function(id){
            this.isLoading = true
            
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
