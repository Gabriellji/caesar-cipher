const caesar = (text, shift, action = 'encode') => {
    shift = (action === 'decode') ? -shift : shift;
    return text.split('').map(el => {
        let letter = el.charCodeAt(0);
        if ((letter >= 65) && (letter <= 90)) {
            let letterNumber = ((letter - 65 + shift) % 26);
            el = String.fromCharCode(letterNumber >= 0 ? letterNumber + 65 : letterNumber + 91);
        } else if ((letter >= 97) && (letter <= 122)) {
          let letterNumber = ((letter - 97 + shift) % 26);
          el = String.fromCharCode(letterNumber >= 0 ? letterNumber + 97 : letterNumber + 123);
      }
      return el;
    }).join('');
  };

  module.exports = {caesar};