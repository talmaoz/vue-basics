'use strict'

let timeDisplayInterval;
const timeDisplayOptions = {
    weekday: 'long'   ,
    year   : 'numeric',
    month  : 'long'   ,
    day    : 'numeric',
    hour   : 'numeric',
    minute : 'numeric',
    second : 'numeric'
};
const SUMMER = 100
const WINTER = 200
const FALL   = 300
const SPRING = 400

Vue.component('show-time', {
    template: `
        <section 
            class="show-time"
            v-bind:class="darkOrBrightMode"
            v-on:click="toggleDarkMode()"
            >
            <div class="flex-col-container">
                <div class="time-display">{{currTime}}</div>
                <div class="season-img" v-bind:class="seasonClass"></div>
            </div> 
        </section>
    `,
    data() {
        return {
            currTime : timeToString(getCurrTime()),
            darkMode : false,
            season   : getSeason(getCurrTime()),
        }
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
        },
    },
    computed: {
        darkOrBrightMode() {
            return {
                'dark-mode'   :  this.darkMode,
                'bright-mode' : !this.darkMode,
            }
        },
        seasonClass() {
            return {
                'winter' : this.season === WINTER,
                'summer' : this.season === SUMMER,
                'fall'   : this.season === FALL,
                'spring' : this.season === SPRING,
            }
        }
    },
    created() {
        timeDisplayInterval = setInterval(()=>{
            let currTime = getCurrTime()
            this.currTime = timeToString(currTime)
            this.season = getSeason(currTime)
        }, 1000)
    },
    destroyed() {
        clearInterval(timeDisplayInterval);
    }
})

function getCurrTime() {
    return new Date()
}

function getSeason(time) {
    let month = time.getMonth() + 1
    // Simplified season:
    if (month === 1  || month === 2  || month === 3 ) return WINTER
    if (month === 4  || month === 5  || month === 6 ) return SPRING
    if (month === 7  || month === 8  || month === 9 ) return SUMMER
    if (month === 10 || month === 11 || month === 12) return FALL
}

function timeToString(time) {
    return time.toLocaleDateString("en-US", timeDisplayOptions)
}
