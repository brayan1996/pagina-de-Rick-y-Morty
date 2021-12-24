import axios from "axios"
let link ="https://rickandmortyapi.com/api/location?page=2"
export const getLocations = async ( {commit} ) =>{
    const { data } = await axios.get('https://rickandmortyapi.com/api/location')
    commit('setLocations' ,data.results)
}
export const addLocations = async({ commit })=>{
    const { data } = await axios.get(link)
    link=data.info.next
    commit('addLocation',data.results)
}
export const getLocationIndividual = async ( {commit},url="https://rickandmortyapi.com/api/location/1" ) =>{
    const { data } = await axios.get(url)
    commit('getLocationCharacter',data)
}