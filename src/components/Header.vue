<template>
  <q-layout view="hHh lpr fff" class="">
    <div class="">
      <q-header
        reveal
        class="text-white header q-mb-lg"
        style="position: unset"
        v-if="$route.path != '/'"
      >
        <div class="cContainer">
          <q-toolbar>
            <div class="col-2 text-left">
              <q-toolbar-title>
                <svg
                  width="176"
                  height="64"
                  viewBox="0 0 176 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1994_1591)">
                    <path
                      d="M7.85599 40.2069C12.071 21.0636 13.5445 63.4686 18.7554 42.555C24.1647 18.9332 26.0825 35.2366 28.6572 48.7862C31.7447 69.4767 34.9393 68.2403 37.4684 50.0665C41.167 23.7946 45.2662 32.8551 46.7168 42.3091C50.3242 63.2912 51.9031 48.7915 53.2905 42.3495C55.0468 33.2626 57.0788 33.8351 58.6225 36.9507C58.6671 37.04 58.7418 37.1108 58.8333 37.1506C58.9248 37.1904 59.0275 37.1967 59.1232 37.1684C59.2189 37.1402 59.3016 37.0791 59.3568 36.9959C59.4121 36.9128 59.4362 36.8128 59.4252 36.7136C58.4399 27.6443 55.2909 3.46583 51.5887 23.8666C47.3737 43.0186 46.0056 0.604874 40.7947 21.5185C35.3837 45.1367 33.4676 28.8368 30.8929 15.2802C27.3804 -5.90208 24.1857 -3.86306 21.9781 13.9999C18.2777 40.2718 14.1785 31.2113 12.7279 21.7573C9.12226 0.782257 8.10538 15.2802 6.71618 21.7239C4.9283 30.9619 2.50115 30.2172 0.804596 26.9646C0.76084 26.8731 0.685761 26.8002 0.592936 26.7591C0.50011 26.7181 0.395667 26.7117 0.298494 26.7409C0.201321 26.7702 0.117832 26.8333 0.0631264 26.9188C0.0084206 27.0043 -0.0138908 27.1065 0.000226999 27.207C0.971441 36.1534 4.13271 60.7253 7.85599 40.2069Z"
                      fill="url(#paint0_linear_1994_1591)"
                    />
                    <path
                      d="M99.6969 32.1391C99.6969 40.729 93.9539 46.4737 86.5846 46.4737C83.4514 46.4737 80.9786 45.5253 79.1222 43.8674C78.9811 43.741 78.8063 43.6581 78.6191 43.6287C78.4318 43.5994 78.2401 43.6249 78.067 43.7022C77.8939 43.7794 77.7469 43.9051 77.6437 44.0641C77.5405 44.2231 77.4855 44.4085 77.4854 44.598V56.1613C77.4854 56.4227 77.3817 56.6735 77.1969 56.8586C77.0122 57.0436 76.7616 57.1478 76.5001 57.1483H71.558C71.2966 57.1478 71.046 57.0436 70.8612 56.8586C70.6765 56.6735 70.5728 56.4227 70.5728 56.1613V19.0409C70.5728 18.7794 70.6765 18.5286 70.8612 18.3436C71.046 18.1585 71.2966 18.0543 71.558 18.0539H86.5846C93.9609 18.0539 99.6969 23.6458 99.6969 32.1391ZM92.5296 32.19C92.5296 27.3076 89.5439 24.0252 85.1357 23.9619H79.621C79.3405 23.9617 79.0627 24.0168 78.8035 24.124C78.5443 24.2313 78.3088 24.3886 78.1104 24.5869C77.912 24.7853 77.7547 25.0208 77.6475 25.28C77.5403 25.5392 77.4852 25.817 77.4854 26.0976V32.2445C77.4854 37.2252 80.4851 40.5305 85.0075 40.5305C89.4807 40.5217 92.5296 37.2165 92.5296 32.1848V32.19Z"
                      fill="#0E0E16"
                    />
                    <path
                      d="M142.082 28.7284V44.9967C142.082 45.2519 141.981 45.4967 141.801 45.6772C141.62 45.8577 141.375 45.9591 141.12 45.9591H136.134C136.007 45.9594 135.882 45.9346 135.765 45.8864C135.648 45.8381 135.542 45.7673 135.452 45.6779C135.363 45.5885 135.292 45.4823 135.243 45.3654C135.195 45.2485 135.17 45.1232 135.17 44.9967V29.856C135.17 26.2978 132.629 23.9602 128.766 23.9602H124.2C123.715 23.9602 123.249 24.153 122.906 24.4962C122.563 24.8394 122.37 25.3049 122.37 25.7902V44.9967C122.37 45.1232 122.345 45.2485 122.297 45.3654C122.248 45.4823 122.177 45.5885 122.088 45.6779C121.998 45.7673 121.892 45.8381 121.775 45.8864C121.658 45.9346 121.533 45.9594 121.406 45.9591H116.413C116.286 45.9594 116.161 45.9346 116.044 45.8864C115.927 45.8381 115.821 45.7673 115.731 45.6779C115.642 45.5885 115.571 45.4823 115.522 45.3654C115.474 45.2485 115.449 45.1232 115.449 44.9967V19.0181C115.449 18.7623 115.55 18.5171 115.731 18.3363C115.912 18.1554 116.157 18.0539 116.413 18.0539H131.155C137.713 18.0539 142.082 22.3251 142.082 28.7284Z"
                      fill="#0E0E16"
                    />
                    <path
                      d="M175.626 18.0548V56.3238C175.626 56.4312 175.605 56.5377 175.564 56.637C175.523 56.7363 175.463 56.8265 175.387 56.9025C175.311 56.9785 175.221 57.0388 175.121 57.0799C175.022 57.121 174.916 57.1422 174.808 57.1422H148.794C148.687 57.1422 148.58 57.121 148.481 57.0799C148.382 57.0388 148.292 56.9785 148.216 56.9025C148.14 56.8265 148.079 56.7363 148.038 56.637C147.997 56.5377 147.976 56.4312 147.976 56.3238V52.3177C147.976 52.2103 147.997 52.1038 148.038 52.0045C148.079 51.9052 148.14 51.815 148.216 51.739C148.292 51.663 148.382 51.6027 148.481 51.5616C148.58 51.5205 148.687 51.4993 148.794 51.4993H167.899C168.116 51.4993 168.324 51.4131 168.478 51.2596C168.631 51.1061 168.717 50.8979 168.717 50.6809V44.1968C168.717 44.0361 168.668 43.8794 168.578 43.7463C168.488 43.6133 168.361 43.5099 168.212 43.4494C168.063 43.3888 167.9 43.3738 167.742 43.4061C167.585 43.4385 167.441 43.5169 167.328 43.6312C165.447 45.4314 162.894 46.4676 159.618 46.4676C152.198 46.4676 146.506 40.7229 146.506 32.133C146.506 23.8083 151.985 18.2849 159.197 18.0829V18.0636L175.626 18.0548ZM168.714 24.762C168.714 24.5449 168.628 24.3367 168.474 24.1832C168.321 24.0298 168.112 23.9435 167.895 23.9435H161.064C156.613 24.005 153.668 27.2892 153.668 32.1716C153.668 37.2051 156.668 40.5086 161.19 40.5086C165.663 40.5086 168.714 37.2051 168.714 32.2226V24.762Z"
                      fill="#0E0E16"
                    />
                    <path
                      d="M109.951 18.0244C110.237 18.0244 110.511 18.1378 110.713 18.3397C110.915 18.5415 111.029 18.8153 111.029 19.101V44.883C111.029 45.0245 111.001 45.1647 110.947 45.2954C110.893 45.4261 110.813 45.5449 110.713 45.6449C110.613 45.7449 110.494 45.8241 110.363 45.8781C110.233 45.9321 110.092 45.9598 109.951 45.9596H105.2C105.059 45.9598 104.919 45.9321 104.788 45.8781C104.657 45.8241 104.538 45.7448 104.438 45.6448C104.338 45.5447 104.259 45.426 104.205 45.2953C104.151 45.1645 104.123 45.0244 104.124 44.883V19.101C104.124 18.8155 104.237 18.5417 104.439 18.3398C104.641 18.1379 104.915 18.0244 105.2 18.0244H109.951Z"
                      fill="#0E0E16"
                    />
                    <path
                      d="M109.948 6.8544H105.199C104.602 6.8544 104.117 7.33877 104.117 7.93626V12.6852C104.117 13.2827 104.602 13.7671 105.199 13.7671H109.948C110.545 13.7671 111.03 13.2827 111.03 12.6852V7.93626C111.03 7.33877 110.545 6.8544 109.948 6.8544Z"
                      fill="#0E0E16"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1994_1591"
                      x1="29.7144"
                      y1="0.000719783"
                      x2="29.7144"
                      y2="64.0007"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FB5B73" />
                      <stop offset="0.31" stop-color="#FB455D" />
                      <stop offset="0.74" stop-color="#FA2D45" />
                      <stop offset="1" stop-color="#FA243C" />
                    </linearGradient>
                    <clipPath id="clip0_1994_1591">
                      <rect width="175.626" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </q-toolbar-title>
            </div>
            <div class="col-4 offset-1 menubar">
              <q-tabs align="left">
                <q-route-tab to="/home" label="Home" />
                <q-route-tab to="/stories" label="Stories" />
                <q-route-tab to="/calls" label="Calls" />
                <q-route-tab to="/inbox" label="Inbox" />
                <q-route-tab to="/invite" label="Invite" />
              </q-tabs>
            </div>

            <div class="col-5 profiles">
              <div class="row no-wrap items-center search-row">
                <div class="col-6 profile-search">
                  <q-input
                    v-model="search"
                    debounce="500"
                    filled
                    placeholder="Search"
                    hint=""
                  >
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </q-input>
                </div>
                <div class="col-1">
                  <div
                    class="cursor-pointer"
                    style="width: 50%; margin: auto"
                    aria-hidden="true"
                    @click="openSettingsModel()"
                  >
                    <q-tooltip
                      transition-show="scale"
                      transition-hide="scale"
                      anchor="bottom right"
                      self="center end"
                    >
                      Settings
                    </q-tooltip>
                    <svg
                      width="16"
                      style="margin: auto"
                      height="16"
                      viewBox="0 0 23 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1753 12.0684C20.1753 10.4276 21.3959 9.07475 22.9775 8.85962C22.4298 6.89728 21.3962 5.13874 20.0113 3.72344C19.0337 4.98443 17.2525 5.36422 15.8327 4.54415C14.4106 3.72279 13.8499 1.98754 14.4568 0.50948C13.507 0.266533 12.5129 0.13681 11.4887 0.13681C10.4655 0.13681 9.47365 0.265886 8.52677 0.507863C9.13107 1.98657 8.57045 3.72117 7.14802 4.54156C5.72657 5.36066 3.94701 4.98023 2.97004 3.71858C1.58255 5.13454 0.546713 6.89469 0 8.8593C1.58061 9.07475 2.8015 10.4273 2.8015 12.0684C2.8015 13.7092 1.58094 15.0621 0 15.2772C0.546713 17.2395 1.58061 18.9984 2.96583 20.4134C3.94377 19.1524 5.72431 18.7726 7.14446 19.593C8.56559 20.414 9.12654 22.1493 8.51998 23.627C9.46945 23.8699 10.4632 24 11.4887 24C12.5107 24 13.5032 23.8709 14.4504 23.6289C13.8438 22.1502 14.4064 20.4153 15.8285 19.5949C17.2496 18.7758 19.0298 19.1563 20.0068 20.4182C21.3943 19.0019 22.4291 17.2421 22.9775 15.2775C21.3962 15.0621 20.1753 13.7098 20.1753 12.0684ZM11.4887 16.2978C9.15727 16.2978 7.2606 14.4005 7.2606 12.0684C7.2606 9.73663 9.15727 7.83963 11.4887 7.83963C13.8195 7.83963 15.7159 9.73695 15.7159 12.0687C15.7159 14.4008 13.8195 16.2978 11.4887 16.2978Z"
                        fill="#99999A"
                      />
                    </svg>
                  </div>
                  <q-dialog v-model="alert">
                    <q-card class="header-card">
                      <q-card-section>
                        <q-splitter
                          v-model="splitterModel"
                          style="minheight: 250px"
                        >
                          <template v-slot:before>
                            <div class="dialouge-tabs">
                              <q-tabs v-model="tab" vertical class="">
                                <q-tab name="General" label="General"> </q-tab>
                                <q-tab
                                  name="Integrations"
                                  label="Integrations"
                                />
                                <q-tab name="Billing" label="Billing & Usage" />
                                <q-tab name="Plans" label="Plans" />
                                <q-tab name="Help" label="Help" />
                                <q-tab
                                  name="Logout"
                                  label="Logout"
                                  @click="confirm = true"
                                />
                              </q-tabs>
                            </div>
                          </template>
                          <template v-slot:after>
                            <i
                              class="fa fa-times v-closeBotton"
                              @click="openSettingsModel()"
                              aria-hidden="true"
                            ></i>
                            <q-tab-panels
                              class="popup-tabs"
                              v-model="tab"
                              animated
                              vertical
                              style="background-color: transparent"
                            >
                              <q-tab-panel name="General">
                                <div class="q-mt-sm" style="height: 560px">
                                  <h5 class="black text-weight-medium">
                                    General
                                  </h5>

                                  <span class="black"
                                    >Manage your prefences</span
                                  ><br /><br />
                                  <h6 class="black">
                                    Show shortcuts<q-toggle
                                      v-model="value"
                                      color="red-13"
                                      label=""
                                    />
                                  </h6>
                                  <span class="gray">
                                    Quick access to your favourite shortcuts </span
                                  ><br /><br />
                                  <div class="row">
                                    <div class="col-7">
                                      <h6 class="black">Theme</h6>
                                      <br />
                                      <span class="gray">
                                        Customize your workspace's color theme
                                      </span>
                                    </div>
                                    <div class="col-5 theme-button">
                                      <q-btn-dropdown
                                        color="primary"
                                        label="Auto"
                                      >
                                        <q-list>
                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Photos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Videos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Articles</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>
                                        </q-list>
                                      </q-btn-dropdown>
                                    </div>
                                  </div>
                                  <br />
                                  <div class="row">
                                    <div class="col-7">
                                      <h6 class="black">Start Ping on</h6>
                                      <br />
                                      <span class="gray">
                                        When you open a new tab what do you want
                                        to see
                                      </span>
                                    </div>
                                    <div class="col-5 theme-button">
                                      <q-btn-dropdown
                                        color="primary"
                                        label="Auto"
                                      >
                                        <q-list>
                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Photos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Videos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Articles</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>
                                        </q-list>
                                      </q-btn-dropdown>
                                    </div>
                                  </div>
                                  <br />
                                  <div class="row">
                                    <div class="col-7">
                                      <h6 class="black">Name or Nickname</h6>
                                      <br />
                                      <span class="gray">
                                        We can use either, which would you
                                        prefer
                                      </span>
                                    </div>
                                    <div class="col-5 theme-button">
                                      <q-btn-dropdown
                                        color="primary"
                                        label="Home"
                                      >
                                        <q-list>
                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Photos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Videos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Articles</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>
                                        </q-list>
                                      </q-btn-dropdown>
                                    </div>
                                  </div>
                                </div>
                              </q-tab-panel>

                              <q-tab-panel
                                name="Integrations"
                                class="Integrations"
                              >
                                <h5 class="black text-weight-medium q-ml-lg">
                                  Integrations
                                </h5>
                                <h6 class="black q-ml-lg v-heading-h6">
                                  Connect Ping to your most useful service and
                                  tools
                                </h6>
                                <div class="row q-mt-xl iconDiv">
                                  <div class="row">
                                    <div class="col-1 integration-img">
                                      <img src="../assets/google.png" />
                                    </div>
                                    <div class="col-7 Integrations-content">
                                      <h6 class="black text-weight-medium">
                                        Google
                                      </h6>
                                      <span
                                        class="gray"
                                        style="font-size: 13px"
                                      >
                                        You are connected to
                                        openspace.my.google.com
                                      </span>
                                    </div>
                                    <div class="col-4 integration-button">
                                      <q-btn color="primary" label="Connect" />
                                    </div>
                                  </div>
                                  <div class="row q-mt-sm">
                                    <div class="col-1 integration-img">
                                      <img src="../assets/salesforce.png" />
                                    </div>
                                    <div class="col-7 Integrations-content">
                                      <h6 class="black text-weight-medium">
                                        Salesforce
                                      </h6>
                                      <span
                                        class="gray"
                                        style="font-size: 13px"
                                      >
                                        You are connected to
                                        openspace.my.salesforce.com
                                      </span>
                                    </div>
                                    <div class="col-4 integration-button">
                                      <q-btn color="primary" label="Connect" />
                                    </div>
                                  </div>
                                  <div class="row q-mt-sm">
                                    <div class="col-1 integration-img">
                                      <img src="../assets/slack.png" />
                                    </div>
                                    <div class="col-7 Integrations-content">
                                      <h6 class="black text-weight-medium">
                                        Slack
                                      </h6>
                                      <span
                                        class="gray"
                                        style="font-size: 13px"
                                      >
                                        You are connected to Openspace workspace
                                      </span>
                                    </div>
                                    <div class="col-4 integration-button">
                                      <q-btn color="primary" label="Connect" />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h5>Request another integration</h5>
                                  <span class="gray text-h7">
                                    I would like Ping to integration with...
                                  </span>
                                </div>
                                <div class="row q-mt-md justify-between">
                                  <div class="col-6">
                                    <label class="round-input-container-v">
                                      <div class="email-input-decorator">
                                        <div
                                          class="round-input-border-left"
                                        ></div>
                                        <span
                                          class="round-input-label-text orange"
                                          >Integration</span
                                        >
                                        <div
                                          class="round-input-border-right"
                                        ></div>
                                      </div>
                                      <input
                                        type="text"
                                        class="round-input invite-email-input"
                                        placeholder="Value"
                                      />
                                    </label>
                                  </div>
                                  <div class="col-4 integration-button-v">
                                    <q-btn
                                      color="primary"
                                      label="Request"
                                      class="requestButton"
                                    />
                                  </div>
                                </div>
                              </q-tab-panel>
                              <q-tab-panel name="Billing" class="billing">
                                <div class="q-mt-md">
                                  <h5 class="black text-weight-medium">
                                    Billings & Usage
                                  </h5>
                                  <h6 class="black v-heading-h6">
                                    Discover usage and upgrade your plan for
                                    opportunities
                                  </h6>
                                  <h6
                                    class="black"
                                    style="
                                      margin-top: 10px;
                                      margin-bottom: 10px;
                                    "
                                  >
                                    Current Plan - Free tier
                                    <i
                                      class="fa fa-chevron-right q-ml-sm gray"
                                      aria-hidden="true"
                                    ></i>
                                  </h6>
                                  <span class="gray">
                                    Free tier allow to use the Ping for free up
                                    to specified limits
                                  </span>
                                  <br />
                                  <h6 class="black" style="margin-top: 25px">
                                    Upgrade your plan
                                    <i
                                      class="fa fa-chevron-right q-ml-sm gray"
                                      aria-hidden="true"
                                    ></i>
                                  </h6>
                                  <q-btn
                                    color="#FA243C"
                                    text-color="#FA243C"
                                    label="Talk to sale"
                                    class="v-minus-m"
                                  />
                                  <q-table
                                    style="height: 200px"
                                    :rows="rows"
                                    :columns="columns"
                                    row-key="name"
                                    virtual-scroll
                                    class="billing-table"
                                  />
                                </div>
                              </q-tab-panel>
                              <q-tab-panel name="Plans" class="plans">
                                <div class="q-mt-md">
                                  <h5 class="black text-weight-medium">
                                    Plans
                                  </h5>
                                  <h6 class="black q-mb-sm">
                                    Discover plans and choose the one that meet
                                    your need
                                  </h6>
                                </div>
                                <div class="row justify-between">
                                  <div class="col-6">
                                    <q-card class="my-card">
                                      <q-card-section>
                                        <h5 class="black text-weight-medium">
                                          Free
                                        </h5>
                                        <h4 class="black">
                                          <span class="text-weight-medium"
                                            >$0</span
                                          >
                                          <span class="gray month">
                                            /month</span
                                          >
                                        </h4>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Useful workspace
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Notifications
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Benifits
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-times"
                                            aria-hidden="true"
                                          ></i
                                          >Unlimited messages
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-times"
                                            aria-hidden="true"
                                          ></i
                                          >Unlimited calls
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-times"
                                            aria-hidden="true"
                                          ></i
                                          >Unlimited stories
                                        </h6>
                                        <q-btn
                                          color="#99999A"
                                          text-color="#99999A"
                                          label="Current plan"
                                        />
                                      </q-card-section>
                                    </q-card>
                                  </div>
                                  <div class="col-6">
                                    <q-card class="my-card">
                                      <q-card-section>
                                        <h5 class="black text-weight-medium">
                                          Premium
                                        </h5>
                                        <h4 class="black">
                                          <span class="text-weight-medium"
                                            >$350</span
                                          >
                                          <span class="gray month">
                                            /month</span
                                          >
                                        </h4>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Useful workspace
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Notifications
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Benifits
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Unlimited messages
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Unlimited calls
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Unlimited stories
                                        </h6>
                                        <q-btn
                                          color="#99999A"
                                          text-color="#99999A"
                                          label="Upgrade"
                                        />
                                      </q-card-section>
                                    </q-card>
                                  </div>
                                </div>
                              </q-tab-panel>
                              <q-tab-panel name="Help">
                                <div class="q-mt-md">
                                  <h5 class="black text-weight-medium">Help</h5>
                                  <h6 class="black v-heading-h6">
                                    How can we help
                                  </h6>
                                  <h5
                                    class="black q-pt-md"
                                    style="margin-top: 5px; font-size: 19px"
                                  >
                                    Email<i
                                      class="fa fa-chevron-right q-ml-sm gray"
                                      aria-hidden="true"
                                    ></i>
                                  </h5>
                                  <h6 class="gray" style="">
                                    we appreciate all of your questions and
                                    feedback
                                  </h6>
                                  <h5
                                    class="black q-pt-md"
                                    style="margin-top: 5px; font-size: 19px"
                                  >
                                    Help center
                                    <i
                                      class="fa fa-chevron-right q-ml-sm gray"
                                      aria-hidden="true"
                                    ></i>
                                  </h5>
                                  <h6 class="gray" style="">
                                    FAQ'S and plenty of helpful information
                                  </h6>
                                </div>
                              </q-tab-panel>
                              <q-tab-panel name="Logout">
                                <q-dialog v-model="confirm">
                                  <div class="confirmation-card">
                                    <q-card>
                                      <q-card-section class="row items-center">
                                        <h1
                                          class="text-capitalize"
                                          style="margin: auto; font-weight: 500"
                                        >
                                          Are you sure to logout
                                          {{ user.loginname.split(" ")[0] }} ?
                                        </h1>
                                      </q-card-section>

                                      <q-card-actions align="right">
                                        <q-btn
                                          flat
                                          label="Cancel"
                                          color=""
                                          class="dark"
                                          @click="
                                            (confirm = false), (tab = 'General')
                                          "
                                        />
                                        <q-btn
                                          flat
                                          label="Logout"
                                          color=""
                                          class="dark"
                                          @click="logout"
                                        />
                                      </q-card-actions>
                                    </q-card>
                                  </div>
                                </q-dialog>
                              </q-tab-panel>
                            </q-tab-panels>
                          </template>
                        </q-splitter>
                      </q-card-section>
                    </q-card>
                  </q-dialog>
                </div>
                <!-- integration -->
                <div class="col-1">
                  <div
                    class="cursor-pointer"
                    style="width: 50%; margin: auto"
                    aria-hidden="true"
                    @click="(integration = true), (tab1 = 'Integrations')"
                  >
                    <q-tooltip
                      transition-show="scale"
                      transition-hide="scale"
                      anchor="bottom right"
                      self="center end"
                    >
                      Integration
                    </q-tooltip>
                    <svg
                      style="margin: auto"
                      width="16"
                      height="16"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#99999A" />
                      <circle cx="11.5" cy="2.5" r="2.5" fill="#99999A" />
                      <circle cx="20.5" cy="2.5" r="2.5" fill="#99999A" />
                      <circle cx="20.5" cy="11.5" r="2.5" fill="#99999A" />
                      <circle cx="20.5" cy="20.5" r="2.5" fill="#99999A" />
                      <circle cx="11.5" cy="11.5" r="2.5" fill="#99999A" />
                      <circle cx="11.5" cy="20.5" r="2.5" fill="#99999A" />
                      <circle cx="2.5" cy="11.5" r="2.5" fill="#99999A" />
                      <circle cx="2.5" cy="20.5" r="2.5" fill="#99999A" />
                    </svg>
                  </div>
                  <q-dialog v-model="integration">
                    <q-card class="header-card">
                      <q-card-section>
                        <q-splitter
                          v-model="splitterModel"
                          style="minheight: 250px"
                        >
                          <template v-slot:before>
                            <div class="dialouge-tabs">
                              <q-tabs v-model="tab1" vertical class="">
                                <q-tab name="General" label="General"> </q-tab>
                                <q-tab
                                  name="Integrations"
                                  label="Integrations"
                                />
                                <q-tab name="Billing" label="Billing & Usage" />
                                <q-tab name="Plans" label="Plans" />
                                <q-tab name="Help" label="Help" />
                                <q-tab
                                  name="Logout"
                                  label="Logout"
                                  @click="confirm = true"
                                />
                              </q-tabs>
                            </div>
                          </template>
                          <template v-slot:after>
                            <!-- <h1  class="">
                              X
                            </h1> -->
                            <i
                              class="fa fa-times v-closeBotton"
                              @click="integration = false"
                              aria-hidden="true"
                            ></i>
                            <q-tab-panels
                              class="popup-tabs"
                              v-model="tab1"
                              animated
                              vertical
                              style="background-color: transparent"
                            >
                              <q-tab-panel name="General">
                                <div class="q-mt-sm" style="height: 560px">
                                  <h5 class="black text-weight-medium">
                                    General
                                  </h5>

                                  <span class="black"
                                    >Manage your prefences</span
                                  ><br /><br />
                                  <h6 class="black">
                                    Show shortcuts<q-toggle
                                      v-model="value"
                                      color="red-13"
                                      label=""
                                    />
                                  </h6>
                                  <span class="gray">
                                    Quick access to your favourite shortcuts </span
                                  ><br /><br />
                                  <div class="row">
                                    <div class="col-7">
                                      <h6 class="black">Theme</h6>
                                      <br />
                                      <span class="gray">
                                        Customize your workspace's color theme
                                      </span>
                                    </div>
                                    <div class="col-5 theme-button">
                                      <q-btn-dropdown
                                        color="primary"
                                        label="Auto"
                                      >
                                        <q-list>
                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Photos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Videos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Articles</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>
                                        </q-list>
                                      </q-btn-dropdown>
                                    </div>
                                  </div>
                                  <br />
                                  <div class="row">
                                    <div class="col-7">
                                      <h6 class="black">Start Ping on</h6>
                                      <br />
                                      <span class="gray">
                                        When you open a new tab what do you want
                                        to see
                                      </span>
                                    </div>
                                    <div class="col-5 theme-button">
                                      <q-btn-dropdown
                                        color="primary"
                                        label="Auto"
                                      >
                                        <q-list>
                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Photos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Videos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Articles</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>
                                        </q-list>
                                      </q-btn-dropdown>
                                    </div>
                                  </div>
                                  <br />
                                  <div class="row">
                                    <div class="col-7">
                                      <h6 class="black">Name or Nickname</h6>
                                      <br />
                                      <span class="gray">
                                        We can use either, which would you
                                        prefer
                                      </span>
                                    </div>
                                    <div class="col-5 theme-button">
                                      <q-btn-dropdown
                                        color="primary"
                                        label="Home"
                                      >
                                        <q-list>
                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Photos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Videos</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>

                                          <q-item
                                            clickable
                                            v-close-popup
                                            @click="onItemClick"
                                          >
                                            <q-item-section>
                                              <q-item-label
                                                >Articles</q-item-label
                                              >
                                            </q-item-section>
                                          </q-item>
                                        </q-list>
                                      </q-btn-dropdown>
                                    </div>
                                  </div>
                                </div>
                              </q-tab-panel>

                              <q-tab-panel
                                name="Integrations"
                                class="Integrations"
                              >
                                <h5 class="black text-weight-medium q-ml-lg">
                                  Integrations
                                </h5>
                                <h6 class="black q-ml-lg v-heading-h6">
                                  Connect Ping to your most useful service and
                                  tools
                                </h6>
                                <div class="row q-mt-xl iconDiv">
                                  <div class="row">
                                    <div class="col-1 integration-img">
                                      <img src="../assets/google.png" />
                                    </div>
                                    <div class="col-7 Integrations-content">
                                      <h6 class="black text-weight-medium">
                                        Google
                                      </h6>
                                      <span
                                        class="gray"
                                        style="font-size: 13px"
                                      >
                                        You are connected to
                                        openspace.my.google.com
                                      </span>
                                    </div>
                                    <div class="col-4 integration-button">
                                      <q-btn color="primary" label="Connect" />
                                    </div>
                                  </div>
                                  <div class="row q-mt-sm">
                                    <div class="col-1 integration-img">
                                      <img src="../assets/salesforce.png" />
                                    </div>
                                    <div class="col-7 Integrations-content">
                                      <h6 class="black text-weight-medium">
                                        Salesforce
                                      </h6>
                                      <span
                                        class="gray"
                                        style="font-size: 13px"
                                      >
                                        You are connected to
                                        openspace.my.salesforce.com
                                      </span>
                                    </div>
                                    <div class="col-4 integration-button">
                                      <q-btn color="primary" label="Connect" />
                                    </div>
                                  </div>
                                  <div class="row q-mt-sm">
                                    <div class="col-1 integration-img">
                                      <img src="../assets/slack.png" />
                                    </div>
                                    <div class="col-7 Integrations-content">
                                      <h6 class="black text-weight-medium">
                                        Slack
                                      </h6>
                                      <span
                                        class="gray"
                                        style="font-size: 13px"
                                      >
                                        You are connected to Openspace workspace
                                      </span>
                                    </div>
                                    <div class="col-4 integration-button">
                                      <q-btn color="primary" label="Connect" />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h5 class="">Request another integration</h5>
                                  <span class="gray text-h7">
                                    I would like Ping to integration with...
                                  </span>
                                </div>
                                <div class="row q-mt-md justify-between">
                                  <div class="col-6">
                                    <label class="round-input-container-v">
                                      <div class="email-input-decorator">
                                        <div
                                          class="round-input-border-left"
                                        ></div>
                                        <span
                                          class="round-input-label-text orange"
                                          >Integration</span
                                        >
                                        <div
                                          class="round-input-border-right"
                                        ></div>
                                      </div>
                                      <input
                                        type="text"
                                        class="round-input invite-email-input"
                                        placeholder="Value"
                                      />
                                    </label>
                                  </div>
                                  <div class="col-4 integration-button-v">
                                    <q-btn
                                      color="primary"
                                      label="Request"
                                      class="requestButton"
                                    />
                                  </div>
                                </div>
                              </q-tab-panel>
                              <q-tab-panel name="Billing" class="billing">
                                <div class="q-mt-md">
                                  <h5 class="black text-weight-medium">
                                    Billings & Usage
                                  </h5>
                                  <h6 class="black v-heading-h6">
                                    Discover usage and upgrade your plan for
                                    opportunities
                                  </h6>
                                  <h6
                                    class="black"
                                    style="
                                      margin-top: 10px;
                                      margin-bottom: 10px;
                                    "
                                  >
                                    Current Plan - Free tier
                                    <i
                                      class="fa fa-chevron-right q-ml-sm gray"
                                      aria-hidden="true"
                                    ></i>
                                  </h6>
                                  <span class="gray">
                                    Free tier allow to use the Ping for free up
                                    to specified limits
                                  </span>
                                  <br />
                                  <h6 class="black" style="margin-top: 25px">
                                    Upgrade your plan
                                    <i
                                      class="fa fa-chevron-right q-ml-sm gray"
                                      aria-hidden="true"
                                    ></i>
                                  </h6>
                                  <q-btn
                                    color="#FA243C"
                                    text-color="#FA243C"
                                    label="Talk to sale"
                                    class="v-minus-m"
                                  />
                                  <q-table
                                    style="height: 200px"
                                    :rows="rows"
                                    :columns="columns"
                                    row-key="name"
                                    virtual-scroll
                                    class="billing-table"
                                  />
                                </div>
                              </q-tab-panel>
                              <q-tab-panel name="Plans" class="plans">
                                <div class="q-mt-md">
                                  <h5 class="black text-weight-medium">
                                    Plans
                                  </h5>
                                  <h6 class="black">
                                    Discover plans and choose the one that meet
                                    your need
                                  </h6>
                                </div>
                                <div class="row">
                                  <div
                                    class="col-5 offset-1"
                                    style="margin-left: 0px; width: 50%"
                                  >
                                    <q-card class="my-card">
                                      <q-card-section>
                                        <h5 class="black text-weight-medium">
                                          Free
                                        </h5>
                                        <h4 class="black">
                                          <span class="text-weight-medium"
                                            >$0</span
                                          >
                                          <span class="gray month">
                                            /month</span
                                          >
                                        </h4>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Useful workspace
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Notifications
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i
                                          >Benifits
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-times"
                                            aria-hidden="true"
                                          ></i
                                          >Unlimited messages
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-times"
                                            aria-hidden="true"
                                          ></i
                                          >Unlimited calls
                                        </h6>
                                        <h6 class="gray">
                                          <i
                                            class="fa fa-times"
                                            aria-hidden="true"
                                          ></i
                                          >Unlimited stories
                                        </h6>
                                        <q-btn
                                          color="#99999A"
                                          text-color="#99999A"
                                          label="Current plan"
                                        />
                                      </q-card-section>
                                    </q-card>
                                  </div>
                                  <div class="col-6">
                                    <q-card class="my-card">
                                      <q-card-section>
                                        <q-card-section>
                                          <h5 class="black text-weight-medium">
                                            Premium
                                          </h5>
                                          <h4 class="black">
                                            <span class="text-weight-medium"
                                              >$350</span
                                            >
                                            <span class="gray month">
                                              /month</span
                                            >
                                          </h4>
                                          <h6 class="gray">
                                            <i
                                              class="fa fa-check"
                                              aria-hidden="true"
                                            ></i
                                            >Useful workspace
                                          </h6>
                                          <h6 class="gray">
                                            <i
                                              class="fa fa-check"
                                              aria-hidden="true"
                                            ></i
                                            >Notifications
                                          </h6>
                                          <h6 class="gray">
                                            <i
                                              class="fa fa-check"
                                              aria-hidden="true"
                                            ></i
                                            >Benifits
                                          </h6>
                                          <h6 class="gray">
                                            <i
                                              class="fa fa-check"
                                              aria-hidden="true"
                                            ></i
                                            >Unlimited messages
                                          </h6>
                                          <h6 class="gray">
                                            <i
                                              class="fa fa-check"
                                              aria-hidden="true"
                                            ></i
                                            >Unlimited calls
                                          </h6>
                                          <h6 class="gray">
                                            <i
                                              class="fa fa-check"
                                              aria-hidden="true"
                                            ></i
                                            >Unlimited stories
                                          </h6>
                                          <q-btn
                                            color="#99999A"
                                            text-color="#99999A"
                                            label="Upgrade"
                                          />
                                        </q-card-section>
                                      </q-card-section>
                                    </q-card>
                                  </div>
                                </div>
                              </q-tab-panel>
                              <q-tab-panel name="Help">
                                <div class="q-mt-md">
                                  <h5 class="black text-weight-medium">Help</h5>
                                  <h6 class="black v-heading-h6">
                                    How can we help
                                  </h6>
                                  <h5
                                    class="black q-pt-md"
                                    style="margin-top: 5px; font-size: 19px"
                                  >
                                    Email<i
                                      class="fa fa-chevron-right q-ml-sm gray"
                                      aria-hidden="true"
                                    ></i>
                                  </h5>
                                  <h6 class="gray" style="">
                                    we appreciate all of your questions and
                                    feedback
                                  </h6>
                                  <h5
                                    class="black q-pt-md"
                                    style="margin-top: 5px; font-size: 19px"
                                  >
                                    Help center
                                    <i
                                      class="fa fa-chevron-right q-ml-sm gray"
                                      aria-hidden="true"
                                    ></i>
                                  </h5>
                                  <h6 class="gray" style="">
                                    FAQ'S and plenty of helpful information
                                  </h6>
                                </div>
                              </q-tab-panel>
                              <q-tab-panel name="Logout">
                                <q-dialog v-model="confirm">
                                  <div class="confirmation-card">
                                    <q-card>
                                      <q-card-section class="row items-center">
                                        <h1
                                          class="text-capitalize"
                                          style="margin: auto; font-weight: 500"
                                        >
                                          Are you sure to logout
                                          {{ user.loginname.split(" ")[0] }} ?
                                        </h1>
                                      </q-card-section>

                                      <q-card-actions align="right">
                                        <q-btn
                                          flat
                                          label="Cancel"
                                          class="dark"
                                          @click="
                                            (confirm = false),
                                              (tab1 = 'Integrations')
                                          "
                                        />
                                        <q-btn
                                          flat
                                          label="Logout"
                                          class="dark"
                                          @click="logout"
                                        />
                                      </q-card-actions>
                                    </q-card>
                                  </div>
                                </q-dialog>
                              </q-tab-panel>
                            </q-tab-panels>
                          </template>
                        </q-splitter>
                      </q-card-section>
                    </q-card>
                  </q-dialog>
                </div>

                <div class="col-1">
                  <!-- <i class="fa fa-calendar-o gray" aria-hidden="true"></i> -->

                  <q-btn-dropdown
                    style="padding: 4px 8px"
                    flat
                    class=""
                    no-icon-animation
                    color="grey"
                    size="md"
                    dropdown-icon="fa fa-calendar-o"
                    content-class=""
                  >
                    <template v-slot:label>
                      <q-tooltip
                        transition-show="scale"
                        transition-hide="scale"
                        anchor="bottom right"
                        self="center end"
                      >
                        Notification
                      </q-tooltip>
                    </template>
                    <div
                      class="row q-pa-xs q-mb-md"
                      style="width: 280px !important"
                    >
                      <div class="col-9">
                        <div class="row-inline">
                          <q-btn
                            round
                            color="grey"
                            size="6px"
                            icon="fas fa-chevron-left"
                          />
                          <span
                            class="
                              q-mx-sm
                              text-h6 text-black text-weight-regular
                            "
                            >Sat, Sep 18</span
                          >
                          <q-btn
                            round
                            class="justify-end"
                            color="grey"
                            size="6px"
                            icon="fas fa-chevron-right"
                          />
                        </div>
                        <div class="row">
                          <span
                            class="text-grey"
                            style="position: relative; margin-left: 25px"
                            >Today</span
                          >
                        </div>
                      </div>

                      <div class="col-3 text-right">
                        <q-btn
                          flat
                          round
                          no-icon-animation
                          class="q-pa-none text-grey"
                          size="sm"
                          icon="fas fa-times"
                        />
                      </div>
                    </div>

                    <div class="row" style="width: 280px !important">
                      <q-list class="full-width">
                        <q-item
                          class="q-mb-sm notification-msg-tab active"
                          clickable
                        >
                          <q-item-section>
                            <div
                              class="row q-px-md text-weight-regular text-black"
                            >
                              Daily standup
                            </div>
                            <div class="row q-px-md text-grey">8:00 AM</div>
                          </q-item-section>
                          <q-item-section class="q-pa-md q-mr-sm" avatar>
                            <q-avatar>
                              <img
                                src="https://cdn.quasar.dev/img/boy-avatar.png"
                              />
                            </q-avatar>
                          </q-item-section>
                        </q-item>
                        <q-item class="q-mb-sm notification-msg-tab" clickable>
                          <q-item-section>
                            <div
                              class="row q-px-md text-weight-regular text-black"
                            >
                              ARC Sales report -- MUST DO
                            </div>
                            <div class="row q-px-md text-grey">10:00 AM</div>
                          </q-item-section>
                          <q-item-section class="q-pa-md q-mr-sm" avatar>
                            <q-avatar>
                              <img
                                src="https://cdn.quasar.dev/img/boy-avatar.png"
                              />
                            </q-avatar>
                          </q-item-section>
                        </q-item>
                        <q-item class="q-mb-sm notification-msg-tab" clickable>
                          <q-item-section>
                            <div
                              class="row q-px-md text-weight-regular text-black"
                            >
                              Call for developing project
                            </div>
                            <div class="row q-px-md text-grey">11:00 AM</div>
                          </q-item-section>
                          <q-item-section class="q-pa-md q-mr-sm" avatar>
                            <q-avatar>
                              <img
                                src="https://cdn.quasar.dev/img/boy-avatar.png"
                              />
                            </q-avatar>
                          </q-item-section>
                        </q-item>
                        <q-item class="q-mb-sm notification-msg-tab" clickable>
                          <q-item-section>
                            <div
                              class="row q-px-md text-weight-regular text-black"
                            >
                              Call with clients
                            </div>
                            <div class="row q-px-md text-grey">1:00 AM</div>
                          </q-item-section>
                          <q-item-section class="q-pa-md q-mr-sm" avatar>
                            <q-avatar>
                              <img
                                src="https://cdn.quasar.dev/img/boy-avatar.png"
                              />
                            </q-avatar>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </div>
                  </q-btn-dropdown>
                </div>

                <div class="col-3 userdetails">
                  <!-- <div id="toast"><div id="desc">Profile updated</div></div> -->
                  <q-avatar style="font-size: 29px" color="">
                    <q-spinner
                      class="orange"
                      color=""
                      size="1.8em"
                      :thickness="2.5"
                      v-if="user.profileupdate"
                    />

                    <img
                      v-if="
                        user.pictureurl != 'null' && user.pictureurl != null
                      "
                      :src="imgurl + '/' + user.pictureurl"
                    />
                    <p
                      v-else
                      class="text-center"
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 29px;
                        height: 29px;
                        border-radius: 100%;
                        background: #fa243c;
                      "
                    >
                      <span style="font-size: 15px" class="text-white">
                        {{ user.username.charAt(0).toUpperCase() }}</span
                      >
                    </p>
                  </q-avatar>
                  <q-btn-dropdown
                    flat
                    class="gray q-pr-lg"
                    :label="user.username.split(' ')[0]"
                    style="color: gray"
                  >
                    <q-list>
                      <q-item class="q-mb-md" @click="onItemClick">
                        <q-avatar size="55px" class="list-image">
                          <q-spinner
                            class="orange"
                            color=""
                            size="2em"
                            :thickness="2.5"
                            v-if="user.profileupdate"
                          >
                          </q-spinner>
                          <img
                            v-if="
                              user.pictureurl != 'null' &&
                              user.pictureurl != null
                            "
                            :src="imgurl + '/' + user.pictureurl"
                          />
                          <p
                            v-else
                            class="text-center"
                            style="
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              width: 55px;
                              height: 55px;
                              background: #fa243c;
                            "
                          >
                            <span style="font-size: 35px" class="text-white">
                              {{ user.username.charAt(0).toUpperCase() }}</span
                            >
                          </p>
                          <q-badge
                            floating
                            rounded
                            style="background-color: #fb5b73"
                            class="userpic cursor-pointer"
                            v-if="user.profileupdate == false"
                          >
                            <i class="fas fa-camera"></i>
                            <q-file
                              v-model="user.filevalue"
                              @change="saveimage()"
                              accept=".jpg, image/*"
                              class="selectpicfile"
                            >
                              <template v-slot:prepend> </template>
                            </q-file>
                          </q-badge>
                        </q-avatar>
                      </q-item>

                      <q-item @click="onItemClick">
                        <q-item-section>
                          <!-- <label class="round-input-container">
                            <div class="round-input-decorator">
                              <div class="round-input-border-left"></div>
                              <span class="round-input-label-text orange"
                                >Email</span
                              >
                              <div class="round-input-border-right"></div>
                            </div>
                            <input
                              type="text"
                              class="round-input"
                              v-model="useremail"
                            />
                          </label> -->
                          <!-- <i class="fa fa-pencil" aria-hidden="true"></i> -->
                          <q-input
                            dense
                            class="profileLabel"
                            outlined
                            disable
                            v-model="user.useremail"
                            stack-label
                            label="Email"
                          >
                          </q-input>
                        </q-item-section>
                      </q-item>
                      <q-item @click="onItemClick">
                        <q-item-section>
                          <!-- <label class="round-input-container">
                            <div class="round-input-decorator">
                              <div class="round-input-border-left"></div>
                              <span class="round-input-label-text orange"
                                >Name</span
                              >
                              <div class="round-input-border-right"></div>
                            </div>
                            <q-input outlined v-model="username" input-class="text-left" label-slot>
                              <template v-slot:label>
                              </template>
                            </q-input>
                            <q-input
                              dense
                              :loading="true"
                              type="text"
                              class="round-input"
                              v-model="username"
                            /> -->
                          <!-- </label> -->
                          <!-- <q-input outlined v-model="text"  placeholder="Nickname" class="round-input"/> -->
                          <!-- <i
                            class="fa fa-pencil"
                            @blur="update"
                            style="cursor: pointer"
                            aria-hidden="true"
                          ></i> -->
                          <q-input
                            dense
                            class="profileLabel"
                            outlined
                            @keyup.enter="update()"
                            v-model="user.username"
                            stack-label
                            bottom-slots
                            label="Name"
                          >
                            <template v-slot:append>
                              <q-btn @click="update()">
                                <i class="fa fa-pencil" aria-hidden="true"></i
                              ></q-btn>
                            </template>
                          </q-input>
                          <!-- <q-popup-edit v-model="label" class="bg-accent text-white" v-slot="scope">
          <q-input dark color="white" v-model="scope.value" dense autofocus counter @keyup.enter="scope.set">
            <template v-slot:append>
              <q-icon name="edit" />
            </template>
          </q-input>
        </q-popup-edit> -->
                          <q-popup-edit
                          >
                            <q-input
                              v-model="user.username"
                              dense
                              autofocus
                              :loading="user.isLoading"
                              bottom-slots
                              @keyup.enter="update()"
                            >
                             <!-- <template v-slot:append>
              <q-icon style="font-size: 14px;"  @click="update()" name="fa fa-pencil" class="" />
            </template> -->
                              <!-- <i

                                class="fa fa-pencil"
                                aria-hidden="true"
                              ></i> -->
                            </q-input>
                          </q-popup-edit>
                        </q-item-section>
                      </q-item>

                      <q-item @click="onItemClick">
                        <q-item-section>
                          <!-- <label class="round-input-container">
                            <div class="round-input-decorator">
                              <div class="round-input-border-left"></div>
                              <span class="round-input-label-text orange"
                                >Location</span
                              >
                              <div class="round-input-border-right"></div>
                            </div>
                            <input type="text" class="round-input" />
                          </label>
                          <i
                            class="fa fa-pencil"
                            @click="update"
                            style="cursor: pointer"
                            aria-hidden="true"
                          ></i> -->
                          <q-input
                            dense
                            class="profileLabel"
                            outlined
                            stack-label
                            bottom-slots
                            label="Location"
                          >
                            <template v-slot:append>
                              <q-btn>
                                <i class="fa fa-pencil" aria-hidden="true"></i
                              ></q-btn>
                            </template>
                          </q-input>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                  <!-- <q-btn-dropdown class="gray" :label="username">
                    <q-list>
                      <q-item clickable @click="onItemClick">
                        <q-avatar class="list-image">
                          <img src="https://cdn.quasar.dev/img/avatar.png" />
                        </q-avatar>
                      </q-item>
                      <q-item clickable @click="onItemClick">
                        <q-item-section>
                          <label class="round-input-container">
                            <div class="round-input-decorator">
                              <div class="round-input-border-left"></div>
                              <span class="round-input-label-text orange"
                                >Nickname</span
                              >
                              <div class="round-input-border-right"></div>
                            </div>
                            <input type="text" class="round-input" v-model="username" />
                          </label>

                          <i class="fa fa-pencil" aria-hidden="true"></i>
                        </q-item-section>
                      </q-item>

                      <q-item clickable @click="onItemClick">
                        <q-item-section>
                          <label class="round-input-container">
                            <div class="round-input-decorator">
                              <div class="round-input-border-left"></div>
                              <span class="round-input-label-text orange">Email</span>
                              <div class="round-input-border-right"></div>
                            </div>
                            <input type="text" class="round-input" v-model="useremail" />
                          </label>

                        </q-item-section>
                      </q-item>
                      <q-item clickable @click="onItemClick">
                        <q-item-section>
                          <label class="round-input-container">
                            <div class="round-input-decorator">
                              <div class="round-input-border-left"></div>
                              <span class="round-input-label-text orange"
                                >Location</span
                              >
                              <div class="round-input-border-right"></div>
                            </div>
                            <input type="text" class="round-input" />
                          </label>
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown> -->
                </div>
              </div>
            </div>
          </q-toolbar>
        </div>
      </q-header>
    </div>
    <q-page-container class="cPt-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref, reactive, onMounted } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();
    const rows = [
      {
        Messages: "September 10,2021",
        Stories: "2 messages",
        Calls: "1 internal",
        "": "1 external",
      },
      {
        Messages: "September 10,2021",
        Stories: "2 messages",
        Calls: "1 internal",
        "": "1 external",
      },
      {
        Messages: "September 10,2021",
        Stories: "2 messages",
        Calls: "1 internal",
        "": "1 external",
      },
      {
        Messages: "September 10,2021",
        Stories: "2 messages",
        Calls: "1 internal",
        "": "1 external",
      },
      {
        Messages: "September 10,2021",
        Stories: "2 messages",
        Calls: "1 internal",
        "": "1 external",
      },
      {
        Messages: "September 10,2021",
        Stories: "2 messages",
        Calls: "1 internal",
        "": "1 external",
      },
      {
        Messages: "September 10,2021",
        Stories: "2 messages",
        Calls: "1 internal",
        "": "1 external",
      },
      {
        Messages: "September 10,2021",
        Stories: "2 messages",
        Calls: "1 internal",
        "": "1 external",
      },
      {
        Messages: "September 10,2021",
        Stories: "2 messages",
        Calls: "1 internal",
        "": "1 external",
      },
      {
        Messages: "September 10,2021",
        Stories: "2 messages",
        Calls: "1 internal",
        "": "1 external",
      },
    ];
    const imgurl = ref("");
    const user = reactive({
      isLoading: false,
      userId: null,
      username: "",
      useremail: "",
      loginname: "",
      token: "",
      filevalue: "",
      pictureurl: "",
      picurl: "",
      profileupdate: false,
    });
    let menu = ref(false);
    let value = ref(true);
    let alert = ref(false);
    let tab = ref("General");
    let tab1 = ref("Integrations");
    let splitterModel = ref(20);
    let integration = ref(false);
    onMounted(() => {
      user.loginname = localStorage.getItem("loginname");
      user.username = localStorage.getItem("loginname");
      user.useremail = localStorage.getItem("loginemail");
      user.pictureurl = localStorage.getItem("pictureurl");
      user.userId = localStorage.getItem("userId");
      user.token = localStorage.getItem("token");
      console.log(process.env.VUE_APP_BASE_URL_IMAGE);
      imgurl.value = process.env.VUE_APP_BASE_URL_IMAGE;
      // console.log(user.loginname);
    });

    /*
     * function to show the message (error/success)
     */
    function showMessage(msg, color) {
      $q.notify({
        color: color,
        message: msg,
        position: "top",
        timeout: 3000,
      });
    }
    /*
     * function to Logout
     */
    function logout() {
      localStorage.clear();
      location.replace("/");
    }
    /*
     * function to update the profile
     */
    function update() {
      if (user.token != "null" || user.token != "") {
        user.isLoading = true;

        localStorage.setItem("loginname", user.username);
        localStorage.setItem("loginemail", user.useremail);

        //Api Request
        const myHeaders = new Headers();
        myHeaders.append("utc_offset", "");
        myHeaders.append("current_date", "");
        myHeaders.append("x-access-token", user.token);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          name: user.username,
          nick_name: null,
          display_picture_url: user.pictureurl,
        });

        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(`${process.env.VUE_APP_BASE_URL}/user`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            let status = JSON.parse(result);
            console.log(status);
            user.profileupdate = false;
            if (status.status == false && status.message == "Auth Error") {
              showMessage("Session expired", "red-13");
              location.replace("/");
            } else {
              showMessage("Profile Updated", "green-13");
              user.isLoading = false;
            }
          })
          .catch((error) => {
            console.log(error);
            user.isLoading = false;
            showMessage(
              "Something went wrong while updating the profile...",
              "red-13"
            );
          });
      } else {
        showMessage("Session expired", "red-13");
        location.replace("/");
      }
    }

    /**
     * Function to change the user profile image
     */
    function saveimage() {
      if (user.token != "null" && user.token != "") {
        user.profileupdate = true;

        // API Request
        const myHeaders = new Headers();
        myHeaders.append("x-access-token", localStorage.getItem("token"));
        const formdata = new FormData();
        formdata.append("uploadFile", user.filevalue);
        formdata.append("file_for", "Profile");
        formdata.append("file_type", "Single");
        formdata.append("primary_id", user.userId);

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };

        fetch("https://openspace.is/opensimg/file", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            let status = JSON.parse(result);
            // console.log(status);
            user.pictureurl = status.data;
            localStorage.setItem("pictureurl", status.data);
            update();
          })
          .catch((error) => {
            console.log(error);
            user.isLoading = false;
            showMessage("Some error occurred...", "red-13");
          });
      } else {
        showMessage("Session expired", "red-13");
        location.replace("/");
      }
    }

    /**
     * Function to handle the opening and closing of the header setting and integration dialog pop-up
     */
    function openSettingsModel() {
      alert.value = !alert.value;
    }
    return {
      // dependencies & constants
      $q,
      rows,

      // common object variables
      user,

      // component related variables
      menu,
      value,
      alert,
      tab,
      tab1,
      splitterModel,
      integration,
      imgurl,

      // functions
      update,
      saveimage,
      openSettingsModel,
      logout,
      confirm: ref(false),
    };
  },

  // created() {
  //   this.loginname = localStorage.getItem("loginname");
  //   if (this.loginname == null) {
  //     this.$router.push("/");
  //   }
  // },
  // methods: {

  /*
   *function to Update and save the image
   */
  // saveimage() {
  //   this.profileupdate = true;
  //   var myHeaders = new Headers();
  //   myHeaders.append("x-access-token", localStorage.getItem("token"));
  //   var formdata = new FormData();
  //   formdata.append("uploadFile", this.filevalue);
  //   formdata.append("file_for", "Profile");
  //   formdata.append("file_type", "Single");
  //   formdata.append("primary_id", localStorage.getItem("userId"));
  //   // formdata.append("img_name", "image2");
  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch("https://dev.openspace.is/opensimg/file", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       var status = JSON.parse(result);
  //       console.log(status);
  //       this.pictureurl = status.data;
  //       localStorage.setItem("pictureurl", status.data);
  //       this.update();
  //       this.showMessage("Profile pic updated!");
  //     })
  //     .catch((error) => console.log("error", error));
  // },

  /*
   *function to Notification of Session Expire
   */
  // launch_toast() {
  //   var x = document.getElementById("toast");
  //   x.className = "show";
  //   setTimeout(function () {
  //     x.className = x.className.replace("show", "");
  //   }, 5000);
  // },
  /*
   *function to update the profile
   */
  // update() {
  //   this.isLoading = true;
  //   localStorage.setItem("loginname", this.username);
  //   localStorage.setItem("loginemail", this.useremail);
  //   var myHeaders = new Headers();
  //   myHeaders.append("utc_offset", "");
  //   myHeaders.append("current_date", "");
  //   myHeaders.append("x-access-token", localStorage.getItem("token"));
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     name: this.username,
  //     nick_name: null,
  //     display_picture_url: this.pictureurl,
  //   });

  //   var requestOptions = {
  //     method: "PUT",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(`${process.env.VUE_APP_BASE_URL_DEVELOPMENT}/user`, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       var status = JSON.parse(result);
  //       this.profileupdate = false;
  //       if (status.status == false) {
  //         location.replace("/");
  //       } else {
  //         this.showMessage("Profile Updated");
  //         this.isLoading = false;
  //         this.showBtn = false;
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // },

  // },
};
</script>

