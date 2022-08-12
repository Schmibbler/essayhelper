from flask import Flask
from transformers import pipeline
from flask import request, jsonify
from flask_cors import CORS
from parrot import Parrot
import torch
import warnings
warnings.filterwarnings("ignore")

app = Flask(__name__)
CORS(app)



# Summarizing Model
@app.route('/summarize', methods=["POST"])
def summarize_text():
    if request.method == "POST":
        content = request.get_json()
        text_request = content['text']
        text_response = summarizer(text_request)
        response = jsonify({"text": text_response[0]['summary_text']})
        return response

# Paraphrasing Model
@app.route('/paraphrase', methods=["POST"])
def paraphrase():
    if request.method == "POST":
        response = jsonify({"text": "Paraphrase Test"})
        return response

@app.route('/expand', methods=["POST"])
def expand():
    if request.method == "POST":
        response = jsonify({"text": "Expanded Test"})
        return response

if (__name__ == "__main__"):
    summarizer = pipeline("summarization")
    app.run(debug=True)
