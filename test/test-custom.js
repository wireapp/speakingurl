/* global describe,it */

var getSlug = require('../lib');

describe('getSlug with custom replacement', function () {
    'use strict';

    it('should be added to allowed chars', function (done) {

        getSlug('буу', {
                lang: false,
                custom: {
                    'б': 'б',
                    'у': 'y'
                }
            })
            .should.eql('бyy');

        getSlug('[nodejs]', {
                custom: {
                    '[': '[',
                    ']': ']'
                }
            })
            .should.eql('[nodejs]');

        getSlug('[Äpfel]', {
                custom: {
                    '[': '[',
                    ']': ']'
                }
            })
            .should.eql('[aepfel]');

        getSlug('[Äpfel]', {
                lang: false,
                custom: {
                    '[': '[',
                    ']': ']'
                }
            })
            .should.eql('[aepfel]');

        getSlug('[Knöpfe]', {
                custom: ['[', ']']
            })
            .should.eql('[knoepfe]');

        getSlug('[Knöpfe]', {
                maintainCase: true,
                custom: ['[', ']']
            })
            .should.eql('[Knoepfe]');

        getSlug('[Knöpfe haben Löcher]', {
                titleCase: true,
                custom: ['[', ']']
            })
            .should.eql('[Knoepfe-Haben-Loecher]');

        getSlug('[knöpfe haben runde löcher]', {
                titleCase: ['haben', 'runde'],
                custom: ['[', ']']
            })
            .should.eql('[Knoepfe-haben-runde-Loecher]');

        getSlug('[knöpfe haben runde löcher]', {
                titleCase: ['haben', 'runde'],
                maintainCase: true,
                custom: ['[', ']']
            })
            .should.eql('[Knoepfe-haben-runde-Loecher]');

        done();
    });

});
