describe('Lowercase filter', function () {

    var tmpl = '<span>{{ value | replace(oldValue, newValue) }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct String to replace', function (done) {
        var el = document.querySelector('test-component');
        el.value = 'Hello World';
        el.oldValue = 'World';
        el.newValue = 'Folks!';

        setTimeout(function() {
            el.result.should.equal('Hello Folks!');
            done();
        }, 100);
    });

    it('String undefined, not replaced', function (done) {
        var el = document.querySelector('test-component');
        el.value = 'Hello World';
        el.oldValue = 'world';
        el.newValue = 'Folks!';

        setTimeout(function() {
            el.result.should.equal('Hello World');
            done();
        }, 100);
    });

    it('Input isn\'t string', function (done) {
        var el = document.querySelector('test-component');
        el.value = 420;
        el.oldValue = 20;
        el.newValue = 1991;

        setTimeout(function() {
            el.result.should.equal('420');
            done();
        }, 100);
    });

});