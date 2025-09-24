from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__)

# Load the trained model
try:
    with open('house_price_model.pkl', 'rb') as f:
        model = pickle.load(f)
except FileNotFoundError:
    try:
        with open('linear_regression_model.pkl', 'rb') as f:
            model = pickle.load(f)
    except FileNotFoundError:
        model = None
        print("Warning: No model file found!")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if model is None:
            return jsonify({'error': 'Model not loaded'}), 500
        
        # Get form data
        features = [
            float(request.form['bedrooms']),
            float(request.form['bathrooms']),
            float(request.form['living_area']),
            float(request.form['lot_area']),
            float(request.form['floors']),
            float(request.form['waterfront']),
            float(request.form['views']),
            float(request.form['condition']),
            float(request.form['grade']),
            float(request.form['house_area']),
            float(request.form['schools_nearby']),
            float(request.form['airport_distance']),
            float(request.form['total_rooms']),
            float(request.form['house_age'])
        ]
        
        # Make prediction
        prediction = model.predict([features])[0]
        
        return render_template('result.html', 
                             prediction=round(prediction, 2),
                             features=dict(zip([
                                 'Bedrooms', 'Bathrooms', 'Living Area (sq ft)', 
                                 'Lot Area (sq ft)', 'Floors', 'Waterfront', 
                                 'Views', 'Condition', 'Grade', 'House Area (sq ft)',
                                 'Schools Nearby', 'Airport Distance (miles)', 
                                 'Total Rooms', 'House Age (years)'
                             ], features)))
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)