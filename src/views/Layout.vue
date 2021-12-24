<template>
  <article class="main">
      <div class="content">
          <div class="box-gender">
              <div class="gender">Acción</div>
              <div class="gender">Fantasia</div>
              <div class="gender">Ciencia Ficción</div>
          </div>
          <h1>Rick y Morty</h1>
          <p class="subtitle"> 5 temporadas 51 capitulos</p>
          <p class="description">
              Después de haber estado desaparecido durante casi 20 años, Rick Sánchez llega de imprevisto a la puerta de la casa de su hija Beth y se va a vivir con ella y su familia utilizando el garaje como su laboratorio personal.
          </p>
          <div class="watch">
              <a href="https://www.youtube.com/watch?v=Tm7dFM_v57A&ab_channel=HBOMaxLatinoam%C3%A9rica" class="watch__option"
              target="_blank">
                <span>Trailer</span>
                <img src="@/assets/derecha.png" alt="derecha">
              </a>
              <a href="https://cuevana3.io/serie/rick-y-morty"
              target="_blank"
              class="watch__option">
                  <span>Ver ahora</span>
                  <img src="@/assets/derecha.png" alt="derecha">
              </a>
          </div>
          <div class="score">
              <div class="score__element">
                  <p class="score__name">90%</p>
                  <p >rottentomatoes</p>
              </div>
              <div class="score__element">
                  <p class="score__name">9.2</p>
                  <p>IMDB</p>
              </div>
              <div class="score__element">
                  <p class="score__name">91/100</p>
                  <p>General</p>
              </div>
          </div>
      </div>
      
  </article>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        store.dispatch('episodes/getEpisodes')
        store.dispatch('characters/getCharacters')
        store.dispatch('locations/getLocations')
    }
}
</script>

<style lang="scss" scoped>
    .main{
         position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        background-image: url('../assets/rick.jpg');
        background-size: cover;
        background-color: #000;
        display: flex;
        align-items: center;
        color: #fff;
        h1{
            margin-top: 10px;
            margin-bottom: 0;
            color: #fff;
            text-align: start;
            font-size: 3.5rem;
            font-weight: bolder;
        }
        .subtitle{
            margin: 0;
            font-weight: bold;
        }
        .description{
            padding: 10px 20px 0 0;
            color: #fff;
        }
    }
    .content{
        width: 40%;
        height: 70vh;
        margin-left: 5%;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);
    }
    .box-gender{
        width: 70%;
        display: flex;
        justify-content: space-between;
        .gender{
            border: 1px solid #42b983;
            border-radius: 5px;
            padding: 0.5em 0.8em;
            color: #fff;
            &:hover{
                cursor: pointer;
            }
        }
    }
    .watch{
        width: 60%;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .watch__option{
            text-decoration: none;
            padding: 0.8em 2em;
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
            }
        }
    }
    .score{
        width: 70%;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
            p{
                text-align: center;
                margin: 5px;

            }
            .score__name{
                font-size: 1.5rem;
                font-weight: bolder;
            }
    }
    @media screen and (max-width: 780px){
        .content{
            width: 80%;
        }
        .box-gender{
            width: 90%;
        }
        .watch{
            width: 90%;
        }
        .score{
            width: 90%;
        }

    }
    @media screen and (max-width:500px){
        .content{
            width: 90%;
            height: 80vh;
            h1{
                font-size: 1.5rem;
            }
        }
        .box-gender{
            width: 100%;
            .gender{
                font-size: 0.8rem;
            }
        }
        .watch{
            width: 100%;
        }
        .score{
            width: 100%;
        }
    }
</style>