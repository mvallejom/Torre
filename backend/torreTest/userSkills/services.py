import requests

def generate_request(url, user):
    payload = {'username': user}
    response = requests.get(url, params=payload)

    if response.status_code == 200:
        return response.json()

def get_username(user):
    response = generate_request('https://torre.bio/api/bios/', user)
    if response:
       user = response.get('results')[0]
       return user.json()
    return "no username found".json()

    