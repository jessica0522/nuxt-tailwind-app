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
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$axios.get('search?country=New+Zealand')
    .then(res => {
      console.log('res', res)
    })
  },

  data() {
    return {
      defaultDialog: true
    }
  }
}
</script>

