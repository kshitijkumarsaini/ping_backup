<template>
 <div class="">
                  <q-card class="q-pa-md right-side-card">
                    <q-card-section>
                      <div class="row">
                        <div class="col-3">
                          <img
                            width="60"
                            height="40"
                            src="../assets/salesforce-big.png"
                          />
                        </div>
                        <div class="col-5">
                          <p class="text-subtitle1 right-card-heading-text">
                            Salesforce opportunity
                          </p>
                        </div>
                        <div class="col-4 text-right">
                          <q-btn
                            flat
                            round
                            color="grey"
                            size="sm"
                            icon="fas fa-external-link-alt"
                          />

                          <q-btn-dropdown
                            flat
                            rounded
                            color="grey"
                            size="sm"
                            dropdown-icon="fas fa-cog"
                          >
                            <div class="settings-dropdown">
                              <div class="row no-wrap q-pa-xs">
                                <div class="column text-left text-h6">
                                  Add fields
                                </div>
                              </div>

                              <q-input
                                class="search-inbox-field"
                                placeholder="Search"
                                outlined
                                v-model="text"
                                :dense="dense"
                              >
                                <i
                                  class="fa fa-search inbox-search-icon"
                                  style="line-height: 40px"
                                  aria-hidden="true"
                                ></i>
                              </q-input>

                              <div
                                class="
                                  row
                                  text-left
                                  q-mt-md
                                  right-card-dropdown-fields
                                "
                              >
                                <ul>
                                  <li>
                                    <q-checkbox
                                      dense
                                      v-model="salesForceVar.OpportunityName"
                                      label="Opportunity name"
                                      color="pink-13"
                                    />
                                  </li>
                                  <li>
                                    <q-checkbox
                                      dense
                                      v-model="salesForceVar.CloseDate"
                                      label="Close date"
                                      color="pink-13"
                                    />
                                  </li>
                                  <li>
                                    <q-checkbox
                                      dense
                                      v-model="salesForceVar.OwnerName"
                                      label="Owner name"
                                      color="pink-13"
                                    />
                                  </li>
                                  <li>
                                    <q-checkbox
                                      dense
                                      v-model="salesForceVar.OpportunityOwner"
                                      label="Opportunity owner"
                                      color="pink-13"
                                    />
                                  </li>
                                  <li>
                                    <q-checkbox
                                      dense
                                      v-model="salesForceVar.Timing"
                                      label="Timing"
                                      color="pink-13"
                                    />
                                  </li>
                                  <li>
                                    <q-checkbox
                                      dense
                                      v-model="salesForceVar.Notes"
                                      label="Notes"
                                      color="pink-13"
                                    />
                                  </li>
                                  <li>
                                    <q-checkbox
                                      dense
                                      v-model="
                                        salesForceVar.OpportunityCurrency
                                      "
                                      label="Opportunity currency"
                                      color="pink-13"
                                    />
                                  </li>
                                  <li>
                                    <q-checkbox
                                      dense
                                      v-model="
                                        salesForceVar.ImplementationStatus
                                      "
                                      label="Implementation status"
                                      color="pink-13"
                                    />
                                  </li>
                                  <li>
                                    <q-checkbox
                                      dense
                                      v-model="salesForceVar.ClosedLostDate"
                                      label="Closed lost date"
                                      color="pink-13"
                                    />
                                  </li>
                                  <li>
                                    <q-checkbox
                                      dense
                                      v-model="salesForceVar.ManagerNotes"
                                      label="Manager notes"
                                      color="pink-13"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </q-btn-dropdown>
                        </div>
                      </div>

                      <div class="row text-center salesforce-fields">
                        <label class="round-input-container">
                          <div class="email-input-decorator">
                            <div class="round-input-border-left"></div>
                            <span class="round-input-label-text orange"
                              >Opportunity name</span
                            >
                            <div class="round-input-border-right"></div>
                          </div>
                          <input type="text" class="round-input" />
                        </label>

                        <label class="round-input-container">
                          <div class="email-input-decorator">
                            <div class="round-input-border-left"></div>
                            <span class="round-input-label-text orange"
                              >Type</span
                            >
                            <div class="round-input-border-right"></div>
                          </div>
                          <input type="text" class="round-input" />
                        </label>

                        <label class="round-input-container">
                          <div class="email-input-decorator">
                            <div class="round-input-border-left"></div>
                            <span class="round-input-label-text orange"
                              >Opportunity owner</span
                            >
                            <div class="round-input-border-right"></div>
                          </div>
                          <input type="text" class="round-input" />
                        </label>

                        <label class="round-input-container">
                          <div class="email-input-decorator">
                            <div class="round-input-border-left"></div>
                            <span class="round-input-label-text orange"
                              >Account name</span
                            >
                            <div class="round-input-border-right"></div>
                          </div>
                          <input type="text" class="round-input" />
                        </label>

                        <label class="round-input-container">
                          <div class="email-input-decorator">
                            <div class="round-input-border-left"></div>
                            <span class="round-input-label-text orange"
                              >Account</span
                            >
                            <div class="round-input-border-right"></div>
                          </div>
                          <input type="text" class="round-input" />
                        </label>

                        <label class="round-input-container">
                          <div class="email-input-decorator">
                            <div class="round-input-border-left"></div>
                            <span class="round-input-label-text orange"
                              >Close date</span
                            >
                            <div class="round-input-border-right"></div>
                          </div>
                          <input type="text" class="round-input" />
                        </label>

                        <label class="round-input-container">
                          <div class="email-input-decorator">
                            <div class="round-input-border-left"></div>
                            <span class="round-input-label-text orange"
                              >Next step</span
                            >
                            <div class="round-input-border-right"></div>
                          </div>
                          <input type="text" class="round-input" />
                        </label>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
</template>