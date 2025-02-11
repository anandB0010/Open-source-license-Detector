# Open Source License Detector

A web application that helps users identify open-source licenses in text files. This tool analyzes uploaded files and detects common open-source licenses based on keyword matching.

## Features

- Upload and analyze .txt and .md files
- Detection of multiple common open-source licenses including:
  - MIT License
  - GPL License
  - Apache 2.0 License
  - BSD License
  - Mozilla Public License
  - Eclipse Public License
  - Creative Commons License
  - GNU Affero General Public License
- Modern, responsive web interface
- Real-time license detection
- User-friendly error handling

## Installation

1. Clone this repository
2. Install the required dependencies:
```bash
pip install flask
```

## Project Structure

```
.
├── app.py          # Flask backend application
├── index.html  # Main application page
├── script.js   # Frontend JavaScript
└── README.md       # Project documentation
```

## Usage

1. Start the application:
```bash
python app.py
```

2. Open your web browser and navigate to `http://localhost:5000`

3. Upload a text file containing license information

4. Click "Detect License" to analyze the file

## Technical Details

### Backend (app.py)
- Built with Flask framework
- Implements file upload handling
- License detection through keyword matching
- Supports UTF-8 encoded text files
- Error handling for invalid file types

### Frontend
- Responsive design with CSS gradients
- Modern UI with hover effects
- Real-time feedback during file processing
- Supports drag-and-drop file upload
- Mobile-friendly interface

## Supported License Types

The application can detect the following licenses:
- MIT License
- GPL License
- Apache 2.0 License
- BSD License
- Mozilla Public License
- Eclipse Public License
- Creative Commons License
- GNU Affero General Public License

## Development

To run the application in development mode:

```bash
export FLASK_ENV=development
export FLASK_APP=app.py
flask run
```

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Submit a pull request with a clear description of your changes

## License

This project is available under the MIT License. See the LICENSE file for more details.

## Security Considerations

- The application only accepts .txt and .md files
- File content is validated before processing
- Error handling is implemented for invalid uploads
- Content is sanitized before display

## Future Improvements

- Add support for more license types
- Implement machine learning for better license detection
- Add batch file processing
- Include license compliance checking
- Add API documentation for external integration