<template>
  <li class="text-left py-4 flex items-center">
    <p class="">
      {{university.name}}
    </p>
    <i v-if="university.like" class="el-icon-circle-check text-blue-500 mx-8"></i>
    <i v-else class="el-icon-circle-close text-red-500 mx-8"></i>
    <el-button type="primary" size="small" @click="$emit('toggleLike')" v-html="showLike(university.like)"></el-button>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    university: Object
  },
  methods: {
    showLike(like) {
      return like? 'Unlike' : 'Like'
    }
  }
}
</script>