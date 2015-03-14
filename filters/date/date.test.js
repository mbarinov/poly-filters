describe('Date test', function () {

    var tmpl = '<span>{{ value | date(format) }}</span>';

    beforeEach(function(done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct length', function (done) {

        testWrapper({
            value: '2012-01-02'
        },function (el) {
            el.result.should.equal('01/02/2012');
        }, done);

    });


    it('format test yyyy-MM-dd HH:mm:ss Z', function (done) {

        testWrapper({
            value: '2012-01-02 07:00',
            format: 'yyyy-MM-dd HH:mm:ss Z'
        },function (el) {
            el.result.should.equal('2012-01-02 07:00:00 Z');
        }, done);
    });

    it('short year format', function (done) {

        testWrapper({
            value: '2012',
            format: 'yy'
        },function (el) {
            el.result.should.equal('12');
        }, done);

    });

    it('t format, am', function (done) {

        testWrapper({
            value: '2012-01-02 23:00',
            format: 't'
        },function (el) {
            el.result.should.equal('pm');
        }, done);
    });

    it('t format, pm', function (done) {

        testWrapper({
            value: '2012-01-02',
            format: 't'
        },function (el) {
            el.result.should.equal('am');
        }, done);


    });


    it('hh format, pm', function (done) {

        testWrapper({
            value: '2012-01-02 23:00',
            format: 'hh'
        },function (el) {
            el.result.should.equal('11');
        }, done);

    });

    it('hh format, 0:0', function (done) {

        testWrapper({
            value: '2012-01-02 0:0',
            format: 'hh'
        },function (el) {
            el.result.should.equal('12');
        }, done);

    });

});