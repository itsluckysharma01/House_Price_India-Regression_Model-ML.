# 🏠 House Price Prediction Web Application

A machine learning web application that predicts house prices based on various features using Flask and scikit-learn.

## Features

- **Modern Web Interface**: Clean, responsive design with gradient backgrounds and intuitive forms
- **Real-time Validation**: Form validation with helpful tooltips and error messages
- **Comprehensive Prediction**: Uses 14 different features to predict house prices
- **Detailed Results**: Shows prediction with price breakdown and analysis
- **Mobile Responsive**: Works perfectly on desktop, tablet, and mobile devices

## Technologies Used

- **Backend**: Flask (Python web framework)
- **Frontend**: HTML5, CSS3, JavaScript
- **Machine Learning**: scikit-learn, pandas, numpy
- **Model**: Pre-trained regression model (pickle format)

## Installation

1. **Clone or download the repository**
2. **Navigate to the project directory**

   ```cmd
   cd "House_Price_Prediction-Regresssion"
   ```

3. **Install required packages**

   ```cmd
   pip install -r requirements.txt
   ```

4. **Ensure you have the trained model file**
   - The app looks for either `house_price_model.pkl` or `linear_regression_model.pkl`
   - Make sure one of these files is in the root directory

## Usage

1. **Start the application**

   ```cmd
   python app.py
   ```

2. **Access the web interface**

   - Open your browser and go to: `http://127.0.0.1:5000`
   - Or: `http://localhost:5000`

3. **Make predictions**
   - Fill in the house details in the form
   - Click "Predict House Price"
   - View the detailed prediction results

## Input Features

The model uses the following features to make predictions:

### Basic Information

- **Number of Bedrooms** (1-10)
- **Number of Bathrooms** (1-10, step 0.25)
- **Number of Floors** (1-5, step 0.5)
- **Total Rooms** (2-20, step 0.5)

### Area Information

- **Living Area** (sq ft, 500-10,000)
- **Lot Area** (sq ft, 1,000-100,000)
- **House Area excluding basement** (sq ft, 500-8,000)

### Property Features

- **Waterfront Present** (Yes/No)
- **Number of Views** (0-4)
- **Condition of House** (1-5 scale)
- **Grade of House** (1-13 scale)

### Location & Other Details

- **Number of Schools Nearby** (0-10)
- **Distance from Airport** (miles, 1-200)
- **House Age** (years, 0-150)

## Features of the Web Interface

### Form Features

- **Auto-calculation**: Suggests total rooms based on bedrooms and bathrooms
- **Input validation**: Ensures all required fields are filled correctly
- **Helpful tooltips**: Explains what each field means
- **Grade helper**: Shows scale explanations (1-6: Below Average, 7: Average, etc.)

### Results Page

- **Price Display**: Large, prominent display of predicted price
- **Price Range**: Shows low and high estimates (±10%)
- **Price per sq ft**: Calculates and displays price per square foot
- **Feature Summary**: Lists all input values used for prediction
- **Disclaimer**: Important notice about prediction accuracy

### Design Features

- **Responsive Design**: Works on all device sizes
- **Modern UI**: Gradient backgrounds, smooth transitions
- **Professional Layout**: Clean, organized form sections
- **Interactive Elements**: Hover effects, focus states

## File Structure

```
House_Price_Prediction-Regresssion/
├── app.py                          # Main Flask application
├── requirements.txt                # Python dependencies
├── house_price_model.pkl          # Trained ML model (or linear_regression_model.pkl)
├── Cleaned_Dataset_Housing_Price_Prediction.csv  # Dataset
├── templates/
│   ├── index.html                 # Main prediction form page
│   └── result.html                # Results display page
├── static/
│   ├── style.css                  # Main stylesheet
│   └── script.js                  # JavaScript functionality
└── README.md                      # This file
```

## Model Information

The application expects a trained scikit-learn model saved as a pickle file. The model should:

- Accept 14 features in the order specified above
- Return a single prediction value (house price)
- Be trained on similar data format as the provided dataset

## Customization

### Styling

- Modify `static/style.css` to change colors, fonts, and layout
- The current design uses a purple gradient theme
- All measurements are responsive and mobile-friendly

### Functionality

- Edit `static/script.js` to add more form validation or interactions
- Modify `app.py` to add more routes or change prediction logic
- Update templates to add more information or change layout

### Model

- Replace the pickle file with your own trained model
- Ensure the feature order matches what's expected in `app.py`
- Update form fields if your model uses different features

## Troubleshooting

### Common Issues

1. **"Model not loaded" error**

   - Ensure `house_price_model.pkl` or `linear_regression_model.pkl` exists
   - Check that the model file is not corrupted

2. **Template not found error**

   - Make sure `templates/` folder exists with both HTML files
   - Check file names match exactly (case-sensitive)

3. **Static files not loading**

   - Ensure `static/` folder exists with CSS and JS files
   - Check browser console for 404 errors

4. **Port already in use**
   - Change the port in `app.py`: `app.run(debug=True, port=5001)`
   - Or stop other applications using port 5000

### Browser Compatibility

- Works with all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled for form validation
- Mobile browsers fully supported

## Contributing

Feel free to contribute improvements:

1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Submit a pull request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Feel free to use this project for learning and commercial purposes!
```

---

## 🆘 Support

<div align="center">

### 💬 **Need Help?**

<table>
<tr>
<td align="center">

**🐛 Found a Bug?**  
[Create an Issue](https://github.com/itsluckysharma01/House_Price_India-Regression_Model-ML/issues)

</td>
<td align="center">

**💡 Have an Idea?**  
[Start a Discussion](https://github.com/itsluckysharma01/House_Price_India-Regression_Model-ML/discussions)

</td>
<td align="center">

**📧 Contact Me**  
[itsluckysharma01@gmail.com](mailto:itsluckysharma01@gmail.com)

</td>
</tr>
</table>

### 📱 **Connect With Me**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/itsluckysharma01)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/itsluckysharma01)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/itsluckysharma01)

</div>

---

<div align="center">

### 🌟 **Show Your Support**

If this project helped you, please give it a ⭐️ star!

**Made with ❤️ by [Lucky Sharma](https://github.com/itsluckysharma01)**

---

### 🏠 **Happy House Price Predicting!** 🎉

_Transforming property valuation with the power of Machine Learning_ ✨

</div>
