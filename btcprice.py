import requests

def asset_price_bitcoin(asset):
    response = requests.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    data = response.json()
    return round((asset/data["bpi"]["USD"]["rate"]), 1)

