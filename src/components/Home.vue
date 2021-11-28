<template>
  <div class="home cContainer">
    <div class="row">
      <Newstory />
      <NewMessage />
      <div class="section1 col-12">
        <div class="row">
          <div class="col-5">
            <div class="row">
              <div class="col-5 imgclass">
                <div id="toast1"><div id="desc1">Session Expired</div></div>
                <q-avatar
                  size="72px"
                  :class="
                    user.pictureurl != null && user.pictureurl != 'null'
                      ? ''
                      : 'bg-red-13'
                  "
                >
                  <!-- <q-spinner
                          class="orange"
                            color=""
                            size="2em"
                            :thickness="2.5"
                          /> -->
                  <q-img
                    v-if="user.pictureurl != null && user.pictureurl != 'null'"
                    :src="
                      imgurl + '/' + user.pictureurl
                    "
                  />
                  <p v-else class="text-capitalize text-white">
                    {{ user.loginname.charAt(0) }}
                  </p>
                </q-avatar>
              </div>
              <div class="col-7">
                <h5 class="username">
                  Welcome
                  <span class="text-capitalize">{{
                    user.loginname.split(" ")[0]
                  }}</span
                  >,<br />
                  today you have:
                </h5>
              </div>

              <div class="col-4 iconcircle q-mt-lg">
                <!-- <i
                  class="fa fa-plus circle homeIcons"
                  aria-hidden="true"
                  @click="$store.state.story = true"
                ></i> -->
                <div
                  class="box-shadow circle homeIcons"
                  @click="$store.state.story = true"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="11.5005"
                      width="2"
                      height="24"
                      rx="1"
                      fill="#99999A"
                    />
                    <rect
                      y="12.4996"
                      width="2"
                      height="24"
                      rx="1"
                      transform="rotate(-90 0 12.4996)"
                      fill="#99999A"
                    />
                  </svg>
                </div>

                <div class="q-mt-sm">
                  <h6 style="font-size: 12px">New Story</h6>
                </div>
              </div>
              <!-- New message -->
              <div class="col-4 iconcircle q-mt-lg">
                <div
                  class="circle homeIcons box-shadow"
                  @click="$store.state.newmessage = true"
                >
                  <svg
                    width="19"
                    height="24"
                    viewBox="0 0 19 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.12 15.158C11.2765 15.158 13.0158 13.4591 13.0158 11.3685L13.0289 3.78949C13.0289 1.69275 11.2828 0 9.12 0C6.9639 0 5.21154 1.69275 5.21154 3.78949V11.3685C5.21154 13.4591 6.9639 15.158 9.12 15.158ZM16.0253 11.3685C16.0253 15.158 12.7225 17.8107 9.12 17.8107C5.52425 17.8107 2.21508 15.158 2.21508 11.3685H0C0 15.6821 3.5439 19.2444 7.81731 19.8568V24H10.4231V19.8568C14.6965 19.2444 18.24 15.6821 18.24 11.3685H16.0253Z"
                      fill="#99999A"
                    />
                  </svg>
                </div>

                <div class="q-mt-sm">
                  <h6 style="font-size: 12px">New Message</h6>
                </div>
              </div>
              <div class="col-4 iconcircle q-mt-lg">
                <div class="circle homeIcons box-shadow">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1667 10.3932C17.2465 14.1667 14.16 17.2535 10.3799 19.1733L7.44676 16.2332C7.07986 15.8666 6.55324 15.7601 6.09346 15.9065C4.60011 16.3999 2.99335 16.6667 1.33333 16.6667C0.59346 16.6667 0 17.2601 0 18V22.6667C0 23.4065 0.59346 24 1.33333 24C13.8533 24 24 13.8533 24 1.33333C24 0.593461 23.3999 0 22.6667 0H18C17.2601 0 16.6667 0.593461 16.6667 1.33333C16.6667 2.99335 16.3999 4.60012 15.9065 6.09346C15.7601 6.55324 15.8666 7.07986 16.2332 7.44676L19.1667 10.3932Z"
                      fill="#99999A"
                    />
                  </svg>
                </div>

                <div class="q-mt-sm">
                  <h6 style="font-size: 12px">New Call</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-7 boxes">
            <div class="col-4">
              <div class="box lightred" @click="$router.push('/stories')">
                <h2 class="mb-0 text-weight-bolder">1</h2>
                <h6 class="mt-0" style="font-size: 13px">new story</h6>
              </div>
            </div>

            <div class="col-4">
              <div class="box lightred" @click="$router.push('/inbox')">
                <h2 class="mb-0 text-weight-bolder">21</h2>
                <h6 class="mt-0" style="font-size: 13px">new messages</h6>
              </div>
            </div>
            <div class="col-4">
              <div class="box lightred" @click="$router.push('/calls')">
                <h2 class="mb-0 text-weight-bolder">4</h2>
                <h6 class="mt-0" style="font-size: 13px">calls occuring now</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
