<template>
  <div class="cContainer inbox">
    <div class="row flex items-center">
      <div class="col-2 justify-center">
        <q-input
          dense
          class="search-inbox-field full-width"
          placeholder="Search"
          outlined
          v-model="leftSectionInbox.searchQuery"
          @keyup="searchedProducts"
        >
          <i class="fa fa-search inbox-search-icon" aria-hidden="true"></i>
        </q-input>
      </div>

      <div class="col-1">
        <q-btn
          round
          dense
          color="red-13"
          @click="newmessage"
          size="md"
          icon="fas fa-plus text-white"
        />
      </div>
      <div class="col-7" v-if="selectoption">
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
            (opt) => (Object(opt) === opt && 'name' in opt ? opt.name : '')
          "
        >
          <template v-slot:prepend>
            <q-icon name="fas fa-search" />
          </template>
        </q-select>
      </div>
    </div>
    <div class="">
      <q-splitter v-model="splitterModel" style="height: 75vh">
        <template v-slot:before class="q-mt-md">
          <div style="height: 75vh">
            <div class="col-3">
              <!-- <p>{{$store.state.newmessage}} </p> -->
              <div
                v-if="
                  $store.state.newmessage == false &&
                  $store.state.convliststatus == true
                "
              >
                {{ getConversationList(false) }}
              </div>
              <q-tabs v-model="tab" vertical>
                <template v-if="leftSectionInbox.conversationsFetched">
                  <q-tab
                    class="q-my-xs conversations-list"
                    v-for="(skelItem, index) in 6"
                    :key="index"
                  >
                    <q-item style="width: 100%">
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
                      </q-item-section>
                    </q-item>
                  </q-tab>
                </template>

                <template
                  v-else
                  v-for="conversation in leftSectionInbox.conversations"
                  :key="conversation.conversation_id"
                >
                  <q-tab
                    class="q-my-xs conversations-list"
                    :name="conversation.title"
                    :convId="conversation.conversation_id"
                    @click="
                      getMessages(
                        conversation.conversation_id,
                        conversation.conversation_uuid,
                        conversation.conversation_type,
                        conversation.conversation_type_id,
                        true,
                        conversation.title
                      )
                    "
                  >
                    <q-tooltip
                      transition-show="scale"
                      transition-hide="scale"
                      anchor="bottom right"
                      self="center end"
                    >
                      {{ conversation.title }}
                    </q-tooltip>
                    <q-item style="width: 100%">
                      <div
                        class="row inline flex items-center justify-center"
                        style="width: 100%"
                      >
                        <div class="col-2 text-left">
                          <q-item-section avatar>
                            <q-avatar
                              :class="
                                conversation.img_url == null ||
                                conversation.img_url == 'null'
                                  ? 'bg-red-13'
                                  : ''
                              "
                            >
                              <q-img
                                v-if="
                                  conversation.img_url != null &&
                                  conversation.img_url != 'null'
                                "
                                :src="imgurl + '/' + conversation.img_url"
                              />
                              <p v-else class="text-capitalize text-white">
                                {{ conversation.title.charAt(0) }}
                              </p>
                            </q-avatar>
                          </q-item-section>
                        </div>

                        <div class="col-7 text-left ellipsis">
                          <span class="text-black text-capitalize q-mx-sm">{{
                            conversation.conversation_type == "OneToOne"
                              ? conversation.title
                              : conversation.title
                          }}</span>
                          <q-badge v-if="conversation.unread_message > 0">{{
                            conversation.unread_message
                          }}</q-badge>
                        </div>

                        <div class="col-3 text-right">
                          <q-item-section class="text-black">{{
                            moment(conversation.created_date).format("HH:mm")
                          }}</q-item-section>
                        </div>
                      </div>
                    </q-item>
                  </q-tab>
                </template>
              </q-tabs>
            </div>
          </div>
        </template>
        <!-- <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-teal">
            <q-tab name="mails" icon="mail" label="Mails" />
            <q-tab name="movies" icon="movie" label="Movies" />
            <q-tab name="alarms" icon="alarm" label="Alarms" />
          </q-tabs>
        </template> -->
        <template v-if="showChat" v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
            class="no-scroll"
            style="height:100%"
          >
            <q-tab-panel :name="tab">
              <div class="row">
                <div class="col-8">
                  <Chat />
                  <q-btn
                    dense
                    color="red-13"
                    @click="drawer = !drawer"
                    class="
                      text-capitalize
                      q-py-md
                      chat-recording-btn
                      text-subtitle1
                      full-width
                    "
                    label="Start Recording"
                  >
                    <i
                      class="q-ml-sm fas text-white fa-microphone fa-lg"
                      style="font-size: 20px"
                    ></i>
                  </q-btn>
                </div>
                <div class="col-4">
                  <Salesforcerecord />
                </div>
              </div>

            </q-tab-panel>
          </q-tab-panels>
        </template>

        <template v-else v-slot:after>
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
            <span class="text-h4 text-black text-capitalize text-weight-regular"
              >Hi, {{ loginname }}!!</span
            >
          </div>
          <div class="row q-mt-md justify-center items-center">
            <span class="text-h5 text-black text-weight-regular"
              >Kindly select a conversation to start chatting...</span
            >
          </div>
          <div class="row q-mt-md justify-center items-center">
            <q-btn
              size="lg"
              @click="redirectToInvite"
              class="q-px-lg text-capitalize"
              rounded
              dense
              color="red-13"
              label="Invite Someone"
            />
          </div>
        </template>
        <div class="drawer row">
                <!-- <q-btn flat  round dense icon="menu" /> -->

                <q-dialog
                  v-model="drawer"
                  seamless
                  position="bottom"
                  class="q-pa-md"
                >
                  <q-card
                    style="width: 550px;overflow:hidden"
                    class="q-pa-md relative-position"

                  >
                    <q-card-section class="row">
                      <div class="full-width row items-center">
                        <div class="col-11"> <p>Message to : <span v-if="names.length">{{names.toString()}} </span><span v-else v-for="user in selectedUser" :key="user"> {{user.name.toString()}}, </span></p> </div>
                          <div class="col-1"> <q-btn
                          icon="fas fa-times"
                          @click="manageDrawer()"
                          class="text-right"
                          v-close-popup
                        /> </div>

                      </div>
                      <div class="row full-width">
                        <div class="col-8"> <img
                            class="inline"
                            width="40"
                            height="40"
                            src="../assets/salesforce-big.png"
                          /> Salesforce</div>
                        <div class="col-4">
                          <q-btn
                          size="md"
                          dense
                            style="outline:red solid 1.5px!important;"
                           text-color="black"
                            label="Connect"
                            class="q-mb-sm q-px-sm"
                          />
                        </div>
                      </div>
                    </q-card-section>
                    <q-separator />
                    <div class="row" style="height: 200px">
                      <q-stepper
                        v-model="step"
                        header-nav
                        ref="stepper"
                        color="primary"
                        animated
                        class="no-shadow relative-position"
                        style="width: 100%"
                      >
                        <q-step
                          :name="1"
                          title="Select campaign settings"
                          icon="settings"
                          :done="done1"
                        >
                          <p
                            v-if="recordingStartWave"
                            class="recordingTimer text-center"
                          >
                            {{
                              moment.utc(totalSeconds * 1000).format("mm : ss")
                            }}<br />
                          </p>
                          <div
                            v-if="recordingStartWave"
                            class="col-12 q-mb-xs"
                            style="height: 35px"
                          >
                            <div
                              class="justify-center q-gutter-xs"
                              style="margin: auto; display: flex"
                            >
                              <q-spinner-bars color="red-13" size="2.5em" />
                              <q-spinner-bars color="red-13" size="2.5em" />

                              <!-- <div id="timer"></div> -->
                            </div>
                          </div>
                          <!-- <div class="col-4 offset-4 "> -->
                          <div
                            @click="
                              recordingStart
                                ? stopRecording()
                                : startRecording()
                            "
                            class="microphone-circle"
                          >
                            <i
                              :class="
                                recordingStart
                                  ? 'fa fa-stop'
                                  : 'fa fa-microphone'
                              "
                              style="color: white"
                              aria-hidden="true"
                            ></i>
                          </div>

                          <!-- </div> -->
                          <!-- `
                          <q-stepper-navigation>
                            <q-btn
                              @click="
                                () => {
                                  done1 = true;
                                  step = 2;
                                }
                              "
                              color="primary"
                              label="Continue"
                            />
                          </q-stepper-navigation>` -->
                        </q-step>

                        <q-step
                          :name="2"
                          title="Create an ad group"
                          caption="Optional"
                          icon="create_new_folder"
                          :done="done2"
                        >
                          <div class="row">
                            <div class="prgressBar q-mt-md">
                              <div
                                class="absolute w-full rounded-lg"
                                style="height: 6px; background-color: grey"
                              ></div>
                              <div
                                class="absolute w-full rounded-lg"
                                :style="`width : ${recordingReviewPercent}%; height: 6px; background-color: red;`"
                              ></div>
                              <audio
                                ref="audioElem"
                                id="para-1"
                                :src="currentAudio"
                              ></audio>
                            </div>
                          </div>

                          <q-stepper-navigation>
                            <div class="row items-center justify-center">
                              <div class="col-4 text-center">
                                <q-btn
                                  @click="deleteAudio"
                                  dense
                                  round
                                  color="red-13"
                                  class="text-white"
                                  size="lg"
                                >
                                  <i
                                    class="fas fa-trash-alt"
                                    style="font-size: 13px"
                                  ></i>
                                </q-btn>
                              </div>
                              <div class="col-4 text-center">
                                <!-- <p class="recordingTimer q-pl-md">
                              {{ Math.floor((totalCalSecPaushed / 60) % 60) }}:
                              {{ totalCalSecPaushed % 60 }}
                            </p> -->
                                <q-btn
                                  @click="
                                    isPlaying ? stopPlaying() : startPlaying()
                                  "
                                  dense
                                  style="border: 6px solid rgb(0 0 0 / 23%)"
                                  round
                                  color="red-13"
                                  size="xl"
                                >
                                  <i
                                    :class="
                                      isPlaying ? 'fas fa-pause' : 'fas fa-play'
                                    "
                                    style="font-size: 18px"
                                  ></i>
                                </q-btn>
                              </div>
                              <div class="col-4 text-center">
                                <q-btn
                                  v-model="
                                    $store.state.chatObject.conversationUUID
                                  "
                                  dense
                                  color="red-13"
                                  :loading="messageSentLoader"
                                  @click="sendAudio"
                                  class="text-capitalize q-py-sm record-delete"
                                  style="margin-left: 24px"
                                  label=""
                                >
                                  <i class="fas fa-paper-plane fa-lg"></i>
                                </q-btn>
                              </div>
                            </div>
                            <!-- <q-btn
                              flat
                              @click="step = 1"
                              color="primary"
                              label="Back"
                              class="q-ml-sm"
                            /> -->
                          </q-stepper-navigation>
                        </q-step>
                      </q-stepper>
                    </div>
                  </q-card>
                </q-dialog>
              </div>
      </q-splitter>
    </div>
  </div>
