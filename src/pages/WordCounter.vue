<template>
  <v-container class="background-color" fluid fill-height>
    <WordCounterWidget></WordCounterWidget>
  </v-container>
</template>

<script>
import WordCounterWidget from '../components/WordCounterWidget.vue'
export default {
  components: {
    WordCounterWidget,
  },
}
</script>

<style scoped>
.background-color {
  background-color: lightblue;
}
</style>
>
