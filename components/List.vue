<template>
  <div class="relative flex items-top justify-center min-h-screen bg-blue-200 sm:items-center sm:pt-0">

    <div class="w-1/2 mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center pt-8 sm:pt-0">
        <p class="font-mono text-4xl">This is List page</p>
      </div>
      <div class="w-full text-center mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <NuxtLink to="/">
          <el-button class="w-2/3" type="primary">Home page</el-button>
        </NuxtLink>
        
        <div v-if="lists.length>0">
          <ul>
            <li v-for="(uni, index) in lists" :key="index">{{uni.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    lists() {
      return this.$store.getters['list/getLists']
    }
  },

  created() {
    //when not get university list from store, call API
    if(this.lists.length === 0) {
      this.$axios.get('search?country=New+Zealand')
      .then(res => {
        //add 'like' param to each university
        const universities = res.map(uni => {
          return {
            ...uni,
            like: false
          }
        });

        //save in store
        this.$store.commit('list/setLists', universities)
      })
    }
    
  },

}
</script>

