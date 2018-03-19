function pole(kat, r, pi) {
    
  const realPi = typeof pi !== 'undefined' ? pi : Math.PI;
  
    return kat/360 * realPi * r * r;
    
}

console.log(pole(30, 5, 3.14));
console.log(pole(30, 5, 22/7));
console.log(pole(30, 5));