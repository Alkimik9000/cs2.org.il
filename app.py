from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

def fetch_matches():
    url = 'https://www.hltv.org/matches'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    matches = []

    # Find and parse the match elements from the page
    match_elements = soup.find_all(class_='match-day')
    for match_element in match_elements:
        matches.append(match_element.text)

    return matches

@app.route('/')
def homepage():
    matches = fetch_matches()
    return render_template('homepage.html', matches=matches)

if __name__ == '__main__':
    app.run(debug=True)
