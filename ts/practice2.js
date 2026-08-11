//クラスの練習 
class Hero {
    name = "";
    realName = "";
    height = 0;
    weight = 0;
    // メソッド
    calcBmi(hero) {
        // 身長の単位をcm→mに変換
        const heightInMeters = hero.height / 100;
        const bmi = hero.weight / (heightInMeters ** 2);
        return bmi;
    }
    ;
}
function aboutMe(hero) {
    console.log(`ヒーローとしての名前は${hero.name}。本名は${hero.realName}`);
}
function calcBmi(hero) {
    // 身長の単位をcm→mに変換
    const heightInMeters = hero.height / 100;
    const bmi = hero.weight / (heightInMeters ** 2);
    return bmi;
}
;
const spiderman = new Hero();
console.log(spiderman);
spiderman.name = "spiderman";
spiderman.realName = "Peter Parker";
spiderman.height = 177.8;
spiderman.weight = 81;
console.log(spiderman);
console.log(`スパイダーマンの本名は${spiderman.realName}`);
aboutMe(spiderman);
console.log(calcBmi(spiderman));
console.log("------------------------------");
// ------------------------------ 
const ironman = new Hero();
ironman.name = "ironman";
ironman.realName = "Tony Stark";
ironman.height = 185.42;
ironman.weight = 86;
console.log(`彼の名前は${ironman.name}。本名は${ironman.realName}`);
console.log(ironman.calcBmi(ironman));
export {};
