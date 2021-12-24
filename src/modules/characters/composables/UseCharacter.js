import { computed } from 'vue'
import { useStore } from 'vuex'

const UseCharacter = ( id )=>{
    const store = useStore()
    let data = computed( ()=> store.state.characters.characters )
    if( data.value[id]==undefined){
        data = computed( ()=>store.state.characters.characterIndividual )
    }
    const character = data.value.find( dat =>dat.id == id+1 )
    store.commit('locations/clearLocationFromCharacteron')
    if(character.origin.url){
        store.dispatch('locations/getLocationIndividual',character.origin.url)
    }
    if(character.location.url){
        store.dispatch('locations/getLocationIndividual',character.location.url)
    }
    return{
        character
    }
}
export default UseCharacter