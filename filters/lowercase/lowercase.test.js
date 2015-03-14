describe('Lowercase filter', function () {

    var tmpl = '<span>{{ value | lowercase }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct lowercase', function (done) {
        testWrapper({
            value: 'PUTIN'
        },function (el) {
            el.result.should.equal('putin');
        }, done);
    });

    it('Number input', function (done) {
        testWrapper({
            value: 123
        },function (el) {
            el.result.should.equal('123');
        }, done);
    });
});