import { computed } from 'vue'
import { useStore } from 'vuex'

const UseCharactersChapter = ( character ) =>{
    const store = useStore()
    const episodes = Object.values(character.episode)
    const chapters = []
    episodes.forEach( ep =>{
        let id=parseInt(ep.slice(-2))
        if( !Number.isInteger(id) ){
            id = parseInt(ep.slice(-1))
            let getEpisode = computed( ()=>store.getters['episodes/getEpisodeById'](id) )
            chapters.push(getEpisode.value)
        } else{
            let getEpisode = computed( ()=>store.getters['episodes/getEpisodeById'](id) )
            chapters.push(getEpisode.value)
        }
    } )
    return{
        chapters
    }
}
export default UseCharactersChapter