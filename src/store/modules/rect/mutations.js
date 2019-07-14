import {
    ENABLE_ACTIVE,
    DISABLE_ACTIVE,
    ENABLE_ASPECT,
    DISABLE_ASPECT,
    ENABLE_DRAGGABLE,
    DISABLE_DRAGGABLE,
    ENABLE_RESIZABLE,
    DISABLE_RESIZABLE,
    ENABLE_PARENT_LIMITATION,
    DISABLE_PARENT_LIMITATION,
    ENABLE_SNAP_TO_GRID,
    DISABLE_SNAP_TO_GRID,
    CHANGE_ZINDEX,
    ENABLE_BOTH_AXIS,
    ENABLE_X_AXIS,
    ENABLE_Y_AXIS,
    ENABLE_NONE_AXIS,
    CHANGE_HEIGHT,
    CHANGE_LEFT,
    CHANGE_MINH,
    CHANGE_MINW,
    CHANGE_TOP,
    CHANGE_WIDTH,
    RELOADDATA,
    ADD_ELEMENT,
    REMOVE_ELEMENT,
    CHANGE_PAGE_BACKGROUND_IMAGE,
    CHANGE_FONTSIZE,
    CHANGE_BACKGROUNDCOLOR,
    CHANGE_BACKGROUNDOPACITY,
    CHANGE_FONTCOLOR,
    CHANGE_FONTALIGN
} from './mutation-types';

export default {
    [ENABLE_ACTIVE](state, id) {
        state.rects.childs[id].active = true;
    },
    [DISABLE_ACTIVE](state, id) {
        state.rects.childs[id].active = false;
    },

    [ENABLE_ASPECT](state, id) {
        state.rects.childs[id].aspectRatio = true;
    },
    [DISABLE_ASPECT](state, id) {
        state.rects.childs[id].aspectRatio = false;
    },

    [ENABLE_DRAGGABLE](state, id) {
        state.rects.childs[id].draggable = true;
    },
    [DISABLE_DRAGGABLE](state, id) {
        state.rects.childs[id].draggable = false;
    },

    [ENABLE_RESIZABLE](state, id) {
        state.rects.childs[id].resizable = true;
    },
    [DISABLE_RESIZABLE](state, id) {
        state.rects.childs[id].resizable = false;
    },

    [ENABLE_SNAP_TO_GRID](state, id) {
        state.rects.childs[id].snapToGrid = true;
    },
    [DISABLE_SNAP_TO_GRID](state, id) {
        state.rects.childs[id].snapToGrid = false;
    },

    [ENABLE_BOTH_AXIS](state, id) {
        state.rects.childs[id].axis = 'both';
    },
    [ENABLE_NONE_AXIS](state, id) {
        state.rects.childs[id].axis = 'none';
    },
    [ENABLE_X_AXIS](state, id) {
        state.rects.childs[id].axis = 'x';
    },
    [ENABLE_Y_AXIS](state, id) {
        state.rects.childs[id].axis = 'y';
    },

    [ENABLE_PARENT_LIMITATION](state, id) {
        state.rects.childs[id].parentLim = true;
    },
    [DISABLE_PARENT_LIMITATION](state, id) {
        state.rects.childs[id].parentLim = false;
    },

    [CHANGE_ZINDEX](state, payload) {
        state.rects.childs[payload.id].zIndex = payload.zIndex;
    },

    [CHANGE_HEIGHT](state, payload) {
        state.rects.childs[payload.id].height = payload.height;
    },

    [CHANGE_WIDTH](state, payload) {
        state.rects.childs[payload.id].width = payload.width;
    },

    [CHANGE_TOP](state, payload) {
        state.rects.childs[payload.id].top = payload.top;
    },

    [CHANGE_LEFT](state, payload) {
        state.rects.childs[payload.id].left = payload.left;
    },

    [CHANGE_MINH](state, payload) {

        state.rects.childs[payload.id].minh = payload.minh;
    },

    [CHANGE_MINW](state, payload) {
        state.rects.childs[payload.id].minw = payload.minw;
    },
    [RELOADDATA](state, payload) {
        // state.rects = payload
   
        state.rects.page =payload.page
        state.rects.childs = []
        for (let i = 0; i < payload.childs.length; i++) {
            state.rects.childs.push(payload.childs[i])
        }
    },
    [ADD_ELEMENT](state, payload) {
        state.rects.childs.push(payload.data)
        
    },
    [REMOVE_ELEMENT](state, id) {
   
        state.rects.childs.splice(id, 1)
    },
    [CHANGE_PAGE_BACKGROUND_IMAGE](state, payload) {
        state.rects.page.backgroundimage = payload.file
        state.rects.page.backgroundimageID = payload.id
    },
    [CHANGE_BACKGROUNDCOLOR](state, payload) {
        state.rects.page.backgroundcolor = payload
    }, 
    [CHANGE_BACKGROUNDOPACITY](state, payload) {
        console.log(payload)
        state.rects.page.opacity = payload
    }, 
    [CHANGE_FONTSIZE](state, payload) {
        state.rects.childs[payload.id].style['font-size'] = payload.fontsize
    }, 
    [CHANGE_FONTCOLOR](state, payload) {
         state.rects.childs[payload.id].style.color = payload.color
    }, 
    [CHANGE_FONTALIGN](state, payload) {
        state.rects.childs[payload.id].style['text-align'] = payload.textalign
   }, 
    
    
};