<style >
.profileLabel .q-field__label {
  top: 0px !important;
  right: unset !important;
  background: #fff !important;
  z-index: 99999;
  color: red !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
  font-size: 20px;
}

.profileLabel .q-placeholder {
  padding-top: 0px !important;
}
.profileLabel .q-field__control {
  border-radius: 10px !important;
  border-color: #eee !important;
  outline: none;
}
.profileLabel .q-field__control:focus,
.profileLabel .q-field__control:hover,
.profileLabel .q-field__control {
  color: #eee !important;
  outline: none;
}
.userdetails #toast {
  background: #fb5b73 !important;
}
.profile-search .q-field__control {
  height: 35px;
}
.menubar .q-tab__content {
  min-width: 40px !important;
}
.iconDiv {
  display: flex;
  flex-direction: column;
}

.q-tabs--vertical .q-tab__indicator {
  width: 0px !important;
}
.q-card__section--vert {
  padding: 0px !important;
}

.dialouge-tabs {
  padding: 24px 12px;
}
.header-card .q-splitter__before {
  background: #eeeeee !important;
}
.header-card {
  border-radius: 30px !important;
}
.dialouge-tabs .q-tab--active .q-tab__label {
  background: white;
  border-left: 3px solid #fa243c !important;
  width: 200px;
  height: 61px;
  line-height: 61px;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
}

