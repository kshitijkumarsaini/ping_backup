<template>
  <q-dialog v-model="$store.state.newmessage">
    <div v-if="$store.state.newmessage == true">{{selectedUser = null}} {{newConversationMessages = ''}} </div>
    <q-card class="new-message-card" style="border-radius: 18px">
      <q-stepper
        v-model="stepperMsg"
        header-nav
        ref="stepper"
        color="primary"
        animated
      >
        <q-step :name="1" :done="stepperMsg > 1" :header-nav="stepperMsg > 1">
          <div
            class="row text-center"
            style="position: relative; height: 60vh"
            v-if="isContactsFetched == true"
          >
            <q-spinner
              style="
                position: absolute;
                top: 50%;
                left: 45%;
                transform: translate(-50%, -50%);
              "
              color="primary"
              size="5em"
              :thickness="2"
            />
          </div>
          <div v-else>
            <div v-if="stringOptions.length > 0">
              <div class="row">
                <div class="col-6">
                  <h4>New Message to:</h4>
                </div>
                <div class="col-6">
                  <i
                    class="fa fa-times v-closeBotton"
                    @click="$store.state.newmessage = false"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div class="full-width">
                <div class="row">
                  <div :class="isNewConversation ? 'col-7' : 'col-10'">
                    <q-select
                    @blur="searchConv()"
                      dense
                      v-model="selectedUser"
                      @update:model-value="filterOptions"
                      outlined
                      rounded
                      emit-value
                      map-options
                      multiple
                      use-chips
                      use-input
                      :max-values="maxSelection"
                      input-debounce="0"
                      @new-value="createValue"
                      :options="options1"
                      @filter="filterFn"
                      :option-value="
                        (opt) =>
                          Object(opt) === opt && 'type_id' in opt
                            ? {
                                typeId: opt.type_id,
                                type: opt.type,
                                name: opt.name,
                              }
                            : null
                      "
                      :option-label="
                        (opt) =>
                          Object(opt) === opt && 'name' in opt
                            ? opt.name
                            : ''
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="fas fa-search" />
                      </template>
                    </q-select>
                  </div>
                  <div v-if="isNewConversation" class="col-3 ma">
                    <q-input
                      v-model="newConversationName"
                      dense
                      rounded
                      outlined
                      label="Topic"

                    />
                  </div>
                  <div class="col-1 ma">
                    <q-btn
                      :loading="isLoading"
                      rounded
                      size="md"
                      label="Submit"
                      @click="searchConv()"
                      color="red-13"
                    />
                  </div>
                </div>
                <div class="row q-mt-sm chatHeight">
                  <div class="col-12 scroll hide-scrollbar q-px-md">
                    <template v-if="isLoading">
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

                    <template
                      v-else
                      v-for="chat in newConversationMessages"
                      :key="chat"
                    >
                      <q-chat-message
                        :bg-color="
                          chat.created_by == user.userId ? 'grey-4' : 'white'
                        "
                        :sent="chat.created_by == user.userId"
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
                                chat.created_by == user.userId
                                  ? 'position: absolute; left: 83%;'
                                  : ''
                              "
                            >
                              <img class="q-mr-md" src="../assets/slack.png" />
                              <img src="../assets/salesforce.png" />
                            </div>
                          </div>

                          <div
                            v-if="chat.created_by != user.userId"
                            class="row q-my-sm"
                          >
                            <audio
                              class="q-mx-md"
                              controls
                              controlsList="nodownload noplaybackrate"
                              preload="auto"
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
                            </audio>
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
                                :src="
                                  imgurl +
                                  '/' +
                                  chat.CreatedBy.display_picture_url
                                "
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
                                :src="
                                  imgurl +
                                  '/' +
                                  chat.CreatedBy.display_picture_url
                                "
                              />
                              <p v-else class="text-capitalize text-white">
                                {{ chat.CreatedBy.name.charAt(0) }}
                              </p>
                            </q-avatar>
                            <audio
                              class="q-mx-md"
                              controls
                              controlsList="nodownload noplaybackrate"
                              preload="auto"
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
                            </audio>
                          </div>
                          <p
                            :class="
                              chat.created_by == user.userId
                                ? 'chat-audio-time-right'
                                : 'chat-audio-time-left'
                            "
                          >
                            {{ chat.audio_duration }}
                          </p>
                        </q-item-section>
                      </q-chat-message>

                      <p
                        :class="
                          chat.created_by == user.userId
                            ? 'q-mr-md text-right q-mb-md'
                            : 'q-ml-lg text-left q-mb-md'
                        "
                      >
                        <span>{{
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
                </div>
                <q-stepper-navigation
                  v-if="showRecordingOption"
                  class="col-1 full-width text-center q-pt-sm q-pb-xs"
                >
                  <!-- <div > -->
                  <q-btn
                    @click="recordingStart ? stopRecording() : startRecording()"
                    round
                    size="lg"
                    color="red-13"
                    style="border: 5px solid pink"
                  >
                    <i
                      :class="
                        recordingStart
                          ? 'fa-1x fa fa-stop text-white'
                          : 'fa-1x fa fa-microphone text-white'
                      "
                    >
                    </i>
                  </q-btn>
                  <!-- </div> -->
                </q-stepper-navigation>
              </div>
            </div>
            <div v-else>
              <div class="row q-mt-xl full-width justify-center items-center">
                <q-avatar font-size="6rem" class="q-mt-xl" size="10rem">
                  <q-img
                    v-if="pictureurl != 'null'"
                    :src="imgurl + '/' + pictureurl"
                  />
                  <p
                    v-else
                    class="text-center text-white"
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      width: 100%;
                      height: 100%;
                      border-radius: 100%;
                      background: #fa243c;
                    "
                  >
                    {{ loginname.charAt(0).toUpperCase() }}
                  </p>
                </q-avatar>
              </div>
              <div class="row q-mt-md justify-center items-center">
                <span
                  class="text-h4 text-black text-capitalize text-weight-regular"
                  >Hi, {{ loginname }}!!</span
                >
              </div>
              <div class="row q-mt-md justify-center items-center">
                <span class="text-h5 text-black text-weight-regular"
                  >Please invite someone to start chatting...</span
                >
              </div>
              <div class="row q-mt-md justify-center items-center">
                <q-btn
                  size="xl"
                  @click="redirectToInvite"
                  class="q-px-lg text-capitalize"
                  rounded
                  dense
                  color="red-13"
                  label="Invite Someone"
                />
              </div>
            </div>
          </div>
        </q-step>

        <q-step :name="2" :done="stepperMsg > 2" :header-nav="stepperMsg > 2">
          <div class="row full-width" style="height: 380px">
            <div class="col-3 relative-position">
              <div class="justify-center">
                <p class="" style="font-size: 20px">Review</p>
              </div>

              <div class="row full-width justify-center items-center">
                <div
                  class="col-12 text-center absolute-bottom"
                  style="height: 119px"
                >
                  <audio
                   id="para-2"
                    controls
                    controlsList="nodownload noplaybackrate"
                    preload="auto"
                    style="width: 100%"
                    ref="audioElemForNewConversation"
                    :src="currentAudio"
                  ></audio>
                </div>

                <div class="col-12 q-mt-sm text-center absolute-bottom">
                  <q-btn
                    @click="deleteAudio1"
                    dense
                    round
                    color="red-13"
                    class="text-white"
                    size="lg"
                  >
                    <i class="fas fa-trash-alt" style="font-size: 13px"></i>
                  </q-btn>
                </div>
              </div>
            </div>

            <div class="col-5 relative-position">
              <div class="row justify-center">
                <p style="font-size: 20px">Send to</p>
              </div>

              <div class="row justify-center q-my-md">
                <q-select
                  dense
                  outlined
                  rounded
                  multiple
                  use-chips
                  use-input
                  input-debounce="0"
                  style="width: 85%"
                >
                  <template v-slot:prepend>
                    <q-icon name="fas fa-search" />
                  </template>
                </q-select>
              </div>
            </div>

            <div class="col-4">
              <div class="row justify-center">
                <p class="" style="font-size: 20px">Salesforce record</p>
              </div>

              <div class="row justify-center q-my-md">
                <q-input dense outlined rounded>
                  <template v-slot:prepend>
                    <q-icon name="fas fa-search" />
                  </template>
                </q-input>
              </div>
            </div>
          </div>
          <div class="row full-width justify-center">
            <q-btn
              class="rotate-45"
              color="red-13"
              :loading="isMessageSent"
              @click="sendNewConvMessage"
              round
              size="lg"
              icon="fas fa-paper-plane"
            />
          </div>
        </q-step>
      </q-stepper>
    </q-card>
  </q-dialog>
</template>

<script>
import { onMounted, ref, reactive } from "vue";
import { useQuasar } from "quasar";
import AWS from "aws-sdk";
import moment from "moment";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  props: ["Inbox"],
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const $q = useQuasar();
    const isContactsFetched = ref(false);
    const stepperMsg = ref(1);
    const stringOptions = ref();
    const options1 = ref(stringOptions.value);
    const matchedConversations = ref([]);
    const maxSelection = ref(10);
    const newConversationName = ref("");
    const isNewConversation = ref(false);
    const selectedUser = ref();
    const newConversationResponse = ref();
    const newConversationMessages = ref();
    const showRecordingOption = ref(false);
    const con = ref([]);
    const allConversations = ref();
    const isLoading = ref(false);
    const matchedUserData = ref([]);
    const isMessageSent = ref(false);
    const audioBlob = ref(null);
    const currentAudio = ref(null);
    const recordingStart = ref(false);
    const starttime = ref("");
    const endtime = ref("");
    const timeduration = ref();
    const user = reactive({
      token: "",
      userId: "",
      loginname: "",
      pictureurl: "",
    });
    // Function to show message
    function showMessage(msg, color) {
      $q.notify({
        color: color,
        message: msg,
        position: "top",
        timeout: 3000,
      });
    }

    onMounted(() => {
      newMessage();
    });

    /**
     * Function to fetch the contacts list and previous conversation lists from the API
     */
    function newMessage() {
      // if (this.$store.state.newmessage == false) {
      //     audioBlob.value = null;
      //     currentAudio.value = null;
      //     stepperMsg.value = 1;
      //     showRecordingOption.value = false;
      //     newConversationResponse.value = "";
      //     this.$store.state.newmessage= false;
      // } else {
      //     this.$store.state.newmessage = true;
      // }
      isContactsFetched.value = true;
      allConversations.value = "";
      // console.log(localStorage.getItem('token'))
      // Api Request
      let myHeaders = new Headers();
      myHeaders.append("x-access-token", localStorage.getItem("token"));

      let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch(
        `${process.env.VUE_APP_BASE_URL}/chat/search?page=1`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          let status = JSON.parse(result);
          if (status.status == true) {
            stringOptions.value = status.data;
            isContactsFetched.value = false;
          } else {
            isContactsFetched.value = false;
          }
        })
        .catch((error) => {
          console.log(error);
          showMessage("Some error occured...", "red-13");
        });

      // Api to get Conversation Lists
      let Header = new Headers();
      Header.append("x-access-token", localStorage.getItem("token"));
      // console.log(localStorage.getItem('token'));
      const reqOption = {
        method: "GET",
        headers: Header,
        redirect: "follow",
      };

      fetch(`${process.env.VUE_APP_BASE_URL}/chat/conversation/list`, reqOption)
        .then((response) => response.text())
        .then((result) => {
          const res = JSON.parse(result);
          // console.log(res);
          if (res.status == true) {
            allConversations.value = res.data;
          } if (res.status == false && res.message == 'Auth Error') {
            showMessage('Session expired', 'red-13');
            location.replace("/");
          }
        })
        .catch((error) => {
          console.log(error);
          showMessage("Some error occured...", "red-13");
        });
    }

    /**
     * Function to filter the drop down list based on selected user type (Team/User)
     */
    function filterOptions() {
      if (selectedUser.value.length) {
        selectedUser.value.map((user) => {
          if (user.type == "Team") {
            // setTimeout(() => {
            //     if (store.state.conv_ID !== '') {
            //     let idsa = store.state.conv_ID;
            //     document.querySelector(`[convId= "${idsa}"]`).click();
            //     store.state.conv_ID = '';
            //     // loadingstate == false
            //   }
            //   }, 2000);
            maxSelection.value = 1;
            stringOptions.value.map((option) => {
              if (option.type == "User") {
                option.disable = true;
                // console.log(option);
              } else {
                option.disable = false;
              }
            });
          } else {
            maxSelection.value = 10;
            stringOptions.value.map((option) => {
              if (option.type == "Team") {
                option.disable = true;
                // console.log(option);
              } else {
                option.disable = false;
              }
            });
          }
        });
      } else {
        stringOptions.value.map((option) => {
          option.disable = false;
          newConversationMessages.value = "";
          showRecordingOption.value = false;
        });
      }
    }

    /**
     * Function to find the searched term in the drop-down list
     */
    function createValue(val, done) {
      if (val.length > 2) {
        if (!stringOptions.value.includes(val)) {
          done(val, "add-unique");
        }
      }
    }

    /**
     * Function to sort the searched term in the drop-down list
     */
    function filterFn(val, update) {
      update(() => {
        if (val === "") {
          options1.value = stringOptions.value;
        } else {
          const needle = val.toLowerCase();
          options1.value = stringOptions.value.filter(
            (v) => v.name.toLowerCase().indexOf(needle) > -1
          );
        }
      });
    }

    function searchConv() {
        newConversationMessages.value = "";
      if (selectedUser.value.length !== 0) {
        con.value = [];
        allConversations.value.map((singleConversation) => {
          let newData = {
            conversation_id: singleConversation.conversation_id,
            conversation_type_id: singleConversation.conversation_type_id,
            conversation_type: singleConversation.conversation_type,
            conversation_uuid: singleConversation.conversation_uuid,
            usersIds: singleConversation.User.map((user) => user.user_id),
            userlth: singleConversation.User.length,
          };
          con.value.push(newData);
        });

        if (selectedUser.value[0].type == "User") {
          if (selectedUser.value.length == 1) {
            let searchedResults = con.value.filter((singleCon) => {
              if (singleCon.userlth == 1) {
                if (selectedUser.value[0].typeId == singleCon.usersIds[0]) {
                  // existing conversation
                  return singleCon;
                }
              }
            });
            if (searchedResults.length == 0) {
              // create new COnversation
              createNewConversation(searchedResults);
            } else {
              //  console.log(searchedResults);
               store.state.conv_ID = searchedResults[0].conversation_id;
               store.state.chatObject.selectedUser = selectedUser.value;

               router.push('/inbox');
              // Get existing conversations
              // fetchExistingConversations(searchedResults);
            }
          }
          if (selectedUser.value.length >= 2) {
              con.value.map((conv) => {
              if (conv.userlth == selectedUser.value.length) {
                findUserIdInConv(conv, selectedUser.value);
              }
            });
          }
        }
        if (selectedUser.value[0].type == "Team") {
          let searcheresultteam = con.value.filter((singleCon) => {
            if (singleCon.conversation_type_id == selectedUser.value[0].typeId) {
              // console.log("Singlecon", singleCon);
              return singleCon;
            }
          });
          // console.log(searcheresultteam);
          if(searcheresultteam.length == 0) {
            // console.log("Create new conv");
            // console.log(searcheresultteam);
            // create new Conversation with the team
            createNewTeamConversation();
          } else {
            // load the existing conversation
            // console.log(searcheresultteam);
            store.state.conv_ID = searcheresultteam[0].conversation_id;
            store.state.chatObject.selectedUser = selectedUser.value;
            // console.log(store.state.conv_ID)
            audioBlob.value = null;
            currentAudio.value = null;
            showRecordingOption.value = false;
            isMessageSent.value = false;
            store.state.newmessage = false;
            if (props.Inbox) {
              // store.state.convliststatus = true
              setTimeout(() => {
                if (store.state.conv_ID !== "") {
                  let idsa = store.state.conv_ID;
                  document.querySelector(`[convId= "${idsa}"]`).click();
                  store.state.conv_ID = "";
                  // loadingstate == false
                }
              }, 2000);
            } else {
              router.push("/inbox");
            }
          }
        }
      } else {
        showMessage("Kindly select an option first", "red-13");
      }
    }

    /**
     * Function to fetch all the previous/existing Conversations (Team/User) from the API.
     */
    function fetchExistingConversations(singleCon) {
      // console.log(singleCon);

      isLoading.value = true;
      newConversationResponse.value = "";
      let reqHeaders = new Headers();
      reqHeaders.append("x-access-token", localStorage.getItem("token"));
      reqHeaders.append("Content-Type", "application/json");

      const data = JSON.stringify({
        conversation_id: singleCon[0].conversation_id,
        need: "Conversation",
      });

      const options = {
        method: "POST",
        headers: reqHeaders,
        body: data,
        redirect: "follow",
      };

      fetch(`${process.env.VUE_APP_BASE_URL}/chat/message/getall`, options)
        .then((response) => response.text())
        .then((result) => {
          const conMsgRes = JSON.parse(result);
          // console.log("API response ---> ",conMsgRes);
          if (conMsgRes.status === true) {
            // console.log(conMsgRes.data);
            newConversationMessages.value = conMsgRes.data.ChatMessage;
            // console.log(singleCon);
            newConversationResponse.value = {
              conversation_id: singleCon[0].conversation_id,
              conversation_uuid: singleCon[0].conversation_uuid,
              conversation_type: singleCon[0].conversation_type,
              conversation_type_id: singleCon[0].conversation_type_id,
            };
            // console.log(newConversationResponse.value);
            showRecordingOption.value = true;
            isLoading.value = false;
            isNewConversation.value = false;
            // console.log(this.conversationMessages);
            // commit('conversationMessages', conMsgRes.data);
          } else {
            isLoading.value = false;
            showRecordingOption.value = false;
            showMessage(
              "Some error occured while getting conversations",
              "red-13"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          isLoading.value = false;
          showRecordingOption.value = false;
          showMessage(
            "Some error occured while creating conversation",
            "red-13"
          );
        });
    }

    function createNewTeamConversation() {
      // console.log("create new team conv");
      // isLoading.value = true;
      newConversationResponse.value = "";

      if (selectedUser.value.length) {
        let reqHeaders = new Headers();
        reqHeaders.append('x-access-token', localStorage.getItem('token'));
        reqHeaders.append("Content-Type", "application/json");

        const reqData = JSON.stringify({
          type: 'Team',
          type_id: Number(selectedUser.value[0].typeId)
        });
        // console.log(reqData);

        const reqOptions = {
          method: 'POST',
          headers: reqHeaders,
          body: reqData,
          redirect: "follow",
        };

        fetch(
          `${process.env.VUE_APP_BASE_URL}/chat/conversation/create`,
          reqOptions
        )
          .then((response) => response.text())
          .then((result) => {
            const res = JSON.parse(result);
            // console.log(res);
            isLoading.value = false;
            if (res.status == true) {
              newConversationResponse.value = res.data;
              // showRecordingOption.value = true;
               store.state.conv_ID = res.data.conversation_id;

              store.state.chatObject.conversationID = res.data.conversation_id;
              store.state.chatObject.conversationUUID = res.data.conversation_uuid;
              store.state.chatObject.conversationtype = res.data.conversation_type;
              store.state.chatObject.conversationtypeID = res.data.conversation_type_id;
              store.state.chatObject.drawer = true;

              store.state.chatObject.selectedUser = selectedUser.value;

              router.push('/inbox');
            } else {
              // showRecordingOption.value = false;
              showMessage('Something went wrong while creating conversation', 'red-13');
            }
          })
          .catch((error) => {
            console.log(error);
            // isLoading.value = false;
            // showRecordingOption.value = false;
            showMessage('Some error occurred...', 'red-13');
          })
      }
    }

    /**
     * Function to create a new conversation from the API
     */
    function createNewConversation() {
      // console.log("call the new create conversation");
      // isLoading.value = true;
      newConversationResponse.value = "";
      // console.log(selectedUser.value);

      if (selectedUser.value.length) {
        let userId = selectedUser.value.map((user) => user.typeId);
        // console.log(userId);

        let reqHeaders = new Headers();
        reqHeaders.append("x-access-token", localStorage.getItem("token"));
        reqHeaders.append("Content-Type", "application/json");

        const dataToSend = JSON.stringify({
          type: "User",
          user_id: userId,
          email: [],
          name: "",
        });
        // console.log(dataToSend);

        const requestOptions = {
          method: "POST",
          headers: reqHeaders,
          body: dataToSend,
          redirect: "follow",
        };

        fetch(
          `${process.env.VUE_APP_BASE_URL}/chat/conversation/create`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            const newConvResponse = JSON.parse(result);
            if (newConvResponse.status == true) {
              newConversationResponse.value = newConvResponse.data;
            // console.log(newConversationResponse.value);
              // showRecordingOption.value = true;
              // isLoading.value = false;
              // isNewConversation.value = false;
              store.state.conv_ID = newConvResponse.data.conversation_id;

              store.state.chatObject.conversationID = newConvResponse.data.conversation_id;
              store.state.chatObject.conversationUUID = newConvResponse.data.conversation_uuid;
              store.state.chatObject.conversationtype = newConvResponse.data.conversation_type;
              store.state.chatObject.conversationtypeID = newConvResponse.data.conversation_type_id;
              store.state.chatObject.drawer = true;
              store.state.chatObject.selectedUser = selectedUser.value;

              router.push('/inbox');
            } else {
              // isLoading.value = false;
              // showRecordingOption.value = false;
              showMessage(
                "Some error occured while creating conversation",
                "red-13"
              );
            }
          })
          .catch((error) => {
            console.log(error);
            // isLoading.value = false;
            // showRecordingOption.value = false;
            showMessage(
              "Some error occured while creating conversation",
              "red-13"
            );
          });
      }
    }

    /**
     * Function to find if the conversation between the Selected Users already exists or not
     */
    function findUserIdInConv(singalConver, usersId) {
      matchedUserData.value = [];
      // console.log("In the fiund fun", usersId);
      // console.log("In the fiund fun", matchedUserData.value);
      // console.log(singalConver);
      // console.log("Selected user ids --> " , usersId);
      // console.log("inside");
      // console.log(" Sing conv data ",singalConver.usersIds);
      usersId.filter((user) => {
        // console.log("inside selected User filter", user);
        singalConver.usersIds.find((item) => {
          //console.log("Inside singleConv find", item);
          if (item == user.typeId) {
            // console.log("Inside matched Ids--> ", item);
            // console.log("  ------------------> ");
            let userData = {
              userId: user.typeId,
              conversation_id: singalConver.conversation_id,
              conversation_uuid: singalConver.conversation_uuid,
              conversation_type: singalConver.conversation_type,
              conversation_type_id: singalConver.conversation_type_id,
            };
            matchedUserData.value.push(userData);
          }
          //     let userData = {
          //       userId: user.typeId,
          //       conversation_id: item.conversation_id,
          //       conversation_uuid: item.conversation_uuid,
          //       conversation_type: item.conversation_type,
          //       conversation_type_id: item.conversation_type_id,
          //     };
          //     console.log(userData);
          // if (matchedUserData.value.length != 0) {
          // matchedUserData.value.map((matchedUser) => {
          //     console.log("Matched Conditions", matchedUser);
          //     if (
          //     matchedUser.conversation_id == singalConver.conversation_id
          //     ) {
          //     // console.log("matched conversations");
          //     matchedUserData.value.push(userData);
          //     }
          // });
          // } else {
          // console.log("not matched");
          // console.log("Inside Else", userData);
          // matchedUserData.value.push(userData);
          // }
          // return true;
          // }
        });
      });

      if (matchedUserData.value.length == selectedUser.value.length) {
        //  console.log(matchedUserData.value);
        store.state.conv_ID = matchedUserData.value[0].conversation_id;
        store.state.chatObject.selectedUser = selectedUser.value;
        router.push('/inbox');
        //fetch Exsting conversations
        // fetchExistingConversations(matchedUserData.value);
      } else {
        //create new Conversation;
        createNewConversation();
      }
    }

    /**
     * Function to upload the audio message to the AWS S3 Bucket
     */
    function sendNewConvMessage() {
      AWS.config.update({
        region: "eu-west-2",
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "eu-west-2:bb9dc3d7-6385-4810-a36c-e9bc0408c85c",
        }),
      });

      // console.log(newConversationResponse.value);

      let uploadAudio = new AWS.S3.ManagedUpload({
        params: {
          Bucket: "openspace-broadcast",
          Key: `s3:/${
            newConversationResponse.value.conversation_id
          }/${Date.now().valueOf()}.wav`,
          Body: audioBlob.value,
          ContentType: "audio/wav",
        },
      });

      isMessageSent.value = true;
      let awsPromise = uploadAudio.promise();

      awsPromise
        .then((data) => {
          if (data != null) {
            const audioUrl = data.Location.split("%3A/")[1];
            // console.log(audioUrl);
            sendMessageToNewChannel(audioUrl);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    /**
     * Function to send the audio message to the Create message API
     */
    function sendMessageToNewChannel(audioUrl) {
      if(document.body.contains(document.getElementById('para-2'))){
          //  console.log(document.getElementById('para-2').duration);
           let formatDuration = moment
        .utc(document.getElementById('para-2').duration * 1000)
        .format("mm : ss");
        // console.log(formatDuration);
         timeduration.value = formatDuration;
          // disabled.value = false;
           }
      let reqHeaders = new Headers();
      reqHeaders.append("x-access-token", localStorage.getItem("token"));
      reqHeaders.append("Content-Type", "application/json");

      const dataRaw = JSON.stringify({
        conversation_id: newConversationResponse.value.conversation_id,
        conversation_uuid: newConversationResponse.value.conversation_uuid,
        conversation_type: newConversationResponse.value.conversation_type,
        team_id: newConversationResponse.value.team_id,
        audio_url: audioUrl,
        audio_duration: timeduration.value,
      });

      // console.log(dataRaw);

      const reqParams = {
        method: "POST",
        headers: reqHeaders,
        body: dataRaw,
        redirect: "follow",
      };

      fetch(`${process.env.VUE_APP_BASE_URL}/chat/message/create`, reqParams)
        .then((response) => response.text())
        .then((result) => {
          const convResponse = JSON.parse(result);
          if (convResponse.status == true) {
            // console.log(convResponse);
            store.state.conv_ID = newConversationResponse.value.conversation_id;
            // console.log(store.state.conv_ID)
            audioBlob.value = null;
            currentAudio.value = null;
            stepperMsg.value = 1;
            showRecordingOption.value = false;
            newConversationResponse.value = "";
            isMessageSent.value = false;
            store.state.newmessage = false;
            if (props.Inbox) {
              store.state.convliststatus = true
              setTimeout(() => {
                if (store.state.conv_ID !== "") {
                  let idsa = store.state.conv_ID;
                  document.querySelector(`[convId= "${idsa}"]`).click();
                  store.state.conv_ID = "";
                  // loadingstate == false
                }
              }, 2000);
            } else {
              router.push("/inbox");
            }
          } else {
            isMessageSent.value = false;
            newConversationResponse.value = "";
          }
        })
        .catch((error) => {
          console.log(error);
          isMessageSent.value = false;
          newConversationResponse.value = "";
          showMessage("Error sending message", "red-13");
        });
    }

    /**
     * Function to delete the audio preview
     */
    function deleteAudio1() {
      audioBlob.value = null;
      currentAudio.value = null;
      stepperMsg.value = 1;
    }

    /**
     * Function to start recording the audio preview
     */
    function startRecording() {
      recordingStart.value = true;
      let device = navigator.mediaDevices.getUserMedia({ audio: true });
      let items = [];
      starttime.value = new Date();
      device.then((stream) => {
        this.recorder = new MediaRecorder(stream);
        this.recorder.ondataavailable = (e) => {
          items.push(e.data);
          if (this.recorder.state == "inactive") {
            let blob = new Blob(items, { type: "audio/wav" });
            audioBlob.value = blob;
            // console.log(blob);
            currentAudio.value = URL.createObjectURL(blob);
          }
        };
        this.recorder.start(100);
      });
    }

    /**
     * Function to stop recording the audio preview
     */
    function stopRecording() {
      // console.log(loc);
      endtime.value = new Date();
      //  console.log(this.endtime);
      // let hh = Math.floor(
      //   (endtime.value.getTime() - starttime.value.getTime()) / 1000 / 60 / 60
      // );
      // let mm = Math.floor(
      //   (endtime.value.getTime() - starttime.value.getTime()) / 1000 / 60
      // );
      // let ss = Math.floor(
      //   (endtime.value.getTime() - starttime.value.getTime()) / 1000
      // );
      // console.log("hh" + hh + "mm" + mm + "ss" + ss);


      recordingStart.value = false;
      this.recorder.stop();
      this.done = true;
      stepperMsg.value = 2;
    }
    /**
     * Function to delete the audio preview
     */
    function deleteAudio() {
      audioBlob.value = null;
      currentAudio.value = null;
      // storyData.step = 1;
      stepperMsg.value = 1;
    }
    return {
      $q,
      isContactsFetched,
      stepperMsg,
      stringOptions,
      options1,
      matchedConversations,
      maxSelection,
      newConversationName,
      isNewConversation,
      selectedUser,
      newConversationResponse,
      newConversationMessages,
      showRecordingOption,
      con,
      allConversations,
      isLoading,
      matchedUserData,
      isMessageSent,
      audioBlob,
      currentAudio,
      recordingStart,
      moment,
      starttime,
      endtime,
      timeduration,
      user,
      imgurl: "",

      // Functions
      filterOptions,
      createValue,
      filterFn,
      fetchExistingConversations,
      createNewConversation,
      findUserIdInConv,
      sendNewConvMessage,
      deleteAudio1,
      startRecording,
      stopRecording,
      deleteAudio,
      newMessage,
      searchConv,
    };
  },
  created() {
    // console.log(localStorage.getItem('token'));
    this.user.loginname = localStorage.getItem("loginname");
    this.user.pictureurl = localStorage.getItem("pictureurl");
    this.user.userId = localStorage.getItem("userId");
    this.imgurl = process.env.VUE_APP_BASE_URL_IMAGE;
    // console.log(this.imgurl);
  },
};
</script>

<style>
</style>