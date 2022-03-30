const sass = require('sass');

module.exports = src => {
  const styles = sass.compileString(src);

  return `
    const styleNode = document.createElement('style');
    styleNode.innerHTML = \`${styles.css}\`;
    document.head.appendChild(styleNode);
  `;
}