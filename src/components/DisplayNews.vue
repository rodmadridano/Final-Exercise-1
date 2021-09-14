<template>
  <div class="news-list">
    <div v-for="(news, index) in newslist" :key="news.title">
      <SingleNews :post="news" :postlist="newslist" :key="index"/>
      <div class=btn> 
        <!-- <router-link to="/Views"> -->
        <router-link :to="{path: '/Views', name : 'View' , params: newlist}">
           <button>View</button>   
        </router-link>
         <!-- <button type="button">View</button>    -->
         <button @click="removeNews(index)">Delete</button>                  
      </div>
    </div>
  </div>
</template>

<script>
import SingleNews from "./SingleNews.vue";
export default {
    props: [ 'newslist' ],
    components: { SingleNews },
    setup(props) {
        const removeNews = (index) => {
            props.newslist.splice(index, 1)
        }
       return { removeNews }     
    }
}
</script>

<style>
.btn {
    border: 1px solid rgba(0,0,0,.125);    
    background-color: rgb(212, 201, 201);
    height: 60px;
    margin-left: 500px;
    width: 900px;
}
.btn button{
    margin-top: 10px;
    padding: 10px;

}
</style>