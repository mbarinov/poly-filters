describe('Uppercase test', function () {

    var tmpl = '<span>{{ value | uppercase }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct uppercase', function (done) {
        var el = document.querySelector('test-component');
        el.setAttribute('value', 'Max Barinov');

        setTimeout(function () {
            el.result.should.equal('MAX BARINOV');
            done();
        }, 100);
    });

    it('Incorrect input', function (done) {
        var el = document.querySelector('test-component');
        el.value = 123;

        setTimeout(function () {
            parseInt(el.result).should.equal(123);
            done();
        }, 100);
    });

});