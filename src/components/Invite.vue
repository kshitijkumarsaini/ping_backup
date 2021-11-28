<template>
  <div class="invite cContainer">
    <div class="row">
      <span class="invite-heading q-mb-md">
        Invite someone to talk to in Ping
      </span>
    </div>

    <div class="row">
      <!-- <div id="toast1">
        <div id="desc1">
          <span class="triangle" style="margin-right: 13px;}">⚠️</span>Session
          Expired
        </div>
      </div> -->
      <!-- <div id="toast2">
        <div id="desc1">
          <span class="triangle" style="margin-right: 13px;}">✔</span>Request
          Sended
        </div>
      </div> -->
      <div class="col-5">
        <q-card class="my-card email-input-card q-pa-md">
          <q-card-section>
            <div class="row">
              <div class="col-7">
                <label class="round-input-container">
                  <div class="email-input-decorator">
                    <div class="round-input-border-left"></div>
                    <span class="round-input-label-text orange">Email</span>
                    <div class="round-input-border-right"></div>
                  </div>
                  <input
                    type="text"
                    class="round-input invite-email-input"
                    placeholder="Enter email"
                    v-model="email"
                  />
                </label>
                <div
                  id="desc"
                  style=""
                  class="orange text-left"
                  v-if="emailmessage == true"
                >
                  {{ message }}
                </div>
                <div
                  id="desc"
                  class="orange text-left q-ml-sm"
                  v-if="emailerror == true && email === ''"
                >
                  Please fill the email.
                </div>
              </div>
              <div class="col-5">
                <q-btn
                  unelevated
                  style="
                    background-color: #fa243c;
                    border-radius: 8px !important;
                    color: #ffffff;
                    width: 150px !important;
                    height: 44px !important;
                    font-size: 17px !important;
                  "
                  class="q-px-xl q-py-sm text-capitalize"
                  label="Invite"
                  @click="invite()"
                  :loading="loading"
                />
                <div
                  id="desc"
                  style="visibility: hidden"
                  class="orange text-left"
                  v-if="emailmessage == true"
                >
                  {{ message }}
                </div>
                <div
                  id="desc"
                  style="visibility: hidden"
                  class="orange text-left"
                  v-if="emailerror == true && email === ''"
                >
                  Please fill the email.
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-7">
        <q-card class="my-card contact-list q-pa-lg" style="overflow: unset">
          <q-card-section>
            <div class="text-h5 text-weight-regular text-black text-left q-mb-sm q-ml-md">
              Contacts
            </div>
          </q-card-section>

          <q-markup-table v-if="isFetchingContacts" class="q-pr-md">
            <tbody>
              <tr v-for="n in 5" :key="n">
                <td class="text-left">
                  <q-skeleton type="QAvatar" />
                </td>
                <td class="text-left">
                  <q-skeleton animation="blink" type="text" width="100px" />
                </td>
                <td class="text-right">
                  <q-skeleton animation="blink" type="text" width="110px" />
                </td>
              </tr>
            </tbody>
          </q-markup-table>

          <q-markup-table v-else class="q-pr-md">
            <tbody>
              <tr v-for="item in seed[0]" :key="item.id">
                <td class="text-left text-grey">
                  <q-avatar :class="item.display_picture_url != null && item.display_picture_url != 'null' ? 'q-mr-lg text-capitalize' : 'bg-red-13 q-mr-lg text-capitalize'">
                    <q-img v-if="item.display_picture_url != null && item.display_picture_url != 'null'" :src="item.display_picture_url.substring(0, 5) == 'https' ? item.display_picture_url :  imgurl + '/' + item.display_picture_url" />
                    <p v-else class="text-capitalize text-white">{{item.name.charAt(0)}}</p>
                  </q-avatar>
                  {{ item.name }}
                </td>
                <td class="text-left text-grey">{{ item.email }}</td>
                <td class="text-right text-grey">{{ item.type }}</td>
              </tr>
            </tbody>
          </q-markup-table>
          <!-- <q-btn
            style="background-color: #fa243c; color: #ffffff; border-radius: 8px !important;"
            class="q-px-xl q-py-sm text-capitalize q-mt-md"
            label="Invite"
          /> -->
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();
    const loading = ref(false);
    const isFetchingContacts = ref(false);
    const seed = ref([]);
    const email = ref("");
    const token = ref(localStorage.getItem('token'));
    const emailerror = ref(false);
    const emailmessage = ref(false);

    onMounted(() => {
      if (token.value != '') {
      isFetchingContacts.value = true;
      let myHeaders = new Headers();
      myHeaders.append("utc_offset", "");
      myHeaders.append("current_date", "");
      myHeaders.append("x-access-token", token.value);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(`${process.env.VUE_APP_BASE_URL}/user`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const status = JSON.parse(result);
          if (status.status == true) {
            console.log(status);
            seed.value.push(status.data);
            isFetchingContacts.value = false;
          } if (status.status ==false && status.message == 'Auth Error') {
            showMessage('Session Expired', 'red-13');
              location.replace("/");
          }
        })
          .catch((error) => {
            console.log(error)
            showMessage("Some error occurred...", "red-13");
          });
      } else {
        showMessage('Session Expired', 'red-13');
          location.replace("/");
      }
    });

    /**
     * Function to show the message (error/success)
     */
    function showMessage(msg, color) {
      $q.notify({
        color: color,
        message: msg,
        position: "top",
        timeout: 3000,
      })
    }

    /**
     * Function to Send invitation to coworkers
     */
    function invite() {
      if (token.value != '' || token.value != 'null') {
        if (email.value != "") {
          loading.value = true;
          let myHeaders = new Headers();
          myHeaders.append("utc_offset", "");
          myHeaders.append("current_date", "");
          myHeaders.append("x-access-token", token.value);
          myHeaders.append("Content-Type", "application/json");
          const raw = JSON.stringify([email.value]);
          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch(
            `${process.env.VUE_APP_BASE_URL}/invitation/tocoworker`,
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => {
              let status = JSON.parse(result);
              // console.log(status);
              if (status.status == true) {
                // location.replace("/");
                emailmessage.value = true;
                // this.message = status.message;
                loading.value = false;
               showMessage(`Invite sent to ${email.value}`, 'green-13');
                email.value = "";
              } else {
                loading.value = false;
                showMessage("Something went wrong while sending the invitation", 'red-13');
              }
            })
            .catch((error) => {
              console.log(error)
              loading.value = false;
              showMessage("Some error occurred...", "red-13");
          });
        } else {
          emailerror.value = true;
        }
      } else {
        showMessage('Session Expired', 'red-13');
          location.replace("/");
      }
    }

    /*
     * function to Notification of Session Expire
     */
    // function launch_toast() {
    //   var x = document.getElementById("toast2");
    //   x.className = "show";
    //   setTimeout(function () {
    //     x.className = x.className.replace("show", "");
    //   }, 5000);
    // }

    return {

      // Variables
      loading,
      imgurl:'',
      isFetchingContacts,
      seed,
      email,
      emailerror,
      emailmessage,

      // Functions
      showMessage,
      invite,

    }

  },
  // mounted() {
  //   if (this.token != '') {
  //     this.isFetchingContacts = true;
  //   var myHeaders = new Headers();
  //   myHeaders.append("utc_offset", "");
  //   myHeaders.append("current_date", "");
  //   myHeaders.append("x-access-token", this.token);

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   fetch("https://dev.openspace.is/opens/user", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       var status = JSON.parse(result);
  //       if (status.status == true) {
  //         console.log(status);
  //         this.seed.push(status.data);
  //         this.isFetchingContacts = false;
  //       } else {
  //         this.launch_toast();
  //         setTimeout(() => {
  //           location.replace("/");
  //         }, 2000);
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  //   } else {
  //     this.launch_toast();
  //     setTimeout(() => {
  //       location.replace("/");
  //     }, 2000);
  //   }
  // },
  created() {
      this.imgurl = process.env.VUE_APP_BASE_URL_IMAGE;
     console.log(this.imgurl)
  },
  // methods: {
    // v_popup() {
    //   var timeout = Math.random() * 5000 + 3000;
    //   var color = "negative";
    //   var message = "this is message";
    //   var position = "top";
    //   const random = Math.random() * 100;
    //   const twoActions = random > 70;
    //   console.log(this.q.notify());
    //   this.q.notify({
    //     color,
    //     message,
    //     position,
    //     timeout,
    //     twoActions,
    //   });
    // },
  // },
};
</script>

<style scoped>
.invite-heading {
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  text-align: left;
}
.email-input-card {
  max-width: 85%;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
  border-radius: 10px;
}
.email-input-card .row {
  align-items: center;
}
.contact-list {
  width: 100%;
  box-shadow: none;
  border-radius: 15px;
  max-height: 550px !important;
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
/* .round-input-label-text {
  font-size: 18px;
  padding: 0 4px;
  transform: translate(0, -13px);
  white-space: nowrap;
} */
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
.round-input {
  position: relative;
  font-size: 1em;
  min-width: 100%;
  border: none;
  background: none;
  border-radius: 10px;
  border-bottom: 2px solid #eeeeee;
}
.round-input:focus {
  outline: none;
}
.q-markup-table {
  max-height: 420px;
}
.invite .invite-email-input::placeholder {
  color: darkgray;
}
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
}

::-webkit-scrollbar-thumb {
  background: #fa243c;
}
</style>
