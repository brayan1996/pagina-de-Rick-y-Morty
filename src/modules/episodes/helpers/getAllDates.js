import axios from "axios"
const getAllDates = async()=>{
    const results = []
    const { data } = await axios.get('https://rickandmortyapi.com/api/episode')
    data.results.forEach( res => results.push( res ) )
    let link = data.info.next
    while( link ) {
        const { data }= await axios.get(link)
        data.results.forEach( res => results.push( res ) )
        link = data.info.next
    }
    return results
}
export default getAllDates