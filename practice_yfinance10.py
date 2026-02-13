import yfinance as yf
import datetime as dt

company = yf.Ticker("AAPL")
price_history = company.history(period="5d")
price_data = price_history.reset_index().to_dict(orient="records")

# レスポンスのうち、Dateのフォーマットをyyyy-mm-ddに修正する
# price_date.Dateを取得
date = [d.get("Date") for d in price_data]
print("before", date)
for i in date:
    # Timestamp を yyyy-mm-dd に変換
    adate = i.strftime("%Y-%m-%d")
    print("after", adate)
