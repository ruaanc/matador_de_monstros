new Vue({
	el: '#matador',
	data: {
        nome: "Ruan",
        vida_monstro: 100,
        vida_jogador: 100,
        mudar: true
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