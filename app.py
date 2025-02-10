import os
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Define a list of common license keywords
LICENSE_KEYWORDS = {
    'MIT License': 'MIT License',
    'GPL': 'GPL License',
    'Apache 2.0': 'Apache 2.0 License',
    'BSD': 'BSD License',
    'MPL': 'Mozilla Public License',
    'Eclipse': 'Eclipse Public License',
    'Creative Commons': 'Creative Commons License',
    'AGPL': 'GNU Affero General Public License'
}

def detect_license(content):
    """
    Function to detect open-source license by searching for specific keywords in the file content.
    :param content: The content of the file to check.
    :return: The detected license name or None if no license is found.
    """
    # Check for the license keywords in the file content
    for keyword in LICENSE_KEYWORDS:
        if keyword in content:
            return LICENSE_KEYWORDS[keyword]

    return "No recognized open-source license found."

@app.route('/')
def index():
    # Render the HTML file from the templates folder
    return render_template('index.html')

@app.route('/detect', methods=['POST'])
def detect():
    file = request.files['file']
    
    # Validate file type (allow .txt and .md)
    if not file.filename.endswith(('.txt', '.md')):
        return jsonify({'error': 'Please upload a .txt or .md file.'})

    # Read the content of the uploaded file
    content = file.read().decode('utf-8')
    license = detect_license(content)
    
    return jsonify({'license': license})

if __name__ == '__main__':
    app.run(debug=True)
