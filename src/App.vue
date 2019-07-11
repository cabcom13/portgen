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
      <v-layout wrap>
        <v-flex xs6>
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
                :gridX="20"
                :gridY="20"
                :isActive="rect.active"
                :minw="rect.minw"
                :minh="rect.minh"
                :isDraggable="rect.draggable"
                :isResizable="rect.resizable"
                :parentLimitation="rect.parentLim"
                :snapToGrid="true"
                :aspectRatio="rect.aspectRatio"
                :class="rect.class"
                :z="rect.zIndex"
                v-on:activated="activateEv(index)"
                v-on:deactivated="deactivateEv(index)"
                v-on:dragging="changePosition($event, index)"
                v-on:resizing="changeSize($event, index)"
                >
                <div class="filler " :style="{backgroundColor:rect.style.backgroundcolor}">
                  
{{rect.text}}

                </div>
                </VueDragResize>
            </div>
        </v-flex>
        <v-flex xs6>
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
          listWidth: 0,
          listHeight: 0
      }
  },


  computed: {
      rects() {
          return this.$store.state.rect.rects
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
    .filler {
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
    }


</style>