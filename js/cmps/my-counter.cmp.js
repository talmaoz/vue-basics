
var interval;

Vue.component('my-counter', {
    template: `
        <section class="my-counter">
            <h2 v-bind:class="counterClass">
                <button v-on:click="changeCounter(-1)">-</button>
                {{counter}}
                <button v-on:click="changeCounter(1)">+</button>
            </h2>
        </section>
    `,
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        changeCounter(diff) {
            this.counter += diff;
            this.$emit('increase', diff);
        }
    },
    computed: {
        counterClass() {
            return {
                danger : this.counter > 20,
                safe : this.counter < 15,

            }
        }
    },
    created() {
        console.log('Counter component Was Created');
        interval = setInterval(()=>{
            // console.log('INTERVAL IS RUNNING');
            // this.counter++
        }, 1000)
    },
    mounted() {
        console.log('MOunted to DOM');
    },
    destroyed() {
        console.log('Counter cmp destroyed');
        clearInterval(interval);
    }
})