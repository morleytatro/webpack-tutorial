import './styles.scss';

const p = document.createElement('p');
p.innerText = 'Hello World!';
p.className = 'some-class';

document.querySelector('#app').appendChild(p);