</template>
<script>
import Chat from "./Chat.vue";
import { reactive, ref } from "vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import Salesforcerecord from "./Salesforcerecord.vue";
import io from "socket.io-client";
import moment from "moment";
import AWS from "aws-sdk";
export default {
  setup() {
    const names = ref();
    const messageSentLoader = ref(false);
    const socketInstance = ref();
    const store = useStore();
    const $q = useQuasar();
    const step = ref(1);
    const done1 = ref(false);
    const done2 = ref(false);
    const recorder = ref();
    const audioBlob = ref(null);
    const currentAudio = ref(null);
    const recordingStart = ref(false);
    const recordingStartWave = ref(false);
    const newRecordingDuration = ref(0);
    const recordingReviewPercent = ref(0);
    const recordingPausePercent = ref(0);
    const recordingDuration = ref(1000);
    const timerVar = ref(0);
    const totalSeconds = ref(0);
    const totalCalSecPaushed = ref(0);
    const counterTimerVar = ref(0);
    const audioduration = ref();
    const maxSelection = ref(10);
    const selectedUser = ref();
    const stringOptions = ref();
    const options1 = ref(stringOptions.value);
    const con = ref([]);
    const leftSectionInbox = reactive({
      searchQuery: "",
      conversationsFetched: ref(false),
      conversations: ref(),
    });
    const drawer = ref(false);
    const showChat = ref(false);
    const stoprecordingicon = ref(false);
    const selectoption = ref(false);
    const newConversationResponse = ref();
    const matchedUserData = ref([]);

    function manageDrawer() {
      drawer.value = false;
      store.state.chatObject.drawer = false;
    }
    /**
     * Function to filter/search items in the Conversations List
     */
    function searchedProducts() {
      leftSectionInbox.conversations = leftSectionInbox.conversations.filter(
        (conversation) => {
          return (
            conversation.title
              .toLowerCase()
              .indexOf(leftSectionInbox.searchQuery.toLowerCase()) != -1
          );
        }
      );
      if (leftSectionInbox.searchQuery == "") {
        getConversationList(false);
      }
    }
    /**
     * Function to fetch the contacts list and previous conversation lists from the API
     */
    function newmessage() {
      names.value = '';
      selectoption.value = !selectoption.value;
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
      // isContactsFetched.value = true;
      // allConversations.value = "";
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
          // console.log(status);
          if (status.status == true) {
            stringOptions.value = status.data;
            // isContactsFetched.value = false;
          } else {
            // isContactsFetched.value = false;
          }
        })
        .catch((error) => {
          console.log(error);
          showMessage("Some error occured...", "red-13");
        });
    }

    function searchConv() {
      // newConversationMessages.value = "";
      if (selectedUser.value.length !== 0) {
        con.value = [];
        leftSectionInbox.conversations.map((singleConversation) => {
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
              // console.log(searchedResults);
              // Get existing conversations
              // fetchExistingConversations(searchedResults);
              store.state.conv_ID = searchedResults[0].conversation_id;
              if (store.state.conv_ID !== "") {
                let toLoadCon = store.state.conv_ID;
                document.querySelector(`[convId= "${toLoadCon}"]`).click();
                store.state.conv_ID = "";
                // loadingstate == false
              }
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
            if (
              singleCon.conversation_type_id == selectedUser.value[0].typeId
            ) {
              // console.log("Singlecon", singleCon);
              return singleCon;
            }
          });

          if (searcheresultteam.length == 0) {
            // create new Conversation with the team
            createNewTeamConversation();
          } else {
            // load the existing conversation
            store.state.conv_ID = searcheresultteam[0].conversation_id;
            // audioBlob.value = null;
            // currentAudio.value = null;
            // showRecordingOption.value = false;
            // isMessageSent.value = false;
            // store.state.newmessage = false;
            // if (props.Inbox) {
            // store.state.convliststatus = true
            // setTimeout(() => {
              if (store.state.conv_ID !== "") {
                let idsa = store.state.conv_ID;
                document.querySelector(`[convId= "${idsa}"]`).click();
                store.state.conv_ID = "";
                // loadingstate == false
              }
            // }, 2000);
            // } else {
            // router.push("/inbox");
            // }
          }
        }
      } else {
        showMessage("Kindly select an option first", "red-13");
      }
    }

    /**
     * Function to create a new conversation from the API
     */
    function createNewConversation() {
      // isLoading.value = true;
      newConversationResponse.value = "";
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

              store.state.conv_ID = newConvResponse.data.conversation_id;

              store.state.chatObject.conversationID = newConvResponse.data.conversation_id;
              store.state.chatObject.conversationUUID = newConvResponse.data.conversation_uuid;
              store.state.chatObject.conversationtype = newConvResponse.data.conversation_type;
              store.state.chatObject.conversationtypeID = newConvResponse.data.conversation_type_id;
              drawer.value = true;
              // console.log(newConversationResponse.value);
              // showRecordingOption.value = true;
              // isLoading.value = false;
              // isNewConversation.value = false;
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
      usersId.filter((user) => {
        singalConver.usersIds.find((item) => {
          if (item == user.typeId) {
            let userData = {
              userId: user.typeId,
              conversation_id: singalConver.conversation_id,
              conversation_uuid: singalConver.conversation_uuid,
              conversation_type: singalConver.conversation_type,
              conversation_type_id: singalConver.conversation_type_id,
            };
            matchedUserData.value.push(userData);
          }
        });
      });

      if (matchedUserData.value.length == selectedUser.value.length) {
        // console.log(matchedUserData.value);
        //fetch Exsting conversations
        store.state.conv_ID = matchedUserData.value[0].conversation_id;
        if (store.state.conv_ID !== "") {
          let loadConv = store.state.conv_ID;
          document.querySelector(`[convId= "${loadConv}"]`).click();
          store.state.conv_ID = "";
          // loadingstate == false
        }
      } else {
        //create new Conversation;
        createNewConversation();
      }
    }

    function createNewTeamConversation() {
      // isLoading.value = true;
      newConversationResponse.value = "";

      if (selectedUser.value.length) {
        let reqHeaders = new Headers();
        reqHeaders.append("x-access-token", localStorage.getItem("token"));
        reqHeaders.append("Content-Type", "application/json");

        const reqData = JSON.stringify({
          type: "Team",
          type_id: Number(selectedUser.value[0].typeId),
        });

        const reqOptions = {
          method: "POST",
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
            if (res.status == true) {
              newConversationResponse.value = res.data;

              store.state.conv_ID = res.data.conversation_id;

              store.state.chatObject.conversationID = res.data.conversation_id;
              store.state.chatObject.conversationUUID = res.data.conversation_uuid;
              store.state.chatObject.conversationtype = res.data.conversation_type;
              store.state.chatObject.conversationtypeID = res.data.conversation_type_id;
              drawer.value = true;
              // showRecordingOption.value = true;
            } else {
              // showRecordingOption.value = false;
              showMessage(
                "Something went wrong while creating conversation",
                "red-13"
              );
            }
          })
          .catch((error) => {
            console.log(error);
            // isLoading.value = false;
            // showRecordingOption.value = false;
            showMessage("Some error occurred...", "red-13");
          });
      }
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
          // newConversationMessages.value = "";
          // showRecordingOption.value = false;
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
    /**
     * Function to fetch all the previous conversations of the user from the API
     */
    function getConversationList(loadingstate) {
      // leftSectionInbox.conversationsFetched = true;
      store.state.convliststatus = false;
      if (store.state.conv_ID !== "") {
        loadingstate == true;
      }
      if (loadingstate == false) {
        leftSectionInbox.conversationsFetched = false;
      } else {
        leftSectionInbox.conversationsFetched = true;
      }
      let myHeaders = new Headers();
      myHeaders.append("x-access-token", localStorage.getItem("token"));

      let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `${process.env.VUE_APP_BASE_URL}/chat/conversation/list`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const res = JSON.parse(result);
          // console.log(res);
          if (res.status === false && res.message == "Auth Error") {
            showMessage("Session expired", "red-13");
            location.replace("/");
          } else {
            leftSectionInbox.conversations = res.data;
            leftSectionInbox.conversationsFetched = false;
            setTimeout(() => {
              if (store.state.conv_ID !== "") {
                let idsa = store.state.conv_ID;
                document.querySelector(`[convId= "${idsa}"]`).click();
                store.state.conv_ID = "";
                loadingstate == false;
              }
            }, 2000);
          }
        })
        .catch((error) => {
          console.log(error);
          leftSectionInbox.conversationsFetched = false;
          showMessage("Some error occurred...", "red-13");
        });
    }
    function showMessage(msg, color) {
      $q.notify({
        color: color,
        message: msg,
        position: "top",
        timeout: 3000,
      });
    }
    /**
     * Function to handle the get messages request for a particular channel
     */
    function getMessages(
      conversationID,
      conversationuuid,
      conversationtype,
      conversationtypeid,
      loadingstate,
      title
    ) {
      names.value = title;
      if (conversationID == store.state.chatObject.conversationID) {
        store.state.chatObject.chatloadingstate = false;
      } else {
        store.state.chatObject.chatloadingstate = loadingstate;
      }
      store.state.chatObject.conversationID = "";
      store.state.chatObject.conversationUUID = "";
      store.state.chatObject.conversationtype = "";
      store.state.chatObject.conversationtypeID = "";
      store.state.chatObject.conversationID = conversationID;
      store.state.chatObject.conversationUUID = conversationuuid;
      store.state.chatObject.conversationtype = conversationtype;
      store.state.chatObject.conversationtypeID = conversationtypeid;

      showChat.value = true;

      //  isConversationClicked.value = true;
      //   getConversationMessages(loadingstate);
    }
    /**
     * Function to start the arecording.value
     */
    function startRecording() {
      recordingStartWave.value = true;
      recordingStart.value = true;
      //   recording.value = false;
      stoprecordingicon.value = true;
      let device = navigator.mediaDevices.getUserMedia({ audio: true });
      let items = [];
      // timer start
      counterTimerVar.value = setInterval(() => {
        countTimer();
      }, 1000);
      device.then((stream) => {
        recorder.value = new MediaRecorder(stream);
        recorder.value.ondataavailable = (e) => {
          items.push(e.data);
          // console.log(e.data);
          if (recorder.value.state == "inactive") {
            let blob = new Blob(items, { type: "audio/wav" });
            // let audio = document.getElementById("audio");
            // let mainaudio = document.createElement("audio");
            // mainaudio.setAttribute("controls", "controls");
            // mainaudio.setAttribute("controlslist", "noplaybackrate");
            // mainaudio.setAttribute("controlslist", "nodownload");
            // mainaudio.setAttribute("preload", "auto");
            // mainaudio.setAttribute("id", "para-1");
            audioBlob.value = blob;
            // console.log(audioBlob.value);
            currentAudio.value = URL.createObjectURL(blob);
            // audio.appendChild(mainaudio);
            // mainaudio.innerHTML =
            //   '<source id="test" src="' +
            //   URL.createObjectURL(blob) +
            //   '" type="audio/wav"/>';
            // console.log(URL.createObjectURL(blob));

            // let file = new File([URL.createObjectURL(blob)], "name", {
            //   type: "audio/wav",
            // });
            // console.log(file);
          }
        };
        recorder.value.start();
      });
    }

    /**
     * Function to stop the arecording.value
     */
    function stopRecording() {
      totalCalSecPaushed.value = totalSeconds.value;
      clearInterval(totalSeconds.value);
      clearInterval(counterTimerVar.value);
      recordingStart.value = false;
      recordingStartWave.value = false;
      stoprecordingicon.value = false;
      // console.log(audioBlob.value);
      step.value = 2;
      //    console.log(totalCalSecPaushed.value);
      //   chatSectionVar.endtime = new Date() ;
      // this.timeduration=this.endtime.getTime()-this.starttime.getTime();
      //   setInterval(() => {
      //     if (document.body.contains(document.getElementById("para-1"))) {
      // alert('get')
      let formatDuration = moment
        .utc(totalCalSecPaushed.value * 1000)
        .format("mm : ss");
      // console.log(formatDuration);
      audioduration.value = formatDuration;
      //   chatSectionVar.timeduration = formatDuration;
      //   if (
      //     chatSectionVar.timeduration == "00 : 00" ||
      //     chatSectionVar.timeduration == "Invalid date"
      //   ) {
      //     console.log("if");
      //     //  alert('wrong');
      //     recording.value = true;
      //     stoprecordingicon.value = false;
      //     disabled.value = true;
      //   } else {
      //     console.log("else");
      //     recording.value = false;
      //     stoprecordingicon.value = false;
      //     disabled.value = false;
      //   }
      // }
      //   }, 1000);

      recorder.value.stop();
    }
    function going() {
      let time = new Date().getTime();
      if (newRecordingDuration.value > 0) {
        recordingReviewPercent.value =
          recordingPausePercent.value +
          Math.floor((100 * (time - timerVar.value)) / recordingDuration.value);
      } else {
        recordingReviewPercent.value = Math.floor(
          (100 * (time - timerVar.value)) / recordingDuration.value
        );
      }

      // clear interval
      // console.log(this.recordingReviewPercent);
      if (this.recordingReviewPercent > 99) {
        // console.log("this is in");
        this.isPlaying = false;
        clearInterval(this.recordingReviewProgress);
      }
    }
    function countTimer() {
      ++totalSeconds.value;
      var hour = Math.floor(totalSeconds.value / 3600);
      var minute = Math.floor((totalSeconds.value - hour * 3600) / 60);
      var seconds = totalSeconds.value - (hour * 3600 + minute * 60);
      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;
      if (seconds < 10) seconds = "0" + seconds;
      //  document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
    }
    function deleteAudio() {
      audioBlob.value = null;
      currentAudio.value = null;
      step.value = 1;
      totalCalSecPaushed.value = 0;
      recordingReviewPercent.value = 0;
      recordingPausePercent.value = 0;
      newRecordingDuration.value = 0;
    }
    function sendAudio() {
      messageSentLoader.value = true;
      try {
        AWS.config.update({
          region: "eu-west-2",
          credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: "eu-west-2:bb9dc3d7-6385-4810-a36c-e9bc0408c85c",
          }),
        });

        let upload = new AWS.S3.ManagedUpload({
          params: {
            Bucket: "openspace-broadcast",
            Key: `s3:/${
              store.state.chatObject.conversationID
            }/${Date.now().valueOf()}.wav`,
            Body: audioBlob.value,
            ContentType: "audio/wav",
          },
        });

        let promise = upload.promise();

        promise.then((data) => {
          if (data !== null) {
            let str = data.Location;
            const myArr = str.split("%3A/")[1];
            successResponse(myArr);
          } else {
            // error uploading file to aws
            console.log("error uploading audio");
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    function successResponse(data) {
      messageSentLoader.value = false;
      drawer.value = false;
      let message = {
        conversation_id: store.state.chatObject.conversationID,
        conversation_uuid: store.state.chatObject.conversationUUID,
        conversation_type: store.state.chatObject.conversationtype,
        audio_url: data,
        conversation_type_id: store.state.chatObject.conversationtypeID,
        audio_duration: audioduration.value,
        // "comment":salesForceList.length==0?null:
        // {
        //   "conversation_uuid": conversationData['conversation_uuid'],
        //   "tag_type": "Salesforce",
        //   "field_1": salesForceList[0]['Id'],
        //   "field_2": "https://salestrip-demo-org-demo-80579.my.salesforce.com",
        //   "field_3": salesForceList[0]['attributes']['type']
        // }
      };

      // console.log(message);

      socketInstance.value.emit("message", {
        "x-access-token": localStorage.getItem("token"),
        message: message,
      });

      socketInstance.value.on("message", (data) => {
        console.log(data);
        getConversationList(false);
        getMessages(
          store.state.chatObject.conversationID,
          store.state.chatObject.conversationUUID,
          store.state.chatObject.conversationtype,
          store.state.chatObject.conversationtypeID,
          false
        );
        store.state.chatObject.isMessageSent = true;
        store.state.chatObject.drawer = false;

        setTimeout(() => {
          if (store.state.conv_ID !== "") {
            let openConvTab = store.state.conv_ID;
            document.querySelector(`[convId= "${openConvTab}"]`).click();
            store.state.conv_ID = "";
            // loadingstate == false
          }
        }, 2000);
      });
    }

    return {
      leftSectionInbox,
      socketInstance,
      recorder,
      moment,
      showChat,
      pictureurl: ref(),
      imgurl: ref(),
      userid: ref(),
      loginname: ref(),
      drawer,
      step,
      done1,
      done2,
      recordingStart,
      stoprecordingicon,
      audioBlob,
      currentAudio,
      recordingStartWave,
      newRecordingDuration,
      recordingPausePercent,
      recordingReviewPercent,
      timerVar,
      recordingDuration,
      isPlaying: ref(false),
      totalCalSecPaushed,
      recordingReviewProgress: ref(0),
      totalSeconds,
      counterTimerVar,
      audioduration,
      selectedUser,
      maxSelection,
      stringOptions,
      options1,
      selectoption,
      names,
      messageSentLoader,
      // functions
      getConversationList,
      startRecording,
      stopRecording,
      getMessages,
      deleteAudio,
      sendAudio,
      going,
      countTimer,
      filterOptions,
      filterFn,
      createValue,
      tab: ref(""),
      splitterModel: ref(20),
      newmessage,
      searchConv,
      createNewConversation,
      searchedProducts,
      manageDrawer
    };
  },

  mounted() {
    this.getConversationList(true);
    // console.log(this.$store.state.chatObject.drawer);
    if (this.$store.state.chatObject.drawer == true) {
      this.names = this.$store.state.chatObject.selectedUser.map((user) => user.name);
      this.drawer = true;
    }
  },

  created() {
    this.socketInstance = io("https://openspace.is/chat");
    this.socketInstance.on("connect", () => {});
    this.userid = localStorage.getItem("userId");
    this.pictureurl = localStorage.getItem("pictureurl");
    this.loginname = localStorage.getItem("loginname");
    this.imgurl = process.env.VUE_APP_BASE_URL_IMAGE;
  },

  methods: {
    startPlaying() {
      // console.log("startplaying");
      this.isPlaying = true;
      // console.log("this.$refs.audioElem", this.$refs.audioElem);
      this.$refs.audioElem.play();
      // let setCurrentDuration = this.timeduration * 1000 - this.$refs.audioElem.currentTime;
      // setTimeout(() => {
      //  this.isPlaying = false;
      // }, setCurrentDuration);

      this.recordingDuration = this.totalCalSecPaushed * 1000;
      //  this.recordingTimer = new Date().getTime();
      // this.recordingReviewProgress = setInterval(, 100);
      //   this.recordingReviewProgress =  setInterval(()=> {
      //   console.log('setinterval')
      //   this.going();
      // },  this.recordingDuration /100) this.going, this.recordingDuration
      if (this.recordingReviewPercent >= 100) {
        this.recordingReviewPercent = 0;
        this.newRecordingDuration = 0;
      }

      this.timerVar = new Date().getTime();
      //       console.log('this is start play');
      //       if(this.isPlaying == true){
      this.recordingReviewProgress = setInterval(() => {
        this.going();
      }, this.recordingDuration / 100);
    },
    stopPlaying() {
      // console.log("stopplaying");
      // if (this.isPlaying !== false) {
      this.isPlaying = false;
      this.$refs.audioElem.pause();

      // pausePercent.value = percent.value;
      // clearInterval(progress.value);
      // console.log('this.recordingReviewProgress' + this.recordingReviewProgress);
      this.recordingPausePercent = this.recordingReviewPercent;
      // if(this.recordingReviewPercent >= 100){
      //   alert('in the clear interval')
      clearInterval(this.recordingReviewProgress);
      this.newRecordingDuration =
        this.recordingDuration -
        (this.recordingPausePercent * this.recordingDuration) / 100;
    },
  },

  components: {
    Chat,
    Salesforcerecord,
  },
};
</script>
<style>
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
::-webkit-scrollbar {
  width: 4px !important;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey !important;
}
::-webkit-scrollbar-thumb {
  background: #fa243c !important;
}
#conversationListSidebar .q-splitter__panel {
  margin-top: 16px !important;
}
#conversationListSidebar .q-card {
  box-shadow: none;
}
.conversations-list .q-tab__content {
  width: 100%;
}
.inbox .q-splitter__separator {
  display: none !important;
}
#audio audio {
  margin-left: 4px;
}
.inbox .q-splitter__after {
  overflow: unset !important;
}
.contact-listsearch .q-field__control {
  height: 47px !important;
}
/* .inbox-top-left {
  display: flex;
  align-items: center;
  justify-content: center;
} */
.record-delete {
  border-radius: 50% !important;
  height: 50px !important;
  width: 50px !important;
}
.inbox .q-tab--active,
.inbox .conversations-list:hover {
  color: #ffffff;
  min-height: 75px;
  border-radius: 10px;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
  border-left: 5px solid #fa243c;
  background: white;
}
/* .inbox .conversations-list:active{
   color: #ffffff;
  border-radius: 10px;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
  border-left: 5px solid #fa243c;
  background: white;
} */
.inbox .q-tab--inactive {
  min-height: 75px;
  border-left: 5px solid #FAFAFA;
}
.inbox .fa-search {
  line-height: 40px;
}
.inbox .fa-play {
  font-size: 18px !important;
}
.context-button {
  line-height: 62px;
}
.context-button button {
  border: 2px solid #fa243c;
}
.inbox .q-badge {
  background-color: #fb5b73;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  justify-content: center;
}
.chat-box-area {
  height: 75vh;
  /* overflow: scroll; */
  border-radius: 10px 10px 0px 0px !important;
}
.chat-recording-btn {
  width: 100%;
  border-radius: 0px 0px 15px 15px !important;
}
.chat-box-area::-webkit-scrollbar {
  display: none;
}
.message-header img,
.message-header-right img {
  width: 18px;
  height: 18px;
}
/* .message-header-right {
  width: 100%;
} */
.q-message-text,
.q-message-text--received {
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
}
.chat-audio-time-left {
  position: relative;
  margin: inherit;
  left: 78%;
  color: rgba(54, 53, 53, 0.863);
}
.chat-audio-time-right {
  position: relative;
  margin: inherit;
  left: 90%;
  color: rgba(54, 53, 53, 0.863);
}
.message-right-play {
  background-color: #ffffff !important;
}
.right-side-card {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 10px !important;
  margin-left: 12px !important;
}
.right-card-heading-text {
  font-size: 13px !important;
  line-height: normal !important;
  letter-spacing: 1px !important;
}
.right-card-settings {
  display: flex;
}
.email-input-decorator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.round-input-label-text {
  font-size: 15px;
  padding: 0 4px;
  transform: translate(0, -13px);
  white-space: nowrap;
}
.round-input-border-left {
  flex: 0 0 10px;
  box-sizing: border-box;
  height: 100%;
  border-radius: 10px 0 0 10px;
  border: 2px solid #eeeeee;
  border-right: none;
}
.round-input-border-right {
  flex: 1 0 50px;
  border-radius: 0 10px 10px 0;
  border: 2px solid #eeeeee;
  border-left: none;
}
.right-side-card .round-input {
  position: relative;
  font-size: 1em;
  padding: 7px 20px 7px 15px;
  min-width: 220px !important;
  border: none;
  background: none;
  border-radius: 10px;
  border-bottom: 2px solid #eeeeee;
}
.round-input:focus {
  outline: none;
}
.q-menu {
  padding: 20px !important;
  border-radius: 10px !important;
}
.right-card-dropdown-fields > ul {
  list-style: none !important;
  margin-block-start: 2px !important;
  padding-inline-start: 10px !important;
  line-height: 15px;
}
.right-card-dropdown-fields > ul > li {
  margin: 7px 0px;
}
.salesforce-fields {
  justify-content: center;
}
.inbox .q-tab-panel {
  padding: 0px !important;
}
.new-message-card .q-stepper--horizontal .q-stepper__step-inner {
  padding: 4px 21px !important;
}
/* .new-message-card .microphone-circle2 {
  width: 111px;
  height: 111px;
  background: #FA243C;
  border-radius: 100%;
  line-height: 115px;
  border: 15px solid #fa243d9d;
  text-align: center;
  margin: auto;
}
.new-message-card .microphone-circle2 .fa-microphone {
  font-size: 57px;
} */
</style>
