Vue.component('user-details', {

    template: `
        <section class="user-details">
            <h1>{{title}} - User Details</h1>
            <img v-bind:src="user.imgUrl" />
            <a v-bind:href="user.profileUrl">Linkedin Profile</a>
            <h3>
                {{user.name}} - {{user.balance}}
            </h3>
        </section>
    `,
    props: ['user'],
    data() {
        return {
            title: 'Yes We Can',
        }
    }


})