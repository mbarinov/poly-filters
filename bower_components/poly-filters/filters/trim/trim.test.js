describe('Trim test', function () {

    var tmpl = '<span>{{ value | trim }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct trim', function (done) {
        testWrapper({
            value: ' string '
        },function (el) {
            el.result.should.equal('string');
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