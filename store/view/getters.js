import { MOBILE, SIDEBAR_MINI, SIDEBAR_COLLAPSED, BANNER, PATCH_RESTARTING, POLLING_ID } from './constants';

export default {
    [MOBILE](state) {
        return state.mobile;
    },
    [BANNER](state) {
        return state.banner;
    },
    [SIDEBAR_MINI](state) {
        return state.sidebar.mini;
    },
    [SIDEBAR_COLLAPSED](state) {
        return state.sidebar.collapsed;
    },
    [PATCH_RESTARTING](state) {
        return state.patchRestarting
    },
    [POLLING_ID](state) {
        return state.pollingID;
    }
};
