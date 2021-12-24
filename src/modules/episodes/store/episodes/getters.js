
export const getChapterByEpisode = ( state ) => ( episod='S01E01') =>{
    return state.results.find( res => res.episode==episod )
}
export const getFirstSeason= ( state ) =>{
    return state.results.filter( res=>res.episode.startsWith('S01') )
}
export const getEpisodeById = ( state ) => ( id=1 ) =>{
    return state.results.find( res=>res.id==id )
}