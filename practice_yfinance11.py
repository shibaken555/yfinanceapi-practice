import yfinance as yf

company = yf.Ticker("AAPL")
company_info = company.info
print(company_info.get("longName"))
print(company_info.get("currentPrice"))
print(company_info.get("marketCap"))
print(company_info.get("longBusinessSummary"))