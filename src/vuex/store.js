import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
	count: 0,
	rose:"志华100岁"
}


// mutations里面放置的是操作state对象属性的方法rose
const mutations = {
	mutationsAddCount(state, n = 0) {
		return state.count += n
	},

	mutationsReduceCount(state, n = 0) {
		return state.count -= n;
	}
}

// actions是异步操作，异步操作只能是mutations中已经定义的方法

const actions = {
	actionsAddCount(context, n = 0) {
		console.log(context, n)

		setTimeout(() => {
			return context.commit("mutationsAddCount", n)
		}, 1000)
	},
	actionsReduceCount(context, n = 0) {
		console.log(context, n);
		setTimeout(() => {
			return context.commit("mutationsReduceCount", n)
		}, 1000)
	}

}


// getters获取state,他是state的一个计算属性,可以操作数据
const getters = {
	getCount(state) {
		return state.count / 2
	}
}




export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
