var s = 'Podstawą szczęścia jest wolność, a podstawą wolności odwaga.';

var text = `Operuję na zdaniu: "${s}" \n\nTrzynastym znakiem w tym zdaniu jest: ${s.charAt(13)}. \nZnaki pomiędzy 7. a 12. pozycją to: ${s.substring(7,12)}. \nPierwszy raz znak 'ą' pojawia się na miejscu: ${s.indexOf('ą')}. \nTen ciąg ma ${s.length} znaków. \nPo zamianie 'podstawą' na 'fundamentem' mamy: ${s.replace('podstawą', 'fundamentem')}. \nCzęść zdania przed przecinkiem to: ${s.split(',')[0]}. \nDruga część zdania po odwróceniu to: ${s.split(',')[1].split('').reverse().join('')}.`;

console.log(text);