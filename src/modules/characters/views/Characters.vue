<template>
  <div class="container">
        <div class="img">
            <img :src="character.image" alt="character">
        </div>
        <div class="text">
            <h2 class="text__subititle">{{ character.name }}</h2>
            <p class="text__character"><span>Estatus:</span> {{ character.status }} </p>
            <p class="text__character"><span>Sexo:</span> {{ character.gender }}</p>
            <a 
              class="text__character link"
              @click="goLocation(character.origin.url)"
            >
            <span>Origen:</span> {{ character.origin.name }}
            </a>
            <a 
              class="text__character link"
              @click="goLocation(character.location.url)"
            >
            <span>Locación:</span> {{ character.location.name }}
            </a>
            <back class="back"></back>
            <a 
              class="button"
              @click="scroll"
            >Episodios</a>
        </div>
    </div>
    <div class="episodes">
        <h4>Episodios donde aparece {{ character.name }}</h4>
        <div class="episodes__container">
          <div 
            class="episodes__element"
            v-for="chapter  in chapters" :key="chapter.id"
            @click="goEpisode(chapter.id)"
          >
            <p class="chapter-episode">{{ chapter.episode }}</p>
            <p class="chapter-name">{{ chapter.name }}</p>
          </div>
        </div>
    </div>
</template>

<script>
import { useRoute ,useRouter } from 'vue-router'
import { defineAsyncComponent } from '@vue/runtime-core'
import episodesGroup from '@/modules/episodes/composables/UseEpisodesGroup'
import characterComposable from '@/modules/characters/composables/UseCharacter.js'
import chapterComposable from '@/modules/characters/composables/UseCharactersChapter.js'
export default {
  components:{
         Back: defineAsyncComponent( ()=> import('@/modules/episodes/components/BackBoton.vue'))
    },
    setup(){
        const route = useRoute()
        const router = useRouter()
        const id = route.params.id - 1
        const { character } = characterComposable( id )
        const { chapters } = chapterComposable( character )
        const { goEpisode } = episodesGroup()
        return{
          character,
          chapters,
          goEpisode,
          scroll: ()=>{
            //desplaza 100px hacia abajo
            window.scroll(0, 600)
          },
          goLocation:( url )=>{
            if(url){
             let id=parseInt(url.slice(-2))
              if(!Number.isInteger(id)){
                id=parseInt(url.slice(-1))
              }
              router.push({ name:'location-option' ,params:{ id } })
            }else{
              router.push({ name:'character-group'})
            }
            
          }
        }
    }
}
</script>

<style lang="scss" scoped>
  .container{
        width: 50%;
        height: 400px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid rgba(255, 255, 255, 0.199);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        position: relative;
        margin-top: 50px;
        backdrop-filter: blur(3px);
        background-color: rgba(0, 0, 0, 0.5);
        margin-bottom: 70px;
    }
    .img{
        width: 30%;
        height: 80%;
        position: absolute;
        top: 10%;
        left: 20px;
        z-index: 10;
        img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
   .button{
            position: absolute;
            bottom: 10px;
            right: 0;
            text-decoration: none;
            padding: 11px 30px;
            width: 150px;
            background-image: linear-gradient(to right,rgb(0, 209, 246),#42b983);
            border: none;
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
                transform: rotate(0.5turn);
            }
    }        
    .text{
        position: relative;
        width: 55%;
        height: 90%;
        margin-top: 2%;
        margin-left: 40%;
        color: #fff;
        .back{
          position: absolute;
          right: 0 !important;
          bottom: 10px;
        }
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
        .text__character{
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
            .character{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid #42b983;
                background-color: transparent;
            }
        }
        .link{
          text-decoration: none;
          color: #fff;
          cursor: pointer;
          display: block;
          margin-top: 15px;
        }
    }
    .episodes{
      width: 75vw;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid rgb(94, 3, 112);
      backdrop-filter: blur(3px);
      h4{
        font-size: 1.6rem;
        font-weight: bold;
        color:#42b983;
        text-shadow: 0px 0px 2px #fff;
        padding-left: 20px;
      }
    }
    .episodes__container{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .episodes__element{
        width: 20%;
        margin: 20px;
        height: 150px;
        border: 1px solid rgb(94, 3, 112);
        color: #fff;
        cursor: pointer;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        .chapter-episode{
          font-size: 1.4rem;
        }
      }
    }
     @media screen and (max-width: 780px){
       .container{
        width: 90%;
        height: 300px;
      }
       .episodes{
        width: 90vw;
      }
      .episodes__container{
        justify-content: space-around;
      .episodes__element{
        width: 30%;
        margin: 5px;
      }
    }
    }
    @media screen and (max-width:500px){
      .container{
        width: 90%;
        height: 300px;
      }
      .img{
        img{
            display:none;
        }
      }
      .text{
        width: 90%;
        margin-left: 5%;
      }
      .button{
            padding: 5px 15px;
            width: 120px;
            font-size: 0.8rem;
            img{
                display: none;
            }
        }
      .episodes{
        width: 90vw;
      }
      .episodes__container{
        justify-content: space-around;
      .episodes__element{
        width: 45%;
        margin: 5px;
      }
    }
    }      
</style>