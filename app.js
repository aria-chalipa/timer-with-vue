Vue.createApp({
    data() {
        return {
            timeH: 0,
            timeM: 0,
            timeS: 0,
            interval: null,
            btn: 'Start',
            showMessage: false,
            messageContent: 'Time reached 1 minute!',
          
        }
    },
    methods: {
        changeTime() {
            if (this.btn === 'Start') {
                this.btn = 'Stop'
                this.interval = setInterval(() => {
                    this.timeS += 1
                    if (this.timeS === 60) {
                        this.timeM += 1
                        this.timeS = 0
                        this.showMessage = true
                    }
                    if (this.timeM === 60) {
                        this.timeH += 1
                        this.timeM = 0
                    }
                    if (this.timeH === 24) {
                        this.reset()
                        this.btn = 'Start'
                    }
                }, 1000)
            } else {
                this.btn = 'Start'
                clearInterval(this.interval)
            }
        },
        reset() {
            clearInterval(this.interval)
            this.timeH = 0
            this.timeM = 0
            this.timeS = 0
            this.showMessage = false
            this.btn = 'Start'
        },

        changeTitle(){
            this.$refs.title.textContent = 'test'
            const h2 = document.createElement('h2')
            h2.textContent = 'test'
            this.$refs.div.appendChild(h2)  
        }
    }
}).mount('#app');