.header-card,
.new-message-card {
  max-width: 750px !important;
  min-width: 750px !important;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
}
.confirmation-card {
  max-width: 300px !important;
  min-width: 300px !important;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
}
.round-input-container {
  display: inline-block;
  position: relative;
  margin: 10px 0;
}
.round-input-container-v {
  display: inline-block;
  position: relative;
  margin: 10px 0;
}
.dialouge-tabs .q-tab__content {
  padding: 0px !important;
}
.theme-button button {
  background: none !important;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  height: 100%;
  width: 100%;
}
.theme-button {
  height: 53px !important;
  line-height: 113px;
}
.theme-button .block {
  color: #99999a;
}
.theme-button .justify-center {
  justify-content: unset;
}
.q-btn-dropdown__arrow {
  position: absolute !important;
  right: 0px !important;
}
.integration-button {
  line-height: 84px;
}
.integration-button-v {
  line-height: 65px;
  float: right;
}
.Integrations h6 {
  line-height: 1.2rem !important;
}
.integration-button button {
  background: none !important;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  width: 137px;
  height: 48px;
  float: right;
}
.integration-button-v button {
  background: none !important;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  width: 137px;
  height: 48px;
  float: right;
}
.integration-button .block {
  color: #fa243c;
}
.integration-button-v .block {
  color: #fa243c;
}
.integration-img img {
  margin-top: -44%;
}
.integration-img {
  display: flex;
  align-items: center;
}
.Integrations-content {
  padding-left: 14px;
}
.billing button {
  border: 1px solid #fa243c;
  width: 137px;
  height: 48px;
  color: #fa243c !important;
  border-radius: 9px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.billing-table {
  box-shadow: none !important;
}
.billing-table .sortable {
  font-size: 12px;
  color: #99999a;
}
.billing-table .q-table tbody tr td {
  color: #99999a;
  font-size: 13px;
}
.plans .my-card {
  border-top: 10px solid #ffffff;
  padding: 0px 10px 10px 10px;
  height: 100%;
  width: 98%;
  max-width: 275px;
  box-shadow: 3px 12px 14px 0 rgb(0 0 0 / 3%) !important;
}
.plans .my-card:hover {
  border-top: 10px solid #fa243c;
  border-radius: 10px;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
}
.plans .my-card:hover button {
  background: #fa243c;
  border: none;
  color: white;
}
.plans .my-card:hover .block {
  color: white;
}
.q-virtual-scroll::-webkit-scrollbar {
  width: 2px;
}

.q-virtual-scroll::-webkit-scrollbar-thumb {
  background: #fa243c;
}
.month {
  font-size: 18px;
}
.plans button {
  background: #ffffff;
  border: 2px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 8px;
  /* padding: 12px 38px; */
  width: 230px;
  height: 53px;
}
.plans .block {
  color: #99999a;
}
.plans .q-card {
  box-shadow: none;
}

.fa-check {
  color: #fa243c;
  padding-right: 11px;
  font-size: 18px;
}
.fa-times {
  padding-right: 11px;
  font-size: 18px;
}
/* / container for borders and the label text /
/ position it behind the input-element at full  /
/ height and width & set it as flex-container / */
.round-input-decorator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}

