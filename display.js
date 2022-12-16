class Display { 
    constructor() {
        this.game = new Game() 
        this.vert = document.querySelector(".green") // 0
        this.rouge = document.querySelector('.red') // 1
        this.bleu = document.querySelector('.blue') // 2
        this.jaune = document.querySelector('.yellow') // 3
        this.colorButtons = [this.vert, this.rouge, this.bleu, this.jaune]
        this.colorOn = ["rgb(138, 235, 140)", "rgb(244, 126, 126)", "rgb(144, 146, 230)", "rgb(237, 235, 117)"]
        this.start = document.querySelector('.center')
        this.reset = document.querySelector('.reset')
        this.dmBtn = document.querySelector('.dmBtn')
        this.soundBtn = document.querySelector('.soundBtn')
        this.isUserTurn = false
        this.currentSound = true
        this.currentMode = false
        this.gameStart = this.gameStart
        this.round = this.game.round
        this.lightDelay = 300
        this.notesDelay = 1000

        this.addListener()
        
    }
    
    addListener() {
        this.gameStart = false
        this.start.addEventListener('click', () => {
            this.gameStart = true
            this.game.score = 0
            this.game.round = 1
            $(".score").text("SCORE : " + this.game.score)
            this.game.createCombinaison()
            this.readCombinaison(this.lightDelay, this.notesDelay)
        })
        
        this.reset.addEventListener('click', () => {
            location.reload()

        })
        
        this.soundBtn.addEventListener("click", () => { 
            if(this.currentSound === true) {
                this.currentSound = false
            }else {
                this.currentSound = true
            }
            this.game.audioGestion(this.currentSound, this.currentMode)
        })

        this.dmBtn.addEventListener("click", () => {
            if(this.currentMode === true) {
                this.currentMode = false
            }else {
                this.currentMode = true
            }
            this.darkMode()
        })

        this.colorButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                if (this.isUserTurn) {
                    this.game.addNewUserElement(index)
                    this.game.compareCombinaison()
                    this.game.verifScore()
                    this.restartRound()
                }           
            })
        })
        
        this.vert.addEventListener("click", () =>{
            if(this.gameStart == true) {
                if(this.isUserTurn == true) {
                    $('.green').css('background-color','rgb(138, 235, 140)')
                    setTimeout(() => {
                        $('.green').css('background-color','rgba(0, 0, 0, 0)')
                    }, 200)
                } else if(this.isUserTurn == false) {
                    $('.green').css('background-color','rgba(0, 0, 0, 0)')
                    setTimeout(() => {
                        $('.green').css('background-color','rgba(0, 0, 0, 0)')
                    }, 200)
                }
            } else {
                $('.green').css('background-color','rgb(138, 235, 140)')
                setTimeout(() => {
                    $('.green').css('background-color','rgba(0, 0, 0, 0)')
                }, 200)
            }
        })

        this.rouge.addEventListener("click", () =>{
            if(this.gameStart == true) {
                if(this.isUserTurn == true) {
                    $('.red').css('background-color','rgb(244, 126, 126)')
                    setTimeout(() => {
                        $('.red').css('background-color','rgba(0, 0, 0, 0)')
                    }, 200)
                } else if(this.isUserTurn == false) {
                    $('.red').css('background-color','rgba(0, 0, 0, 0)')
                    setTimeout(() => {
                        $('.red').css('background-color','rgba(0, 0, 0, 0)')
                    }, 200)
                }
            } else {
                $('.red').css('background-color','rgb(244, 126, 126)')
                setTimeout(() => {
                    $('.red').css('background-color','rgba(0, 0, 0, 0)')
                }, 200)
            }
        })
        
        this.bleu.addEventListener("click", () =>{
            if(this.gameStart == true) {
                if(this.isUserTurn == true) {
                    $('.blue').css('background-color','rgb(144, 146, 230)')
                    setTimeout(() => {
                        $('.blue').css('background-color','rgba(0, 0, 0, 0)')
                    }, 200)
                } else if(this.isUserTurn == false) {
                    $('.blue').css('background-color','rgba(0, 0, 0, 0)')
                    setTimeout(() => {
                        $('.blue').css('background-color','rgba(0, 0, 0, 0)')
                    }, 200)
                }
            } else {
                $('.blue').css('background-color','rgb(144, 146, 230)')
                setTimeout(() => {
                    $('.blue').css('background-color','rgba(0, 0, 0, 0)')
                }, 200)
            }
        })

        this.jaune.addEventListener("click", () =>{
            if(this.gameStart == true) {
                if(this.isUserTurn == true) {
                    $('.yellow').css('background-color','rgb(237, 235, 117)')
                    setTimeout(() => {
                        $('.yellow').css('background-color','rgba(0, 0, 0, 0)')
                    }, 200)
                } else if(this.isUserTurn == false) {
                    $('.yellow').css('background-color','rgba(0, 0, 0, 0)')
                    setTimeout(() => {
                        $('.yellow').css('background-color','rgba(0, 0, 0, 0)')
                    }, 200)
                }
            } else {
                $('.yellow').css('background-color','rgb(237, 235, 117)')
                setTimeout(() => {
                    $('.yellow').css('background-color','rgba(0, 0, 0, 0)')
                }, 200)
            }
        })
    }

    restartRound() {
        if (this.game.compareCombinaison() === true) {
            $(".status").text("WIN !").css("border", "3px solid rgb(138, 235, 140)").css("color", "rgb(138, 235, 140)")
            let round = this.round
            round++
            this.round = round
            setTimeout(() => {
                this.game.combinaison.push(Math.floor(Math.random() * 4))
                this.readCombinaison(this.lightDelay, this.notesDelay)
                $("h1").text("LVL : " + round).css("font-size", "20px").css("margin-top", "37px")
            }, 1500);
            this.isUserTurn = true
        } 
    }

    readCombinaison(lightDelay, notesDelay) {
        let index = 0
        this.isUserTurn = false
        if(this.round < 5) {
            lightDelay = 300
            notesDelay = 1000
        } else if(this.round < 10) {
            lightDelay = 200
            notesDelay = 700
        } else if(this.round < 15) {
            lightDelay = 150
            notesDelay = 400
        } else if(this.round < 20){
            lightDelay = 100
            notesDelay = 150
        } else {
            lightDelay = 50
            notesDelay = 100
        }
        $(".status").text("READING...").css('border', '3px solid rgb(144, 146, 230)').css("color", "rgb(144, 146, 230)")
        const id = setInterval(() => {
            const colorCode = this.game.combinaison[index]
            this.colorButtons[colorCode].style.backgroundColor = this.colorOn[colorCode]
            setTimeout(() => {
                this.turnColorOff(colorCode)
            }, lightDelay)
            index++
            if (index >= this.game.combinaison.length) {
                clearInterval(id)
                this.isUserTurn = true
                if (this.isUserTurn === true) {
                    $(".status").text("REPEAT !").css('border', '3px solid rgb(237, 235, 117)').css("color", "rgb(237, 235, 117)")
                    
                }
            }
        }, notesDelay);
        this.game.resetCombi()
    }

    turnColorOff(colorIndex) {
        this.colorButtons[colorIndex].style.backgroundColor = "rgba(0, 0, 0, 0)"
    }

    darkMode() {
        if(this.currentMode == true) {
            $(".dmBtn").attr("src", "img/moon-normal-full.png")
            $("body").css("background-color", "white").css("color", "hsl(213, 20%, 18%)")
            $("h1")
            $(".center").css("background-color", "white")
            $(".reset").css("border", "3px solid hsl(30, 1%, 70%)").css("color", "hsl(213, 20%, 18%)")
            this.game.audioGestion(this.currentSound, this.currentMode)
            $(".title").hover(function() {
                $(this).css("border-bottom", "2px solid hsl(213, 20%, 18%)")
            }, function() {
                $(this).css("border-bottom", "2px solid rgba(0, 0, 0, 0)")
            })
            $(".center").hover(function() {
                $(this).css("border", "5px solid hsl(213, 20%, 18%)")
            }, function() {
                $(this).css("border", "5px solid hsl(30, 1%, 70%)")
            })
            $(".reset").hover(function() {
                $(this).css("border", "3px solid hsl(213, 20%, 18%)").css("color", "hsl(213, 20%, 18%)" )
            }, function() {
                $(this).css("border", "3px solid hsl(30, 1%, 70%)").css("color", "hsl(213, 20%, 18%)" )
            })
            if(this.gameStart == false) {
                $(".status").css("border", "3px solid hsl(30, 1%, 70%)").css("color", "hsl(213, 20%, 18%)")
                $(".status").hover(function() {
                    $(this).css("border", "3px solid hsl(213, 20%, 18%)").css("color", "hsl(213, 20%, 18%)" )
                }, function() {
                    $(this).css("border", "3px solid hsl(30, 1%, 70%)").css("color", "hsl(213, 20%, 18%)" )
                }) 
            }

        } else if(this.currentMode === false) {
            $(".dmBtn").attr("src", "img/moon-dm-normal.png")
            $("body").css("background-color", "hsl(213, 20%, 18%)").css("color", "wheat")
            $(".center").css("background-color", "hsl(213, 20%, 18%)")
            $(".reset").css("border", "3px solid hsl(30, 1%, 70%)").css("color", "wheat")
            this.game.audioGestion(this.currentSound, this.currentMode)
            $(".title").hover(function() {
                $(this).css("border-bottom", "2px solid wheat")
            }, function() {
                $(this).css("border-bottom", "2px solid rgba(0, 0, 0, 0)")
            })
            $(".center").hover(function() {
                $(this).css("border", "5px solid wheat")
            }, function() {
                $(this).css("border", "5px solid hsl(30, 1%, 70%)")
            })
            $(".reset").hover(function() {
                $(this).css("border", "3px solid wheat").css("color", "hsl(30, 1%, 70%)" )
            }, function() {
                $(this).css("border", "3px solid hsl(30, 1%, 70%").css("color", "wheat" )
            })
            
            if(this.gameStart == false) {
                $(".status").css("border", "3px solid hsl(30, 1%, 70%)").css("color", "wheat")
                $(".status").hover(function() {
                    $(this).css("border", "3px solid wheat").css("color", "hsl(30, 1%, 70%)" )
                }, function() {
                    $(this).css("border", "3px solid hsl(30, 1%, 70%)").css("color", "wheat" )
                })             
            }
        }
    }
}

const display = new Display()
