describe('Uppercase test', function () {

    var tmpl = '<span>{{ "Max Barinov" | uppercase }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct uppercase', function (done) {
        var el = document.querySelector('test-component');

        setTimeout(function () {
            el.result.should.equal('MAX BARINOV');
            done();
        }, 100);
    });

});