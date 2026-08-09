export{}
// consoleの練習
console.log("Hey What's Up");
console.log("123");
console.log(123);
console.log("文字列中のダブルクォーテーション\"には注意が必要");
const killua = "キルア";
const killuaAbility = "変化系";
console.log(`${killua}の念能力の系統は${killuaAbility}です`)

console.log("------------------------------");
// ------------------------------ 

// 条件分岐
const isPrimeMember:boolean = true;
if(isPrimeMember){
 console.log("プライム会員です");   
} else {
    console.log("プライム会員ではありません")
}

console.log("------------------------------");
// ------------------------------

// ループ
console.log("処理開始");
for (let i =1;i <= 20;i++){
    if(i % 15 === 0){
        console.log(i + ":fizzbuzz")
    }
    if(i % 3 === 0){
        console.log(i + ":fizz");
    }
    if(i % 5 ===0){
        console.log(i + ":buzz");
    }
}

// ------------------------------
console.log("------------------------------");


// 配列
const numArray: number[] = [1, 2, 3, 4];
const stringArray: string[] = ["1", "2", "3", "4"];
console.log(numArray[0]);
console.log(stringArray[0]);
console.log("配列の要素数は" + numArray.length);

const mcuPhase1Movies: { [key: string]: number; } =
{
    "Iron Man": 2008,
    "The Incredible Hulk": 2008,
    "Iron Man 2": 2010,
    "Thor": 2011,
    "Captain America: The First Avenger": 2011,
    "Marvel's The Avengers": 2012
}

for (const key in mcuPhase1Movies) {
    console.log(`${key}の公開年は${mcuPhase1Movies[key]}`);
}

const mcuPhase2Movies = new Map();
mcuPhase2Movies.set("Iron Man 3",2013),
mcuPhase2Movies.set("Thor: The Dark World",2013),
mcuPhase2Movies.set("Captain America: The Winter Soldier",2014),
mcuPhase2Movies.set("Guardians of the Galaxy",2014),
mcuPhase2Movies.set("Avengers: Age of Ultron",2015),
mcuPhase2Movies.set("Ant-Man",2015)

const yearOfReleaseForIronMan = mcuPhase2Movies.get("Iron Man 3")
console.log("Iron man 3の公開年は"+yearOfReleaseForIronMan);

for(const [key,value]of mcuPhase2Movies){
    console.log(`${key}の公開年は${value}`)
}