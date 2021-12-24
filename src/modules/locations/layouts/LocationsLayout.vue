<template>
  <div class="main">
    <h2>Locaciones de Rick y Morty</h2>
    <router-view />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
   setup(){
        const store = useStore()
        const results =computed( ()=>store.state.locations.location )
        if(results.value.length==0){
          store.dispatch('episodes/getEpisodes')
          store.dispatch('characters/getCharacters')
          store.dispatch('locations/getLocations')
        }  
    }
}
</script>

<style lang="scss" scoped>
  .main{
    width: 100vw;
    min-height: 100vh;
    background-image: url('../assets/locations.jpg');
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    background-color: #000;
  }
  h2{
     margin: 0;
      padding-top: 50px;
      color: #fff;
      text-align: center;
      font-size: 2.5rem;
      font-weight: bolder;
  }
   @media screen and (max-width: 750px){
       .main{
         h2{
         font-size: 1.5rem;
        }
      } 
    }
    @media screen and (max-width:500px){
      .main{
         h2{
         font-size: 1.5rem;
        }
      }
    }
</style>