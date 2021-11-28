<template>
  <div class="stories cContainer">
    <Newstory />
    <div id="toast1">
      <div id="desc1">
        <span class="triangle" style="margin-right: 13px;}">⚠️</span>Session
        Expired
      </div>
    </div>
    <q-splitter v-model="splitterModel" style="minheight: 250px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab
            name="todayStories"
            label="Today's stories"
            style="minheight: 250px; padding-left: 3%"
          >
            <q-badge floating>{{ getAllDataOfStory.length }}</q-badge>
          </q-tab>
          <q-tab
            name="archive"
            label="Archive"
            style="padding-left: 3%"
            @click="getArchiveItem"
          />
        </q-tabs>
      </template>
      <template v-slot:after>
        <q-tab-panels v-model="tab" animated vertical>
          <q-tab-panel
            name="todayStories"
            class="allstories"
            style="height: 100%"
          >
            <div class="row">
              <div class="col-1">
                <div v-if="isSkeletonLoading">
                  <q-skeleton type="circle" size="70px" />
                </div>
                <div v-else class="microphone-circle2 cursor-pointer">
                  <!-- <i
                    class="fa fa-plus cursor-pointer"
                    aria-hidden="true"

                  ></i> -->
                  <div
                    class="h-full flex justify-center items-center"
                    @click="$store.state.story = true"
                  >
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="16.4751"
                        y="0.641113"
                        width="2.04545"
                        height="32.7273"
                        rx="1.02273"
                        fill="white"
                      />
                      <rect
                        x="0.794434"
                        y="17.6841"
                        width="2.04545"
                        height="32.7273"
                        rx="1.02273"
                        transform="rotate(-90 0.794434 17.6841)"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <!-- new story dialoge -->
                </div>
                <p class="text-weight-medium q-mr-md q-mt-sm">New Story</p>
              </div>

              <div class="col-11">
                <main v-if="isSkeletonLoading">
                  <section>
                    <div
                      v-for="(
                        skeletonItem, itemIndex
                      ) in numberofcontactCircleSkeleton"
                      :key="itemIndex"
                      class="scrollItem"
                    >
                      <div class="story-content">
                        <q-skeleton type="circle" size="60px" />
                        <q-skeleton
                          animation="fade"
                          type="text"
                          width="60px"
                          heightclass="q-mt-sm"
                        />
                      </div>
                    </div>
                  </section>
                </main>
                <main v-else>
                  <span class="scrollArrow" @click="prevItemScroll">
                    <!-- <i class="fas fa-chevron-left"></i> -->
                    <svg
                      width="7"
                      height="17"
                      viewBox="0 0 10 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.24926 0.733669C9.11913 0.601406 8.94756 0.519838 8.76445 0.503175C8.58134 0.486511 8.39829 0.53581 8.2472 0.642481L8.13725 0.733669L1.06939 7.93273C0.939539 8.06529 0.859458 8.24004 0.843098 8.42655C0.826738 8.61306 0.875137 8.7995 0.979864 8.9534L1.06939 9.06539L8.13725 16.2644C8.27577 16.4062 8.46137 16.4899 8.65749 16.4991C8.8536 16.5084 9.046 16.4425 9.19678 16.3144C9.34755 16.1863 9.44576 16.0054 9.47204 15.8072C9.49833 15.609 9.45079 15.408 9.33879 15.2438L9.24926 15.1318L2.73584 8.49906L9.24926 1.86632C9.3224 1.79202 9.38042 1.70375 9.42001 1.60657C9.4596 1.50939 9.47998 1.40521 9.47998 1.3C9.47998 1.19478 9.4596 1.0906 9.42001 0.993422C9.38042 0.896242 9.3224 0.807972 9.24926 0.733669Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span class="scrollArrow" @click="nextitemScroll">
                    <svg
                      width="7"
                      height="17"
                      viewBox="0 0 10 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.750736 0.733669C0.880872 0.601406 1.05244 0.519838 1.23555 0.503175C1.41866 0.486511 1.60171 0.53581 1.7528 0.642481L1.86275 0.733669L8.93061 7.93273C9.06046 8.06529 9.14054 8.24004 9.1569 8.42655C9.17326 8.61306 9.12486 8.7995 9.02014 8.9534L8.93061 9.06539L1.86275 16.2644C1.72423 16.4062 1.53863 16.4899 1.34251 16.4991C1.1464 16.5084 0.953995 16.4425 0.803222 16.3144C0.652449 16.1863 0.554242 16.0054 0.527956 15.8072C0.50167 15.609 0.549211 15.408 0.66121 15.2438L0.750736 15.1318L7.26416 8.49906L0.750736 1.86632C0.677602 1.79202 0.619578 1.70375 0.579988 1.60657C0.540398 1.50939 0.52002 1.40521 0.52002 1.3C0.52002 1.19478 0.540398 1.0906 0.579988 0.993422C0.619578 0.896242 0.677602 0.807972 0.750736 0.733669Z"
                        fill="white"
                      />
                    </svg>
                    <!-- <i class="fas fa-chevron-right"></i
                  > -->
                  </span>
                  <section class="justify-start">
                    <div
                      v-for="(data, index) in getAllDataOfStory"
                      :key="index"
                      @click="index != indexSelected ? selectSlide(index) : ''"
                      class="scrollItem"
                    >
                      <div class="story-content">
                        <q-avatar
                          class="story-circle"
                          v-if="
                            data.display_picture_url != null &&
                            data.display_picture_url != 'null'
                          "
                          color=""
                        >
                          <img
                            :src="
                              imgurl + '/' +
                              data.display_picture_url
                            "
                          />
                        </q-avatar>
                        <q-avatar
                          v-else
                          color="pink-5"
                          text-color="white"
                          class="text-center story-circle"
                          size="60px"
                          font-size="32px"
                        >
                          <p
                            class="text-center"
                            style="margin-left: -4%; width: 100%"
                          >
                            {{ data.name.charAt(0).toUpperCase() }}
                          </p>
                        </q-avatar>

                        <p class="black q-mt-sm">
                          {{ data.name.split(" ")[0] }}
                        </p>
                      </div>
                    </div>
                  </section>
                </main>
              </div>
            </div>
            <div v-if="isSkeletonLoading" class="q-mt-xl">
              <div class="row justify-evenly q-pt-lg" style="height: 400px">
                <div class="col-4">
                  <q-skeleton
                    width="200px"
                    height="280px"
                    style="float: right; transform: scale(0.9)"
                  />
                </div>
                <div class="col-4">
                  <q-skeleton
                    width="200px"
                    height="280px"
                    style="margin: auto; transform: scale(1.2)"
                  />
                </div>
                <div class="col-4">
                  <q-skeleton
                    width="200px"
                    height="280px"
                    style="float: left; transform: scale(0.9)"
                  />
                </div>
              </div>
            </div>
            <div
              v-else
              class="flex flex-col w-full bg-white-400 mt-0"
              style="height: 65vh"
            >
              <div
                class="flex flex-row justify-center items-center m-0 h-screen"
              >
                <div v-if="getAllDataOfStory.length != 0">
                  <div
                    v-for="(item, index) in getAllDataOfStory"
                    :key="index"
                    class="absolute mx-2 rounded-lg bg-red-400"
                    style="
                      width: 280px;
                      height: 440px;
                      transition: transform 1s;
                      left: 40%;
                      top: 17%;
                    "
                    :style="
                      index == indexSelected
                        ? `transform : translate(${
                            350 * (index + differnce)
                          }px) scale(0.8)`
                        : `transform: translate(${
                            280 * (index + differnce)
                          }px) scale(0.6); cursor:pointer`
                    "
                    @click="index != indexSelected ? selectSlide(index) : ''"
                  >
                    <div class="bg-contain bg-no-repeat h-full rounded-lg">
                      <div class="h-full">
                        <q-img
                          :src="
                            index == indexSelected
                              ? item.Story[changeIndex].Story.story_mood_id == 1
                                ? 'https://picsum.photos/200/301.jpg'
                                : item.Story[changeIndex].Story.story_mood_id ==
                                  2
                                ? 'https://picsum.photos/201/301.jpg'
                                : item.Story[changeIndex].Story.story_mood_id ==
                                  3
                                ? 'https://picsum.photos/201/301.jpg'
                                : item.Story[changeIndex].Story.story_mood_id ==
                                  4
                                ? 'https://picsum.photos/202/301.jpg'
                                : item.Story[changeIndex].Story.story_mood_id ==
                                  5
                                ? 'https://picsum.photos/202/300.jpg'
                                : 'https://picsum.photos/202/303.jpg'
                              : 'https://picsum.photos/200/301.jpg'
                          "
                          class="h-full rounded-lg"
                        />
                      </div>

                      <div
                        class="w-full pt-4 absolute top-0"
                        v-if="index == indexSelected"
                      >
                        <div class="w-11/12 flex flex-row m-auto">
                          <div class="row" style="width: 100%">
                            <div
                              class="w-full rounded-lg mr-2 relative h-auto col"
                              v-for="(el, indexo) in item.Story.length"
                              :key="indexo"
                            >
                              <div
                                class="absolute w-full rounded-lg"
                                style="
                                  height: 4px;
                                  background-color: rgba(255, 255, 255, 0.35);
                                "
                              ></div>
                              <div
                                class="absolute w-full rounded-lg"
                                style="height: 4px; background-color: white"
                                :style="
                                  indexo == changeIndex
                                    ? `width : ${percent}%`
                                    : changeIndex > indexo
                                    ? `width: 100%`
                                    : `width: 0%`
                                "
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-row w-11/12 mt-4 m-auto">
                          <div class="justify-start w-3/3">
                            <div class="row">
                              <div class="col-3">
                                <q-avatar
                                  v-if="
                                    item.display_picture_url != null &&
                                    item.display_picture_url != 'null'
                                  "
                                >
                                  <img
                                    :src="
                                      imgurl + '/' +
                                      item.display_picture_url
                                    "
                                    class="rounded-full"
                                  />
                                </q-avatar>
                                <q-avatar
                                  v-else
                                  color="pink-5"
                                  text-color="white"
                                  class="text-center"
                                >
                                  <p class="text-center" style="width: 100%">
                                    {{ item.name.charAt(0).toUpperCase() }}
                                  </p>
                                </q-avatar>
                              </div>
                              <div class="col-9">
                                <div class="float-left">
                                  <p class="text-md text-white font-semibold">
                                    {{ item.name.split(" ")[0] }}
                                    {{
                                      moment(item.created_date)
                                        .startOf("day")
                                        .fromNow()
                                    }}
                                  </p>
                                </div>
                                <div class="float-left">
                                  <p class="text-lg text-white font-semibold">
                                    {{
                                      item.Story[changeIndex].Story
                                        .story_mood_id == 1
                                        ? "General news"
                                        : item.Story[changeIndex].Story
                                            .story_mood_id == 2
                                        ? "Announcement"
                                        : item.Story[changeIndex].Story
                                            .story_mood_id == 3
                                        ? "New Hire"
                                        : item.Story[changeIndex].Story
                                            .story_mood_id == 4
                                        ? "Upcoming change"
                                        : item.Story[changeIndex].Story
                                            .story_mood_id == 5
                                        ? "Celebration"
                                        : "Product Update"
                                    }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="StoryAudioPyer">
                          <audio
                            preload="auto"
                            controlsList="nodownload noplaybackrate"
                            :id="
                              'audio' + item.Story[changeIndex].Story.story_id
                            "
                            ref="audioElem"
                            :src="
                              'https://openspace-broadcast.s3.eu-west-2.amazonaws.com/broadcast/' +
                              item.Story[changeIndex].Story.story_url
                            "
                          />
                        </div>

                        <div
                          @click="
                            isPaused
                              ? startMyOperation(
                                  item.Story.length,
                                  item.read_status,
                                  item.Story[changeIndex].story_user_id,
                                  indexo
                                )
                              : stopMyOperation()
                          "
                          class="
                            flex
                            justify-center
                            absolute-center
                            items-center
                            playPauseBtn
                            cursor-pointer
                          "
                        >
                          <i v-if="isPaused" class="fa-2x fas fa-play"></i>
                          <i
                            v-else
                            class="fa-2x fa fa-pause"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div class="audioTimingSection absolute-center flex justify-center text-center">
                            <p class="text-center recordingTimerReview q-pa-xs q-pl-sm q-pr-sm">{{moment.utc(duration).format("mm : ss")}}</p>
                        </div>
                        <div
                          class="reviewsplayer"
                          style="
                            position: absolute;
                            top: 400%;
                            left: 50%;
                            transform: translateX(-50%);
                            width: 94%;
                          "
                        >

                          <div
                            class="w-full rounded-lg absolute"
                            style="
                              height: 7px;
                              background-color: rgba(255, 255, 255, 0.35);
                            "
                          ></div>
                          <div
                            class="w-full rounded-lg absolute"
                            style="height: 7px; background-color: white"
                            :style="`width : ${percent}%`"
                          ></div>
                        </div>
                      </div>
                      <div v-else>
                        <div
                          class="absolute top-1/2 left-1/2"
                          style="
                            z-index: 99;
                            transform: translate(-50%, -50%) scale(2.5);
                            transition: transform 1s;
                          "
                        >
                          <div class="flex flex-col items-center">
                            <!-- <div
                            v-if="item.display_picture_url != null"
                              style="
                                width: 50px;
                                height: 50px;
                                background-size: cover;
                              "
                              class="rounded-full border-2 border-pink-500"
                            >
                              <img :src="item.display_picture_url" class="rounded-full" />
                            </div> -->

                            <q-avatar
                              v-if="
                                item.display_picture_url != null &&
                                item.display_picture_url != 'null'
                              "
                              color="pink-5"
                            >
                              <img
                                :src="
                                  imgurl + '/' +
                                  item.display_picture_url
                                "
                              />
                            </q-avatar>
                            <q-avatar
                              v-else
                              color="pink-5"
                              text-color="white"
                              class="text-center"
                              size="50px"
                              font-size="34px"
                            >
                              <p class="text-center" style="width: 100%">
                                {{ item.name.charAt(0).toUpperCase() }}
                              </p>
                            </q-avatar>

                            <div class="mt-2">
                              <p class="text-sm text-white">
                                {{ item.name }}
                              </p>
                            </div>
                            <div class="mt-2 row wrap">
                              <p
                                class="text-md text-white text-weight-regular"
                              ></p>
                            </div>
                          </div>
                        </div>

                        <div
                          class="absolute inset-0 rounded-lg"
                          style="z-index:10; background:-webkit-gradient(linear, left top, left bottom, from(rgba(38,38,38,.6)), to(rgba(38, 38, 38, 0))"
                        ></div>
                      </div>
                    </div>
                    <div
                      v-if="index == indexSelected"
                      class="absolute top-1/2"
                      style="left: -45px"
                    >
                      <div
                        @click="prev(index)"
                        class="
                          scrollArrow
                          hover:text-gray-200
                          text-gray-400
                          cursor-pointer
                        "
                        style="font-size: 30px"
                      >
                        <svg
                          width="9"
                          height="17"
                          viewBox="0 0 10 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.24926 0.733669C9.11913 0.601406 8.94756 0.519838 8.76445 0.503175C8.58134 0.486511 8.39829 0.53581 8.2472 0.642481L8.13725 0.733669L1.06939 7.93273C0.939539 8.06529 0.859458 8.24004 0.843098 8.42655C0.826738 8.61306 0.875137 8.7995 0.979864 8.9534L1.06939 9.06539L8.13725 16.2644C8.27577 16.4062 8.46137 16.4899 8.65749 16.4991C8.8536 16.5084 9.046 16.4425 9.19678 16.3144C9.34755 16.1863 9.44576 16.0054 9.47204 15.8072C9.49833 15.609 9.45079 15.408 9.33879 15.2438L9.24926 15.1318L2.73584 8.49906L9.24926 1.86632C9.3224 1.79202 9.38042 1.70375 9.42001 1.60657C9.4596 1.50939 9.47998 1.40521 9.47998 1.3C9.47998 1.19478 9.4596 1.0906 9.42001 0.993422C9.38042 0.896242 9.3224 0.807972 9.24926 0.733669Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      v-if="index == indexSelected"
                      class="absolute top-1/2"
                      style="right: -16px"
                    >
                      <div
                        @click="next(index)"
                        class="
                          scrollArrow
                          hover:text-gray-200
                          text-gray-400
                          cursor-pointer
                        "
                        style="font-size: 30px"
                      >
                        <svg
                          width="9"
                          height="17"
                          viewBox="0 0 10 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.750736 0.733669C0.880872 0.601406 1.05244 0.519838 1.23555 0.503175C1.41866 0.486511 1.60171 0.53581 1.7528 0.642481L1.86275 0.733669L8.93061 7.93273C9.06046 8.06529 9.14054 8.24004 9.1569 8.42655C9.17326 8.61306 9.12486 8.7995 9.02014 8.9534L8.93061 9.06539L1.86275 16.2644C1.72423 16.4062 1.53863 16.4899 1.34251 16.4991C1.1464 16.5084 0.953995 16.4425 0.803222 16.3144C0.652449 16.1863 0.554242 16.0054 0.527956 15.8072C0.50167 15.609 0.549211 15.408 0.66121 15.2438L0.750736 15.1318L7.26416 8.49906L0.750736 1.86632C0.677602 1.79202 0.619578 1.70375 0.579988 1.60657C0.540398 1.50939 0.52002 1.40521 0.52002 1.3C0.52002 1.19478 0.540398 1.0906 0.579988 0.993422C0.619578 0.896242 0.677602 0.807972 0.750736 0.733669Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <lottie-player
                    src="https://assets1.lottiefiles.com/packages/lf20_hg6fedef.json"
                    background="transparent"
                    speed="1"
                    style="width: 550px; height: 100%"
                    loop
                    autoplay
                  ></lottie-player>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="archive" class="archive">
            <div class="row">
              <div class="col-md-6 q-px-sm q-py-sm">
                <h4 class="text-left">
                  {{
                    selectedMonthInArchive == null
                      ? currentMonth
                      : selectedMonthInArchive
                  }}
                </h4>
              </div>
              <div class="col-md-6 q-px-sm q-py-sm">
                <div class="">
                  <q-select
                    outlined
                    emit-value
                    dense
                    v-model="selectedMonthInArchive"
                    :options="monthOptionsList"
                    label="Select Month"
                    style="width: 250px; float: right"
                  />
                </div>
              </div>
            </div>

            <div v-if="AchiveSkelteon" class="row">
              <div
                v-for="(loderLoop, loaderIndex) in achiveSkeltonLoder"
                :key="loaderIndex"
                class="col-md-3 q-px-sm q-py-sm"
              >
                <q-skeleton width="100%" height="50vh" />
              </div>
            </div>
            <div v-else-if="getFilterMonthStory.length != 0" class="row">
              <div
                v-for="(archiveData, indexes) in getFilterMonthStory"
                :key="indexes"
                class="col-md-3 q-px-sm q-py-sm"
              >
                <q-card class="my-card archiveStoryCard relative">
                  <q-img
                    loading="lazy"
                    class="archiveImagePost"
                    :src="
                      archiveData.story_mood_id == 1
                        ? 'https://picsum.photos/200/300.jpg'
                        : archiveData.story_mood_id == 2
                        ? 'https://picsum.photos/201/300.jpg'
                        : archiveData.story_mood_id == 3
                        ? 'https://picsum.photos/202/300.jpg'
                        : archiveData.story_mood_id == 4
                        ? 'https://picsum.photos/202/301.jpg'
                        : archiveData.story_mood_id == 5
                        ? 'https://picsum.photos/201/301.jpg'
                        : 'https://picsum.photos/202/302.jpg'
                    "
                  />

                  <div class="story-date absolute">
                    {{ getDateOfEachStory(archiveData.created_date) }}
                  </div>
                  <div
                    class="
                      absolute-center
                      text-subtitle2 text-center
                      story-title
                      archiveStoryClass
                    "
                  >
                    <audio
                      ref="audioElm"
                      preload="auto"
                      controlsList="nodownload noplaybackrate"
                      :id="'storyId' + archiveData.story_id"
                      :src="
                        'https://openspace-broadcast.s3.eu-west-2.amazonaws.com/broadcast/' +
                        archiveData.story_url
                      "
                    ></audio>

                    <div
                      v-on:click="
                        playaudio(
                          'storyId' + archiveData.story_id,
                          'story' + archiveData.story_id
                        )
                      "
                      type="button"
                      class="
                        archiveplayPauseBtn
                        absolute-center
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                      "
                      :id="'story' + archiveData.story_id"
                      :val="indexes"
                    >
                      <i :name="indexes" class="fa-1x fas plyIcon fa-play"></i>
                    </div>
                  </div>
                  <div class="absolute-bottom">
                    <p class="text-white q-mb-md">
                      {{
                        durationShowTime == true
                          ? "00"
                          : calculatedAudioDuration(
                              "storyId" + archiveData.story_id
                            )
                      }}
                    </p>
                    <p class="text-white q-mb-md">
                      {{
                        archiveData.story_mood_id == 1
                          ? "General news"
                          : archiveData.story_mood_id == 2
                          ? "Announcement"
                          : archiveData.story_mood_id == 3
                          ? "New Hire"
                          : archiveData.story_mood_id == 4
                          ? "Upcoming change"
                          : archiveData.story_mood_id == 5
                          ? "Celebration"
                          : "Product Update"
                      }}
                    </p>
                  </div>
                </q-card>
              </div>
            </div>
            <div class="row justify-center" v-else>
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_hg6fedef.json"
                background="transparent"
                speed="1"
                style="width: 550px; height: 450px"
                loop
                autoplay
              ></lottie-player>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

  <script>
import Newstory from "./Newstory.vue";
import { useQuasar } from "quasar";
import { ref } from "vue";
import AWS from "aws-sdk";
import moment from "moment";
// import io from "socket.io-client";
//import carousel from 'vue-owl-carousel'

export default {
  setup() {
    const $q = useQuasar();
    const groupSentLoading = ref([]);
    const durationShowTime = ref(true);
    const degaultgroupSentLoading = ref(false);
    const isSkeletonLoading = ref(true);
    const AchiveSkelteon = ref(true);
    const getScrollItem = ref(0);
    const getScrollItemDiv = document.getElementsByClassName("scrollItem");
    const getAllDataOfStory = ref([]);
    const currentMonth = ref(moment(Date.now()).format("MMMM, YYYY"));
    const previousBtn = ref();
    const audioControl = ref(false);
    const prevParam = ref();
    const ArchiveStorytimerToStop = ref(0);
    const indexSelected = ref(0);
    const differnce = ref(0);
    const getArchiveData = ref([]);
    const getFilterMonthStory = ref([]);
    const changeIndex = ref(0);
    const percent = ref(0);
    const timer = ref(0);
    const progress = ref(0);
    const duration = ref(1000);
    const interval = ref(0);
    const isPaused = ref(true);
    const newDuration = ref(0);
    const pausePercent = ref(0);
    const isLoading = ref(false);
    const isLoadingTodayStories = ref(false);
    const selectedMonthInArchive = ref(null);
    function selectSlide(index) {
      differnce.value += indexSelected.value - index;
      indexSelected.value = index;

      changeIndex.value = 0;
      resetPlay();
    }

    function showError(msg) {
      $q.notify({
        color: "red-13",
        message: msg,
        position: "top",
        timeout: 3000,
      });
    }
    /*
      function to fetch all stories posted by user contact
    */
    function getItems() {
      isLoading.value = true;
      var myHeaders = new Headers();
      myHeaders.append("x-access-token", localStorage.getItem("token"));
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch(
        `${process.env.VUE_APP_BASE_URL}/story/livestoryuserlist?offset=100`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          var storyData = JSON.parse(result);
          if (storyData.status == true) {
            getAllDataOfStory.value = storyData.data;
            isLoading.value = false;
            isSkeletonLoading.value = false;
          } else {
            this.launch_toast();
            setTimeout(() => {
              location.replace("/");
            }, 2000);
          }
        })
        .catch((error) => console.log("error", error));
    }

    // function fetch all archive stories which is posted by self data from Api
    function getArchiveItem() {
      selectedMonthInArchive.value = null;
      isLoadingTodayStories.value = true;
      durationShowTime.value = true;
      var myHeaders = new Headers();
      myHeaders.append("x-access-token", localStorage.getItem("token"));
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch(
        `${process.env.VUE_APP_BASE_URL}/story/getyourstories`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          var ArchivestoryData = JSON.parse(result);
          if (ArchivestoryData.status == true) {
            getArchiveData.value = ArchivestoryData.data;
            getFilterMonthStory.value = [];
            getArchiveData.value.filter((data) => {
              if (
                currentMonth.value ==
                moment(data.created_date).format("MMMM, YYYY")
              ) {
                getFilterMonthStory.value.push(data);
              }
            });
            isLoadingTodayStories.value = true;
            AchiveSkelteon.value = false;
            setTimeout(() => {
              durationShowTime.value = false;
            }, 3000);
          } else {
            this.launch_toast();
            setTimeout(() => {
              location.replace("/");
            }, 2000);
          }
        })
        .catch((error) => console.log("error", error));
    }

    // function to jump to the next today's story
    function next(index) {
      percent.value = 0;
      pausePercent.value = 0;
      if (
        indexSelected.value >= getAllDataOfStory.value.length - 1 &&
        changeIndex.value >=
          getAllDataOfStory.value[indexSelected.value].Story.length - 1
      ) {
        setTimeout(() => {
          differnce.value = 0;
          indexSelected.value = 0;
          changeIndex.value = 0;
        }); //without
      } else if (
        changeIndex.value >=
        getAllDataOfStory.value[indexSelected.value].Story.length - 1
      ) {
        setTimeout(() => {
          differnce.value += index - (index + 1);
          indexSelected.value++;
          changeIndex.value = 0;
        });
      } else {
        changeIndex.value++;
      }
      if (isPaused.value == false) {
        resetPlay();
      }
    }

    // function to jump to the previous today'sstory
    function prev(index) {
      percent.value = 0;
      pausePercent.value = 0;
      if (indexSelected.value <= 0 && changeIndex.value <= 0) {
        changeIndex.value = 0;
      } else if (changeIndex.value <= 0) {
        setTimeout(() => {
          differnce.value += index - (index - 1);
          indexSelected.value--;
          changeIndex.value = 0;
        }); //without delay
      } else {
        changeIndex.value--;
      }
      if (isPaused.value == false) {
        resetPlay();
      }
    }

    // function to calculate/ going progress bar of audio duration
    function going() {
      let time = new Date().getTime();
      if (newDuration.value > 0) {
        percent.value =
          pausePercent.value +
          Math.floor((100 * (time - timer.value)) / duration.value);
      } else {
        percent.value = Math.floor(
          (100 * (time - timer.value)) / duration.value
        );
      }
    }

    // function to play automatic after pause the audio of today's story
    function autoPlay() {
      if (
        indexSelected.value >= getAllDataOfStory.value.length - 1 &&
        changeIndex.value >=
          getAllDataOfStory.value[indexSelected.value].Story.length - 1
      ) {
        stopMyOperation();
        return;
      } else if (
        changeIndex.value >=
        getAllDataOfStory.value[indexSelected.value].Story.length - 1
      ) {
        differnce.value += indexSelected.value - (indexSelected.value + 1);
        indexSelected.value++;
        changeIndex.value = 0;
      } else {
        changeIndex.value++;
      }

      if (isPaused.value == false) {
        resetPlay();
      }
    }

    // play the today's story
    function play() {
      var getAudioTodayStory = document.querySelector(`#StoryAudioPyer> audio`);
      if (getAudioTodayStory != null) {
        duration.value = getAudioTodayStory.duration * 1000;
        getAudioTodayStory.play();
      }
      timer.value = new Date().getTime();
      progress.value = setInterval(going, duration.value / 100);

      if (newDuration.value > 0) {
        interval.value = setInterval(autoPlay, newDuration.value);
      } else {
        interval.value = setInterval(autoPlay, duration.value);
      }
    }

    //function to operate the audio stop after load the page
    function stopMyOperation() {
      var acbPause = document.querySelector(`#StoryAudioPyer> audio`);
      if (acbPause != null) {
        acbPause.pause();
      }
      isPaused.value = true;
      pausePercent.value = percent.value;
      clearInterval(progress.value);
      clearInterval(interval.value);
      newDuration.value =
        duration.value - (pausePercent.value * duration.value) / 100;
    }

    //function to operate the audio to play after load the page  and update the Readstatus of story
    function startMyOperation(Storylength, readStatus, StoryuserId) {
      console.log(Storylength);
      isPaused.value = false;
      play();
      if (readStatus == false && Storylength == changeIndex.value + 1) {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          story_user_id: [StoryuserId],
        });

        var requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(`${process.env.VUE_APP_BASE_URL}/story/readstatus`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            const responseUpdateSatus = JSON.parse(result);
            if (responseUpdateSatus.status == true) {
              this.getItems();
            }
          })
          .catch((error) => console.log("error", error));
      }
    }

    // function to reset all the state variable that used in play and pause
    function resetPlay() {
      if (isPaused.value) {
        isPaused.value = false;
      }
      percent.value = 0;
      newDuration.value = 0;
      percent.value = 0;
      clearInterval(interval.value);
      clearInterval(progress.value);
      isPaused.value = true;
    }

    // function to get Date foor  archive story
    function getDateOfEachStory(getDateFromParam) {
      const datenew = moment(getDateFromParam).format("DD, MMM");
      return datenew;
    }

    // function to calculate and  format the duration of audio
    function calculatedAudioDuration(audioId) {
      const audioGetForDuration = document.getElementById(audioId).duration;
      const formatDuration = moment
        .utc(audioGetForDuration * 1000)
        .format("mm : ss");
      return formatDuration != "Invalid date" ? formatDuration : "00:00";
    }

    // function to open post story modals
    function story() {
      this.alert = true;
    }

      // function to scroll contact avatar & name in the forward direction
    function nextitemScroll() {
      getScrollItem.value++;


// console.log("items.length", items.length);
      for (var i of getScrollItemDiv) {
        if (getAllDataOfStory.value.length  <= 5) {
          if (getScrollItem.value == 0) {
            i.style.left = "0px";
          }
          if(getScrollItem.value > 0){
            getScrollItem.value = 0;
          }
        } else if (
          getAllDataOfStory.value.length  > 5 &&
          getAllDataOfStory.value.length  <= 8
        ) {
          // console.log("item morethan8 and 5");
           if (getScrollItem.value == 1) {
            i.style.left = "-240px";
          }
          if (getScrollItem.value == 2) {
            i.style.left = "-480px";
          }
          if(getScrollItem.value > 2){
            getScrollItem.value = 2;
          }
        } else if (
          getAllDataOfStory.value.length  > 9 &&
          getAllDataOfStory.value.length  <= 12
        ) {
          // console.log("item less than 12");
           if (getScrollItem.value == 1) {
            i.style.left = "-240px";
          }
          if (getScrollItem.value == 2) {
            i.style.left = "-480px";
          }
          if (getScrollItem.value == 3) {
            i.style.left = "-800px";
          }
           if(getScrollItem.value > 3){
            getScrollItem.value = 3;
          }
        } else if (
          getAllDataOfStory.value.length  > 12 &&
          getAllDataOfStory.value.length <= 15
        ) {
          // console.log("item less than 15");
          if (getScrollItem.value == 1) {
            i.style.left = "-240px";
          }
          if (getScrollItem.value == 2) {
            i.style.left = "-480px";
          }
          if (getScrollItem.value == 3) {
            i.style.left = "-1060px";
          }
           if(getScrollItem.value > 3){
            getScrollItem.value = 3;
          }
        } else if (
          getAllDataOfStory.value.length  > 15 &&
          getAllDataOfStory.value.length <= 18
        ) {
          // console.log("item less than 15");
          if (getScrollItem.value == 1) {
            i.style.left = "-440px";
          }
          if (getScrollItem.value == 2) {
            i.style.left = "-880px";
          }
          if (getScrollItem.value == 3) {
            i.style.left = "-1660px";
          }
           if(getScrollItem.value > 3){
            getScrollItem.value = 3;
          }
        } else if (
          getAllDataOfStory.value.length  > 18 &&
          getAllDataOfStory.value.length <= 22
        ) {
          // console.log("item less than 15");
          if (getScrollItem.value == 1) {
            i.style.left = "-440px";
          }
          if (getScrollItem.value == 2) {
            i.style.left = "-880px";
          }
          if (getScrollItem.value == 3) {
            i.style.left = "-1460px";
          }
          if (getScrollItem.value == 4) {
            i.style.left = "-2060px";
          }
           if(getScrollItem.value > 4){
            getScrollItem.value = 4;
          }
        }
      }
      // console.log("getScrollItem:->", getScrollItem.value);
    }

    // function to scroll contact avatar & name in the backward direction
    function prevItemScroll() {
      getScrollItem.value--;
    for (var i of getScrollItemDiv) {
        if (getAllDataOfStory.value.length  <= 5) {
          if (getScrollItem.value == 0) {
            i.style.left = "0px";
          }
          if(getScrollItem.value < 0){
            getScrollItem.value = 0;
          }
        } else if (
          getAllDataOfStory.value.length  > 5 &&
          getAllDataOfStory.value.length  <= 8
        ) {
          // console.log("item morethan8 and 5");
          if (getScrollItem.value == 0) {
            i.style.left = "0px";
          }
           else if (getScrollItem.value == 1) {
            i.style.left = "-240px";
          }
          else if (getScrollItem.value == 2) {
            i.style.left = "-480px";
          }
          if(getScrollItem.value < 0){
            getScrollItem.value = 0;
          }
        } else if (
          getAllDataOfStory.value.length  > 9 &&
          getAllDataOfStory.value.length  <= 12
        ) {
          // console.log("item less than 12");
           if (getScrollItem.value == 0) {
            i.style.left = "0px";
          }
           if (getScrollItem.value == 1) {
            i.style.left = "-240px";
          }
          if (getScrollItem.value == 2) {
            i.style.left = "-480px";
          }
          if (getScrollItem.value == 3) {
            i.style.left = "-800px";
          }
           if(getScrollItem.value < 0){
            getScrollItem.value = 0;
          }
        } else if (
          getAllDataOfStory.value.length  > 12 &&
          getAllDataOfStory.value.length <= 15
        ) {
          // console.log("item less than 15");
           if (getScrollItem.value == 0) {
            i.style.left = "0px";
          }
          if (getScrollItem.value == 1) {
            i.style.left = "-240px";
          }
          if (getScrollItem.value == 2) {
            i.style.left = "-480px";
          }
          if (getScrollItem.value == 3) {
            i.style.left = "-1060px";
          }
           if(getScrollItem.value < 0){
            getScrollItem.value = 0;
          }
        } else if (
          getAllDataOfStory.value.length  > 15 &&
          getAllDataOfStory.value.length <= 18
        ) {
          // console.log("item less than 15");
           if (getScrollItem.value == 0) {
            i.style.left = "0px";
          }
          if (getScrollItem.value == 1) {
            i.style.left = "-440px";
          }
          if (getScrollItem.value == 2) {
            i.style.left = "-880px";
          }
          if (getScrollItem.value == 3) {
            i.style.left = "-1660px";
          }
           if(getScrollItem.value < 0){
            getScrollItem.value = 0;
          }
        } else if (
          getAllDataOfStory.value.length  > 18 &&
          getAllDataOfStory.value.length <= 22
        ) {
          // console.log("item less than 18");
           if (getScrollItem.value == 0) {
            i.style.left = "0px";
          }
          if (getScrollItem.value == 1) {
            i.style.left = "-440px";
          }
          if (getScrollItem.value == 2) {
            i.style.left = "-880px";
          }
          if (getScrollItem.value == 3) {
            i.style.left = "-1460px";
          }
          if (getScrollItem.value == 4) {
            i.style.left = "-2060px";
          }
           if(getScrollItem.value < 0){
            getScrollItem.value = 0;
          }
        }
      }
    }
    return {
      prevItemScroll,
      nextitemScroll,
      getScrollItem,
      selectedMonthInArchive,
      monthOptionsList: [],
      prevParam,
      ArchiveStorytimerToStop,
      getAllDataOfStory,
      selectedContacts: [],
      usersTypeId: [],
      audioBlob: ref(null),
      userId: "",
      val: ref(true),
      selected: ref([]),
      group: ref("op1"),
      step: ref(1),
      shape: ref(1),
      filter: ref(""),
      searchQuery: null,
      newmessage: ref(false),
      loginname: "",
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      conversationID: "",
      conversationUUID: "",
      conversationType: "",
      tab: ref("todayStories"),
      splitterModel: ref(20),
      slide: ref(1),
      slide1: ref(3),
      alert: ref(false),
      indexSelected,
      selectSlide,
      differnce,
      getItems,
      next,
      prev,
      changeIndex,
      percent,
      going,
      play,
      duration,
      progress,
      timer,
      resetPlay,
      interval,
      autoPlay,
      isPaused,
      stopMyOperation,
      startMyOperation,
      newDuration,
      pausePercent,
      isLoading,
      isLoadingTodayStories,
      getArchiveItem,
      getArchiveData,
      getDateOfEachStory,
      moment,
      audioControl,
      getFilterMonthStory,
      currentMonth,
      previousBtn,
      story,
      recordingStart: ref(false),
      currentUser: localStorage.getItem("loginname"),
      currentAudio: ref(null),
      starttime: ref(""),
      endtime: ref(""),
      timeduration: ref(""),
      isPlaying: ref(false),
      storyContacts: ref([]),
      isStorySend: ref(false),
      isSkeletonLoading,
      AchiveSkelteon,
      durationShowTime,
      achiveSkeltonLoder: ref(8),
      numberofcontactCircleSkeleton: ref(7),
      calculatedAudioDuration,
      groupSentLoading,
      degaultgroupSentLoading,
      statusType: ref(1),
      showError,
      imgurl :''
    };
  },
 created() {
      this.imgurl = process.env.VUE_APP_BASE_URL_IMAGE;
     console.log(this.imgurl)
  },
  watch: {
    /**
     * function to show the archive stories according to selected month
     */
    selectedMonthInArchive(value) {
      this.durationShowTime = true;
      this.getFilterMonthStory = [];
      this.getArchiveData.filter((data) => {
        var datenews = moment(data.created_date).format("MMMM, YYYY");
        if (datenews == value) {
          this.getFilterMonthStory.push(data);
        }
      });
      setTimeout(() => {
        this.durationShowTime = false;
      }, 2000);
    },
  },
  components: {
    Newstory,
  },
  methods: {
    launch_toast() {
      var x = document.getElementById("toast1");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 5000);
    },
    /*
     * function to play the review of post story Audio.
     */

    startPlaying() {
      this.isPlaying = true;
      this.$refs.audioElement.play();
      setTimeout(() => {
        this.isPlaying = false;
      }, this.timeduration * 1000);
    },

    /*
     *function to pause the review of post story Audio.
     */
    stopPlaying() {
      if (this.isPlaying !== false) {
        this.isPlaying = false;
        this.$refs.audioElement.pause();
      }
    },
    /*
     *function to delete the audio preview of post story
     */
    deleteAudio() {
      this.audioBlob = null;
      this.currentAudio = null;
      this.step = 1;
    },

    /*
     *function to stop All the archive stories
     */
    stopAllArchiveStory() {
      const getAudioIconDivs = Object.values(
        document.querySelectorAll(
          ".archiveStoryClass >  .archiveplayPauseBtn > i"
        )
      );
      getAudioIconDivs.map((item) => {
        item.className = "fa-1x fas plyIcon fa-play";
      });
      let getAllArchiveAudio = Object.values(
        document.querySelectorAll(".archiveStoryClass >  audio")
      );
      getAllArchiveAudio.map((data) => {
        data.pause();
      });
    },

    /*
     *function to play and pause archive audio and  toggle the icon
     */
    playaudio(audioPara, btnId) {
      let getArchiveAudioIcon = document.querySelector(`#${btnId} > i`);
      if (getArchiveAudioIcon.className == "fa-1x fas plyIcon fa-play") {
        this.stopAllArchiveStory();
      }
      if (this.prevParam != document.getElementById(audioPara)) {
        this.prevParam = document.getElementById(audioPara);
        this.ArchiveStorytimerToStop = this.prevParam.duration;
      }
      if (getArchiveAudioIcon.className == "fa-1x fas plyIcon fa-play") {
        getArchiveAudioIcon.classList.remove("fa-play");
        this.ArchiveStorytimerToStop =
          this.prevParam.duration - this.prevParam.currentTime;
        this.prevParam.play();
        getArchiveAudioIcon.classList.add("fa-pause");
      } else {
        getArchiveAudioIcon.classList.remove("fa-pause");
        getArchiveAudioIcon.classList.add("fa-play");
        this.prevParam.pause();
      }
      setTimeout(() => {
        getArchiveAudioIcon.classList.add("fa-play");
      }, this.ArchiveStorytimerToStop * 1000);
    },

    /*
     *function to populate all month in select option
     */
    getMonthOption() {
      const monthOptions = this.monthOptionsList.map((data) => {
        return data;
      });
      return monthOptions;
    },

    /*
     *function to start to the recording to post story
     */
    startRecording() {
      this.recordingStart = true;
      this.recordingStartWave = true;
      var device = navigator.mediaDevices.getUserMedia({ audio: true });
      var items = [];
      this.starttime = new Date();
      device.then((stream) => {
        this.recorder = new MediaRecorder(stream);
        this.recorder.ondataavailable = (e) => {
          items.push(e.data);
          if (this.recorder.state == "inactive") {
            var blob = new Blob(items, { type: "audio/mp3" });
            this.audioBlob = blob;
            this.currentAudio = URL.createObjectURL(blob);
          }
        };
        this.recorder.start(100);
      });
    },

    /*
     *function to stop to the recording to post story
     */
    stopRecording() {
      this.endtime = new Date();
      //  console.log(this.endtime);
      var hh = Math.floor(
        (this.endtime.getTime() - this.starttime.getTime()) / 1000 / 60 / 60
      );
      var mm = Math.floor(
        (this.endtime.getTime() - this.starttime.getTime()) / 1000 / 60
      );
      var ss = Math.floor(
        (this.endtime.getTime() - this.starttime.getTime()) / 1000
      );
      console.log("hh" + hh + "mm" + mm + "ss" + ss);
      this.timeduration = mm + ss;
      this.recordingStart = false;
      this.recordingStartWave = false;
      this.recorder.stop();
      this.done = true;
      this.step = 2;
      this.newStory();
    },

    /*
     * function to fetch all the team/groups joined by the user.
     */
    newStory() {
      this.storyContacts = [];
      var myHeaders = new Headers();
      myHeaders.append("x-access-token", localStorage.getItem("token"));

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch(`${process.env.VUE_APP_BASE_URL}/story/teamsgroup`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          var status = JSON.parse(result);
          if (status.code == 200) {
            this.storyContacts.push(status.data);
            for (
              let loadSent = 0;
              loadSent < this.storyContacts[0].groups.length;
              loadSent++
            ) {
              // push false to state to manage loader
              this.groupSentLoading.push(false);
            }
          } else if (status.status == false) {
            this.launch_toast();
            setTimeout(() => {
              location.replace("/");
            }, 2000);
          }
        })
        .catch((error) => console.log("error", error));
    },

    /*
     *function to send the story to joined teams/groups
     */
    sendStory(index, type, type_id) {
      this.groupSentLoading[index] = true;

      type_id === 1
        ? (this.degaultgroupSentLoading = true)
        : (this.degaultgroupSentLoading = false);
      AWS.config.update({
        region: "eu-west-2",
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "eu-west-2:bb9dc3d7-6385-4810-a36c-e9bc0408c85c",
        }),
      });
      let upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: "openspace-broadcast",
          Key: `broadcast/${this.userId}/${Date.now().valueOf()}.wav`,
          Body: this.audioBlob,
          ContentType: "audio/wav",
        },
      });
      var promise = upload.promise();
      promise
        .then((data) => {
          if (data.Location && data.Location != null) {
            this.successAwsResponse(data, type, type_id, index);
          } else {
            console.log("Not Uploaded to AWS");
          }
        })
        .catch((error) => console.log(error));
    },

    /**
     * Function to set the StatusMood value to the state variable
     */
    getselectedtopic(val) {
      // console.log(val);
      this.statusType = val;
    },

    /*
     *function to post a new story
     */
    successAwsResponse(data, type, type_id, index) {
      console.log("called");
      const audioUrl = data.Location.split("broadcast/")[1];
      const myHeaders = new Headers();
      console.log(localStorage.getItem("token"));
      myHeaders.append("x-access-token", localStorage.getItem("token"));
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        type: type,
        type_id: type_id,
        story_mood_id: this.statusType,
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
          if (response.code == 200) {
            console.log(response);
            this.isStorySend = true;
            this.groupSentLoading[index] = false;
            this.degaultgroupSentLoading = false;
            document.getElementById(type_id).children[1].innerHTML = "SENT";
            document.getElementById(type_id).disabled = true;
          } else {
            //show error mesaage...!
            this.showError(response.message);
            this.isStorySend = true;
            this.groupSentLoading[index] = false;
            this.degaultgroupSentLoading = false;
          }
        })
        .catch((error) => console.log("error", error));
    },

    /*
     *function to handle the state when the story has posted
     */
    donePosting() {
      this.currentAudio = null;
      this.audioBlob = null;
      this.alert = false;
      this.shape = 1;
      this.step = 1;
      this.isStorySend = false;
    },
  },
  mounted() {
    this.userId = localStorage.getItem("userId"); // store the userId in the state.
    this.getItems(); //call the function to fetch all stories when component is mounted

    //loop to store all previous month with year.
    for (let index = 0; index < 12; index++) {
      const monthsGet = moment()
        .subtract(index, "months")
        .endOf("month")
        .format("MMMM, YYYY");
      this.monthOptionsList.push(monthsGet);
    }
  },
};
</script>

  <style>
