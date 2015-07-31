'use strict';

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var ImRaising = require('imraising-tracker');

module.exports = function(nodecg) {
    // Check that config is present and valid
    if (!nodecg.bundleConfig) {
        throw new Error('No config found in cfg/lfg-imraising.json, aborting!');
    } else if (typeof nodecg.bundleConfig.apiKey !== 'string') {
        throw new Error('ImRaising advanced apiKey not present in config! Should be a string. Aborting.');
    }

    var listener = new ImRaising({ key: nodecg.bundleConfig.apiKey });
    listener.on('donation.add', function(donation) {
        // We got a new donation.
        // 'donation' is an object which matches the description given on the ImRaising API page
        emitter.emit('donation', donation);
    });

    nodecg.listenFor('testDonation', function() {
        listener.testDonation();
    });

    return emitter;
};
