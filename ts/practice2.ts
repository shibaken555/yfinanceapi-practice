export { }
//クラスの練習 
class Hero {
    name: string = "";
    realName: string = "";
    height: number = 0;
    weight: number = 0;
}

const spiderman = new Hero();
console.log(spiderman);
spiderman.name = "spiderman";
spiderman.realName = "Peter Parker";
spiderman.height = 177.8;
spiderman.weight = 81;
console.log(spiderman);