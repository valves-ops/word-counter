<template>
  <v-row align-center justify="center">
    <v-card width="75%">
      <v-card-title class="justify-center text-h3 pa-10"> WORD COUNTER </v-card-title>
      <v-card-subtitle class="text-center">
        Type a text in the form below to count how many words it contains!
      </v-card-subtitle>
      <v-card-text>
        <v-form ref="form" v-model="isFormValid">
          <v-row justify="center">
            <v-textarea
              id="text-input-field"
              v-model="textContent"
              outlined
              no-resize
              :rules="rules.required"
              label="Type your text here"
              class="px-10 pt-5"
            >
            </v-textarea>
          </v-row>
          <transition name="slide-fade">
            <v-row v-if="countAvailable" class="justify-center py-5">
              <v-chip color="green" text-color="white" large>WORD COUNT: {{ wordCount }}</v-chip>
            </v-row>
          </transition>
          <v-row justify="center">
            <v-btn
              id="count-button"
              color="blue"
              @click.prevent="count"
              class="justify-center ma-3 white--text"
              >Count!</v-btn
            >
            <v-btn color="orange" v-if="textContent" @click.prevent="clear" class="ma-3 white--text"
              >Clear</v-btn
            >
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
      isFormValid: false,
      countAvailable: false,
      textContent: '',
      wordCount: 0,
      rules: {
        required: [(value) => !!value || 'Type some text.'],
      },
    }
  },
  methods: {
    count: function () {
      this.$refs.form.validate()
      if (this.isFormValid) {
        this.countAvailable = true
        this.wordCount = wordCounter(this.textContent)
      }
    },
    clear: function () {
      this.textContent = ''
      this.$refs.form.resetValidation()
    },
  },
  watch: {
    textContent: function (val) {
      this.countAvailable = false
      this.wordCount = 0
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
