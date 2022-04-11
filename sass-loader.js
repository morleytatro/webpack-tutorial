const sass = require('sass');

module.exports = src => {
  const compiled = sass.compileString(src);

  return `
    const style = document.createElement('style');

    style.innerHTML = \`${compiled.css}\`;
    document.head.appendChild(style);
  `;
}