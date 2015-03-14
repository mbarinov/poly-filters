describe('Reverse test', function () {

    var tmpl = '<span>{{ value | reverse }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct reverse', function (done) {
        testWrapper({
            value: 'max'
        },function (el) {
            el.result.should.equal('xam');
        }, done);
    });
});