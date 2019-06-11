new Vue({
	el: '#matador',
	data: {
        runnig: false,
        vida_monstro: 100,
        vida_jogador: 100
        },
        computed: {
              hasResult() {
                return this.vida_jogador == 0 || this.vida_monstro == 0
              }  
        },
        methods: {

        },
        watch: {

        }
});