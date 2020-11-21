<template>
  <v-row align-center justify="center">
    <v-card width="75%">
      <v-card-title class="justify-center text-h3 pa-10"> WORD COUNTER </v-card-title>
      <v-card-subtitle class="text-center">
        Type a text in the form below to count how many words it contains!
      </v-card-subtitle>
      <v-card-text>
        <v-form>
          <v-row justify="center">
            <v-textarea
              v-model="textContent"
              outlined
              no-resize
              label="Type your text here"
              class="px-10 pt-5"
            >
            </v-textarea>
          </v-row>
          <transition name="slide-fade">
            <v-row v-if="countAvailable" class="justify-center py-5">
              <v-chip>WORD COUNT: {{ wordCount }}</v-chip>
            </v-row>
          </transition>
          <v-row justify="center">
            <v-btn @click.prevent="count" class="justify-center ma-3">Count!</v-btn>
            <v-btn v-if="textContent" @click.prevent="textContent = ''" class="ma-3">Clear</v-btn>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import wordCounter from '../utils/wordCounter'
export default {
  data: function () {
    return {
      countAvailable: false,
      textContent: '',
      wordCount: null,
    }
  },
  methods: {
    count: function () {
      this.countAvailable = true
      this.wordCount = wordCounter(this.textContent)
    },
  },
  watch: {
    textContent: function (val) {
      this.countAvailable = false
      this.wordCount = null
    },
  },
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(5px);
  opacity: 0;
}
</style>
