describe('Link', function () {

    var tmpl = '<span>{{ value | link(format) }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Default format (host)', function (done) {
        testWrapper({
            value: 'https://news.layervault.com'
        },function (el) {
            el.result.should.equal('news.layervault.com');
        }, done);
    });

    it('Domain format', function (done) {
        testWrapper({
            value: 'https://news.layervault.com',
            format: 'domain'
        },function (el) {
            el.result.should.equal('layervault.com');
        }, done);
    });

    it('Pathname', function (done) {
        testWrapper({
            value: 'https://news.layervault.com/somelink',
            format: 'pathname'
        },function (el) {
            el.result.should.equal('/somelink');
        }, done);
    });

});