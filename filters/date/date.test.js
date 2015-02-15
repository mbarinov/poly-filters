describe('Date test', function () {

    var tmpl = '<span>{{ value | date(format) }}</span>';

    beforeEach(function(done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct length', function (done) {
        var el = document.querySelector('test-component');
        el.value = '2012-01-02';

        setTimeout(function() {
            el.result.should.equal('01/02/2012');
            done();
        }, 100);
    });


    it('format test yyyy-MM-dd HH:mm:ss Z', function (done) {
        var el = document.querySelector('test-component');
        el.value = '2012-01-02';
        el.format = 'yyyy-MM-dd HH:mm:ss Z';

        setTimeout(function() {
            el.result.should.equal('2012-01-02 07:00:00 Z');
            done();
        }, 100);
    });

    it('short year format', function (done) {
        var el = document.querySelector('test-component');
        el.value = '2012';
        el.format = 'yy';

        setTimeout(function() {
            el.result.should.equal('12');
            done();
        }, 100);
    });

    it('t format, am', function (done) {
        var el = document.querySelector('test-component');
        el.value = '2012-01-02 23:00';
        el.format = 't';

        setTimeout(function() {
            el.result.should.equal('pm');
            done();
        }, 100);
    });

    it('t format, pm', function (done) {
        var el = document.querySelector('test-component');
        el.value = '2012-01-02';
        el.format = 't';

        setTimeout(function() {
            el.result.should.equal('am');
            done();
        }, 100);
    });


    it('hh format, pm', function (done) {
        var el = document.querySelector('test-component');
        el.value = '2012-01-02 23:00';
        el.format = 'hh';

        setTimeout(function() {
            el.result.should.equal('11');
            done();
        }, 100);
    });

    it('hh format, 0:0', function (done) {
        var el = document.querySelector('test-component');
        el.value = '2012-01-02 0:0';
        el.format = 'hh';

        setTimeout(function() {
            el.result.should.equal('12');
            done();
        }, 100);
    });

});