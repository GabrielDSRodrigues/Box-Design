function id(e) { return document.getElementById(e); }

let range = {
  elements: document.getElementsByClassName("range"),
  values: function(i) { return document.getElementsByClassName("range-values"); },
  event: function(i) {
    this.elements[i].addEventListener("change", function() {
      range.values()[i].innerText = this.value;
    });
  },
  def: function() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].insertAdjacentHTML("afterend",
        `
          <label class="range-values">${this.elements[i].value}</label>
        `
      );
      this.event(i);
    }
  }
}
range.def();

let element = {
  elm: id("box-element"),
  code: id("code-attributes"),
  boxShadow: "#EFEFEF",
  boxShadowColor: "#EFEFEF",
  borderRadius: "0",
  rgba: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  },
  padding: "0",
  height: "",
  width: "",
  atl: function() {

    let rgba = `rgba(${this.rgba.r},${this.rgba.g},${this.rgba.b},${this.rgba.a})`;

    this.elm.style.boxShadow = this.boxShadow;
    this.elm.style.borderRadius = this.borderRadius;
    this.elm.style.padding = this.padding;
    this.elm.style.backgroundColor = rgba;

    this.code.innerHTML = `
      <p>&emsp;box-shadow: <b>${this.boxShadow}</b>;</p>
      <p>&emsp;border-radius: <b>${this.borderRadius}</b>;</p>
      <p>&emsp;background-color: <b>${rgba}</b>;</p>
      <p>&emsp;padding: <b>${this.padding}</b>;</p>
    `;
  }
}


/////


// Controle da cor do Box-shadow
let shadowColor = id("box-shadow-color");
shadowColor.addEventListener("change", function() {
  element.boxShadowColor = this.value;
});

// Conteole do Box-shadow
let shadow = id("box-shadow");
shadow.addEventListener("change", function() {
  element.boxShadow = `0 0 ${this.value}px ${element.boxShadowColor}`;
  element.atl();
});


/////


// Controle das curvas das Bordas
let radius = id("border-radius");
radius.addEventListener("change", function() {
  element.borderRadius = `${this.value}px`;
  element.atl();
});


/////


// Controle do espaçamento Interno
let padding = id("padding");
padding.addEventListener("change", function() {
  element.padding = `${this.value}px`;
  element.atl();
});


/////


// Controle da cor de Fundo
let rgba = {
  r: id("rgba-r"),
  g: id("rgba-g"),
  b: id("rgba-b"),
  a: id("rgba-a")
}

rgba.r.addEventListener("change", function() {
  element.rgba.r = this.value;
  element.atl();
});

rgba.g.addEventListener("change", function() {
  element.rgba.g = this.value;
  element.atl();
});

rgba.b.addEventListener("change", function() {
  element.rgba.b = this.value;
  element.atl();
});

rgba.a.addEventListener("change", function() {
  element.rgba.a = this.value;
  element.atl();
});