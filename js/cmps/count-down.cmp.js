'use strict'

let countDownInterval;

Vue.component('count-down', {
    template: `
        <section 
            class="count-down"
            v-on:click="startCountDown()">
            <div class="flex-col-container">
                <div class="count-down-display" v-bind:class="lastTenSecsOrNot">{{timeLeft}}</div>
            </div> 
        </section>
    `,
    data() {
        return {
            timeLeft : timeToString(this.timeout - getCurrTime()),
        }
    },
    props: ['timeout'],
    methods: {
        startCountDown() {
            let milisecsLeft = this.timeout - getCurrTime()
            this.timeLeft = timeToString(milisecsLeft)
            countDownInterval = setInterval(()=>{
                let milisecsLeft = this.timeout - getCurrTime()
                if (milisecsLeft <= 0) {
                    this.$emit('counter-done', '');
                    clearInterval(countDownInterval)
                    return
                }
                this.timeLeft = timeToString(milisecsLeft)
            }, 1000)
        },
    },
    computed: {
        lastTenSecsOrNot() {
            // this.timeLeft = mm:ss (e.g. 01:12)
            let minutesLeft = +this.timeLeft.substring(0,2)
            if (minutesLeft > 0) return
            let secondsLeft = +this.timeLeft.substring(3,5)
            return {
                'lastTenSecs'    : secondsLeft <= 5
            }
        }
    },
    created() {
        // Func on created content
    },
    destroyed() {
        clearInterval(countDownInterval);
    }
})

function getCurrTime() {
    return new Date()
}

function timeToString(time) {
    let seconds = Math.floor(time/1000)%60
    let minutes = Math.floor((time/1000)/60)%60
    let secondsStr  = (seconds >= 10)? ""+seconds : "0"+seconds
    let minutesStr  = (minutes >= 10)? ""+minutes : "0"+minutes
    return minutesStr + ':' + secondsStr
}







