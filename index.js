class Game { 
    constructor() {
        this.combinaison = []
        this.userCombinaison = []
        this.score = 0
        this.longueur = 1
        this.round = 1
        this.audio = document.querySelector("audio")
        this.audio.volume = 0.2
        this.gameStart = false


        // this.vert = document.getElementById("green").style.backgroundColor;

        // console.log(this.color)
    }

    createCombinaison() {
        let combinaison = []
        for (let i = 0; i < this.longueur; i++) {
            combinaison.push(Math.floor(Math.random() * 4))
        }
        $("h1").text("LVL : " + this.round).css("font-size", "20px").css("margin-top", "37px")
        $(".compteur").css("color", "wheat")
        console.log(combinaison)
        this.combinaison = combinaison
    }

    compareCombinaison() {
        if (this.combinaison.length == this.userCombinaison.length) {
            for (let i = 0; i < this.combinaison.length; i++) {
                if (this.combinaison[i] != this.userCombinaison[i]) {
                    $(".status").text("LOOSE...").css("border", "3px solid rgb(244, 126, 126)").css("color", "rgb(244, 126, 126)")
                    $("h1").text("RESTART").css("font-size", "20px").css("margin-top", "37px")
                    $(".compteur").css("color", "transparent")
                    this.round = 1
                    this.gameStart = false
                    return false
                }
            }
            $(".status").text("WIN !").css("border", "3px solid rgb(138, 235, 140)").css("color", "rgb(138, 235, 140)")
            return true
        }
    }
    addNewUserElement(el) {
        if (this.userCombinaison.length < this.combinaison.length) {
            this.userCombinaison.push(el)
        }
        console.log("user combinaison : ", el, this.userCombinaison)
    }

    resetCombi() {
        this.userCombinaison = []
    }

    verifScore() {
        let score = this.score
        if (this.combinaison.length == this.userCombinaison.length) {
            for (let i = 0; i < this.combinaison.length; i++) {
                if (this.combinaison[i] != this.userCombinaison[i]) {
                    break
                } else {
                    score++
                }
            }
        }
        this.score = score
        $(".score").text("SCORE : " + this.score)
    }

    audioGestion(currentSound, currentMode) {
        if(currentMode === false) {
            if(currentSound === true) {
                this.audio.volume = 0.2
                $(".soundBtn").attr("src", "/img/sound-dm-full .png")
            }else if(currentSound === false){
                this.audio.volume = 0
                $(".soundBtn").attr("src", "/img/sound-dm-mute.png")
            }
        } else if(currentMode === true){
            if(currentSound === true) {
                this.audio.volume = 0.3
                $(".soundBtn").attr("src", "/img/sound-normal-full.png")
            }else if(currentSound === false){
                this.audio.volume = 0
                $(".soundBtn").attr("src", "/img/sound-normal-mute.png")
            }
        }
    }


    // lightVert() {
    // this.vert.style.backgroundColor = rgb(138, 235, 140);  
    // }

    // light() {
    //     for( let i = 0; i < this.color.length; i++){
    //         this.color[i].style.backgroundColor = "white"
    //     }
    // }

}
