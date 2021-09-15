<template>
  <div class="News">
    <form @submit.prevent="addNews">
      <label>Title :</label>
      <input type="title" required v-model="title"> 
      <label>Content :</label>
      <input type="content" required v-model="content"> 
      <div class="submit">
        <button name="button">Submit</button>
      </div>
    </form>
    <!-- <hr/> -->
    <DisplayNews :newslist="newslist"/>      
  </div>

</template>

<script>
import { ref } from '@vue/reactivity';
import DisplayNews from '../components/DisplayNews.vue';

export default {
  name: 'News',
  components: { DisplayNews },
  setup() {
    const id = ref(0);
    const title = ref('');
    const content = ref('');

    const newslist = ref([]);

    const addNews = () => {
      newslist.value.push({id: id.value, title :title.value, content:content.value}),
      id.value++
      title.value = '',
      content.value = ''
    }    
    return { title, content, newslist, addNews }
  }
}
</script>

<style>
  form {
      max-width: 620px;
      margin: 10px auto;
      background: white;
      text-align: left;
      padding: 40px;
      border-radius: 10px;
  }
  label {
      color: #aaa;
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.9em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
  }
  input {
      display: block;
      padding: 10px 6px;
      width: 600px;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: #555;
      background: rgb(238, 234, 234);
  }
  button {
      background: #0b6dff;   
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: white;   
      width: 100px;
      border-radius: 20px;
  }
  .submit {
      text-align: center;
  }
</style>
