import './app.scss';

const p = document.createElement('p');
p.innerText = 'Changed!';
p.className = 'some-class';

document.querySelector('#app')
  .appendChild(p);