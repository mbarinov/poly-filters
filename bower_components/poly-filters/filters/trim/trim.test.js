describe('Trim test', function () {

    var tmpl = '<span>{{ value | trim }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct trim', function (done) {
        var el = document.querySelector('test-component');
        el.setAttribute('value', ' string ');

        setTimeout(function () {
            el.result.should.equal('string');
            done();
        }, 100);
    });

    it('Incorrect input', function (done) {
        var el = document.querySelector('test-component');
        el.value = 123;

        setTimeout(function () {
            el.result.should.equal('123');
            done();
        }, 100);
    });

});