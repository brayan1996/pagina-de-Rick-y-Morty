<template>
  <nav 
    :class="{ scroll:verification}"
    class="nav">
    <p>RYM</p>
    <div class="router">
      <router-link to="/">Inicio</router-link> |
      <!-- aqui el name:'episodes-group' para hacer funcionar el routerview de episodes-->
      <router-link :to="{ name:'episodes-group' }">Episodios</router-link> |
      <router-link :to="{ name:'character-group' }">Personajes</router-link>  |
      <router-link :to="{ name:'location-group' }">Locaciones</router-link> 
    </div>
  </nav>
  <router-view/>
</template>
<script>
import { ref } from 'vue'
  // window.addEventListener('scroll', ()=>{
  //   let scroll = window.pageYOffset
  //   console.log(scroll)
  // })
  export default{
    setup(){
      let verification = ref(false)
      window.addEventListener('scroll', ()=>{
        let scroll = window.pageYOffset
        if(scroll>0){
          verification.value=true
        }else{
          verification.value=false
        }
      })
      return{
        verification
      }
    }
  }
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  width: 94%;
  height: 50px;
  margin-left: 3%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  a {
    font-weight: bold;
    font-size: 1.1rem;
    color: #fff;
    padding-left: 15px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  p{
    font-size: 1.5rem;
  }
  
}
.scroll{
    background-color: rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width:500px){
    .nav{
      width: 100%;
      p{
        display: none;
      }
      a{
        font-size: 1rem;
        padding-left: 10px;
      }
    }
  }
</style>

