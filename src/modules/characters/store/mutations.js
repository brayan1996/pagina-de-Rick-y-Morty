export const setCharacters =( state ,data )=>{
    state.characters = data
}
export const setCharacterIndividual = ( state ,data ) =>{
    state.characterIndividual.push(data)
}
export const clearCharacterIndividual = ( state ) =>{
    state.characterIndividual = []
}
export const addCharacter = ( state ,data )=>{
    state.characters.push(...data)
}