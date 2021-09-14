<template>
   <div class="viewdetail">
       <h1>Welcome to view details</h1>
     <!-- <h3>{{ props.title}}</h3>
     <p>{{ props.content}}</p> -->
   </div>   
</template>

<script>
// import getPost from '../composables/getPost.js';

import { ref } from "@vue/reactivity"

// export default {
//     props: ['id'],
//     setup(props) {
//        const {post, error, load} = getPost(props.id)

//        load()

//        return { post, error }
//     }
// }
// import DisplayNews from '../components/DisplayNews.vue';
export default {
   props: ['newlist'],
   setup(props) {
       title = ref('')
       content = ref('')
       title.value = newlist.title
       content.value = newlist.content

       return { title, content }
   }
}
</script>

<style>
 
</style>