describe('Length test', function () {

    var tmpl = '<span>{{ value | length }}</span>';

    beforeEach(function(done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct length', function (done) {
        testWrapper(null, function (el) {
            parseInt(el.result).should.equal(4);
        }, done);

    });

    it('Wrong value', function(done) {

        testWrapper({
            value: '123123'
        },function (el) {
            parseInt(el.result).should.not.equal(4);
        }, done);


    });

});