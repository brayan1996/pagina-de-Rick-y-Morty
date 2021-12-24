export const getCharacterById = ( state) => (id=1)=>{
    return state.characters.find( char =>char.id==id )
}