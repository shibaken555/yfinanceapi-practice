// コンストラクタ付きのクラスの練習
class Hero {
    name;
    realName;
    height;
    weight;
    constructor(name, realName, height, weight) {
        this.name = name;
        this.realName = realName;
        this.height = height;
        this.weight = weight;
    }
    // メソッド
    calcBmi(hero) {
        // 身長の単位をcm→mに変換
        const heightInMeters = hero.height / 100;
        const bmi = hero.weight / (heightInMeters ** 2);
        return bmi;
    }
    ;
}
const hulk = new Hero("Hulk", "Bruce Banner", 256.45, 471);
console.log(`${hulk.realName}は怒ると${hulk.name}になります`);
export {};
