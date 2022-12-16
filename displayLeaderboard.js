class DisplayL {
    constructor() {
        this.dmBtn = document.querySelector(".dmBtn")
        this.soundBtn = document.querySelector(".soundBtn")
        this.playBtn = document.querySelector(".playBtn")
        this.questionMark = document.querySelector('.questionBtn')
        this.audio = document.querySelector(".theme")
        this.currentMode = false
        this.currentSound = true
        this.audio.volume = 0

        this.addListenerL()
    }

    addListenerL() {
        this.dmBtn.addEventListener('click', ()=> {
            if(this.currentMode === true) {
                this.currentMode = false
            }else {
                this.currentMode = true
            }
            this.darkMode()
        })

        this.soundBtn.addEventListener('click', ()=> {
            if(this.currentSound === true) {
                this.currentSound = false
            }else {
                this.currentSound = true
            }
            this.audioGestion()
        })

        this.playBtn.addEventListener('click', ()=> {
            location.replace("index.html")
        })

        this.questionMark.addEventListener("click", ()=> {
            alert("FEUR")
            close()
        })
    }

    audioGestion() {
        if(this.currentMode === false) {
            if(this.currentSound === true) {
                this.audio.volume = 0.2
                // this.bubble.volume = 0.5
                $(".soundBtn").attr("src", "img/sound-dm-full .png")
            }else if(this.currentSound === false){
                this.audio.volume = 0
                // this.bubble.volume = 0
                $(".soundBtn").attr("src", "img/sound-dm-mute.png")
            }
        } else if(this.currentMode === true){
            if(this.currentSound === true) {
                this.audio.volume = 0.3
                // this.bubble.volume = 0.5
                $(".soundBtn").attr("src", "img/sound-normal-full.png")
            }else if(this.currentSound === false){
                this.audio.volume = 0
                // this.bubble.volume = 0
                $(".soundBtn").attr("src", "img/sound-normal-mute.png")
            }
        }
    }

    darkMode() {
        if(this.currentMode == true) {
            $(".dmBtn").attr("src", "img/moon-normal-full.png")
            $(".questionBtn").attr("src", "img/question-mark-regular-24 (1).png")
            $("body").css("background-color", "white").css("color", "hsl(213, 20%, 18%)")
            $(".containerL").css("border", "5px solid hsl(213, 20%, 18%)").css("color", "hsl(213, 20%, 18%)")
            $(".playBtn").attr("src", "img/mask-solid-24.png")
            this.audioGestion()
            $(".titleL").hover(function() {
                $(this).css("border-bottom", "2px solid hsl(213, 20%, 18%)")
            }, function() {
                $(this).css("border-bottom", "2px solid rgba(0, 0, 0, 0)")
            })
        } else if(this.currentMode === false) {
            $(".dmBtn").attr("src", "img/moon-dm-normal.png")
            $(".questionBtn").attr("src", "img/question-mark-regular-24.png")
            $("body").css("background-color", "hsl(213, 20%, 18%)").css("color", "wheat")
            $(".containerL").css("border", "5px solid wheat").css("color", "wheat")
            $(".playBtn").attr("src", "img/mask-regular-24.png")
            this.audioGestion()
            $(".titleL").hover(function() {
                $(this).css("border-bottom", "2px solid wheat")
            }, function() {
                $(this).css("border-bottom", "2px solid rgba(0, 0, 0, 0)")
            })
        }      
    }
}

const display = new DisplayL()