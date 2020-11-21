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
              class="pa-10"
            >
            </v-textarea>
          </v-row>
          <v-row v-if="countAvailable" class="justify-center">
            <v-chip>WORD COUNT: {{ wordCount }}</v-chip>
          </v-row>
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

<style></style>
