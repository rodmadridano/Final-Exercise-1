<template>
   <div class="viewdetail">
       <h3>{{ title }}</h3>
       <p>{{ content }}</p>
   </div>   
   <div class="btn">
     <router-link to="/News">
        <button>Close</button>
     </router-link> 
     
   </div>
   
</template>

<script>
 export default {
     props: ['id', 'title', 'content'],
}
</script>

<style>
  .viewdetail {
    display: block; 
    text-align: center;
    height: 500px;   
    border: 2px solid rgba(0,0,0,.125);    
    background-color: rgb(212, 201, 201);
    margin-top: 5px; 
    margin-left: 500px;
    width: 900px;
 }

.viewdetail h3{
    text-align: left;
    word-wrap: break-word;
    margin-left: 20px;
    margin-right: 20px;
 }

 .viewdetail p{
    text-align: justify;
    word-wrap: break-word;
    margin-top: 50px; 
    margin-left: 20px;
    margin-right: 20px;
 }
</style>