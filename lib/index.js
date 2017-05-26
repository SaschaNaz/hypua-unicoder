"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_js_1 = require("./db.js");
function default_1(text, options = {}) {
    const { htmlEscape } = options;
    const result = [];
    for (const c of text) {
        if (db_js_1.default.hasOwnProperty(c)) {
            if (htmlEscape) {
                result.push(escapeInHTMLEntity(db_js_1.default[c]));
            }
            else {
                result.push(db_js_1.default[c]);
            }
        }
        else {
            result.push(c);
        }
    }
    return result.join('');
}
exports.default = default_1;
;
function escapeInHTMLEntity(text) {
    const result = [];
    for (const c of text) {
        result.push(`&#${c.charCodeAt(0)};`);
    }
    return result.join('');
}
