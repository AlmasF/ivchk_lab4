function onChange_func() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

function onClick_func() {
    document.getElementById("once").innerHTML = "Новое сообщение!";
}

function bigImg(x) {
    x.style.height = "128px";
    x.style.width = "128px";
  }

function normalImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function onKeydown_func() {
    document.getElementById("keyd").style.backgroundColor = "#ffb961";
}

function onKeyup_func() {
    document.getElementById("keyd").style.backgroundColor = "white";
}

function onload_func() {
    alert("Страница загружена! Можете работать");
  }

function submit_func() {
    document.getElementById("myForm").submit();
}