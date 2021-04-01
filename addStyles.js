/**
 * To add styles
 * addStyles({
 *   pre: {
 *     'font-family': 'Hasklig !important',
 *     'font-style': 'bold !important`,
 *   },
 *   '.CodeMirror-linenumber': {
 *     'font-family': 'Hasklig !important'
 *   }
 * })
 * 
 * @param {Object.<string, Object.<string, string>>} rules
 */
function addStyles(rules) {
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  Object.entries(rules).forEach(([selector, cssRules]) => {
    const css = Object.entries(cssRules)
      .map(([prop, val]) => `${prop}: ${val};`)
      .join("\n");
    sheet.insertRule(`${selector} { ${css} }`);
  });
}
