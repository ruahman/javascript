import { createStore } from 'vuex';

interface IState {
  count: number;
}

const delay = () => new Promise(res => setTimeout(res, 1000));

const posts = {
  namespaced: true,

  state() {
    return {
      count: 0,
    };
  },

  mutations: {
    increment(state: IState, payload: number) {
      state.count += payload;
    },
  },

  actions: {
    async fetchPosts(ctx: any, payload: number) {
      await delay();
      console.log(payload);
      ctx.commit('increment', payload);
    },
  },

  // computed values for state
  getters: {
    isEven(state: IState) {
      return state.count % 2 === 0;
    },
  },
};

export const store = createStore({
  modules: {
    posts,
  },
});
