describe('Reverse test', function () {

    var tmpl = '<span>{{ value | reverse }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct uppercase', function (done) {
        var el = document.querySelector('test-component');
        el.setAttribute('value', 'max');

        setTimeout(function () {
            el.result.should.equal('xam');
            done();
        }, 100);
    });

});