import types from './mutation-types';

export default {
    setloadedPreset({commit},{id}){
        commit(types.LOADED_PRESET,id);
    }
};
