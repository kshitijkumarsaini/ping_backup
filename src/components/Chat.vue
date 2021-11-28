<template>
  <q-card class="my-card q-pa-md chat-box-area scroll">
    <q-card-section>
          <div
                v-if="
                  $store.state.chatObject.isMessageSent == true
                "
              >
                {{ getConversationMessages(false) }}
              </div>
      <div style="width: 100%">
        <template v-if="store.state.chatObject.chatloadingstate">
          <q-chat-message
            v-for="(chatSkel, index) in 4"
            :key="index"
            class="q-pa-sm"
            :bg-color="index % 2 == 0 ? 'grey-4' : 'white'"
            :sent="index % 2 == 0"
          >
            <q-item class="q-py-lg" style="width: 300px">
              <q-item-section avatar>
                <q-skeleton type="QAvatar" />
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  <q-skeleton type="text" />
                </q-item-label>
                <q-item-label caption>
                  <q-skeleton type="text" width="65%" />
                </q-item-label>
                <q-item-label caption>
                  <q-skeleton type="text" width="65%" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-chat-message>
        </template>

        <template v-else v-for="chat in conversationMessages" :key="chat">
          <q-chat-message
            :bg-color="chat.created_by == userid ? 'grey-4' : 'white'"
            :sent="chat.created_by == userid"
          >
            <q-item-section avatar>
              <div class="row message-header">
                <span
                  class="
                    text-capitalize text-subtitle1 text-left
                    q-mx-md q-mb-xs
                  "
                  >{{ chat.CreatedBy.name }}</span
                >
                <div
                  class="row inline flex"
                  :style="
                    chat.created_by == userid
                      ? 'position: absolute; left: 83%;'
                      : ''
                  "
                >
                  <img class="q-mr-md" src="../assets/slack.png" />
                  <img src="../assets/salesforce.png" />
                </div>
              </div>

              <div v-if="chat.created_by != userid" class="row q-my-sm">
                <q-btn
                  @click="toggleAudioPlay(chat.message_id, isPlaying, chat.audio_duration, chat.SingleMessageToUser.media_played)"
                  round
                  dense
                  color='red-13'
                  class='q-mx-sm'
                  style="border: 5px solid pink"
                  size="lg"
                  :id="'playpausebtn' + chat.message_id"
                 >
                 <i class="fas fa-play"></i>
                </q-btn>
                <av-waveform
                  class="q-mx-xs"
                  :id="'audioID' + chat.message_id"
                  :canv-width="200"
                  played-line-color="black"
                  noplayed-line-color="gray"
                  :canv-height="50"
                  :noplayed-line-width="19"
                  :played-line-width="19"
                  :audio-src="'https://openspace-broadcast.s3.eu-west-2.amazonaws.com/s3%3A/' + chat.audio_url"
                ></av-waveform>
                <!-- <audio
                  :onplay="
                    () =>
                      updateReadNotification(
                        chat.message_id,
                        chat.SingleMessageToUser.media_played
                      )
                  "
                  class="q-mx-md"
                  controls
                  preload="auto"
                  controlsList="nodownload noplaybackrate"
                  id="myAudio"
                  :messageId="chat.message_id"
                >
                  <source
                    :src="
                      'https://openspace-broadcast.s3.eu-west-2.amazonaws.com/s3%3A/' +
                      chat.audio_url
                    "
                    @click="source"
                  />
                  Your browser does not support the audio element.
                </audio> -->
                <q-avatar
                  :class="
                    chat.CreatedBy.display_picture_url == null ||
                    chat.CreatedBy.display_picture_url == 'null'
                      ? 'bg-red-13'
                      : ''
                  "
                >
                  <q-img
                    v-if="
                      chat.CreatedBy.display_picture_url != null &&
                      chat.CreatedBy.display_picture_url != 'null'
                    "
                    :src="imgurl + '/' + chat.CreatedBy.display_picture_url"
                  />
                  <p v-else class="text-capitalize text-white">
                    {{ chat.CreatedBy.name.charAt(0) }}
                  </p>
                </q-avatar>
              </div>

              <div v-else class="row q-my-sm">
                <q-avatar
                  :class="
                    chat.CreatedBy.display_picture_url == null ||
                    chat.CreatedBy.display_picture_url == 'null'
                      ? 'bg-red-13 q-ml-sm'
                      : 'q-ml-sm'
                  "
                >
                  <q-img
                    v-if="
                      chat.CreatedBy.display_picture_url != null &&
                      chat.CreatedBy.display_picture_url != 'null'
                    "
                    :src="imgurl + '/' + chat.CreatedBy.display_picture_url"
                  />
                  <p v-else class="text-capitalize text-white">
                    {{ chat.CreatedBy.name.charAt(0) }}
                  </p>
                </q-avatar>
                <!-- <audio
                  class="q-mx-md"
                  controls
                  preload="auto"
                  controlsList="nodownload noplaybackrate"
                  id="myAudio"
                  :messageId="chat.message_id"
                >
                  <source
                    :src="
                      'https://openspace-broadcast.s3.eu-west-2.amazonaws.com/s3%3A/' +
                      chat.audio_url
                    "
                  />

                  Your browser does not support the audio element.
                </audio> -->
                <av-waveform
                  class="q-mx-xs"
                  :id="'audioID' + chat.message_id"
                  :canv-width="200"
                  played-line-color="black"
                  noplayed-line-color="white"
                  :canv-height="50"
                  :noplayed-line-width="19"
                 :played-line-width="19"
                  :audio-src="'https://openspace-broadcast.s3.eu-west-2.amazonaws.com/s3%3A/' + chat.audio_url"
                ></av-waveform>
                <q-btn
                  @click="toggleAudioPlay(chat.message_id, isPlaying, chat.audio_duration)"
                  round
                  dense
                  color='red-13'
                  class='q-mx-sm'
                  style="border: 5px solid pink"
                  size="lg"
                  :id="'playpausebtn' + chat.message_id"
                >
                  <i class="fas fa-play"></i>
                  </q-btn>

              </div>
              <p
                :class="
                  chat.created_by == userid
                    ? 'chat-audio-time-right'
                    : 'chat-audio-time-left'
                "
              >
                {{ chat.audio_duration }}
                <!-- {{ chat.audio_duration }} -->
              </p>
            </q-item-section>
          </q-chat-message>

          <p
            :class="
              chat.created_by == userid
                ? 'q-mr-md text-right q-mb-md'
                : 'q-ml-lg text-left q-mb-md'
            "
          >
            <span class="q-mr-sm">{{
              moment(chat.created_date).format("HH:mm")
            }}</span>
            <i
              v-if="chat.SingleMessageToUser.media_played != null"
              class="fas fa-check"
              style="color: red"
            ></i>
            <i v-else class="fas fa-check" style="color: gray"></i>
          </p>
        </template>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
