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
import flask
from cors import fix_cors

app = Flask(__name__)

@app.route("/<int:date0>/<int:date1>/<int:date2>")
@fix_cors
