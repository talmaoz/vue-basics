
let timeDisplayInterval;
let timeDisplayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const SUMMER = 1
const WINTER = 2
const FALL   = 3
const SPRING = 4

Vue.component('show-time', {
    template: `
        <section 
            class="show-time"
            v-bind:class="darkOrBrightMode"
            v-on:click="toggleDarkMode()">
            <div class="time-display">{{time}}</div>
            <img src="./img/seasons.png" alt="" v-bind:class="seasonClass"/>     
        </section>
    `,
    data() {
        return {
            time     : (new Date()).toLocaleDateString("en-US", timeDisplayOptions),
            darkMode : false,
            season: SUMMER,
        }
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
        }
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
                'winter'   :  this.season === WINTER,
                'summer'   :  this.season === SUMMER,
                'fall'     :  this.season === FALL,
                'spring'   :  this.season === SPRING,
            }
        }
    },
    created() {
        console.log('Counter component Was Created');
        timeDisplayInterval = setInterval(()=>{
            // console.log('INTERVAL IS RUNNING');
            // this.counter++
        }, 1000)
    },
    mounted() {
        console.log('MOunted to DOM');
    },
    destroyed() {
        console.log('Counter cmp destroyed');
        clearInterval(timeDisplayInterval);
    }
})

