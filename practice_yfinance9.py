import yfinance as yf
import json

msft = yf.Ticker("MSFT")

hist = msft.history(period="5d")
price_data = hist.reset_index().to_dict(orient="records")
print("before",price_data)
# Json形式に変換するため、Dateの型をTimestamp→strに変換する
for d in price_data:
    d["Date"] = d["Date"].strftime("%Y-%m-%d")
    print("after",json.dumps(d))