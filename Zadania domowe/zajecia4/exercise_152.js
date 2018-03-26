class Figura {
  constructor(nazwa) {
    this.nazwa = nazwa;
  }
}

class Czworokat extends Figura {
  constructor(nazwa, typ, a, b, c, d) {
    super(nazwa);
    this.typ = typ;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
}

class Prostokat extends Czworokat {
  constructor(nazwa, typ, a, b, c, d) {
    super(nazwa, typ, a, b, c, d);
  }
  podaj_nazwe() {
    console.log(`Nazwa: ${this.nazwa}`);
  }
  podaj_typ() {
    console.log(`Typ: ${this.typ}`);
  }
  podaj_pole() {
    console.log(`Pole: ${this.a*this.c}`);
  }
  podaj_obwod() {
    console.log(`Obwod: ${this.a+this.b+this.c+this.d}`);
  }
}

let prostokat = new Prostokat('fajny', 'Prostokat', 5, 5, 8, 8);

prostokat.podaj_nazwe();
prostokat.podaj_typ();
prostokat.podaj_pole();
prostokat.podaj_obwod();