.ma {
  margin: 0 auto !important;
}
.roundIcon {
  width: 55px !important;
  height: 55px !important;
  border-radius: 50% !important;
}
.chatHeight {
  overflow: hidden;
  overflow-y: scroll;
  max-height: 305px !important;
  min-height: 305px !important;
}
.contact-listbody tr td {
  border-bottom: none !important;
  border-bottom-width: 0px !important;
  padding: 5px;
}
.new-story-card {
  width: 57% !important;
}
.new-story-card .q-stepper--horizontal .q-stepper__step-inner {
  padding: 0px;
}
.circle {
  margin: auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconcircle h6 {
  text-align: center;
}
.iconcircle:hover {
  cursor: pointer;
}
.fa-plus,
.fa-microphone,
.fa-phone {
  font-size: 29px;
  color: lightgray;
}
.homeIcons:hover {
  color: #ddd;
}
.box:hover {
  cursor: pointer;
  background-color: #fb5b73;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
  border-radius: 10px;
  color: white;
  padding: 4px 9px 4px 9px;
  margin-left: 9px;
  /* height: 117px; */
}
.box {
  background: white;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
  border-radius: 10px;
  /* height: 117px; */
  padding: 4px 9px 4px 9px;
  margin-left: 9px;
}
.box h2 {
  margin-bottom: -15px;
}
.boxes {
  display: flex;
  padding-left: 10px;
  /* justify-content: space-around; */
}
.box:hover h6 {
  color: white;
}
.new-story-card::-webkit-scrollbar,
.new-message-card::-webkit-scrollbar {
  display: none;
}
.home .section1 {
  /* box-shadow: 0 0 40px -28px; */
  padding: 40px 40px 21px 22px;
  /* margin-left: 86px; */
  border-radius: 24px;
  background: #ffffff;
  max-width: 62% !important;
}
.box,
h2,
h6 {
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
}
.imgclass {
  justify-content: center;
  display: flex;
  align-items: center;
}
.username {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-align: left;
}
.imgclass .q-avatar {
  font-size: 70px;
}
.text-h6 {
  color: #99999a;
  text-align: center;
  font-size: 15px !important;
  font-weight: 400 !important;
  line-height: 2rem !important;
  letter-spacing: 0.0125em !important;
}
.story-card {
  border-radius: 4px;
  width: 100%;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
}
.camera-circle {
  width: 67px;
  height: 67px;
  text-align: center;
  border-radius: 50%;
  background: #ffffff;
  line-height: 65px;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
  /* margin-left: auto; */
}
.camera-microphone {
  display: flex;
  justify-content: end;
  align-items: center;
}
.camera-circle .fa-camera {
  font-size: 32px;
  line-height: 66px;
}
.microphone-circle .fa-microphone,
.cfa-stop {
  font-size: 30px;
}
.fa-arrow-right {
  font-size: 32px;
  color: #99999a;
}
.fa-arrow-right :hover {
  background: white;
}
.microphone-circle {
  width: 75px;
  height: 75px;
  background: #fa243c;
  border-radius: 100%;
  text-align: center;
  line-height: 70px;
  border: 8px solid #fca5a5;
  margin: auto;
}
.microphone-circle:hover {
  cursor: pointer;
}
.message-search .q-field__inner {
  border: 2px solid #eeeeee !important;
}
.context-button {
  line-height: 62px;
}
.context-button button {
  border: 2px solid #fa243c;
}
.contact-list {
  box-shadow: none !important;
  max-height: 500px;
  overflow-x: hidden;
}

.review-story {
  box-shadow: none !important;
}
.web-camera-container {
  margin-top: 27px;
  /* margin-bottom: 2rem; */
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  /* width: 294px; */
}
.camera-button {
  margin-bottom: 2rem;
  border: none;
}
.camera-button button {
  border: none;
  background: none;
}
.camera-box .camera-shutter {
  opacity: 0;
  width: 450px;
  height: 337.5px;
  background-color: #fff;
  position: absolute;
}

.camera-shoot {
  margin: 1rem 0;
}
.camera-shoot button {
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}
.camera-shoot img {
  height: 35px;
  object-fit: cover;
}
.camera-loading {
  overflow: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
  min-height: 150px;
  margin: 3rem 0 0 -1.2rem;
}

.camera-loading ul {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 999999;
  margin: 0;
}

.loader-circle {
  display: block;
  height: 14px;
  margin: 0 auto;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  position: absolute;
  width: 100%;
  padding: 0;
}
.loader-circle li {
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  line-height: 10px;
  padding: 0;
  position: relative;
  margin: 0 0 0 4px;
  background: #999;
  animation: preload 1s infinite;
  top: -50%;
  border-radius: 100%;
}

@keyframes preload {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
.new-story-card .q-stepper {
  box-shadow: none;
}
.q-stepper__header {
  display: none !important;
}
/* .q-radio__inner--truthy{
  position: absolute!important;
  width:90%;
  height:100%;
  z-index: 99;
  background: black;
  opacity: .7;
} */
.q-radio__inner {
  position: absolute !important;
  z-index: 999;
  top: 0px;
}
.review-story {
  height: 88%;
}
.review-story .q-img {
  height: 100%;
}
.newmessage-listtable {
  box-shadow: none !important;
  width: 63%;
}
.newmessage-listtable tbody tr td {
  border-bottom: none !important;
}
.home .section1 .q-img {
  position: unset;
  border-radius: 100%;
}
</style>
<script>
// const stringOptions = [
//         {
//           img_url: null,
//           name: "Ca Test",
//           type: "Team",
//           type_id: 125,
//         },
//         {
//           img_url: null,
//           name: "Atul Rai",
//           type: "User",
//           type_id: 116,
//         },
//         {
//           img_url: null,
//           name: "Kishan",
//           type: "User",
//           type_id: 115,
//         },
//         {
//           img_url: null,
//           name: "My team",
//           type: "Team",
//           type_id: 126,
//         },
//       ];
import { reactive, ref, onMounted } from "vue";
// import AWS from "aws-sdk";
// import { useQuasar } from "quasar";
import moment from "moment";
import Newstory from "./Newstory.vue";
import NewMessage from "./NewMessage.vue";
export default {
  // created() {
  //   this.token = localStorage.getItem("token");
  //   this.userId = localStorage.getItem("userId");
  //   this.loginname = localStorage.getItem("loginname");
  //   this.pictureurl = localStorage.getItem("pictureurl");
  //   // console.log(this.userId);
  // },
  setup() {

    const isReviewPlaying = ref(false);
    // const audioBlob = ref(null);
    // const currentAudio = ref(null);
    const newmessage = ref(false);
    // const recordingStart = ref(false);
    const starttime = ref("");
    const endtime = ref("");
    const timeduration = ref();
    const isPlaying = ref(false);
    const isLoading = ref(false);

    const user = reactive({
      token: "",
      userId: "",
      loginname: "",
      pictureurl: "",
    });

    const storyData = reactive({
      story: false,
      storyContacts: [],
      step: 1,
      shape: "1",
      statusType: 1,
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isStorySend: false,
      groupSentLoading: [],
      degaultgroupSentLoading: false,
      recordingStartWave: false,
    });
     const imgurl = ref('')
    onMounted(() => {
        user.token = localStorage.getItem("token");
        user.loginname = localStorage.getItem("loginname");
        user.pictureurl = localStorage.getItem("pictureurl");
        user.userId = localStorage.getItem("userId");
        imgurl.value = process.env.VUE_APP_BASE_URL_IMAGE;
    });

    function toggleCamera() {
      if (storyData.isCameraOpen) {
        storyData.isCameraOpen = false;
        storyData.isPhotoTaken = false;
        storyData.isShotPhoto = false;
        stopCameraStream();
      } else {
        storyData.isCameraOpen = true;
        createCameraElement();
      }
    }

    function createCameraElement() {
      isLoading.value = true;

      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          isLoading.value = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          isLoading.value = false;
          alert(
            "May the browser didn't support or there is some errors." + error
          );
        });
    }

    function stopCameraStream() {
      1;
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
    }

    function takePhoto() {
      if (!storyData.isPhotoTaken) {
        storyData.isShotPhoto = true;
        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          storyData.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      storyData.isPhotoTaken = !storyData.isPhotoTaken;

      const context = this.$refs.canvas.getContext("2d");
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    }

    function downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document
        .getElementById("photoTaken")
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }

    return {
      // dependencies & constants
      moment,

      // variables
      user,
      storyData,
      isReviewPlaying,
      newmessage,
      starttime,
      endtime,
      timeduration,
      isPlaying,
      isLoading,
      imgurl,
      // Functions
      toggleCamera,
      takePhoto,
      downloadImage,
    };
  },
  components: {
    Newstory,
    NewMessage,
  },
  mounted() {

  },
};
</script>
