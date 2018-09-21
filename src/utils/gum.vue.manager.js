'use strict';

var Vue = require('vue/dist/vue.common');

var components = [
    [ 'b-text'                  , require('../basic/text/text.vue.js')                              ],
    [ 'b-highlight'             , require('../basic/highlight/highlight.vue.js')                    ],
    [ 'b-icon'                  , require('../basic/icon/icon.vue.js')                              ],
    [ 'b-image'                 , require('../basic/image/image.vue.js')                            ],
    [ 'b-svg'                   , require('../basic/svg/svg.vue.js')                                ],

    [ 'b-button'                , require('../basic/button/button.vue.js')                          ],
    [ 'b-rectangular-button'    , require('../basic/rectangular-button/rectangular-button.vue.js')  ],
    [ 'b-tab-button'            , require('../basic/tab-button/tab-button.vue.js')                  ],
    [ 'b-text-button'           , require('../basic/text-button/text-button.vue.js')                ],
    [ 'b-radius-button'         , require('../basic/radius-button/radius-button.vue.js')            ],

    [ 'b-text-field'            , require('../basic/text-field/text-field.vue.js')                  ],
    [ 'b-number-field'          , require('../basic/number-field/number-field.vue.js')              ],
    [ 'b-tel-field'             , require('../basic/tel-field/tel-field.vue.js')                    ],
    [ 'b-email-field'           , require('../basic/email-field/email-field.vue.js')                ],
    [ 'b-address-field'         , require('../basic/address-field/address-field.vue.js')            ],
    [ 'b-idcard-field'          , require('../basic/idcard-field/idcard-field.vue.js')              ],

    [ 'b-select'                , require('../basic/select/select.vue.js')                          ],
    [ 'b-checkbox'              , require('../basic/checkbox/checkbox.vue.js')                      ],
    [ 'b-solid-checkbox'        , require('../basic/solid-checkbox/solid-checkbox.vue.js')          ],
    [ 'b-radio'                 , require('../basic/radio/radio.vue.js')                            ],
    [ 'b-radio-group'           , require('../basic/radio/radio-group.vue.js')                      ],
    [ 'b-solid-radio'           , require('../basic/solid-radio/solid-radio.vue.js')                ],
    [ 'b-toggle'                , require('../basic/toggle/toggle.vue.js')                          ],

    [ 's-single-cell'           , require('../structure/single-cell/single-cell.vue.js')            ],
    [ 's-cell'                  , require('../structure/cell/cell.vue.js')                          ],
    [ 's-column'                , require('../structure/column/column.vue.js')                      ],
    [ 's-flex-column'           , require('../structure/flex-column/flex-column.vue.js')            ],
    [ 's-multiline'             , require('../structure/multiline/multiline.vue.js')                ],

    [ 'p-main'                  , require('../page/main/main.vue.js')                               ],
    [ 'p-footer'                , require('../page/footer/footer.vue.js')                           ],
    [ 'p-modalup'               , require('../page/modalup/modalup.vue.js')                         ],

    [ 'flype'                   , require('../assemble/flype/flype.vue.js')                         ],
    [ 'stick'                   , require('../assemble/stick/stick.vue.js')                         ],
    [ 'remarks'                 , require('../assemble/remarks/remarks.vue.js')                     ],
    [ 'stages'                  , require('../assemble/stages/stages.vue.js')                       ],
    [ 'stage'                   , require('../assemble/stage/stage.vue.js')                         ],
    [ 'stepwise'                , require('../assemble/stepwise/stepwise.vue.js')                   ],
    [ 'timeline'                , require('../assemble/timeline/timeline.vue.js')                   ],
    [ 'timepoint'               , require('../assemble/timepoint/timepoint.vue.js')                 ],
    [ 'password'                , require('../assemble/password/password.vue.js')                   ],
    [ 'protocol'                , require('../assemble/protocol/protocol.vue.js')                   ],
    [ 'lead-item'               , require('../assemble/lead-item/lead-item.vue.js')                 ],
    [ 'lead'                    , require('../assemble/lead/lead.vue.js')                           ],

    [ 'stub'                    , require('../assemble/stub/stub.vue.js')                           ],
    [ 'a-table'                 , require('../assemble/table/table.vue.js')                         ],
    [ 'text-row'                , require('../assemble/text-row/text-row.vue.js')                   ],
    [ 'select-row'              , require('../assemble/select-row/select-row.vue.js')               ],
    [ 'text-field-row'          , require('../assemble/text-field-row/text-field-row.vue.js')       ],
    [ 'textarea-row'            , require('../assemble/textarea-row/textarea-row.vue.js')       ],
    [ 'tel-field-row'           , require('../assemble/tel-field-row/tel-field-row.vue.js')         ],
    [ 'id-field-row'            , require('../assemble/id-field-row/id-field-row.vue.js')           ],
    [ 'otp-field-row'           , require('../assemble/otp-field-row/otp-field-row.vue.js')         ],
    [ 'dock'                    , require('../assemble/dock/dock.vue.js')                           ],
    [ 'a-button'                , require('../assemble/button/button.vue.js')                       ],
    [ 'panel'                   , require('../assemble/panel/panel.vue.js')                         ],
    [ 'a-title'                 , require('../assemble/title/title.vue.js')                         ],

    [ 'list'                    , require('../assemble/list/list.vue.js')                           ],
    [ 'card'                    , require('../assemble/card/card.vue.js')                           ],
    [ 'line-card'               , require('../assemble/line-card/line-card.vue.js')                 ],
    [ 'next-card'               , require('../assemble/next-card/next-card.vue.js')                 ],
    [ 'next-cell'               , require('../assemble/next-cell/next-cell.vue.js')                 ],
    [ 'select-card'             , require('../assemble/select-card/select-card.vue.js')             ],
    [ 'order-card'              , require('../assemble/order-card/order-card.vue.js')               ],
    [ 'welfare-card'            , require('../assemble/welfare-card/welfare-card.vue.js')           ],
    [ 'comment'                 , require('../assemble/comment/comment.vue.js')                     ],
    [ 'toast'                   , require('../assemble/toast/toast.vue.js')                         ],

    [ 'fixed-row'               , require('../assemble/fixed-row/fixed-row.vue.js')                 ],
    [ 'tab-button'              , require('../assemble/tab-button/tab-button.vue.js')               ],
    [ 'amount-row'              , require('../assemble/amount-row/amount-row.vue.js')               ],
    [ 'check-line'              , require('../assemble/check-line/check-line.vue.js')               ],
    [ 'check-line-group'        , require('../assemble/check-line-group/check-line-group.vue.js')   ],
    [ 'line-chart'              , require('../assemble/line-chart/line-chart.vue.js')               ],
    [ 'keyboard'                , require('../assemble/keyboard/keyboard.vue.js')                   ],
    [ 'modal'                   , require('../assemble/modal/modal.vue.js')                         ],
    [ 'annotation'              , require('../assemble/annotation/annotation.vue.js')               ],
    [ 'total-button'            , require('../assemble/total-button/total-button.vue.js')           ],
    [ 'question'                , require('../assemble/question/question.vue.js')                   ]
];

components.forEach(function (component) {
    Vue.component(component[0], component[1]);
});

function VueManager () {    
    this.instance = null;
}

VueManager.prototype = {
    getInstance: function (opts) {
        this.instance && this.instance.$destroy();
        this.instance = new Vue(opts);
        console.log(opts);
        Vue.config.devtools = true;
        return this.instance;
    }
}

module.exports = new VueManager();