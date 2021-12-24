<template>
  <div class="locations">
      <div 
        class="location__element"
        v-for="location in locations"
        :key="location.id"
        @click="goLocation(location.id)">
        <p>{{ location.name }}</p>
      </div>
      <div 
            class="add"
            @click="addLocations"
        >
            <span>aumentar</span>
            <img src="../../episodes/assets/back.png" alt="flecha abajo">
        </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
export default {
    setup(){
        const store = useStore()
        const router = useRouter()
        return{
            locations : computed( ()=>store.state.locations.location ),
            goLocation : (id)=>{
                 router.push({ name:'location-option' ,params:{ id } })
            },
            addLocations:()=>{
                store.dispatch('locations/addLocations')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .locations{
        width: 90%;
        margin-right: auto;
        margin-left: auto;
        padding-bottom: 50px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 2%;
        row-gap: 20px;
        .location__element{
            height: 200px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: #fff;
            background-color: rgba(0, 0, 0, 0.3);
            font-size: 1.3rem;
            padding-top: calc( 50% - 22px );
            text-align: center;
            font-weight: bold;
            cursor: pointer;
        }
    }
    .add{
        // padding: 8px 20px;
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
       .locations{
          grid-template-columns: repeat(4, 1fr);
       }
       .add{
           grid-column-start: 2;
           grid-column-end: 4;
       }
    }
    @media screen and (max-width:500px){
      .locations{
          grid-template-columns: repeat(3, 1fr);
          .location__element{
              p{
                  word-break: break-all;
              }
          }
      }
      .add{
        width: 100%;
        margin-top: 25%;
        height: 50%;
        font-size: 1rem;
        align-items: center;
        grid-column-start: 2;
        img{
            display: none;
        }
    }
    }
</style>