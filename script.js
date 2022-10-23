window.date_regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

function uuidv4() {
    var length           = 15;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

document.getElementById("candy").onclick = function() {
  // make all other buttons unable to click while modal is open
  // custom domain
  const uuid = uuidv4();
  eval(`window.`+uuid+` = function(val) {
  if (window.date_regex.test(val)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        document.getElementById("`+uuid+`2").innerText = "$"+this.responseText;
      }
    });
    xhr.open("GET", "https://api.just-right.space/candy/"+val);
    xhr.send();
  } else {
    document.getElementById("`+uuid+`2").innerText = "Invalid Date";
  }
};`);
  var form = document.createElement("form");
  form.setAttribute("style", "margin: 0; box-sizing: border-box; height: 520px; width: 400px; background-color: rgba(255, 255, 255, 0.13); position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.1); box-shadow: 0 0 40px rgba(8, 7, 16, 0.6); padding: 50px 35px;");
  form.setAttribute("id", uuid);
  form.innerHTML = `<h3 style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; font-size: 32px; font-weight: 500; line-height: 42px; text-align: center;">Candy Price Calculator</h3>
<br>
<div class="datepicker relative form-floating mb-3 xl:w-96" style="margin-bottom: 0;">
  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none form-icon-trailing" placeholder="Select a date" style="width: 330px;" onchange="window.`+uuid+`(this.value)">
  <label for="floatingInput" class="text-gray-700">Enter A Date</label>
  <button type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">
    <i class="far fa-calendar datepicker-toggle-icon"></i>
  </button>
</div>
<span style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; cursor: context-menu;"><button style="margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; outline: none; border: none; margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: context-menu;" id="`+uuid+`2">&nbsp;</button></span>
<a class="btn btn-outline btn-error" style="margin-top: 110px; margin-left: 265px;" onclick="document.getElementById('`+uuid+`').remove();">Exit</a>`;
  document.body.appendChild(form);
};

document.getElementById("cereal").onclick = function() {
  // make all other buttons unable to click while modal is open
  // custom domain
  const uuid = uuidv4();
  eval(`window.`+uuid+` = function(val) {
  if (window.date_regex.test(val)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        document.getElementById("`+uuid+`2").innerText = "$"+this.responseText;
      }
    });
    xhr.open("GET", "https://api.just-right.space/cereal/"+val);
    xhr.send();
  } else {
    document.getElementById("`+uuid+`2").innerText = "Invalid Date";
  }
};`);
  var form = document.createElement("form");
  form.setAttribute("style", "margin: 0; box-sizing: border-box; height: 520px; width: 400px; background-color: rgba(255, 255, 255, 0.13); position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.1); box-shadow: 0 0 40px rgba(8, 7, 16, 0.6); padding: 50px 35px;");
  form.setAttribute("id", uuid);
  form.innerHTML = `<h3 style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; font-size: 32px; font-weight: 500; line-height: 42px; text-align: center;">Cereal Price Calculator</h3>
<br>
<div class="datepicker relative form-floating mb-3 xl:w-96" style="margin-bottom: 0;">
  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none form-icon-trailing" placeholder="Select a date" style="width: 330px;" onchange="window.`+uuid+`(this.value)">
  <label for="floatingInput" class="text-gray-700">Enter A Date</label>
  <button type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">
    <i class="far fa-calendar datepicker-toggle-icon"></i>
  </button>
</div>
<span style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; cursor: context-menu;"><button style="margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; outline: none; border: none; margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: context-menu;" id="`+uuid+`2">&nbsp;</button></span>
<a class="btn btn-outline btn-error" style="margin-top: 110px; margin-left: 265px;" onclick="document.getElementById('`+uuid+`').remove();">Exit</a>`;
  document.body.appendChild(form);
};

document.getElementById("coffee").onclick = function() {
  // make all other buttons unable to click while modal is open
  // custom domain
  const uuid = uuidv4();
  eval(`window.`+uuid+` = function(val) {
  if (window.date_regex.test(val)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        document.getElementById("`+uuid+`2").innerText = "$"+this.responseText;
      }
    });
    xhr.open("GET", "https://api.just-right.space/coffee/"+val);
    xhr.send();
  } else {
    document.getElementById("`+uuid+`2").innerText = "Invalid Date";
  }
};`);
  var form = document.createElement("form");
  form.setAttribute("style", "margin: 0; box-sizing: border-box; height: 520px; width: 400px; background-color: rgba(255, 255, 255, 0.13); position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.1); box-shadow: 0 0 40px rgba(8, 7, 16, 0.6); padding: 50px 35px;");
  form.setAttribute("id", uuid);
  form.innerHTML = `<h3 style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; font-size: 32px; font-weight: 500; line-height: 42px; text-align: center;">Coffee Price Calculator</h3>
<br>
<div class="datepicker relative form-floating mb-3 xl:w-96" style="margin-bottom: 0;">
  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none form-icon-trailing" placeholder="Select a date" style="width: 330px;" onchange="window.`+uuid+`(this.value)">
  <label for="floatingInput" class="text-gray-700">Enter A Date</label>
  <button type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">
    <i class="far fa-calendar datepicker-toggle-icon"></i>
  </button>
</div>
<span style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; cursor: context-menu;"><button style="margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; outline: none; border: none; margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: context-menu;" id="`+uuid+`2">&nbsp;</button></span>
<a class="btn btn-outline btn-error" style="margin-top: 110px; margin-left: 265px;" onclick="document.getElementById('`+uuid+`').remove();">Exit</a>`;
  document.body.appendChild(form);
};

document.getElementById("dairy").onclick = function() {
  // make all other buttons unable to click while modal is open
  // custom domain
  const uuid = uuidv4();
  eval(`window.`+uuid+` = function(val) {
  if (window.date_regex.test(val)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        document.getElementById("`+uuid+`2").innerText = "$"+this.responseText;
      }
    });
    xhr.open("GET", "https://api.just-right.space/dairy/"+val);
    xhr.send();
  } else {
    document.getElementById("`+uuid+`2").innerText = "Invalid Date";
  }
};`);
  var form = document.createElement("form");
  form.setAttribute("style", "margin: 0; box-sizing: border-box; height: 520px; width: 400px; background-color: rgba(255, 255, 255, 0.13); position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.1); box-shadow: 0 0 40px rgba(8, 7, 16, 0.6); padding: 50px 35px;");
  form.setAttribute("id", uuid);
  form.innerHTML = `<h3 style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; font-size: 32px; font-weight: 500; line-height: 42px; text-align: center;">Dairy Price Calculator</h3>
<br>
<div class="datepicker relative form-floating mb-3 xl:w-96" style="margin-bottom: 0;">
  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none form-icon-trailing" placeholder="Select a date" style="width: 330px;" onchange="window.`+uuid+`(this.value)">
  <label for="floatingInput" class="text-gray-700">Enter A Date</label>
  <button type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">
    <i class="far fa-calendar datepicker-toggle-icon"></i>
  </button>
</div>
<span style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; cursor: context-menu;"><button style="margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; outline: none; border: none; margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: context-menu;" id="`+uuid+`2">&nbsp;</button></span>
<a class="btn btn-outline btn-error" style="margin-top: 110px; margin-left: 265px;" onclick="document.getElementById('`+uuid+`').remove();">Exit</a>`;
  document.body.appendChild(form);
};

document.getElementById("fats").onclick = function() {
  // make all other buttons unable to click while modal is open
  // custom domain
  const uuid = uuidv4();
  eval(`window.`+uuid+` = function(val) {
  if (window.date_regex.test(val)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        document.getElementById("`+uuid+`2").innerText = "$"+this.responseText;
      }
    });
    xhr.open("GET", "https://api.just-right.space/fats/"+val);
    xhr.send();
  } else {
    document.getElementById("`+uuid+`2").innerText = "Invalid Date";
  }
};`);
  var form = document.createElement("form");
  form.setAttribute("style", "margin: 0; box-sizing: border-box; height: 520px; width: 400px; background-color: rgba(255, 255, 255, 0.13); position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.1); box-shadow: 0 0 40px rgba(8, 7, 16, 0.6); padding: 50px 35px;");
  form.setAttribute("id", uuid);
  form.innerHTML = `<h3 style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; font-size: 32px; font-weight: 500; line-height: 42px; text-align: center;">Fats Price Calculator</h3>
<br>
<div class="datepicker relative form-floating mb-3 xl:w-96" style="margin-bottom: 0;">
  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none form-icon-trailing" placeholder="Select a date" style="width: 330px;" onchange="window.`+uuid+`(this.value)">
  <label for="floatingInput" class="text-gray-700">Enter A Date</label>
  <button type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">
    <i class="far fa-calendar datepicker-toggle-icon"></i>
  </button>
</div>
<span style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; cursor: context-menu;"><button style="margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; outline: none; border: none; margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: context-menu;" id="`+uuid+`2">&nbsp;</button></span>
<a class="btn btn-outline btn-error" style="margin-top: 110px; margin-left: 265px;" onclick="document.getElementById('`+uuid+`').remove();">Exit</a>`;
  document.body.appendChild(form);
};

document.getElementById("fruitsAndVeggies").onclick = function() {
  // make all other buttons unable to click while modal is open
  // custom domain
  const uuid = uuidv4();
  eval(`window.`+uuid+` = function(val) {
  if (window.date_regex.test(val)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        document.getElementById("`+uuid+`2").innerText = "$"+this.responseText;
      }
    });
    xhr.open("GET", "https://api.just-right.space/fruits_and_veggies/"+val);
    xhr.send();
  } else {
    document.getElementById("`+uuid+`2").innerText = "Invalid Date";
  }
};`);
  var form = document.createElement("form");
  form.setAttribute("style", "margin: 0; box-sizing: border-box; height: 520px; width: 400px; background-color: rgba(255, 255, 255, 0.13); position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.1); box-shadow: 0 0 40px rgba(8, 7, 16, 0.6); padding: 50px 35px;");
  form.setAttribute("id", uuid);
  form.innerHTML = `<h3 style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; font-size: 32px; font-weight: 500; line-height: 42px; text-align: center;">Fruits and Veggies Price Calculator</h3>
<br>
<div class="datepicker relative form-floating mb-3 xl:w-96" style="margin-bottom: 0;">
  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none form-icon-trailing" placeholder="Select a date" style="width: 330px;" onchange="window.`+uuid+`(this.value)">
  <label for="floatingInput" class="text-gray-700">Enter A Date</label>
  <button type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">
    <i class="far fa-calendar datepicker-toggle-icon"></i>
  </button>
</div>
<span style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; cursor: context-menu;"><button style="margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; outline: none; border: none; margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: context-menu;" id="`+uuid+`2">&nbsp;</button></span>
<a class="btn btn-outline btn-error" style="margin-top: 110px; margin-left: 265px;" onclick="document.getElementById('`+uuid+`').remove();">Exit</a>`;
  document.body.appendChild(form);
};

document.getElementById("meatsAndEggs").onclick = function() {
  // make all other buttons unable to click while modal is open
  // custom domain
  const uuid = uuidv4();
  eval(`window.`+uuid+` = function(val) {
  if (window.date_regex.test(val)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        document.getElementById("`+uuid+`2").innerText = "$"+this.responseText;
      }
    });
    xhr.open("GET", "https://api.just-right.space/meats_and_eggs/"+val);
    xhr.send();
  } else {
    document.getElementById("`+uuid+`2").innerText = "Invalid Date";
  }
};`);
  var form = document.createElement("form");
  form.setAttribute("style", "margin: 0; box-sizing: border-box; height: 520px; width: 400px; background-color: rgba(255, 255, 255, 0.13); position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.1); box-shadow: 0 0 40px rgba(8, 7, 16, 0.6); padding: 50px 35px;");
  form.setAttribute("id", uuid);
  form.innerHTML = `<h3 style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; font-size: 32px; font-weight: 500; line-height: 42px; text-align: center;">Meats and Eggs Price Calculator</h3>
<br>
<div class="datepicker relative form-floating mb-3 xl:w-96" style="margin-bottom: 0;">
  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none form-icon-trailing" placeholder="Select a date" style="width: 330px;" onchange="window.`+uuid+`(this.value)">
  <label for="floatingInput" class="text-gray-700">Enter A Date</label>
  <button type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">
    <i class="far fa-calendar datepicker-toggle-icon"></i>
  </button>
</div>
<span style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; cursor: context-menu;"><button style="margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; outline: none; border: none; margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: context-menu;" id="`+uuid+`2">&nbsp;</button></span>
<a class="btn btn-outline btn-error" style="margin-top: 110px; margin-left: 265px;" onclick="document.getElementById('`+uuid+`').remove();">Exit</a>`;
  document.body.appendChild(form);
};

document.getElementById("averageFood").onclick = function() {
  // make all other buttons unable to click while modal is open
  // custom domain
  const uuid = uuidv4();
  eval(`window.`+uuid+` = function(val) {
  if (window.date_regex.test(val)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        document.getElementById("`+uuid+`2").innerText = "$"+this.responseText;
      }
    });
    xhr.open("GET", "https://api.just-right.space/avg_food/"+val);
    xhr.send();
  } else {
    document.getElementById("`+uuid+`2").innerText = "Invalid Date";
  }
};`);
  var form = document.createElement("form");
  form.setAttribute("style", "margin: 0; box-sizing: border-box; height: 520px; width: 400px; background-color: rgba(255, 255, 255, 0.13); position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.1); box-shadow: 0 0 40px rgba(8, 7, 16, 0.6); padding: 50px 35px;");
  form.setAttribute("id", uuid);
  form.innerHTML = `<h3 style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; font-size: 32px; font-weight: 500; line-height: 42px; text-align: center;">Average Food Price Calculator</h3>
<br>
<div class="datepicker relative form-floating mb-3 xl:w-96" style="margin-bottom: 0;">
  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none form-icon-trailing" placeholder="Select a date" style="width: 330px;" onchange="window.`+uuid+`(this.value)">
  <label for="floatingInput" class="text-gray-700">Enter A Date</label>
  <button type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">
    <i class="far fa-calendar datepicker-toggle-icon"></i>
  </button>
</div>
<span style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; cursor: context-menu;"><button style="margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; outline: none; border: none; margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: context-menu;" id="`+uuid+`2">&nbsp;</button></span>
<a class="btn btn-outline btn-error" style="margin-top: 110px; margin-left: 265px;" onclick="document.getElementById('`+uuid+`').remove();">Exit</a>`;
  document.body.appendChild(form);
};

document.getElementById("otherFood").onclick = function() {
  // make all other buttons unable to click while modal is open
  // custom domain
  const uuid = uuidv4();
  eval(`window.`+uuid+` = function(val) {
  if (window.date_regex.test(val)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        document.getElementById("`+uuid+`2").innerText = "$"+this.responseText;
      }
    });
    xhr.open("GET", "https://api.just-right.space/other/"+val);
    xhr.send();
  } else {
    document.getElementById("`+uuid+`2").innerText = "Invalid Date";
  }
};`);
  var form = document.createElement("form");
  form.setAttribute("style", "margin: 0; box-sizing: border-box; height: 520px; width: 400px; background-color: rgba(255, 255, 255, 0.13); position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.1); box-shadow: 0 0 40px rgba(8, 7, 16, 0.6); padding: 50px 35px;");
  form.setAttribute("id", uuid);
  form.innerHTML = `<h3 style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; font-size: 32px; font-weight: 500; line-height: 42px; text-align: center;">Other Food Price Calculator</h3>
<br>
<div class="datepicker relative form-floating mb-3 xl:w-96" style="margin-bottom: 0;">
  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none form-icon-trailing" placeholder="Select a date" style="width: 330px;" onchange="window.`+uuid+`(this.value)">
  <label for="floatingInput" class="text-gray-700">Enter A Date</label>
  <button type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">
    <i class="far fa-calendar datepicker-toggle-icon"></i>
  </button>
</div>
<span style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; cursor: context-menu;"><button style="margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; outline: none; border: none; margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: context-menu;" id="`+uuid+`2">&nbsp;</button></span>
<a class="btn btn-outline btn-error" style="margin-top: 110px; margin-left: 265px;" onclick="document.getElementById('`+uuid+`').remove();">Exit</a>`;
  document.body.appendChild(form);
};

document.getElementById("sweets").onclick = function() {
  // make all other buttons unable to click while modal is open
  // custom domain
  const uuid = uuidv4();
  eval(`window.`+uuid+` = function(val) {
  if (window.date_regex.test(val)) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        document.getElementById("`+uuid+`2").innerText = "$"+this.responseText;
      }
    });
    xhr.open("GET", "https://api.just-right.space/sweets/"+val);
    xhr.send();
  } else {
    document.getElementById("`+uuid+`2").innerText = "Invalid Date";
  }
};`);
  var form = document.createElement("form");
  form.setAttribute("style", "margin: 0; box-sizing: border-box; height: 520px; width: 400px; background-color: rgba(255, 255, 255, 0.13); position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.1); box-shadow: 0 0 40px rgba(8, 7, 16, 0.6); padding: 50px 35px;");
  form.setAttribute("id", uuid);
  form.innerHTML = `<h3 style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; font-size: 32px; font-weight: 500; line-height: 42px; text-align: center;">Sweets Price Calculator</h3>
<br>
<div class="datepicker relative form-floating mb-3 xl:w-96" style="margin-bottom: 0;">
  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none form-icon-trailing" placeholder="Select a date" style="width: 330px;" onchange="window.`+uuid+`(this.value)">
  <label for="floatingInput" class="text-gray-700">Enter A Date</label>
  <button type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">
    <i class="far fa-calendar datepicker-toggle-icon"></i>
  </button>
</div>
<span style="padding: 0; margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; color: #ffffff; letter-spacing: 0.5px; outline: none; border: none; cursor: context-menu;"><button style="margin: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; outline: none; border: none; margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: context-menu;" id="`+uuid+`2">&nbsp;</button></span>
<a class="btn btn-outline btn-error" style="margin-top: 110px; margin-left: 265px;" onclick="document.getElementById('`+uuid+`').remove();">Exit</a>`;
  document.body.appendChild(form);
};