.q-splitter__panel,
.q-splitter__before {
  width: 25% !important;
  padding: 1%;
}
.stories .q-tab--active {
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
  border-left: 5px solid #fa243c;
  background: white;
}
.newstorycard {
  width: 60%;
}
.stories .q-tab {
  padding: 5% 6% !important;
}
.stories .q-badge {
  background-color: #fb5b73;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  justify-content: center;
}
.stories .q-tab .q-badge {
  top: 15%;
  right: -28%;
  font-size: 13px;
  font-weight: 700;
}
.stories .column {
  flex-direction: unset !important;
}
.stories .flex-center {
  justify-content: unset;
  /* padding-left: 3%; */
  max-height: 100px;
}
.stories .q-tab__label {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  color: #0e0e16;
}
.microphone-circle2 {
  width: 80px;
  height: 80px;
  background: #fa243c;
  border-radius: 100%;
  line-height: 80px;
  border: 9px solid #fca5a5;
  text-align: center;
}
.microphone-circle2 .fa-plus {
  font-size: 37px;
  color: white;
}
.contact-list {
  box-shadow: none !important;
}
.story-circle {
  width: 82px !important;
  height: 82px !important;
  border-radius: 100%;
  margin: auto;
}
.allstories .q-carousel__slide {
  display: flex;
  justify-content: space-evenly;
  padding: 0px;
  background-color: #fff;
  margin: 0px;
  height: 90vh !important;
}

