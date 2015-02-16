describe('Lowercase filter', function () {

    var tmpl = '<span>{{ value | lowercase }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct lowercase', function (done) {
        var el = document.querySelector('test-component');
        el.setAttribute('value', 'PUTIN');

        setTimeout(function () {
            el.result.should.equal('putin');
            done();
        }, 200);
    });

    it('Number input', function (done) {
        var el = document.querySelector('test-component');
        el.value = 123;

        setTimeout(function () {
            parseInt(el.result).should.equal(123);
            done();
        }, 100);
    });

});