import axios from "axios"
let link="https://rickandmortyapi.com/api/character?page=2"
export const getCharacters= async( {commit} ) =>{
    const { data } = await axios.get('https://rickandmortyapi.com/api/character')
    commit('setCharacters',data.results)
}
export const getCharacterIndividual = async({ commit } ,url='https://rickandmortyapi.com/api/character/1') =>{
    const { data } = await axios.get(url)
    commit('setCharacterIndividual',data)
}
export const addCharacters = async({ commit }) =>{
    const { data } = await axios.get(link)
    link=data.info.next
    commit('addCharacter',data.results)
}