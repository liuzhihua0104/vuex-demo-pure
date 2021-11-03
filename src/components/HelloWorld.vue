<template>
	<div class="hello">
		<h1>{{ msg }}</h1>

		<button @click="add(1)">增加</button> {{ $store.state.count }}
		<button @click="reduce(1)">减少</button>
		<br />

		<button @click="addMap(1)">map同步mutations增加</button> {{ $store.state.count }}
		<button @click="reduceMap(1)">map同步mapMutations减少</button>
		<br />

		<button @click="addYibu(1)">异步增加</button> {{ $store.state.count }}
		<button @click="addReduceYibu(1)">异步减少</button>
		<br>

		<button @click="addYibuMap(1)">异步mapActions增加</button> {{ $store.state.count }}
		<button @click="addReduceYibuMap(1)">异步mapActions减少</button>
		<br />

		<!-- 我是getter获取的 -->
		<p class="getCount">
			$store.state.count获取：{{$store.state.count}}
		</p>
		<p class="getCount">
			this.$store.getters.getCount获取： {{ count1 }}
		</p>

		<p class="getCount">
			...mapGetters获取：{{ getCount }}
		</p>

		<p class="getCount">
			...mapState获取：{{rose}}
		</p>
	</div>
</template>

<script>
	// import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
	import {
		mapState,
		mapGetters,
		mapActions,
		mapMutations
	} from "vuex";
	export default {
		name: "HelloWorld",
		props: {
			msg: String,
		},
		computed: {
			count1() {
				return this.$store.getters.getCount;
			},
			...mapGetters(["getCount"]),
			...mapState(["rose"]),		
		},

		methods: {
			...mapMutations({
				addMap: "mutationsAddCount",
				reduceMap: "mutationsReduceCount"
			}),
			...mapActions({
				addYibuMap: "actionsAddCount",
				addReduceYibuMap: "actionsReduceCount"
			}),


			// 同步
			add(n) {
				this.$store.commit("mutationsAddCount", n);
			},

			reduce(n) {
				this.$store.commit("mutationsReduceCount", n);
			},


			// 异步
			addYibu(n) {
				this.$store.dispatch("actionsAddCount", n);
			},
			addReduceYibu(n) {
				this.$store.dispatch("actionsReduceCount", n);
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	.getCount {
		color: red;
	}
</style>
