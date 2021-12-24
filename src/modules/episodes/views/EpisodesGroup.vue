<template>
    <div class="selected__options">
            <div 
               :class="{ active:activeClass(i) }"
                class="selected__option"
                v-for="(seas,i) of seasons" :key="seas"
                @click="selection($event ,seas ,i)"
            >
                <p> Temporada{{ i+1 }}</p>
            </div>
        </div>
    <div class="chapters">
        <template v-if="!confirm">
            <div 
            class="chapters__element"
            v-for="chap in firstSeason" :key="chap"
            @click="goEpisode(chap.id)">
            <p>{{ chap.episode }}</p>
        </div>
        </template>
        <div 
            class="chapters__element"
            v-for="chap in chaptersBySeasons" :key="chap"
            @click="goEpisode(chap.id)">
            <p>{{ chap.episode }}</p>
        </div>
    </div>
</template>

<script>
import EpisodeGroup from '../composables/UseEpisodesGroup'
export default {
    setup(){
        const { selected ,selection ,seasons ,results ,chapters 
        ,goEpisode ,chaptersBySeasons ,firstSeason ,confirm ,activeClass} = EpisodeGroup()
        return{
            selected,
            selection,
            seasons,
            results,
            chapters,
            firstSeason,
            chaptersBySeasons,
            confirm,
            goEpisode,
            activeClass
        }
    }
}
</script>

<style lang="scss" scoped>
    .selected__options{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-around;
        .selected__option{
            font-size: 0.8rem;
            font-weight: bolder;
            padding: 0.3em 1.4em;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
            border-radius: 1px;
            color: #fff;
            background-image: linear-gradient(transparent,transparent);
            outline: 1px solid #42b983;
            backdrop-filter: blur(5px);
            transition: all 600ms;
             &:hover{
                background-image: linear-gradient(to right,rgb(0, 209, 246),#42b983);
                border: none;
                transition: all 600ms;
            }
        }
        .active{
            background-image: linear-gradient(to right,rgb(0, 209, 246),#42b983);
            border: none;
            transition: all 600ms;
        }
    }
    .chapters{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 180px);
        column-gap: 2%;
        row-gap: 20px;
        .chapters__element{
            backdrop-filter: blur(3px);
            background-color: rgba(0, 0, 0, 0.192);
            cursor: pointer;
            border: 1px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            font-weight: bolder;
            color: #fff;
        }
        margin-bottom: 50px;
    }
    @media screen and (max-width:500px){
      .selected__options{
          flex-wrap: wrap;
          margin-bottom: 15px;
          .selected__option{
              margin-bottom: 10px;
          }
      }
      .chapters{
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 140px);
      }
    }
</style>