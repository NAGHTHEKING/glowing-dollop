class Form{
    constructor(){
this.input=createInput("Name")
this.button= createButton("PLAY")
this.resetbutton=createButton("restart")
this.greeting = createElement("h3")
        }
display(){
    var title=createElement("h2")
    title.html(" ")
    title.position(width/2-100,0)
this.input.position(width/2-90,height/2-80)
this.resetbutton.position(displayWidth-100,30)
this.resetbutton.size(70,50)
//this.resetbutton.hide()
this.button.position(width/2-20,height/2)

this.button.mousePressed(()=>{
   this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playercount+=1;
 player.index=playercount;
    player.update()
    player.updatecount(playercount)
    this.greeting.html("Good Luck "+player.name+"...You are gonna need it")
    this.greeting.position(width/2-170,height/4)
})

this.resetbutton.mousePressed(()=>{

player.updatecount(0)
player.updateCarsAtEnd(0)
game.update(0)
database.ref("/").child("players").remove()

})

}

    hide()
    {
        this.greeting.hide()
        this.button.hide()
      //  this.resetbutton.hide()
        this.input.hide()
    }
 
}

