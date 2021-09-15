<template>
  <div class="news-list">
    <div v-for="(news, index) in newslist" :key="news.title">
      <SingleNews :post="news" :postlist="newslist" :key="index"/>
      <div class=btn> 
        <router-link :to="{name : 'View', params: {id: news.id, title: news.title, content: news.content}}">
           <button>View</button>   
        </router-link>
        <button @click="toggleModal">Delete</button>                  
        <div v-if="showModal">
          <MessageDlg :ndx="index">
            <h1> Confirmation </h1>
            <p>Are you sure you want to delete</p>
            <p> {{index}} </p>
            <template v-slot:links>
              <button @click="toggleModal" type="button">Close</button>   
              <button @click="removeNews(ndx)">Confirm</button> 
            </template>
          </MessageDlg> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleNews from "./SingleNews.vue";
import MessageDlg from "./MessageDlg.vue";
import { ref } from "@vue/reactivity";

export default {
    props: [ 'newslist' ],
    components: { SingleNews, MessageDlg },
    setup(props) {
        const showModal = ref('')
        const removeNews = (index) => {
            props.newslist.splice(index, 1)
            showModal.value = false
        }

        const toggleModal = () => {
          showModal.value = !showModal.value
        }
       return { showModal, removeNews, toggleModal }     
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