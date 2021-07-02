class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.rank=null
        this.name=null
        this.xlocation=0
    }
    getcount(){
        database.ref("playercount").on("value",function(data){
            playercount=data.val()
    
        })
    
    }
    updatecount(count){
    database.ref("/").update({
        playercount:count
    })
    }
    update(  ){
        var playerindex="players/player"+this.index
    
        database.ref(playerindex).set({
            name:this.name,
            x:this.xlocation,
            distance:this.distance


        })

    }

    static getPlayerInfo()
    {
     database.ref("players").on("value",(data)=>{
         allplayers=data.val()
     })
     }

     getCarsAtEnd(){
       
        database.ref("cars_at_end").on("value",(data)=>{
            this.rank=data.val()

        })
             
     }

     updateCarsAtEnd(rank){
      
        database.ref("/").update({
            cars_at_end:rank
        })

     }
}
 





































