describe('Round', function () {

    var tmpl = '<span>{{ value | round }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Number round', function (done) {
        testWrapper({
            value: 146.123
        },function (el) {
            el.result.should.equal('146');
        }, done);
    });

    it('Zero', function (done) {
        testWrapper({
            value: 0
        },function (el) {
            el.result.should.equal('0');
        }, done);
    });

    it('String round', function (done) {
        testWrapper({
            value: 'test'
        },function (el) {
            el.result.should.equal('test');
        }, done);
    });

});