// import { onMounted } from '@vue/runtime-core';
import { useStore } from "vuex";
import { ref } from "vue";
import moment from "moment";
// import { useQuasar } from "quasar";
export default {
  setup() {
      const store = useStore();
      const loadingState = store.state.chatObject.chatloadingstate;
    const conversationMessages = ref();
    const isPlaying = ref(false);
    // const $q = useQuasar();
    // const leftSectionInbox = reactive({
    //   searchQuery: "",
    //   conversationsFetched: ref(false),
    //   conversations: ref(),
    // });
    function getConversationMessages(loadingState) {
        store.state.chatObject.isMessageSent  = false
      if (loadingState == false) {
        // already the component has been loaded
        store.state.chatObject.chatloadingstate = false;
      } else {
        // the component is loaded for the first time
        store.state.chatObject.chatloadingstate = true;
      }
      var myHeaders = new Headers();
      myHeaders.append("x-access-token", localStorage.getItem("token"));
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        conversation_id: store.state.chatObject.conversationID,
        need: "Conversation",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(
        `${process.env.VUE_APP_BASE_URL}/chat/message/getall`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const conMsgRes = JSON.parse(result);
          if (conMsgRes.status === true) {
            conversationMessages.value = conMsgRes.data.ChatMessage;
            console.log(conversationMessages.value);
            store.state.chatObject.chatloadingstate = false;
            // let chatBox = document.querySelector('.chatBoxArea');
            // chatBox.scrollTop = chatBox.scrollHeight;
          }
        })
        .catch((error) => console.log("error", error));
    }

    function toggleAudioPlay(msgId, ip, duration, isMsgRead) {
      // console.log(isMsgRead);
      //  console.log(duration);
    const [ minutes, seconds] = duration.split(':');
    // console.log(minutes, seconds)
    const newduration = (minutes*60) + (+seconds);
    // console.log(newduration);
       let getArchiveAudioIcon = document.querySelector(`#playpausebtn${msgId} > span > i`);
       
       let currentTime = 0;

      if (ip) {
        document.querySelector(`#audioID${msgId} audio`).pause();
        currentTime = document.querySelector(`#audioID${msgId} audio`).currentTime;
            // console.log(getArchiveAudioIcon)
           getArchiveAudioIcon.classList.remove("fa-pause");
          getArchiveAudioIcon.classList.add("fa-play");
        isPlaying.value = !ip;
      } else {
        document.querySelector(`#audioID${msgId} audio`).play();
        currentTime = document.querySelector(`#audioID${msgId} audio`).currentTime;
        getArchiveAudioIcon.classList.remove("fa-play");
        getArchiveAudioIcon.classList.add("fa-pause");
        isPlaying.value = !ip;
      }

      // console.log(currentTime);
      let finalDuration = newduration - currentTime;

      setTimeout(() => {
        // console.log('settimeout')
        getArchiveAudioIcon.classList.remove("fa-pause");
        getArchiveAudioIcon.classList.add("fa-play");
      }, (finalDuration*1000));

      if (isMsgRead == null || isMsgRead == "") {
        let myHeaders = new Headers();
        myHeaders.append("x-access-token", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          message_id: [msgId],
          media_played: true,
        });

        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          `${process.env.VUE_APP_BASE_URL}/chat/message/updatestatus`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            const res = JSON.parse(result);
            if (res.status === true) {
              store.state.convliststatus = true;
              // this.fetchConversationsList();
              // this.getMessages(
              //   this.conversationID,
              //   this.conversationUUID,
              //   this.conversationType,
              //   this.conversationTypeID
              // );
            }
          })
          .catch((error) => console.log("error", error));
      }
     }

    return {
      store,
      userid: ref(),
      moment,
      conversationMessages,
      imgurl:ref(),
      loadingState,
      isPlaying,

      // functions
      getConversationMessages,
      toggleAudioPlay,
    };
  },
  created() {
    this.userid = localStorage.getItem("userId");
    console.log(this.userid);
      this.imgurl = process.env.VUE_APP_BASE_URL_IMAGE;
  },
  mounted() {
    if (this.$store.state.chatObject.conversationID != "") {
      let loadingState = this.$store.state.chatObject.chatloadingstate;
      this.getConversationMessages(loadingState);
    }
  },
};
</script>

<style>
audio {
 display: none !important;
}
</style>