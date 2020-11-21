import HelloWorld from './components/HelloWorld.vue'
import WordCounter from './pages/WordCounter.vue'

export default [
  { path: '/', redirect: '/word-count' },
  { path: '/word-count', component: WordCounter, name: 'word-count' },
]
