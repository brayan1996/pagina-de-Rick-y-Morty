export const getLocationIndividual = ( state )=>( id )=>{
    // let location 
    return state.location.find( loc => loc.id == id )
}
export const getLocationFromCharacter = ( state )=>( id )=>{
    return state.locationFromCharacter.find( loc=>loc.id == id)
}