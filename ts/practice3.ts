export{}
// コンストラクタ付きのクラスの練習

class Hero {
   name: string;
   realName: string;
   height: number;
   weight: number;

   constructor(name: string, realName: string, height: number, weight: number) {
      this.name = name;
      this.realName = realName;
      this.height = height;
      this.weight = weight;
   }

   // メソッド
   calcBmi(hero: Hero) {
      // 身長の単位をcm→mに変換
      const heightInMeters: number = hero.height / 100;
      const bmi: number = hero.weight / (heightInMeters ** 2);
      return bmi;
   };
}

const hulk:Hero = new Hero("Hulk","Bruce Banner",256.45,471);
console.log(`${hulk.realName}は怒ると${hulk.name}になります`);