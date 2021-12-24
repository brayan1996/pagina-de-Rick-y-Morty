<template>
    <!-- {{ chapter.name }} -->
    <div class="container">
        <div class="img">
            <img src="@/modules/episodes/assets/chapter.png" alt="chapter">
        </div>
        <div class="text">
            <h2 class="text__subititle">{{ chapterData.name }}</h2>
            <p class="text__chapter"><span>Capitulo:</span> {{ chapterData.episode }} </p>
            <p>Comedia animada que narra las aventuras de un científico loco Rick Sánchez, que regresa después de 20 años para vivir con su hija, su marido y sus hijos Morty y Summer.</p>
            <p class="text__chapter"><span>Estreno:</span> {{ chapterData.air_date }}</p>
            <p class="text__characters">Personajes que aparecen:</p>
            <div class="characters__contain">
                <div 
                    class="character"
                    :title="character.name"
                    v-for="character in characters"
                    :key="character.id"
                    @click="goCharacter(character.id)"
                >
                <img :src="character.image" :alt="character.name">
                </div>
                
            </div>
            <a href="https://cuevana3.io/serie/rick-y-morty"
              target="_blank"
              class="watch">
                  <span>Ver ahora</span>
                  <img src="@/assets/derecha.png" alt="derecha">
            </a>
            <Back/>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
         Back: defineAsyncComponent( ()=> import('../components/BackBoton.vue'))
    },
    setup(){
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        store.commit('characters/clearCharacterIndividual')
        const id = route.params.id - 1
        const results = computed( ()=>store.state.episodes.results )
        const chapterData = results.value[id]
        const chapter = Object.values(chapterData.characters)
        const characters = computed( ()=>store.state.characters.characterIndividual)
        chapter.forEach( chap =>{
            store.dispatch('characters/getCharacterIndividual',chap)
        } )
        return{
            chapterData,
            characters,
            goCharacter: (id)=>{
                router.push({ name:'character-option' ,params:{ id } })
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .container{
        width: 55%;
        min-height: 400px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid rgba(255, 255, 255, 0.199);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        position: relative;
        margin-top: 50px;
        backdrop-filter: blur(3px);
        background-color: rgba(0, 0, 0, 0.5);
    }
    .img{
        width: 30%;
        height: 100%;
        position: absolute;
        top: -20px;
        left: 20px;
        z-index: 10;
        img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .text{
        position: relative;
        width: 55%;
        min-height: 90%;
        margin-top: 2%;
        margin-left: 40%;
        color: #fff;
        p{
            margin-top: 0;
            margin-bottom: 10px;
        }
        .text__subititle{
            margin-top: 0;
            margin-bottom: 15px;
            font-size: 1.8rem;
            color: #42b983;
        }
        .text__chapter{
            font-weight: normal;
            span{
                color: #42b983;
                font-size: 1.1rem;
                font-weight: bold;
            }
        }
        .characters__contain{
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-bottom: 65px;
            .character{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid #42b983;
                background-color: transparent;
                cursor: pointer;
                overflow: hidden;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .watch{
            position: absolute;
            bottom: 10px;
            right: 0;
            text-decoration: none;
            padding: 10px 30px;
            width: 150px;
            background-image: linear-gradient(to right,rgb(0, 209, 246),#42b983);
            border: 1px solid #42b983;
            border-radius: 4px;
            color: #fff;
            display: flex;
            justify-content: space-around;
            transition: all 600ms;
            &:hover{
                cursor: pointer;
                background-image: linear-gradient(transparent,transparent);
                outline: 1px solid #42b983;
                transition: all 600ms;
            }
            img{
                display: inline-block;
                width: 20px;
                filter: invert(1);
            }
    }  
    @media screen and (max-width: 780px){
        .container{
            width: 90%;
        }
    }
    @media screen and (max-width:500px){
      .container{
         width: 90%;
      }
      .img{
            display: none;
        }
        .text{
            width: 90%;
            margin-left: 5%;
        }
        .watch{
            padding: 5px 15px;
            width: 120px;
            font-size: 0.8rem;
            img{
                display: none;
            }
        }
    }
</style>