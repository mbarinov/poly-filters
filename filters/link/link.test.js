describe('Link', function () {

    var tmpl = '<span>{{ value | link(format) }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Default format (host)', function (done) {
        var el = document.querySelector('test-component');
        el.value = 'https://news.layervault.com';

        setTimeout(function () {
            el.result.should.equal('news.layervault.com');
            done();
        }, 100);
    });

    it('Domain format', function (done) {
        var el = document.querySelector('test-component');
        el.value = 'https://news.layervault.com';
        el.format = 'domain';

        setTimeout(function () {
            el.result.should.equal('layervault.com');
            done();
        }, 100);
    });

    it('Default format (host)', function (done) {
        var el = document.querySelector('test-component');
        el.value = 'https://news.layervault.com';

        setTimeout(function () {
            el.result.should.equal('news.layervault.com');
            done();
        }, 100);
    });

    it('Pathname', function (done) {
        var el = document.querySelector('test-component');
        el.value = 'https://news.layervault.com/somelink';
        el.format = 'pathname';

        setTimeout(function () {
            el.result.should.equal('/somelink');
            done();
        }, 100);
    });

});