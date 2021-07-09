<template>
  <li class="text-left py-4 flex items-center">
    <p class="">
      {{university.name}}
    </p>
    <i v-if="university.like" class="el-icon-circle-check text-blue-500 mx-8"></i>
    <i v-else class="el-icon-circle-close text-red-500 mx-8"></i>
    <el-button type="primary" size="small" @click="changeLikeStatus(!university.like, index)">{{showLike(university.like)}}</el-button>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    university: Object,
    index: Number
  },
  methods: {
    showLike(like) {
      //display 'Unlike' for already been liked university
      return like? 'Unlike' : 'Like'
    },

    changeLikeStatus(value, index) {
      //emit to List component
      this.$emit('toggle-like', {'value': value, 'index': index});
    }
  }
}
</script>