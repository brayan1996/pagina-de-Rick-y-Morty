import { createStore } from 'vuex'
import episodes from '@/modules/episodes/store/episodes'
import characters from '@/modules/characters/store'
import locations from '@/modules/locations/store'
export default createStore({
  modules:{
    episodes,
    characters,
    locations
  }
})
