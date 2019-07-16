import types from './mutation-types';

export default {
    setloadedPreset({commit},payload){
        commit(types.LOADED_PRESET,payload.id);
    }
};
