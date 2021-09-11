import { defineConfig } from 'umi';
import proxy from './proxy';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  proxy: proxy['dev'],
  routes: [
    { path: '/play', component: '@/pages/video-play' },
    { path: '/fictionChapter', component: '@/pages/fiction-read' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/fiction', component: '@/pages/fiction' },
        { path: '/tv', component: '@/pages/tv' },
        { path: '/anime', component: '@/pages/anime' },
        { path: '/comic', component: '@/pages/comic' },
        { path: '/test', component: '@/pages/test-page' },
      ],
    },
  ],
  fastRefresh: {},
});
