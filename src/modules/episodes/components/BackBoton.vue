<template>
  <div 
    class="button"
    @click="goBack">
    <img src="../../../assets/derecha.png" alt="back button">
    <span>Atrás</span>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    setup(){
         const router = useRouter()
        return{
            goBack:()=>{
                router.back()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .button{
            position: absolute;
            bottom: 10px;
            left: 0;
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
    @media screen and (max-width:500px){
        .button{
            border: 1px solid #42b983;
            padding: 5px 15px;
            width: 120px;
            font-size: 0.8rem;
            img{
                display: none;
            }
        }
    }              
</style>