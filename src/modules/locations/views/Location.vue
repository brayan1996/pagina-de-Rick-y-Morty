<template>
  <div class="location">
    <h3>{{ locationIndividual.name }} </h3>
    <p> <span>Tipo :</span> {{ locationIndividual.type }}</p>
    <p><span>Dimensión :</span> {{ locationIndividual.dimension }}</p>
    <p><span>Residentes:</span></p>
    <div class="residents-container">
      <div 
        class="resident"
        v-for="character in characters"
        :key="character.id"
        @click="goCharacter(character.id)"
      >
      <img :src="character.image" :alt="character.name">
      </div>
    </div>
    <back class="back"></back>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
   components:{
         Back: defineAsyncComponent( ()=> import('@/modules/episodes/components/BackBoton.vue'))
    },
  setup(){
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    store.commit('characters/clearCharacterIndividual')
    const id = route.params.id
    let locationIndividual = computed( ()=>store.getters['locations/getLocationIndividual'](id) )
    if(!locationIndividual.value){
      locationIndividual = computed( ()=>store.getters['locations/getLocationFromCharacter'](id) )
    }
    const locationsResidents = locationIndividual.value.residents
    locationsResidents.forEach( res => {
      store.dispatch('characters/getCharacterIndividual',res)
    })
    const characters = computed( ()=>store.state.characters.characterIndividual)
    return{
      locationIndividual,
      characters,
      locationsResidents,
      goCharacter : ( id )=>{
        router.push({ name:'character-option' , params:{ id } })
      }
    }
  }
}
</script>

<style lang="scss"  scoped>
  .location{
    width: 50%;
    min-height: 350px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
    padding: 35px;
    border: 1px solid rgb(0, 0, 0,0.5);
    background-color: rgb(0, 0, 0,0.4);
    color: #fff;
    position: relative;
    h3{
      text-align: end;
      font-size: 2.5rem;
      margin-top: 0;
      margin-bottom: 10px;
      color: #42b983;
      //  background-image: linear-gradient(#42b983, rgb(80, 211, 204));
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
    p{
      font-size: 1.2rem;
      margin-top: 0;
      margin-bottom: 10px;
      span{
        font-weight: bold;
        color: #42b983;
      }
    }
  }
  .residents-container{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 20px;
      .resident{
        width: 50px;
        border-radius: 50%;
        border: 1px solid #42b983;
        overflow: hidden;
        margin: 5px;
        cursor: pointer;
        img{
          display: block;
          width: 100%;
        }  
      }
    }
    .back{
          position: absolute;
          right: 35px !important;
          left: auto;
          bottom: 10px;
        }
    @media screen and (max-width: 780px){
      .location{
          width: 80%;
      }
    }
    @media screen and (max-width:500px){
      .location{
        width: 90%;
      }
    }
</style>