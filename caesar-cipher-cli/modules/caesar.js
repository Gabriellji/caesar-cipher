const caesar = (text, shift) => {
    return text.split('').map((el) => {
        let isUpperCase = true;
        let char = el.toUpperCase();
        let letter = char.charCodeAt(0);
        if (!(letter > 64 && letter < 91) || !(letter > 96 && letter < 123)) {
            return el;
        }
        if (el !== char) {
            isUpperCase= false;
        }
        letter += shift;
        char = isUpperCase ? String.fromCharCode(letter) : String.fromCharCode(letter).toLowerCase();
        return char;
    }).join('');
  };