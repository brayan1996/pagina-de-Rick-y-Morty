import { ref ,computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
const UseEpisodesGroup = () =>{
   
    const store = useStore()
    const router = useRouter()
    const selected = ref('Temporada1')
    const results =computed( ()=>store.state.episodes.results )
    let chaptersBySeasons = ref()
    const confirm = ref( false )
    const tab=ref(0)
    const selection = ( e ,season ,i)=>{
        selected.value = e.target.textContent
        tab.value =i
        chaptersBySeasons.value  = results.value.filter( res=>res.episode.startsWith(season) )
        confirm.value = true
    }
    const activeClass = (i)=>{
        return tab.value ===i
    }
    return{
        selected,
        selection,
        chapters: computed( ()=>store.state.episodes.chapters ),
        seasons :computed( ()=>store.state.episodes.seasons ),
        firstSeason:computed( ()=>store.getters['episodes/getFirstSeason'] ),
        chaptersBySeasons,
        confirm,
        activeClass,
        goEpisode : (id)=>{
            router.push({ name:'episodes-option' ,params:{ id } })
            
        } 
    }
}
export default UseEpisodesGroup