const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(input) {
        if (input.locale == undefined || input.text == undefined) return { error: 'Required field(s) missing' };
        let lexicon;
        let result = input.text;
        if (result == '') return { error: 'No text to translate' };
        if (input.locale == 'american-to-british') {
            let regex = /([0-1]?[0-9]|2[0-4]):([0-5][0-9])/
            result = result.replace(regex, (match, p1, p2) => '<span class="highlight">' + p1 + '.' + p2 + '</span>')
            lexicon = {
                ...americanOnly,
                ...americanToBritishSpelling,
                ...americanToBritishTitles
            };
        } else if (input.locale == 'british-to-american') {
            let regex = /([0-1]?[0-9]|2[0-4]).([0-5][0-9])/
            result = result.replace(regex, (match, p1, p2) => p1 + ':' + p2)
            lexicon = britishOnly;
            for (let i of [...Object.entries(americanToBritishSpelling), ...Object.entries(americanToBritishTitles)]) {
                lexicon[i[1]] = i[0]
            }
        } else {
            return { error: 'Invalid value for locale field' };
        };
        for (let i of Object.keys(lexicon)) {
            let regex = new RegExp('(?<!\\w)' + i + '(?!\\w)')
            let uppercase = i[0].toUpperCase() + i.slice(1);
            let uRegex = new RegExp('(?<!\\w)' + uppercase + '(?!\\w)')
            result = result.replace(regex, `<span class="highlight">` + lexicon[i] + `</span>`);
            result = result.replace(uRegex, `<span class="highlight">` + lexicon[i][0].toUpperCase() + lexicon[i].slice(1) + `</span>`);
        };
        if (input.text == result) return {text: input.text, translation: "Everything looks good to me!"};
        return { text: input.text, translation: result };
    }

}

module.exports = Translator;