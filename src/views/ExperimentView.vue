<template>
  <v-container v-if="ratingScreen">
    <div class="d-flex justify-center">
      <v-btn :disabled="isPlaying" @click="playSound">PLAY <v-icon>play_circle_filled</v-icon></v-btn>
    </div>

      <v-radio-group v-model="ratingSelection" inline class="d-flex justify-center align-center mt-4 mb-4" >
        <p class="mt-2">Unintelligible</p>
        <v-radio label="1" value="1"></v-radio>
        <v-radio label="2" value="2"></v-radio>
        <v-radio label="3" value="3"></v-radio>
        <v-radio label="4" value="4"></v-radio>
        <v-radio label="5" value="5"></v-radio>
        <v-radio label="6" value="6"></v-radio>
        <v-radio label="7" value="7"></v-radio>
        <p class="mt-2 ml-2">Very Intelligible</p>
      </v-radio-group>
      
    <div class="d-flex justify-center">
      <v-btn :disabled="isPlaying || ratingSelection==null || played==false" @click="nextClicked">NEXT <v-icon>chevron_right</v-icon></v-btn>
    </div>

    <div class="d-flex justify-center mt-2">
      {{ progress }}
    </div>
  </v-container>
  <v-container v-if="fixationCrossScreen">
    <div class="d-flex justify-center">
      <h1>+</h1>
    </div>
  </v-container>
</template>


<script setup>
import { Howl, Howler } from 'howler';
import { computed, ref } from "vue"
import { useRouter } from "vue-router";
import {useDataStore} from "@/stores/dataStore.js";
import useWait from "@/composables/useWait";

const router = useRouter();
const index = ref(0);
const played = ref(false);
const isPlaying = ref(false);
const dataStore = useDataStore();
const progress = computed(()=>index.value+1 + " of " + stimuliList.length)
const ratingScreen = ref(true);
const fixationCrossScreen = ref(false);
const { wait } = useWait();

const stimuliList = [
  'audio/nws_1.mp3',
  'audio/nws_2.mp3',
  'audio/nws_3.mp3'
];

const playSound = () => {
  console.log("play sound")
  played.value = true;
  isPlaying.value = true;
  Howler.stop();
  const sound = new Howl({
    src: stimuliList[index.value],
    onload: () => {
      sound.play();
    },
    onend: () => {
      isPlaying.value = false;
    },
  });
};

const ratingSelection = ref(null);

const nextClicked = async () => {
  if (played.value == true) {

    //save response to storage
    dataStore.responses.push({
      rating: ratingSelection.value,
      audio: stimuliList[index.value]
    })

    //show fixation cross
    ratingScreen.value = false;
    fixationCrossScreen.value = true;

    //increment to next item
    index.value += 1;
    if (index.value >= stimuliList.length) {
      //if we've reached the end of list, goto "end" view
      router.push("/end");
    } else {
      //clear the rating selection
      ratingSelection.value = null;

      //wait 500 ms
      await wait(500);

      //show ratings screen
      ratingScreen.value = true;
      fixationCrossScreen.value = false;
    }
    

    
    
  }
}

</script>

