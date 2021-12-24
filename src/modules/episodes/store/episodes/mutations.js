export const setEpisodes = ( state ,episodes ) =>{
    state.results=episodes
    state.chapters = episodes.map( res=> res.episode )
    const chapts= state.chapters.map( chap =>  chap.slice( 0,3 ) )
    const seas = []
    chapts.forEach( chapt =>{
            if( !seas.includes( chapt ) ){ 
                seas.push(chapt)   
            }
    } )
    state.seasons = seas
}
