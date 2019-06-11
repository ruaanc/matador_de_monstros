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
                startGame() {
                        this.runnig = true,
                        this.vida_jogador = 100,
                        this.vida_monstro = 100
                },
                attack(especial) {
                      this.hurt('vida_jogador' ,7, 12, false) 
                      this.hurt('vida_monstro' ,7, 10, especial) 
                },
                hurt(atr ,min, max, especial) {
                        const plus = especial ? 5 : 0,
                        hurte = this.getRandom(min + plus, max + plus)
                        this[atr] = Math.max(this[atr] - hurte, 0)
                },
                getRandom(min, max) {
                        const value = Math.random() * (max - min) + min
                        return Math.round(value)
                }
        },
        watch: {
                hasResult(value) {
                        if (value) this.runnig = false
                }
        }
});