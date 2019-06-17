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

    },
    computed: {

    },
    methods: {
        counterDone() {
            console.log('Hello there')
        }
    }
})
