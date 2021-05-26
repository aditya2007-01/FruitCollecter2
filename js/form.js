  
class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        this.rank = null;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score,
            rank:this.rank
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
   

    
    clear() {
        database.ref('players').remove();
      }
      RankAtEnd() {
        var RankAtEndRef = database.ref('rank');
        carsAtEndRef.on("value",(data)=>{
          this.rank = data.val(); });
        } 
    static updateRankAtEnd(rank){
        database.ref('/').update({
          RankAtEnd:rank
        })

    }
}
