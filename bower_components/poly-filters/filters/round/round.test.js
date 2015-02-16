describe('Round', function () {

    var tmpl = '<span>{{ value | round }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Number round', function (done) {
        var el = document.querySelector('test-component');
        el.value = 146.123;

        setTimeout(function () {
            el.result.should.equal('146');
            done();
        }, 100);
    });

    it('Zero', function (done) {
        var el = document.querySelector('test-component');
        el.value = 0;

        setTimeout(function () {
            el.result.should.equal('0');
            done();
        }, 100);
    });

    it('String round', function (done) {
        var el = document.querySelector('test-component');
        el.value = 'test';

        setTimeout(function () {
            el.result.should.equal('test');
            done();
        }, 100);
    });

});