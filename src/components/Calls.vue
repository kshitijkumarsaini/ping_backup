<template>
  <div class="calls cContainer">
    <div class="row justify-center">
      <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_sxrbhrtx.json" background="transparent" speed="0.8" style="width: 400px; height: 400px;" loop autoplay></lottie-player>
    </div>
    <div class="row justify-center">
      <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_9n1ybnqo.json" background="transparent" speed="0.8" style="width: 400px; height: 150px;" loop autoplay></lottie-player>
    </div>
  </div>
</template>

<script>
// import { EventBus } from '@/main.js'
// import WaveSurferVue from "wavesurfer.js-vue";
export default {
  name: "av-waveform-demo",
  mounted() {
    // var wavesurfer = WaveSurfer.create({
    //   container: '#waveform',
    //   waveColor: 'violet'
    // });

    // wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
  },
  data() {
    return {

      options: {},
      file: "https://openspace-broadcast.s3.eu-west-2.amazonaws.com/test-%5Bobject%20Blob%5D",
    };
  },
   components: {
    // WaveSurferVue,
  },
  methods: {
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* .wavesurfer-region[data-id="sample1"] {
      border: 1px solid blue;
    }

    .wavesurfer-region[data-id="sample1"]:after {
      content: 'This is region #1';
    }

    .wavesurfer-region[data-id="sample2"] {
      border: 1px solid red;
    }

    .wavesurfer-region[data-id="sample2"]:after {
      content: 'Let it be forgotten, as a flower is forgotten.';
    }

    .wavesurfer-region[data-id="sample3"] {
      border: 1px solid green;
    }

    .wavesurfer-region[data-id="sample3"]:after {
      content: 'As a flower, as a fire, as a hushed foot-fall in a long-forgotten snow.';
    } */
</style>