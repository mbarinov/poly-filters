describe('Lowercase filter', function () {

    var tmpl = '<span>{{ value | replace(oldValue, newValue) }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct String to replace', function (done) {
        testWrapper({
            value: 'Hello World',
            oldValue: 'World',
            newValue: 'Folks!'
        },function (el) {
            el.result.should.equal('Hello Folks!');
        }, done);
    });

    it('String undefined, not replaced', function (done) {
        testWrapper({
            value: 'Hello World',
            oldValue: 'world',
            newValue: 'Folks!'
        },function (el) {
            el.result.should.equal('Hello World');
        }, done);

    });

    it('Input isn\'t string', function (done) {

        testWrapper({
            value: 420,
            oldValue: 20,
            newValue: 1991
        },function (el) {
            el.result.should.equal('420');
        }, done);

    });

});