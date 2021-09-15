<template>
  <div class="news-list">
    <div v-for="(news, index) in newslist" :key="news.title">
      <SingleNews :post="news" :postlist="newslist" :key="index"/>
      <div class=btn> 
        <router-link :to="{name : 'View', params: {id: news.id, title: news.title, content: news.content}}">
           <button>View</button>   
        </router-link>
        <button @click="toggleModal" :current_ndx="index">Delete</button>                  
        <!-- <div v-if="showModal">
          <MessageDlg>
            <h1> Confirmation </h1>
            <p>Are you sure you want to delete</p>
            <p> {{current_ndx}} </p>
            <template v-slot:links>
              <button @click="toggleModal" type="button">Close</button>   
              <button @click="removeNews(current_ndx)">Confirm</button> 
            </template>
          </MessageDlg> 
        </div> -->
      </div>
    </div>
    <div v-if="showModal">
      <MessageDlg>
        <h1> Confirmation </h1>
        <p>Are you sure you want to delete</p>
        <p> {{current_ndx}} </p>
        <template v-slot:links>
          <button @click="toggleModal" type="button">Close</button>   
          <button @click="removeNews(current_ndx)">Confirm</button> 
        </template>
      </MessageDlg> 
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
        const current_ndx = ref('')

        const removeNews = (index) => {
            props.newslist.splice(index, 1)
            showModal.value = false
        }

        const toggleModal = () => {
          showModal.value = !showModal.value

        current_ndx.value =current_ndx.value
        }
       return { showModal, current_ndx, removeNews, toggleModal }     
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