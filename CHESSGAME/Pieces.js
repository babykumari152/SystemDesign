class Pieces{
    isKilled=false;
    isWhite=false;
    name='';
    constructor(isWhite,name){
        this.isWhite=isWhite;
        this.name =name;
        this.isKilled=false;
    }
    get isWhitePiece(){
        return this.isWhite;
    }
    get isKilledPiece(){
        return this.isKilled;

    }
    set isKilledPiece(isKilled){
        this.isKilled =isKilled;

    }
    set isWhitePiece(isWhite){
        this.isWhite = isWhite;
    }

}

class Rook extends Pieces  {
    constructor(isWhite,name='Rook'){
        super(isWhite,name);
    }
    canMove=(x,y,Block)=>{
        let xDiff=Math.abs(this.x,x);
        let yDiff=Math.abs(this.x,y);
        if((xDiff==1||yDiff==1)&& this.isWhitePiece()==this.isWhite){
            return false //already filled
        }

    }
}
class King extends Pieces{
    constructor(isWhite,name='King'){
        super(isWhite,name);
    }

};
class Queen extends Pieces{
    constructor(isWhite,name='Queen'){
        super(isWhite,name);
    }

}
class Bishops extends Pieces{
    constructor(isWhite,name='Bishops'){
        super(isWhite,name);
    }

}
class Knight extends Pieces{
    constructor(isWhite,name='Knight'){
        super(isWhite,name);
    }

}
class Pawn extends Pieces{
    constructor(isWhite,name='Pawn'){
        super(isWhite,name);
    }

}

class Block{
    x;
    y;
    Piece;
    constructor(x,y,piece){
        this.x=x;
        this.y=y;
        this.Piece=piece;
    }
    get getPieces(){
        return this.Piece;
    }
}
class ChessBoard{
    size=8;
    Board=new Array([8]);
    constructor(){
        for(let i=0;i<this.size;i++){
            this.Board[i]=new Array([8]);
        }
        this.initializeBoard();     
    }
    initializeBoard(){
    //bottom
        this.Board[0][0]=new Block(0,0,new Rook(true));
        this.Board[0][7]=new Block(0,7,new Rook(true));
        this.Board[0][1]=new Block(0,1,new Bishops(true));
        this.Board[0][6]=new Block(0,6,new Bishops(true));
        this.Board[0][2]=new Block(0,2,new Knight(true));
        this.Board[0][5]=new Block(0,5,new Knight(true));
        this.Board[0][3]=new Block(0,3,new King(true));
        this.Board[0][4]=new Block(0,4,new Queen(true));
        for(let row=1;row<=6;row++){
            for(let col=0;col<=7;col++){
                if(row==1)
                  this.Board[row][col]=new Block(row,col,new Pawn(true));
                else if(row==6)
                  this.Board[row][col]=new Block(row,col,new Pawn(false));
                else
                 this.Board[row][col]=new Block(row,col);
            }
        }

        //top 
        this.Board[7][0]=new Block(7,0,new Rook(false));
        this.Board[7][7]=new Block(7,7,new Rook(false));
        this.Board[7][1]=new Block(7,1,new Bishops(false));
        this.Board[7][6]=new Block(7,6,new Bishops(false));
        this.Board[7][2]=new Block(7,2,new Knight(false));
        this.Board[7][5]=new Block(7,5,new Knight(false));
        this.Board[7][3]=new Block(7,3,new King(false));
        this.Board[7][4]=new Block(7,4,new Queen(false));
        
    }

    displayBoard(){
        console.log(this.Board);
    }
}

let board= new ChessBoard();
board.displayBoard();