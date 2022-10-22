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


coffee_data = pd.read_csv("CPI_Urban_US_City_avg.csv")

for index, element in enumerate(coffee_data["DATE"]):
    stuff = [int(x) for x in list(element.split(sep="/"))]
    coffee_data["DATE"][index] = datetime(stuff[2], stuff[0], stuff[1], 0, 0).timestamp()

X = coffee_data[["DATE"]]
Y = coffee_data[["CPI"]]

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, train_size=0.2)

lr = LinearRegression()
lr.fit(X_train, Y_train)

def predict(date: str):
    
    date_list = [int(x) for x in list(date.split(sep="/"))]
    epoch_time_of_date = datetime(date_list[2], date_list[0], date_list[1], 0, 0).timestamp()
    prediction_array = np.array([[epoch_time_of_date]])

    price_pred = lr.predict(prediction_array)
    return round(float(json.loads(str(price_pred))[0][0]), 2)

test = predict("9/1/2022")
print(test)

