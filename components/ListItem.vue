<template>
  <li class="text-left py-4 flex items-center">
    <p class="uniName">
      {{`${item.first_name}  ${item.last_name}`}}
    </p>
    <i v-if="item.like" class="el-icon-circle-check text-blue-500 mx-8"></i>
    <i v-else class="el-icon-circle-close text-red-500 mx-8"></i>
    <el-button class="likeBtn" type="primary" size="small" @click="changeLikeStatus(!item.like, index)">{{showLike(item.like)}}</el-button>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: Object,
    index: Number
  },
  methods: {
    showLike(like) {
      //display 'Unlike' for already been liked item
      return like? 'Unlike' : 'Like'
    },

    changeLikeStatus(value, index) {
      //emit to List component
      this.$emit('toggle-like', {'value': value, 'index': index});
    }
  }
}
</script>