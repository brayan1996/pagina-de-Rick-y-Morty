import axios from "axios"

export const getEpisodes = async( { commit } )=>{
    const results = []
    const { data } = await axios.get('https://rickandmortyapi.com/api/episode')
    data.results.forEach( res => results.push( res ) )
    let link = data.info.next
    while(link ) {
        const { data }= await axios.get(link)
        data.results.forEach( res => results.push( res ) )
        link = data.info.next
    }
    
    commit('setEpisodes',results)
}