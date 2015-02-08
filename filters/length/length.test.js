describe('Length test', function () {

    var tmpl = '<span>{{ value | length }}</span>';

    beforeEach(function(done) {
        initTemplate(tmpl);
        done();
    });

    it('Correct length', function (done) {
        var el = document.querySelector('test-component');

        setTimeout(function() {
            parseInt(el.result).should.equal(4);
            done();
        }, 100);
    });

    it('Wrong value', function(done) {
        var el = document.querySelector('test-component');

        el.value = '123123';

        setTimeout(function() {
            parseInt(el.result).should.not.equal(4);
            done();
        }, 100);

    });

});