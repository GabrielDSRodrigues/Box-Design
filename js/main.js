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
  boxShadow: {
    x: 0,
    y: 0,
    l: 0,
    color: "#EFEFEF"
  },
  borderRadius: "0",
  background: "#FFF",
  padding: "0",
  height: "",
  width: "",
  atl: function() {
    let boxShadow = `${this.boxShadow.x}px ${this.boxShadow.y}px ${this.boxShadow.l}px ${this.boxShadow.color}`;

    this.elm.style.boxShadow = boxShadow;
    this.elm.style.borderRadius = this.borderRadius;
    this.elm.style.padding = this.padding;
    this.elm.style.background = this.background;

    this.code.innerHTML = `
      <p>&emsp;box-shadow: <b>${boxShadow}</b>;</p>
      <p>&emsp;border-radius: <b>${this.borderRadius}</b>;</p>
      <p>&emsp;background: <b>${this.background}</b>;</p>
      <p>&emsp;padding: <b>${this.padding}</b>;</p>
    `;
  }
}


/////

// Controle da cor do Box-shadow
let shadowColor = id("box-shadow-color");
shadowColor.addEventListener("change", function() {
  element.boxShadow.color = this.value;
  element.atl();
});

// Controle do Box-shadow
let shadow = id("box-shadow");
shadow.addEventListener("change", function() {
  element.boxShadow.l = this.value;
  element.atl();
});

// Controle do eixo x Box-shadow
let shadowX = id("box-shadow-x");
shadowX.addEventListener("change", function() {
  element.boxShadow.x = this.value;
  element.atl();
});

// Controle do eixo y Box-shadow
let shadowY = id("box-shadow-y");
shadowY.addEventListener("change", function() {
  element.boxShadow.y = this.value;
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
  a: id("rgba-a"),
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  },
  def: function() {
    element.background = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
  }
}

rgba.r.addEventListener("change", function() {
  rgba.color.r = this.value;
  rgba.def();
  element.atl();
});

rgba.g.addEventListener("change", function() {
  rgba.color.g = this.value;
  rgba.def();
  element.atl();
});

rgba.b.addEventListener("change", function() {
  rgba.color.b = this.value;
  rgba.def();
  element.atl();
});

rgba.a.addEventListener("change", function() {
  rgba.color.a = this.value;
  rgba.def();
  element.atl();
});


/////


// Controle da cor do Elemento em gradiente
let bgGradient = {
  color1: id("background-gradient-color1"),
  color2: id("background-gradient-color2"),
  angulo: id("background-gradient-angulo"),
  def: function() {
    element.background = `linear-gradient(${this.angulo.value}deg, ${this.color1.value}, ${this.color2.value})`;
  }
}

bgGradient.color1.addEventListener("change", function() {
  bgGradient.def();
  element.atl();
});

bgGradient.color2.addEventListener("change", function() {
  bgGradient.def();
  element.atl();
});

bgGradient.angulo.addEventListener("change", function() {
  bgGradient.def();
  element.atl();
});