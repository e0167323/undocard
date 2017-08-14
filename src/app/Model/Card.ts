export interface Card {
    value: number;
    colour: string;
    image: string;
};

export class Player {

    private playerNum: number = 0;
    public hand: Card[] = [];
    constructor() {
    }

    get PlayerNum(): number {
        return this.playerNum;
    }

    set PlayerNum(num: number) {
        this.playerNum = num;
    }
}

export class UNODeck {
   
    private static COLOURS: string[] = ["c0", "c1", "c2", "c3"];

    public cardList: Card[] = [];
    constructor() {
       
        let prefix: string = "0";

        for (let i = 0; i < 2; i++) {
            prefix = "0"
            for (let k = 0; k < UNODeck.COLOURS.length; k++) {
                for (let j = 1; j < 13; j++) {
                    prefix = "0"
                    if (j < 10) {
                        prefix = prefix + j;
                    } else {
                        prefix = j + "";
                    }
                    this.cardList.push(
                        {
                            value: j,
                            colour: UNODeck.COLOURS[k],
                            image: "/assets/" + UNODeck.COLOURS[k] + "_" + prefix + ".png"
                        }
                    )
                }
            }
        }

        
        for (let m = 0; m < 4; m++) {
            
            this.cardList.push(
                {
                    value: 13,
                    colour: "c4",
                    image: "/assets/" + "c4" + "_" + "00" + ".png"
                }
            )
            this.cardList.push(
                {
                    value: 14,
                    colour: "c4",
                    image: "/assets/" + "c4" + "_" + "01" + ".png"
                }
            )

            this.cardList.push(
                {
                    value: 0,
                    colour: UNODeck.COLOURS[m],
                    image: "/assets/" + "c" + m + "_" + "00" + ".png"
                }
            )
        }
    }

    public take(): Card {
        return (this.cardList.pop());
    }

    public shuffle(times: number): void {
        for (let c = 0; c < times; c++) {
            let temp: Card;
            let randNum: number;
            for (let n = 0; n < this.cardList.length; n++) {
                temp = this.cardList[n];
                randNum = Math.floor(Math.random() * (this.cardList.length - 1 - (0)) + (0));
                this.cardList[n] = this.cardList[randNum];
                this.cardList[randNum] = temp;
            }
        }
    }   

}