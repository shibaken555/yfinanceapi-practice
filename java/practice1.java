import java.math.BigDecimal;
import java.math.RoundingMode;

public class Practice1 {
    public static void main(String[] args) {
        // 取得価格
        BigDecimal acquisitionPrice = BigDecimal.valueOf(1000);
        System.out.println("取得価格は" + acquisitionPrice + "円です");
        // 現在価格
        BigDecimal currentPrice = BigDecimal.valueOf(10000);
        System.out.println("現在価格は" + currentPrice + "円です");
        System.out.println("投資のリターンは"+calcPerformance(acquisitionPrice, currentPrice).toPlainString()+"%です");
    }

    public static BigDecimal calcPerformance(BigDecimal acquisitionPrice, BigDecimal currentPrice) {
        // (現在価格-取得価格)/取得価格*100
        BigDecimal performance = currentPrice.subtract(acquisitionPrice).divide(acquisitionPrice, 2, RoundingMode.DOWN)
                .scaleByPowerOfTen(2);
        return performance;
    }
}