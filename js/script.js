const { createApp } = Vue;
createApp({
    data(){
        return{
            mailList: []
        }
    },
    created() {
        
                for (let i = 0; i < 10; i++) {
                    axios
                        .get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then( (result) => {
                        this.mailList.push(result.data.response);
                        console.log(this.mailList);
                        console.log(result.data.response)
                        });
                };
                        
            }
    

}).mount('#app')

