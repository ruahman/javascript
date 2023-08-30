<script>
// import myMixin from @/mixins/myMixin.js
import myMixin from "@/mixins/myMixin.js";
export default {
  mixins: [myMixin],
};
</script>

<template>
  <h1>Mixin</h1>
  <div>
    <button @click="sayHello">say hello</button>
  </div>
</template>
