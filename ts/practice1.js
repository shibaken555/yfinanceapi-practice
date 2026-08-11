// consoleの練習
console.log("Hey What's Up");
console.log("123");
console.log(123);
console.log("文字列中のダブルクォーテーション\"には注意が必要");
const killua = "キルア";
const killuaAbility = "変化系";
console.log(`${killua}の念能力の系統は${killuaAbility}です`);
console.log("------------------------------");
// ------------------------------ 
// 条件分岐
const isPrimeMember = true;
if (isPrimeMember) {
    console.log("プライム会員です");
}
else {
    console.log("プライム会員ではありません");
}
console.log("------------------------------");
// ------------------------------
// ループ
console.log("処理開始");
for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) {
        console.log(i + ":fizzbuzz");
    }
    if (i % 3 === 0) {
        console.log(i + ":fizz");
    }
    if (i % 5 === 0) {
        console.log(i + ":buzz");
    }
}
console.log("------------------------------");
// ------------------------------
// 配列
const numArray = [1, 2, 3, 4];
const stringArray = ["1", "2", "3", "4"];
console.log(numArray[0]);
console.log(stringArray[0]);
console.log("配列の要素数は" + numArray.length);
// インデックスシグネチャ
const mcuPhase1Movies = {
    "Iron Man": 2008,
    "The Incredible Hulk": 2008,
    "Iron Man 2": 2010,
    "Thor": 2011,
    "Captain America: The First Avenger": 2011,
    "Marvel's The Avengers": 2012
};
for (const key in mcuPhase1Movies) {
    console.log(`${key}の公開年は${mcuPhase1Movies[key]}`);
}
console.log(`アイアンマンの公開年は${mcuPhase1Movies["Iron Man"]}年です`);
console.log(mcuPhase1Movies.Thor);
const ironmanPersonalData = {
    name: "ironman",
    realName: "Tony Stark",
    height: 185.42,
    weight: 86
};
console.log(`${ironmanPersonalData.name}の正体は${ironmanPersonalData.realName}`);
// map型
const mcuPhase2Movies = new Map();
mcuPhase2Movies.set("Iron Man 3", 2013),
    mcuPhase2Movies.set("Thor: The Dark World", 2013),
    mcuPhase2Movies.set("Captain America: The Winter Soldier", 2014),
    mcuPhase2Movies.set("Guardians of the Galaxy", 2014),
    mcuPhase2Movies.set("Avengers: Age of Ultron", 2015),
    mcuPhase2Movies.set("Ant-Man", 2015);
for (const [key, value] of mcuPhase2Movies) {
    console.log(`${key}の公開年は${value}`);
}
const yearOfReleaseForIronMan = mcuPhase2Movies.get("Iron Man 3");
console.log("Iron man 3の公開年は" + yearOfReleaseForIronMan);
console.log("------------------------------");
// ------------------------------
// 関数
function calculateTotalAmount(productPrice, taxRate) {
    let totalAmount = productPrice * taxRate;
    return totalAmount;
}
console.log("商品価格は" + "1000円です");
console.log("消費税率は" + "10%です");
console.log(calculateTotalAmount(1000, 1.1));
export {};
