<template>
  <q-dialog v-model="$store.state.story">
    <q-card class="new-story-card" style="border-radius: 10px">
      <div class="cContainer" style="">
        <div id="toast1"><div id="desc1">Session Expired</div></div>
        <i
          class="fa fa-times v-closeBotton"
          @click="$store.state.story = false"
          aria-hidden="true"
        ></i>
        <q-stepper
          v-model="step"
          header-nav
          ref="stepper"
          color="primary"
          animated
        >
          <q-step :name="1" :done="step > 1" :header-nav="step > 1">
            <h4>Select topic</h4>

            <div class="row q-mt-sm q-mb-md">
              <div class="col-4" style="position: relative">
                <q-radio
                  v-model="shape"
                  @click="getselectedtopic(1)"
                  val="1"
                  label=""
                  class="relative"
                >
                  <q-card class="my-card story-card" v-ripple q-hoverable>
                    <span class="q-focus-helper"></span>
                    <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                    <q-card-section>
                      <div class="text-h6">General News</div>
                    </q-card-section>
                  </q-card></q-radio
                >
              </div>
              <div class="col-4" style="position: relative">
                <q-radio
                  v-model="shape"
                  @click="getselectedtopic(2)"
                  val="2"
                  label=""
                  class="relative"
                >
                  <q-card class="my-card story-card" v-ripple q-hoverable>
                    <span class="q-focus-helper"></span>
                    <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                    <q-card-section>
                      <div class="text-h6">Announcement</div>
                    </q-card-section>
                  </q-card></q-radio
                >
              </div>
              <div class="col-4" style="position: relative">
                <q-radio
                  v-model="shape"
                  val="3"
                  @click="getselectedtopic(3)"
                  label=""
                  class="relative"
                >
                  <q-card class="my-card story-card" v-ripple q-hoverable>
                    <span class="q-focus-helper"></span>
                    <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                    <q-card-section>
                      <div class="text-h6">New Hire</div>
                    </q-card-section>
                  </q-card></q-radio
                >
              </div>
            </div>
            <div class="row q-mb-md" style="">
              <div class="col-4" style="position: relative">
                <q-radio
                  v-model="shape"
                  val="4"
                  @click="getselectedtopic(4)"
                  label=""
                  class="relative"
                >
                  <q-card class="my-card story-card" v-ripple q-hoverable>
                    <span class="q-focus-helper"></span>
                    <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                    <q-card-section>
                      <div class="text-h6">Upcoming Change</div>
                    </q-card-section>
                  </q-card></q-radio
                >
              </div>
              <div class="col-4" style="position: relative">
                <q-radio
                  v-model="shape"
                  @click="getselectedtopic(5)"
                  val="5"
                  label=""
                  class="relative"
                >
                  <q-card class="my-card story-card" v-ripple q-hoverable>
                    <span class="q-focus-helper"></span>
                    <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                    <q-card-section>
                      <div class="text-h6">Celebration</div>
                    </q-card-section>
                  </q-card></q-radio
                >
              </div>
              <div class="col-4" style="position: relative">
                <q-radio
                  v-model="shape"
                  @click="getselectedtopic(6)"
                  val="6"
                  label=""
                  class="relative"
                >
                  <q-card class="my-card story-card" v-ripple q-hoverable>
                    <span class="q-focus-helper"></span>
                    <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                    <q-card-section>
                      <div class="text-h6">Product Update</div>
                    </q-card-section>
                  </q-card></q-radio
                >
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h4 style="margin: 0px; line-height: 27px">Record story</h4>
                <p v-if="recordingStartWave" class="recordingTimer text-center">
                  {{ moment.utc(totalSeconds * 1000).format("mm : ss") }}<br />
                </p>
              </div>
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
              <!-- <div class="col-4 camera-microphone">
                <div class="record">
                  <div id="" class="web-camera-container" style="">
                    <div class="camera-button">
                      <button
                        type="button"
                        class="button is-rounded"
                        :class="{
                          'is-primary': !isCameraOpen,
                          'is-danger': isCameraOpen,
                        }"
                        @click="toggleCamera"
                      >

                        <div class="camera-circle" v-if="!isCameraOpen">
                          <i class="fa fa-camera gray" aria-hidden="true"></i>
                        </div>
                        <span v-else>Close Camera</span>
                      </button>
                    </div>

                    <div
                      v-show="isCameraOpen && isLoading"
                      class="camera-loading"
                    >
                      <ul class="loader-circle">
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>

                    <div
                      v-if="isCameraOpen"
                      v-show="!isLoading"
                      class="camera-box"
                      :class="{ flash: isShotPhoto }"
                    >
                      <div
                        class="camera-shutter"
                        :class="{ flash: isShotPhoto }"
                      ></div>

                      <video
                        v-show="!isPhotoTaken"
                        ref="camera"
                        style="width: 100%"
                        :height="337.5"
                        autoplay
                      ></video>

                      <canvas
                        v-show="isPhotoTaken"
                        id="photoTaken"
                        ref="canvas"
                        style="width: 100%"
                        :height="337.5"
                      ></canvas>
                    </div>

                    <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
                      <button type="button" class="button" @click="takePhoto">
                        <img
                          src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"
                        />
                      </button>
                    </div>

                    <div
                      v-if="isPhotoTaken && isCameraOpen"
                      class="camera-download"
                    >
                      <a
                        id="downloadPhoto"
                        download="my-photo.jpg"
                        class="button"
                        role="button"
                        @click="downloadImage"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="col-4 offset-4">
                <div
                  @click="recordingStart ? stopRecording() : startRecording()"
                  class="microphone-circle"
                >
                  <i
                    :class="recordingStart ? 'fa fa-stop' : 'fa fa-microphone'"
                    style="color: white"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </q-step>
          <q-step :name="2" :done="step > 2" :header-nav="step > 2">
            <div class="Container q-pb-xl">
              <div class="row">
                <div class="col-4">
                  <h4 class="q-mt-sm q-mb-md">Review story</h4>
                  <q-card class="my-card review-story" v-if="shape == 1">
                    <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
                      <div
                        class="row q-gutter-xs"
                        style="background: transparent"
                      >
                        <div class="col-12">
                          <div class="float-left">
                            <p
                              class="
                                text-subtitle1 text-weight-regular text-white
                              "
                            >
                              General News
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row full-width"
                        style="
                          position: absolute;
                          top: 62%;
                          background-color: transparent;
                        "
                      >
                        <!-- <div class="col-12">

                          </div> -->
                        <!-- {{isPlaying}}
                        recordingReviewPercent{{recordingReviewPercent}} -->
                        <div class="col-12 relative text-center justify-center">
                          <div
                            class="
                              recordTimingSection
                              flex
                              justify-center
                              text-center
                            "
                          >
                            <p
                              class="
                                text-center
                                recordingTimerReview
                                q-pl-sm q-pr-sm
                              "
                            >
                              {{
                                moment
                                  .utc(totalCalSecPaushed * 1000)
                                  .format("mm : ss")
                              }}
                            </p>
                          </div>
                          <div class="prgressBar q-mt-md">
                            <div
                              class="absolute w-full rounded-lg"
                              style="
                                height: 4px;
                                background-color: rgba(255, 255, 255, 0.35);
                              "
                            ></div>
                            <div
                              class="absolute w-full rounded-lg"
                              :style="`width : ${recordingReviewPercent}%; height: 4px; background-color: white;`"
                            ></div>
                          </div>
                          <audio ref="audioElem" :src="currentAudio"></audio>
                        </div>
                      </div>
                      <div
                        class="
                          flex
                          column
                          full-width
                          items-center
                          justify-end
                          absolute-center
                        "
                        style="height: 100%; background: transparent"
                      >
                        <div
                          class="
                            row
                            flex
                            full-width
                            justify-center
                            items-center
                          "
                        >
                          <div class="col-4 text-left">
                            <q-btn
                              @click="deleteAudio"
                              dense
                              round
                              color="white"
                              class="text-grey"
                              size="md"
                            >
                              <i
                                class="fas fa-trash-alt"
                                style="font-size: 13px"
                              ></i>
                            </q-btn>
                          </div>
                          <div class="col-8 text-left">
                            <!-- <p class="recordingTimer q-pl-md">
                              {{ Math.floor((totalCalSecPaushed / 60) % 60) }}:
                              {{ totalCalSecPaushed % 60 }}
                            </p> -->
                            <!-- <audio
                              preload="auto"
                              controlsList="nodownload noplaybackrate"
                              ref="audioElem"
                              :src="currentAudio"
                            ></audio> -->
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
                        </div>
                      </div>
                    </q-img>
                  </q-card>
                  <q-card class="my-card review-story" v-else-if="shape == 2">
                    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                      <div
                        class="row q-gutter-xs"
                        style="background: transparent"
                      >
                        <div class="col-12">

                          <div class="float-left">
                            <p
                              class="
                                text-subtitle1 text-weight-regular text-white
                              "
                            >
                              Announcement
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row full-width"
                        style="
                          position: absolute;
                          top: 62%;
                          background-color: transparent;
                        "
                      >
                        <!-- <div class="col-12">

                          </div> -->
                        <!-- {{isPlaying}}
                        recordingReviewPercent{{recordingReviewPercent}} -->
                        <div class="col-12 relative text-center justify-center">
                          <div
                            class="
                              recordTimingSection
                              flex
                              justify-center
                              text-center
                            "
                          >
                            <p
                              class="
                                text-center
                                recordingTimerReview
                                q-pl-sm q-pr-sm
                              "
                            >
                              {{
                                moment
                                  .utc(totalCalSecPaushed * 1000)
                                  .format("mm : ss")
                              }}
                            </p>
                          </div>
                          <div class="prgressBar q-mt-md">
                            <div
                              class="absolute w-full rounded-lg"
                              style="
                                height: 4px;
                                background-color: rgba(255, 255, 255, 0.35);
                              "
                            ></div>
                            <div
                              class="absolute w-full rounded-lg"
                              :style="`width : ${recordingReviewPercent}%; height: 4px; background-color: white;`"
                            ></div>
                          </div>
                          <audio ref="audioElem" :src="currentAudio"></audio>
                        </div>
                      </div>
                      <div
                        class="
                          flex
                          column
                          full-width
                          items-center
                          justify-end
                          absolute-center
                        "
                        style="height: 100%; background: transparent"
                      >
                        <div
                          class="
                            row
                            flex
                            full-width
                            justify-center
                            items-center
                          "
                        >
                          <div class="col-4 text-left">
                            <q-btn
                              @click="deleteAudio"
                              dense
                              round
                              color="white"
                              class="text-grey"
                              size="md"
                            >
                              <i
                                class="fas fa-trash-alt"
                                style="font-size: 13px"
                              ></i>
                            </q-btn>
                          </div>
                          <div class="col-8 text-left">
                            <!-- <p class="recordingTimer q-pl-md">
                              {{ Math.floor((totalCalSecPaushed / 60) % 60) }}:
                              {{ totalCalSecPaushed % 60 }}
                            </p> -->
                            <!-- <audio
                              preload="auto"
                              controlsList="nodownload noplaybackrate"
                              ref="audioElem"
                              :src="currentAudio"
                            ></audio> -->
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
                        </div>
                      </div>
                    </q-img>
                  </q-card>
                  <q-card class="my-card review-story" v-if="shape == 3">
                    <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
                      <div
                        class="row q-gutter-xs"
                        style="background: transparent"
                      >

                        <div class="col-12">
                          <div class="float-left">
                            <p
                              class="
                                text-subtitle1 text-weight-regular text-white
                              "
                            >
                              New Hire
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row full-width"
                        style="
                          position: absolute;
                          top: 62%;
                          background-color: transparent;
                        "
                      >
                        <!-- <div class="col-12">

                          </div> -->
                        <!-- {{isPlaying}}
                        recordingReviewPercent{{recordingReviewPercent}} -->
                        <div class="col-12 relative text-center justify-center">
                          <div
                            class="
                              recordTimingSection
                              flex
                              justify-center
                              text-center
                            "
                          >
                            <p
                              class="
                                text-center
                                recordingTimerReview
                                q-pl-sm q-pr-sm
                              "
                            >
                              {{
                                moment
                                  .utc(totalCalSecPaushed * 1000)
                                  .format("mm : ss")
                              }}
                            </p>
                          </div>
                          <div class="prgressBar q-mt-md">
                            <div
                              class="absolute w-full rounded-lg"
                              style="
                                height: 4px;
                                background-color: rgba(255, 255, 255, 0.35);
                              "
                            ></div>
                            <div
                              class="absolute w-full rounded-lg"
                              :style="`width : ${recordingReviewPercent}%; height: 4px; background-color: white;`"
                            ></div>
                          </div>
                          <audio ref="audioElem" :src="currentAudio"></audio>
                        </div>
                      </div>
                      <div
                        class="
                          flex
                          column
                          full-width
                          items-center
                          justify-end
                          absolute-center
                        "
                        style="height: 100%; background: transparent"
                      >
                        <div
                          class="
                            row
                            flex
                            full-width
                            justify-center
                            items-center
                          "
                        >
                          <div class="col-4 text-left">
                            <q-btn
                              @click="deleteAudio"
                              dense
                              round
                              color="white"
                              class="text-grey"
                              size="md"
                            >
                              <i
                                class="fas fa-trash-alt"
                                style="font-size: 13px"
                              ></i>
                            </q-btn>
                          </div>
                          <div class="col-8 text-left">
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
                            <!-- <audio
                              preload="auto"
                              controlsList="nodownload noplaybackrate"
                              ref="audioElem"
                              :src="currentAudio"
                            ></audio> -->
                          </div>
                        </div>
                      </div>
                    </q-img>
                  </q-card>
                  <q-card class="my-card review-story" v-else-if="shape == 4">
                    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                      <div
                        class="row q-gutter-xs"
                        style="background: transparent"
                      >
                        <div class="col-12">
                          <div class="float-left">
                            <p
                              class="
                                text-subtitle1 text-weight-regular text-white
                              "
                            >
                              Upcoming Changes
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row full-width"
                        style="
                          position: absolute;
                          top: 62%;
                          background-color: transparent;
                        "
                      >
                        <!-- <div class="col-12">

                          </div> -->
                        <!-- {{isPlaying}}
                        recordingReviewPercent{{recordingReviewPercent}} -->
                        <div class="col-12 relative text-center justify-center">
                          <div
                            class="
                              recordTimingSection
                              flex
                              justify-center
                              text-center
                            "
                          >
                            <p
                              class="
                                text-center
                                recordingTimerReview
                                q-pl-sm q-pr-sm
                              "
                            >
                              {{
                                moment
                                  .utc(totalCalSecPaushed * 1000)
                                  .format("mm : ss")
                              }}
                            </p>
                          </div>
                          <div class="prgressBar q-mt-md">
                            <div
                              class="absolute w-full rounded-lg"
                              style="
                                height: 4px;
                                background-color: rgba(255, 255, 255, 0.35);
                              "
                            ></div>
                            <div
                              class="absolute w-full rounded-lg"
                              :style="`width : ${recordingReviewPercent}%; height: 4px; background-color: white;`"
                            ></div>
                          </div>
                          <audio ref="audioElem" :src="currentAudio"></audio>
                        </div>
                      </div>
                      <div
                        class="
                          flex
                          column
                          full-width
                          items-center
                          justify-end
                          absolute-center
                        "
                        style="height: 100%; background: transparent"
                      >
                        <div
                          class="
                            row
                            flex
                            full-width
                            justify-center
                            items-center
                          "
                        >
                          <div class="col-4 text-left">
                            <q-btn
                              @click="deleteAudio"
                              dense
                              round
                              color="white"
                              class="text-grey"
                              size="md"
                            >
                              <i
                                class="fas fa-trash-alt"
                                style="font-size: 13px"
                              ></i>
                            </q-btn>
                          </div>
                          <div class="col-8 text-left">
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

                            <!-- <audio
                              preload="auto"
                              controlsList="nodownload noplaybackrate"
                              ref="audioElem"
                              :src="currentAudio"
                            ></audio> -->
                          </div>
                        </div>
                      </div>
                    </q-img>
                  </q-card>
                  <q-card class="my-card review-story" v-if="shape == 5">
                    <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
                      <div
                        class="row q-gutter-xs"
                        style="background: transparent"
                      >
                        <div class="col-12">
                          <div class="float-left">
                            <p
                              class="
                                text-subtitle1 text-weight-regular text-white
                              "
                            >
                              Celebration
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row full-width"
                        style="
                          position: absolute;
                          top: 62%;
                          background-color: transparent;
                        "
                      >
                        <!-- <div class="col-12">

                          </div> -->
                        <!-- {{isPlaying}}
                        recordingReviewPercent{{recordingReviewPercent}} -->
                        <div class="col-12 relative text-center justify-center">
                          <div
                            class="
                              recordTimingSection
                              flex
                              justify-center
                              text-center
                            "
                          >
                            <p
                              class="
                                text-center
                                recordingTimerReview
                                q-pl-sm q-pr-sm
                              "
                            >
                              {{
                                moment
                                  .utc(totalCalSecPaushed * 1000)
                                  .format("mm : ss")
                              }}
                            </p>
                          </div>
                          <div class="prgressBar q-mt-md">
                            <div
                              class="absolute w-full rounded-lg"
                              style="
                                height: 4px;
                                background-color: rgba(255, 255, 255, 0.35);
                              "
                            ></div>
                            <div
                              class="absolute w-full rounded-lg"
                              :style="`width : ${recordingReviewPercent}%; height: 4px; background-color: white;`"
                            ></div>
                          </div>
                          <audio ref="audioElem" :src="currentAudio"></audio>
                        </div>
                      </div>
                      <div
                        class="
                          flex
                          column
                          full-width
                          items-center
                          justify-end
                          absolute-center
                        "
                        style="height: 100%; background: transparent"
                      >
                        <div
                          class="
                            row
                            flex
                            full-width
                            justify-center
                            items-center
                          "
                        >
                          <div class="col-4 text-left">
                            <q-btn
                              @click="deleteAudio"
                              dense
                              round
                              color="white"
                              class="text-grey"
                              size="md"
                            >
                              <i
                                class="fas fa-trash-alt"
                                style="font-size: 13px"
                              ></i>
                            </q-btn>
                          </div>
                          <div class="col-8 text-left">
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
                            <!-- <audio
                              preload="auto"
                              controlsList="nodownload noplaybackrate"
                              ref="audioElem"
                              :src="currentAudio"
                            ></audio> -->
                          </div>
                        </div>
                      </div>
                    </q-img>
                  </q-card>
                  <q-card class="my-card review-story" v-else-if="shape == 6">
                    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                      <div
                        class="row q-gutter-xs"
                        style="background: transparent"
                      >
                        <div class="col-12">
                          <div class="float-left">
                            <p
                              class="
                                text-subtitle1 text-weight-regular text-white
                              "
                            >
                              Product Update
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row full-width"
                        style="
                          position: absolute;
                          top: 62%;
                          background-color: transparent;
                        "
                      >
                        <!-- <div class="col-12">

                          </div> -->
                        <!-- {{isPlaying}}
                        recordingReviewPercent{{recordingReviewPercent}} -->
                        <div class="col-12 relative text-center justify-center">
                          <div
                            class="
                              recordTimingSection
                              flex
                              justify-center
                              text-center
                            "
                          >
                            <p
                              class="
                                text-center
                                recordingTimerReview
                                q-pl-sm q-pr-sm
                              "
                            >
                              {{
                                moment
                                  .utc(totalCalSecPaushed * 1000)
                                  .format("mm : ss")
                              }}
                            </p>
                          </div>
                          <div class="prgressBar q-mt-md">
                            <div
                              class="absolute w-full rounded-lg"
                              style="
                                height: 4px;
                                background-color: rgba(255, 255, 255, 0.35);
                              "
                            ></div>
                            <div
                              class="absolute w-full rounded-lg"
                              :style="`width : ${recordingReviewPercent}%; height: 4px; background-color: white;`"
                            ></div>
                          </div>
                          <audio ref="audioElem" :src="currentAudio"></audio>
                        </div>
                      </div>
                      <div
                        class="
                          flex
                          column
                          full-width
                          items-center
                          justify-end
                          absolute-center
                        "
                        style="height: 100%; background: transparent"
                      >
                        <div
                          class="
                            row
                            flex
                            full-width
                            justify-center
                            items-center
                          "
                        >
                          <div class="col-4 text-left">
                            <q-btn
                              @click="deleteAudio"
                              dense
                              round
                              color="white"
                              class="text-grey"
                              size="md"
                            >
                              <i
                                class="fas fa-trash-alt"
                                style="font-size: 13px"
                              ></i>
                            </q-btn>
                          </div>
                          <div class="col-8 text-left">
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
                            <!-- <audio
                              preload="auto"
                              controlsList="nodownload noplaybackrate"
                              ref="audioElem"
                              :src="currentAudio"
                            ></audio> -->
                          </div>
                        </div>
                      </div>
                    </q-img>
                  </q-card>
                </div>
                <div class="col-7 q-pl-sm">
                  <h4 class="q-mt-sm q-mb-md">Send to</h4>
                  <q-card class="review-story">
                    <q-markup-table class="contact-list" style="height: 400px">
                      <tbody class="contact-listbody">
                        <div
                          class="row full-width"
                          v-for="item in storyContacts"
                          :key="item.id"
                        >
                          <tr
                            class="full-width"
                            v-for="data in item.default_groups"
                            :key="data"
                            style="display: flex"
                          >
                            <div style="width: 80%">
                              <td class="text-align-left col-9">
                                <h6 class="gray" style="display: inline">
                                  {{ data.name }}
                                </h6>
                              </td>
                            </div>
                            <div style="width: 20%">
                              <td class="">
                                <q-btn
                                  :loading="defaultgroupSentLoading"
                                  @click="
                                    () =>
                                      sendStory(
                                        'defaultGrp',
                                        data.type,
                                        data.type_id
                                      )
                                  "
                                  class="sendStoryBtn float-right"
                                  :id="data.type_id"
                                  color="red-13"
                                  size="sm"
                                >
                                  SEND
                                </q-btn>
                              </td>
                            </div>
                          </tr>
                          <tr
                            class="full-width"
                            style="display: flex"
                            v-for="(data, indexss) in item.groups"
                            :key="data"
                          >
                            <div class="" style="width: 80%; display: flex">
                              <td
                                class="text-align-left"
                                style="width: 45px; height: 45px"
                              >
                                <q-avatar
                                  :class="
                                    data.img != null && data.img != 'null'
                                      ? ''
                                      : 'bg-red-13'
                                  "
                                  style="
                                    width: 100%;
                                    height: 100%;
                                    background: black;
                                  "
                                >
                                  <img
                                    v-if="
                                      data.img != null && data.img != 'null'
                                    "
                                    :src="data.img"
                                  />
                                  <p v-else class="text-capitalize text-white">
                                    {{ data.name.charAt(0) }}
                                  </p>
                                </q-avatar>
                              </td>
                              <td
                                class="text-align-left"
                                style="display: inline-block"
                              >
                                <h6 class="gray" style="display: inline">
                                  {{ data.name }}
                                </h6>
                              </td>
                            </div>
                            <div class="" style="width: 20%">
                              <td class="">
                                <q-btn
                                  :loading="groupSentLoading[indexss]"
                                  @click="
                                    () =>
                                      sendStory(
                                        indexss,
                                        data.type,
                                        data.type_id
                                      )
                                  "
                                  class="sendStoryBtn float-right"
                                  :id="data.type_id"
                                  color="red-13"
                                  size="sm"
                                >
                                  SEND
                                </q-btn>
                              </td>
                            </div>
                          </tr>
                        </div>
                      </tbody>
                    </q-markup-table>
                    <div v-if="isStorySend" class="row text-center full-width">
                      <div class="col-12">
                        <q-btn
                          @click="donePosting"
                          dense
                          class="q-px-xl"
                          label="Done"
                          color="red-13"
                          size="lg"
                        ></q-btn>
                      </div>
                    </div>
                  </q-card>
                </div>
              </div>
            </div>
          </q-step>
        </q-stepper>
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
// import { useStore } from "vuex";
import AWS from "aws-sdk";
import { ref } from "vue";
import { useQuasar } from "quasar";
import moment from "moment";
import {useStore} from 'vuex';
export default {
  setup() {
    const store = useStore();
    const $q = useQuasar();
    const timerVar = ref(0);
    const counterTimerVar = ref(0);
    const totalSeconds = ref(0);
    const totalCalSecPaushed = ref(0);
    const recordingReviewPercent = ref(0);
    const newRecordingDuration = ref(0);
    const recordingPausePercent = ref(0);
    const recordingTimer = ref(0);
    const recordingDuration = ref(1000);
    const recordingReviewProgress = ref(0);
    const defaultgroupSentLoading = ref(false);
    const userId = ref("");
    const loginname = ref("");
    const step = ref(1);
    const stepperMsg = ref(1);
    const shape = ref("1");
    const statusType = ref(1);
    const recordingStart = ref(false);
    const recordingStartWave = ref(false);
    const isPlaying = ref(false);
    const audioBlob = ref(null);
    const currentAudio = ref(null);
    const storyContacts = ref([]);
    const groupSentLoading = ref([]);
    const isReviewPlaying = ref(false);
    const starttime = ref("");
    const endtime = ref("");
    const timeduration = ref("");
    const token = ref("");
    const isStorySend = ref(false);
    function getselectedtopic(val) {
      // console.log(val);
      statusType.value = val;
    }

    function sendStory(index, type, type_id) {
      type_id === 1
        ? (defaultgroupSentLoading.value = true)
        : (defaultgroupSentLoading.value = false);
      groupSentLoading.value[index] = true;

      AWS.config.update({
        region: "eu-west-2",
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "eu-west-2:bb9dc3d7-6385-4810-a36c-e9bc0408c85c",
        }),
      });

      let upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: "openspace-broadcast",
          Key: `broadcast/${userId.value}/${Date.now().valueOf()}.wav`,
          Body: audioBlob.value,
          ContentType: "audio/wav",
        },
      });

      var promise = upload.promise();

      promise
        .then((data) => {
          if (data.Location && data.Location != null) {
            successAwsResponse(data, type, type_id, index);
          } else {
            console.log("Not Uploaded to AWS");
          }
        })
        .catch((error) => console.log(error));
    }
    function successAwsResponse(data, type, type_id, index) {
      const audioUrl = data.Location.split("broadcast/")[1];
      const myHeaders = new Headers();
      myHeaders.append("x-access-token", token.value);
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        type: type,
        type_id: type_id,
        story_mood_id: statusType.value,
        story_url: audioUrl,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${process.env.VUE_APP_BASE_URL}/story/post`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const response = JSON.parse(result);
          if (response.status == true) {
            console.log("Post Story", response);
            defaultgroupSentLoading.value = false;
            isStorySend.value = true;
            groupSentLoading.value[index] = false;
            document.getElementById(type_id).children[1].innerHTML = "SENT";
            document.getElementById(type_id).disabled = true;
          } else {
            showError(response.message);
            isStorySend.value = true;
            groupSentLoading.value[index] = false;
            defaultgroupSentLoading.value = false;
          }
        })
        .catch((error) => console.log("error", error));
    }
    function showError(msg, color) {
      $q.notify({
        color: color,
        message: msg,
        position: "top",
        timeout: 3000,
      });
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

    function going() {
      let time = new Date().getTime();
      if (this.newRecordingDuration > 0) {
        this.recordingReviewPercent =
          this.recordingPausePercent +
          Math.floor((100 * (time - this.timerVar)) / this.recordingDuration);
      } else {
        this.recordingReviewPercent = Math.floor(
          (100 * (time - this.timerVar)) / this.recordingDuration
        );
      }

      // clear interval
      console.log(this.recordingReviewPercent);
      if (this.recordingReviewPercent > 99) {
        console.log("this is in");
        this.isPlaying = false;
        clearInterval(this.recordingReviewProgress);
      }
    }
    function startRecording() {
      totalSeconds.value = 0;
      recordingStart.value = true;
      recordingStartWave.value = true;
      var device = navigator.mediaDevices.getUserMedia({ audio: true });
      var items = [];
      starttime.value = new Date();
      var ss = Math.floor(starttime.value.getTime() / 1000);
      console.log(ss);
      // console.log(this.starttime);

      // timer start
      counterTimerVar.value = setInterval(() => {
        countTimer();
      }, 1000);
      device.then((stream) => {
        this.recorder = new MediaRecorder(stream);
        this.recorder.ondataavailable = (e) => {
          items.push(e.data);
          if (this.recorder.state == "inactive") {
            var blob = new Blob(items, { type: "audio/wav" });
            audioBlob.value = blob;
            console.log(blob);
            currentAudio.value = URL.createObjectURL(blob);
          }
        };
        this.recorder.start(100);
      });
    }
    function stopRecording() {
      totalCalSecPaushed.value = totalSeconds.value;
      clearInterval(totalSeconds.value);
      clearInterval(counterTimerVar.value);
      console.log("stoprecording");
      endtime.value = new Date();
      var hh = Math.floor(
        (endtime.value.getTime() - starttime.value.getTime()) / 1000 / 60 / 60
      );
      var mm = Math.floor(
        (endtime.value.getTime() - starttime.value.getTime()) / 1000 / 60
      );
      var ss = Math.floor(
        (endtime.value.getTime() - starttime.value.getTime()) / 1000
      );
      console.log("hh" + hh + "mm" + mm + "ss" + ss);
      timeduration.value = mm + ss;
      console.log("ss" + ss);
      recordingStart.value = false;
      recordingStartWave.value = false;
      this.recorder.stop();
      this.done = true;
      step.value = 2;
      newStory();
    }
    function newStory() {
      token.value = localStorage.getItem("token");
      console.log(localStorage.getItem("token"));
      storyContacts.value = [];
      var myHeaders = new Headers();
      myHeaders.append("x-access-token", token.value);
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(`${process.env.VUE_APP_BASE_URL}/story/teamsgroup`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          var status = JSON.parse(result);
          console.log(status);
          if (status.code == 200) {
            storyContacts.value.push(status.data);
            console.log(storyContacts.value);
            for (
              let loadSent = 0;
              loadSent < storyContacts.value[0].groups.length;
              loadSent++
            ) {
              // push false to state to manage loader
              groupSentLoading.value.push(false);
            }
          } else if (status.status == false && status.message == 'Auth Error') {
            showError('Session expired', 'red-13');
            location.replace("/");
          }
        })
          .catch((error) => {
            console.log(error)
            showError("Some error occurred...", "red-13");
          });
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
    function launch_toast() {
      var x = document.getElementById("toast1");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 5000);
    }
    function donePosting() {
      currentAudio.value = null;
      audioBlob.value = null;
      store.state.story = false;
      shape.value = "1";
      step.value = 1;
      isStorySend.value = false;
    }
    return {
      // function
      getselectedtopic,
      sendStory,
      successAwsResponse,
      countTimer,
      showError,
      going,
      startRecording,
      stopRecording,
      newStory,
      deleteAudio,
      launch_toast,
      donePosting,
      $q,
      defaultgroupSentLoading,
      userId,
      loginname,
      step,
      stepperMsg,
      shape,
      statusType,
      recordingStart,
      recordingStartWave,
      isPlaying,
      audioBlob,
      currentAudio,
      storyContacts,
      groupSentLoading,
      isReviewPlaying,
      starttime,
      endtime,
      timeduration,
      token,
      isStorySend,
      timerVar,
      counterTimerVar,
      totalSeconds,
      totalCalSecPaushed,
      recordingReviewPercent,
      newRecordingDuration,
      recordingPausePercent,
      recordingTimer,
      recordingDuration,
      recordingReviewProgress,
      moment,
    };
  },
  methods: {
    startPlaying() {
      // console.log("this.$refs.this.timeduration", this.timeduration);
      this.isPlaying = true;
      // console.log("this.$refs.audioElem", this.$refs.audioElem.currentTime);
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
  created() {
    this.userId = localStorage.getItem("userId");
    this.loginname = localStorage.getItem("loginname");
  },
};
</script>
<style scoped>
.new-story-card {
  max-width: 750px !important;
  min-width: 750px !important;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
}
.recordingTimer {
  font-size: 18px;
}
.recordingTimerReview {
  font-size: 14px;
  color: #000;
  font-weight: 500;
  background-color: white;
  border-radius: 18px;
}

audio::-webkit-media-controls-play-button,
audio::-webkit-media-controls-panel {
  background-color: transparent;
  color: #000;
}
.fa-stop {
  font-size: 30px;
}
</style>