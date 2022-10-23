import numpy as np
import pandas as pd
from datetime import datetime
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, r2_score
import matplotlib as plt
import warnings
from sklearn.exceptions import DataConversionWarning
import json

warnings.filterwarnings(action='ignore', category=UserWarning)


food_data = pd.read_csv("food_data/fruits_and_veggies_avg_prices.csv")

food_data.rename(columns={"CUSR0000SAF113":"CPI"}, inplace=True)

for index, element in enumerate(food_data["DATE"]):
    stuff = [int(x) for x in list(element.split(sep="-"))]
    food_data["DATE"][index] = datetime(stuff[0], stuff[1], stuff[2], 0, 0).timestamp()

X = food_data[["DATE"]]
Y = food_data[["CPI"]]

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, train_size=0.2)

lr = LinearRegression()
lr.fit(X_train, Y_train)

def predict(date0, date1, date2):
    
    epoch_time_of_date = datetime(date2, date0, date1, 0, 0).timestamp()
    prediction_array = np.array([[epoch_time_of_date]])

    price_pred = lr.predict(prediction_array)
    return round(float(json.loads(str(price_pred))[0][0]), 2)

test = predict("9/1/2022")
print(test)

