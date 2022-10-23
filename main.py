from food_models.candy_model import predict as candy_pred
from food_models.cereal_model import predict as cereal_pred
from food_models.coffee_model import predict as coffee_pred
from food_models.dairy_model import predict as dairy_pred
from food_models.fats_and_oils_model import predict as fats_pred
from food_models.fruits_and_veggies_model import predict as f_and_v_pred
from food_models.meats_and_eggs_model import predict as m_and_e_pred
from food_models.ml_model import predict as avg_food_pred
from food_models.other_foods_model import predict as other_pred
from food_models.sugar_and_sweets_model import predict as sweets_pred

import json
from flask import *
from cors import fix_cors

app = Flask(__name__)

@app.route("/candy/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
def pred_candy(date0, date1, date2):
    price_increase = candy_pred(date0, date1, date2)
    avg_price = 1.00
    real_life_price = avg_price * price_increase
    return jsonify({"prediction": real_life_price})

@app.route("/cereal/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
def pred_cereal(date0, date1, date2):
    price_increase = cereal_pred(date0, date1, date2)
    avg_price = 1.00
    real_life_price = avg_price * price_increase
    return jsonify({"prediction": real_life_price})

@app.route("/coffee/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
def pred_coffee(date0, date1, date2):
    price_increase = coffee_pred(date0, date1, date2)
    avg_price = 1.00
    real_life_price = avg_price * price_increase
    return jsonify({"prediction": real_life_price})

@app.route("/dairy/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
def pred_dairy(date0, date1, date2):
    price_increase = dairy_pred(date0, date1, date2)
    avg_price = 1.00
    real_life_price = avg_price * price_increase
    return jsonify({"prediction": real_life_price})

@app.route("/fats/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
def pred_fats(date0, date1, date2):
    price_increase = fats_pred(date0, date1, date2)
    avg_price = 1.00
    real_life_price = avg_price * price_increase
    return jsonify({"prediction": real_life_price})

@app.route("/fruits_and_veggies/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
def pred_fruits_and_veggies(date0, date1, date2):
    price_increase = f_and_v_pred(date0, date1, date2)
    avg_price = 1.00
    real_life_price = avg_price * price_increase
    return jsonify({"prediction": real_life_price})

@app.route("/meats_and_eggs/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
def pred_meats_and_eggs(date0, date1, date2):
    price_increase = m_and_e_pred(date0, date1, date2)
    avg_price = 1.00
    real_life_price = avg_price * price_increase
    return jsonify({"prediction": real_life_price})

@app.route("/avg_food/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
def pred_avg(date0, date1, date2):
    price_increase = avg_food_pred(date0, date1, date2)
    avg_price = 1.00
    real_life_price = avg_price * price_increase
    return jsonify({"prediction": real_life_price})

@app.route("/other/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
def pred_other(date0, date1, date2):
    price_increase = other_pred(date0, date1, date2)
    avg_price = 1.00
    real_life_price = avg_price * price_increase
    return jsonify({"prediction": real_life_price})

@app.route("/sweets/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
def pred_sweets(date0, date1, date2):
    price_increase = sweets_pred(date0, date1, date2)
    avg_price = 1.00
    real_life_price = avg_price * price_increase
    return jsonify({"prediction": real_life_price})

app.run(host="0.0.0.0")