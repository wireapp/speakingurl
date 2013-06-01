/* global describe,it */

var getSlug = require('../lib');

describe('getSlug smart truncate', function () {
    'use strict';

    it('should maintain case characters, with smart truncate', function (done) {

        getSlug('Foobarbaz, Bar Baz', {
            truncate: 12
        }).should.eql('foobarbaz');

        getSlug('Foobarbaz, Bar Baz', {
            truncate: 15
        }).should.eql('foobarbaz-bar');

        getSlug(' Foobarbaz, Bar Baz', {
            truncate: 15
        }).should.eql('foobarbaz-bar');

        getSlug('  Foobarbaz,    Bar Baz', {
            truncate: 15
        }).should.eql('foobarbaz-bar');

        done();
    });

});