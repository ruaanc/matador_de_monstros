new Vue({
        el: '#matador',
        data: {
                runnig: false,
                vida_monstro: 100,
                vida_jogador: 100,
                logs: []
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
                        this.vida_monstro = 100,
                        this.logs = []
                },
                attack(especial) {
                      this.hurt('vida_jogador' ,7, 12, false, 'Monstro', 'Player', 'monster') 
                      if(this.vida_monstro > 0) {
                        this.hurt('vida_monstro' ,7, 10, especial, 'Jogador', 'Monstro', 'player')
                      }       
                },
                hurt(atr ,min, max, especial, source, target, cls) {
                        const plus = especial ? 5 : 0,
                        hurte = this.getRandom(min + plus, max + plus)
                        this[atr] = Math.max(this[atr] - hurte, 0)
                        this.registerLog(`${source} atingiu ${target} com ${hurte}.`, cls)
                },
                healAndHurt() {
                        this.heal(10, 15)
                        this.hurt('vida_jogador',7, 12, false, 'Monstro', 'Jogador', 'monster')
                },
                heal(min, max) {
                        const heal = this.getRandom(min, max)
                        this.vida_jogador = Math.min(this.vida_jogador + heal, 100)
                        this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')
                },
                getRandom(min, max) {
                        const value = Math.random() * (max - min) + min
                        return Math.round(value)
                },
                registerLog(text, cls) {
                        this.logs.unshift({ text, cls })
                }
        },
        watch: {
                hasResult(value) {
                        if (value) this.runnig = false
                }
        }
});