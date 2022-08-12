from flask import Flask
from transformers import pipeline
from flask import request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return "HELLO"

@app.route('/summarize', methods=["POST"])
def summarize_text():
    app.logger.info("Hello! Test!")
    if request.method == "POST":
        data = request.form
        print(request)
        
        return(jsonify(data))

if (__name__ == "__main__"):
    # summarizer = pipeline("summarization")
    app.run(debug=True)
