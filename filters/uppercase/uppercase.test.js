describe('Uppercase test', function () {

    var tmpl = '<span>{{ value | uppercase }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct uppercase', function (done) {
        testWrapper({
            value: 'Max Barinov'
        },function (el) {
            el.result.should.equal('MAX BARINOV');
        }, done);
    });

    it('Incorrect input', function (done) {
        testWrapper({
            value: 123
        },function (el) {
            el.result.should.equal('123');
        }, done);
    });

});