const store = new Vuex.Store({
	state: {
		nowPage: "",
		petData: ""
	},
	getters: {},
	mutations: {
		SET_PAGE(state, str) {
			state.nowPage = str;
		},
		SET_PETDATA(state, obj) {
			state.petData = obj;
		}
		// SET_CITY(state, str) {
		// 	state.city = str
		// },
	},
	actions: {
		PAGE({ commit }, str) {
			commit("SET_PAGE", str);
		},
		SET_PETDATA_ACTION({ commit }, petObj) {
			commit("SET_PETDATA", petObj);
		}
	}
});
