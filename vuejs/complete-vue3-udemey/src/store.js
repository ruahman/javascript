import { reactive } from 'vue';

class Store {
  constructor() {
    this.state = reactive({
      posts: [
        {
          id: 1,
          title: 'Title 1',
          content: 'Learning Vue.js 1',
          likes: 10,
          hashtags: ['vue1', 'javascript1', 'composition api'],
        },
        {
          id: 2,
          title: 'Title 2',
          content: 'Learning Vue.js 2',
          likes: 11,
          hashtags: ['vue2', 'javascript2', 'composition api'],
        },
        {
          id: 3,
          title: 'Title 3',
          content: 'Learning Vue.js 2',
          likes: 11,
          hashtags: ['vue2', 'javascript2', 'composition api'],
        },
        {
          id: 4,
          title: 'Title 4',
          content: 'Learning Vue.js 2',
          likes: 11,
          hashtags: ['vue2', 'javascript2', 'composition api'],
        },
        {
          id: 5,
          title: 'Title 5',
          content: 'Learning Vue.js 2',
          likes: 11,
          hashtags: ['vue2', 'javascript2', 'composition api'],
        },
      ],
    });
  }
}

export const store = new Store();
