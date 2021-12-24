export const setLocations = ( state ,data) =>{
    state.location = data
}
export const addLocation = ( state ,data ) =>{
    state.location.push(...data)
}
export const getLocationCharacter=( state ,data )=>{
    state.locationFromCharacter.push(data) 
}
export const clearLocationFromCharacteron=( state )=>{
    state.locationFromCharacter = []
}