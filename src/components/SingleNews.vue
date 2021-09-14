<template>
  <div class="cardApp">
    <div class="card-body">
        <!-- <router-link :to="{name: 'View', params: { id: post.id}}">
           <p><b>Title : </b> {{post.title}} </p>  
         </router-link>  -->
      <p><b>Title : </b> {{post.title}} </p>      
      <p><b>Content : </b> {{snippet}} </p>
    </div>   
  </div>
</template>
<script>
import { computed } from "@vue/reactivity"

export default {
    props: ['post', 'postlist', 'key'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.content.substring(0,100) + '...'
        })
        return { snippet }
    }
}
</script>

<style>
 .cardApp {
    display: block; 
    text-align: center;
    height: 250px;   
    border: 2px solid rgba(0,0,0,.125);    
    background-color: rgb(212, 201, 201);
    margin-top: 5px; 
    margin-left: 500px;
    width: 900px;
 }

 .card-body {
   text-align: center;
 }
 .card-body p {
   text-align: center;
 }
</style>