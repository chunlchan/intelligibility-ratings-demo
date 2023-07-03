<template>
  <v-container>
    <h1>Instructions</h1>
    <p>Listen to the audio recordings and rate each one for intelligibility</p>
    <p>1 = Unintelligible</p>
    <p>7 = Very intelligible</p>
    <p>Click 'Next' to begin</p>
    <v-btn class="mt-4" color="primary" @click="nextClicked">Next <v-icon>chevron_right</v-icon></v-btn>
  </v-container>
</template>

<script setup>
import {useRouter} from "vue-router"
const router = useRouter();
const nextClicked = () => {
  router.push("/experiment");
}
</script>
