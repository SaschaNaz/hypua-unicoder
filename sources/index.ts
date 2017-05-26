import dictionary from "./db.js"

export default function (text: string, options: { htmlEscape?: boolean } = {}) {
    const { htmlEscape } = options;
    const result: string[] = [];

    for (const c of text) {
        if (dictionary.hasOwnProperty(c)) {
            if (htmlEscape) {
                result.push(escapeInHTMLEntity(dictionary[c]));
            }
            else {
                result.push(dictionary[c]);
            }
        }
        else {
            result.push(c);
        }
    }

    return result.join('');
};

function escapeInHTMLEntity(text: string) {
    const result: string[] = [];
    
    for (const c of text) {
        result.push(`&#${c.charCodeAt(0)};`);
    }

    return result.join('');
}