.story-content img {
  border: 4px solid #fb5b73;

  object-fit: cover;
}
/* .story-content p{
  margin-top:8px;
} */
.eva-shield {
  display: none !important;
}
.archive img {
  width: 100%;
}
.story-date {
  background: white !important;
  color: black !important;
  width: 70px;
  padding: 8px !important;
  border-radius: 24px !important;
  left: 4%;
  top: 3%;
  line-height: 12px;
  z-index: 999;
}
.story-title p {
  background: none !important;
  color: #fff !important;
}
.archive .my-card {
  box-shadow: none !important;
}
.story-card {
  width: 90%;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
}
.text-h6 {
  color: #99999a;
  text-align: center;
}
.archiveStoryCard {
  width: 100% !important;
}
.q-splitter--vertical.q-splitter--workable > .q-splitter__separator {
  display: none !important;
}
.q-tab-panels {
  background: #fff;
  border-radius: 16px;
}

.q-carousel {
  background-color: #fff;
  height: auto;
}

.crousalCustom {
  overflow-x: hidden;
}
.playPauseBtn {
  position: absolute;
  top: 460% !important;
  color: #fff;
  width: 65px;
  height: 65px;
  background-color: #fa243c;
  border: 6px solid rgba(0, 0, 0, 0.23);
  border-radius: 50%;
  outline: none;
}
.archiveplayPauseBtn {
  width: 0px;
  height: 0px;
  background-color: #fa243c;
  border: 6px solid rgba(0, 0, 0, 0.23);
  border-radius: 50%;
  overflow: hidden;
}
.plyIcon {
  color: #fff;
  font-size: 20px;
}
.archiveImagePost {
  min-height: 240px;
  border-radius: 4px !important;
}
main {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.scrollArrow {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 27px;
  width: 27px;
  /* line-height: 32px; */
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 3%;
  font-size: 17px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  z-index: 2;
  background: rgba(153, 153, 154, 0.5);
}

.scrollArrow:nth-of-type(2) {
  left: 95.5%;
  text-align: center;
}
section {
  width: 90%;
  margin: auto;
  display: flex !important;
  overflow-x: auto;
}
section::-webkit-scrollbar {
  width: 0.5rem;
  height: 0px;
}

.scrollItem {
  position: relative;
  left: 0;
  text-align: center;
  margin: auto 20px;
  transition: 0.5s;
}
.archiveStoryClass {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  opacity: 0;

  transition: 0.1s cubic-bezier(0, 0.38, 0.83, 1.26);
}
.archiveStoryCard:hover .archiveStoryClass {
  background: rgba(0, 0, 0, 0.4);
  opacity: 1;
  transition: 0.3s cubic-bezier(0, 0.38, 0.83, 1.26);
}

.archiveStoryCard:hover .archiveplayPauseBtn {
  width: 50px;
  height: 50px;
  transition: 0.3s cubic-bezier(0, 0.38, 0.83, 1.26);
}
.archiveStoryCard:hover .plyIcon {
  font-size: 20px;
  transition: 0.3s cubic-bezier(0, 0.38, 0.83, 1.26);
}
.q-img__loading {
  position: absolute !important;
  left: 40% !important;
  top: 40% !important;
}
.audioTimingSection{
top: 360% !important;
left: 50%;
}
.recordingTimerReview{
  background-color: #ffffff;
  border-radius: 22px;
  font-size: 18px;
}
</style>