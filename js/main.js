'use strict';

import './cmps/my-counter.cmp.js';
import './cmps/user-details.cmp.js';
import './cmps/show-time.cmp.js';
import './cmps/count-down.cmp.js';



var app = new Vue({
    el: '#app',
    mounted() {
        console.log('App has been Mounted!');
    },
    data: {
        COUNTDOWN : 1000*60*0.15,
        isCounterDone : false,
    },
    computed: {
        // Computed
    },
    methods: {
        counterDone() {
            this.isCounterDone = true
        }
    }
})
