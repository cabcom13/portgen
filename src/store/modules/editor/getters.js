export default {
    getActive: state => {
        for (let i = 0, l = state.rects.childs.length; i < l; i++) {
            let rect = state.rects.childs[i];

            if (rect.active) {
                return i;
            }
        }
        return null;
    }
}