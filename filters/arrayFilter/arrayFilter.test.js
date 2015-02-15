describe.only('Array filter', function () {

    var tmpl = '<span>{{ value | arrayFilter(format, prop, true) }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Search in array', function (done) {
        var el = document.querySelector('test-component');
        el.value = [
            {
                name: 'Addy Osmani'
            },
            {
                name: 'Paul Irish'
            },
            {
                name: 'Ryan Dahl'
            },
            {
                name: 'Sara Chipps'
            }
        ];
        el.format = 'name';
        el.prop = 'Paul Irish';

        setTimeout(function () {
            el.result.should.equal('[{"name":"Paul Irish"}]');
            done();
        }, 100);
    });

});