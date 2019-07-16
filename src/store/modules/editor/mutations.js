import {
    LOADED_PRESET,
 } from './mutation-types';

export default {
    [LOADED_PRESET](state, id) {
      
        state.loadedPresetID = id;
    }

};