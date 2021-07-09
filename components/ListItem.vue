<template>
  <li>
    {{university.name}}
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    university: Object
  }
}
</script>