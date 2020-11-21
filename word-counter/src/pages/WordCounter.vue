<template>
  <v-container fluid fill-height>
    <v-row align-center justify="center">
      <v-card width="75%">
        <v-card-title class="justify-center text-h3 pa-10"> Word Counter </v-card-title>
        <v-card-subtitle class="text-center">
          Type a text in the form below to count how many words it contains!
        </v-card-subtitle>
        <v-card-text>
          <v-form>
            <v-row justify="center">
              <v-textarea outlined no-resize label="Type your text here" class="pa-10">
              </v-textarea>
            </v-row>
            <v-row justify="center">
              <v-btn class="justify-center">Count!</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style></style>
