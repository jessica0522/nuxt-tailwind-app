<template>
  <div class="relative flex items-top justify-center min-h-screen bg-blue-200 sm:items-center sm:pt-0">

    <div 
      v-loading.fullscreen="lists.length===0"
      element-loading-text="Loading"
      element-loading-spinner="el-icon-loading"
      class="w-2/3 mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center pt-8 sm:pt-0">
        <p data-test="title" class="font-mono text-4xl">This is List page</p>
      </div>
      <div class="w-full text-center mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <NuxtLink to="/">
          <el-button class="w-2/3" type="primary">Go to Home page</el-button>
        </NuxtLink>
        <p class="font-mono text-2xl my-4">Player lists</p>
        <div v-if="lists.length>0" class="mt-4">
          <ul class="divide-y divide-blue-500">
            <list-item v-for="(item, index) in lists" :key="index" :index="index" :item="item" @toggle-like="changeLike" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  components: {
  'list-item' : ListItem
  },

  computed: {
    lists() {
      return this.$store.getters['list/getLists']
    }
  },

  created() {
    //when not get university list from store, call API
    if(this.lists.length === 0) {
      this.queryList()
    }
  },

  methods: {
    async queryList() {
      await this.$axios.get('https://www.balldontlie.io/api/v1/players')
      .then(res => {
        // add 'like' param to each player
        const items = res.data.map(item => {
          return {
            ...item,
            like: false
          }
        }).slice(0, 10);

        //save in store
        this.$store.commit('list/setLists', items)
      })
    },

    changeLike(params) {
      const {value, index} = params
      console.log(`$emit from list item index is ${index}, value is ${value}`)

      //update like status in store
      this.$store.commit('list/changeListLike', {value, index})
    }
  }
}
</script>

