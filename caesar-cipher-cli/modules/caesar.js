const caesar = (text, shift) => {
    return text.split('').map(el => {
        let letter = el.charCodeAt(0);
        if ((letter >= 65) && (letter <= 90)) {
            el = String.fromCharCode(((letter -65 + shift) % 26) + 65);
        } else if ((letter >= 97) && (letter <= 122)) {
          el = String.fromCharCode(((letter - 97 + shift) % 26) + 97);
      }
      return el;
    }).join('');
  };

  module.exports = {caesar};
