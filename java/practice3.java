import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class practice3 {

    // 重複している値を検出し全て削除するコード
    public static void main(String[] args) {
        // 対象のMap。appleが重複しているので、削除対象の値となる
        Map<Integer, String> fruitMap = new HashMap<>();
        fruitMap.put(1, "apple");
        fruitMap.put(2, "banana");
        fruitMap.put(3, "apple");
        fruitMap.put(4, "kiwi");
        fruitMap.put(5, "apple");
        System.out.println("fruitMap" + fruitMap);

        // Map内の値を数えるためのリストを作成
        List<String> valueList = new ArrayList<>();
        for (String values : fruitMap.values()) {
            valueList.add(values);
        }
        System.out.println("valueList" + valueList);

        // 値の出現回数を数えるMapを作成
        // 順序を保証しないと後続のforループで要素追加できないので、LinkedHashMapを使用する
        Map<String, Integer> countsMap = new LinkedHashMap<>();
        for (String word : valueList) {
            countsMap.put(word, countsMap.getOrDefault(word, 0) + 1);
        }
        System.out.println("countsMap" + countsMap);

        // 出現回数が2回以上の値を削除する
        countsMap.entrySet().removeIf(entry -> entry.getValue() > 2);
        System.out.println("countsMap(重複なし)"+countsMap);

        List<String> distinctList = new ArrayList<>(countsMap.keySet());
        System.out.println("distinctList" + distinctList);

        Map<Integer, String> distinctMap = new HashMap<>();
        for (int i = 0; i < distinctList.size(); i++) {
            distinctMap.put(i + 1, distinctList.get(i));
        }
        System.out.println("distinctMap" + distinctMap);

    }
}
