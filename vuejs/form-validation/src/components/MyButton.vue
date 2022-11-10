<template>
  <button>Button {{background}}{{color}}{{disable}}</button>
</template>
<script lang="ts" setup>
  defineProps<{
    background: string, 
    color: string,
    disable: boolean
  }>()
</script>