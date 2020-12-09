import { SET_MOBILE, SET_SIDEBAR, SET_BANNER, SET_PATCH_RESTARTING, SET_POLLING_ID } from './constants';

export default {
    [SET_MOBILE](state, payload) {
        state.mobile = payload;
    },
    [SET_BANNER](state, payload) {
        state.banner = payload;
    },
    [SET_SIDEBAR](state, payload) {
        if (payload) {
            const { mini, collapsed } = payload;

            state.sidebar.mini = mini;
            state.sidebar.collapsed = collapsed;
        }
    },
    [SET_PATCH_RESTARTING](state, payload) {
        state.patchRestarting = payload;
    },
    [SET_POLLING_ID](state, payload) {
        state.pollingID = payload;
    }
};