.round-input-label-text {
  font-size: 18px;
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

/* / Position relative puts the element in front / */
/* .v-round-input {
  position: relative;
  font-size: 1em;
  padding: 13px 20px 13px 15px;
  min-width: 435px;
  border: none;
  background: none;
  border-radius: 10px;
  border-bottom: 2px solid #eeeeee;
} */
.round-input {
  position: relative;
  font-size: 1em;
  padding: 13px 20px 13px 15px;
  min-width: 250px;
  border: none;
  background: none;
  border-radius: 10px;
  border-bottom: 2px solid #eeeeee;
}
.round-input :focus {
  position: relative;
  font-size: 1em;
  padding: 13px 20px 13px 15px;
  min-width: 250px;
  background: none;
  border-radius: 10px;
  border-bottom: 2px solid #eeeeee;
}
.round-input-border-right :focus {
  flex: 1 0 50px;
  border-radius: 0 10px 10px 0;
  border: 2px solid #eeeeee;
  border-left: none;
}
.round-input-border-left :focus {
  flex: 0 0 10px;
  box-sizing: border-box;
  height: 100%;
  border-radius: 10px 0 0 10px;
  border: 2px solid #eeeeee;
  border-right: none;
}
.list-image {
  margin: auto;
}
.header .q-tab {
  padding: 0px 8px;
}
.q-menu {
  padding: 40px;
}
.q-layout__section--marginal {
  background-color: #ffff !important;
}
.fa-cog,
.fa-calendar-o,
.fa-th {
  font-size: 16px !important;
}
.gray {
  color: #99999a;
}
.userdetails .q-toolbar .q-avatar {
  font-size: 29px !important;
}
.userdetails .q-btn {
  padding: 4px 20px 4px 7px;
}
.userdetails .block {
  font-size: 12px;
}
.userdetails .q-img {
  position: unset;
  border-radius: 100%;
}
/* .profiles {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
.q-field--filled .q-field__control {
  background: white !important;
}
.header .q-field__inner {
  border: 2px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 6px;
}
.header .q-field__inner:hover {
  background: white;
}
.search-row {
  width: 100%;
}
.profiles .block {
  color: black;
}
/* .eva-chevron-down {
  color: #99999a;
} */
.bg-cyan {
  background: none !important;
  border: none !important;
}
.q-btn:before {
  box-shadow: none !important;
}
.home .q-tab__indicator {
  color: #fa243c !important;
}
.absolute-bottom {
  color: #fa243c !important;
}
.fa-search {
  display: flex;
  align-items: center;
  color: rgba(52, 52, 53, 0.4);
  font-size: 22px;
}
.fa-pencil {
  position: absolute;
  left: 82%;
  color: #99999a;
}
.q-tab--active,
.cShadow {
  box-shadow: none;
}
.header .q-tabs__content--align-justify .q-tab {
  flex: unset;
}
.header .q-tab__label {
  font-weight: 400;
  font-size: 15px;
  text-transform: capitalize;
  color: #99999a;
}
.q-tab--active .q-tab__label {
  color: #343435;
}
.header .q-field--with-bottom {
  padding-top: 15px;
  padding-bottom: 15px;
}

.list-image .q-badge {
  top: 36px;
  left: 32px;
  border-radius: 50%;
  border: 3px solid white;
}
.list-image .q-badge .fa-camera {
  font-size: 15px;
  color: white;
}
.header-card .q-splitter--vertical > .q-splitter__panel {
  height: 450px !important;
  width: 25% !important;
}
/* .dialouge-tabs .q-tab--active .q-tab__label {
  background: white;
  border-left: 3px solid #fa243c !important;
  width: 247px;
  height: 61px;
  line-height: 61px;
} */
.notification-msg-tab.active {
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 3px 8px 34px 0px rgb(52 52 53 / 10%);
  border-left: 5px solid #fb5b73;
  background: white;
}
@media only screen and (min-width: 1920px) and (max-width: 1962px) {
  .header-card {
    margin-top: 20px;
  }
  /* .q-splitter--vertical > .q-splitter__panel {
    height: 748px !important;
    width: 25% !important;
  } */
}
.v-closeBotton {
  color: #99999a;
  position: absolute;
  right: 13px;
  top: 12px;
  font-size: 21px;
  cursor: pointer !important;
  z-index: 1000;
}
.q-btn--dense.q-btn--round {
  margin-left: 10px;
}
.userpic {
  width: 34px;
  height: 34px;
}
.userpic .q-field__control-container {
  width: 22px;
  top: 12px;
  position: absolute;
}
.selectpicfile .cursor-pointer div {
  visibility: hidden;
}
.q-field--standard .q-field__control:before {
  border-bottom: none !important;
}
.selectpicfile .q-field__control {
  color: none !important;
}
.list-image .q-img {
  position: unset;
  border-radius: 100%;
}
</style>