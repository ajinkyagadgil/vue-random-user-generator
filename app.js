const app = Vue.createApp({
    //If we do not use template here then only html file is rendered else template data is rendered
    // template:'<h1>Welcome to Vue {{firstName}}</h1>',
    data(){
        return {
            firstName:'Ajinkya',
            lastName:'Gadgil',
            email:'agadgil@uncc.edu',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
         async getUserInfo() {
             const result = await fetch('https://randomuser.me/api')
            //  Here results is used as it is what is returned from API
            const {results} = await result.json()

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large

        // above code is destructured with results in {} below code is oroginal how you would do
        //     const {data} = await result.json()
        //     console.log(data)
        //    this.firstName = data.results[0].name.first,
        //    this.lastName = data.results[0].name.last,
        //    this.email = data.results[0].email,
        //    this.gender = data.results[0].gender,
        //    this.picture = data.results[0].picture.large
        }
    }
})

app.mount('#app')