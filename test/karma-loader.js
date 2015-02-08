'use strict';
mocha.setup('bdd');

window.__karma__.loaded = function () {};

window.addEventListener('polymer-ready', function run() {
    window.__karma__.start();
    window.removeEventListener('polymer-ready', run);
});

window.initTemplate = function(template) {
    var wrapper = document.querySelector('#test');

    if(wrapper) {
        wrapper.parentNode.removeChild(wrapper);
    }

    var el = document.createElement('div');
    el.id = 'test';

    el.innerHTML = '<test-component value="test" result="{{result}}">' +
    template +
    '</test-component>';

    document.body.appendChild(el);
};