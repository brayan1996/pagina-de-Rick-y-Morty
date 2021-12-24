<template>
    <div class="characters">
        <div 
            class="characters__element"
            v-for="char in characters" :key="char.id"
        >
            <img 
                :src="char.image" 
                alt="imagen"
                class="characters__img"
                @click="goCharacter(char.id)">
            <p>{{char.name}}</p>
        </div>
        <div 
            class="add"
            @click="addCharacters"
        >
            <span>aumentar</span>
            <img src="../../episodes/assets/back.png" alt="flecha abajo">
        </div>
    </div>
    
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from "vue-router";
export default {
    setup(){
        const store = useStore()
        const router = useRouter()
        const characters = computed( ()=>store.state.characters.characters )
        return{
            characters,
            goCharacter: (id)=>{
                router.push({ name:'character-option' ,params:{ id } })
            },
            addCharacters: ()=>{
                store.dispatch('characters/addCharacters')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .characters{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 2%;
        row-gap: 20px;
        .characters__element{
            backdrop-filter: blur(3px);
            background-color: rgba(0, 0, 0, 0.192);
            cursor: pointer;
            outline: 1px solid #fff;
            font-size: 1.2rem;
            text-align: center;
            font-weight: bolder;
            color: #fff;
            .characters__img{
                display: block;
                width: 100%;
                height: 90%;
            }
            p{
                margin: 0;
            }
        }
        padding-bottom: 50px;
        // margin-bottom: 50px;
    }
    .add{
        padding: 8px 20px;
        width: 150px;
        border: 1px solid #fff;
        margin-right: auto;
        margin-left: auto;
        grid-column-start: 3;
        font-size: 1.1rem;
        border-radius: 4px;
        color: #fff;
        display: flex;
        justify-content: space-around;
        transition: all 600ms;
        &:hover{
            cursor: pointer;
            border: 1px solid #42b983;
            color: #42b983;
            transition: all 600ms;
        }
        img{
            display: inline-block;
            width: 20px;
            filter: invert(1);
            transform: rotate(270deg);
        }
    }
     @media screen and (max-width: 780px){
        .characters{
            grid-template-columns: repeat(4, 1fr);
            .characters__element{
                font-size: 1rem;
                .characters__img{
                    height: 85%;
                }
            }
      }
      .add{
           grid-column-start: 2;
           grid-column-end: 4;
       }
    }
    @media screen and (max-width:500px){
      .characters{
        grid-template-columns: repeat(3, 1fr);
        .characters__element{
            font-size: 1rem;
            .characters__img{
                height: 75%;
            }
        }
      }
      .add{
        width: 100%;
        margin-top: 25%;
        height: 50%;
        font-size: 1rem;
        align-items: center;
        // img{
        //     display: none;
        // }
    }
    }
</style>