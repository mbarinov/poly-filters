describe('Array filter', function () {

    var tmpl = '<span>{{ value | arrayFilter(format, prop, true) }}</span>';

    beforeEach(function (done) {
        initTemplate(tmpl);
        done();
    });

    it('Search in array', function (done) {

        testWrapper({
            value: [
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
            ],
            format: 'name',
            prop: 'Paul Irish'
        },function (el) {
            el.result.should.equal('[{"name":"Paul Irish"}]');
        }, done);

    });

    it('Empty value', function (done) {
        testWrapper({
            value: [
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
            ],
            format: 'name',
            prop: ''
        },function (el) {
            el.result.should.be;
        }, done);


    });


});