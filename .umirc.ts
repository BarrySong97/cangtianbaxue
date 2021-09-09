import { defineConfig } from 'umi';
import proxy from './proxy';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  proxy: proxy['dev'],
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/fiction', component: '@/pages/fiction' },
  ],
  fastRefresh: {},
});
