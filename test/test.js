'use strict';

const config = require(`${__dirname}/../config/config.json`)
const db = require(`${__dirname}/../models/index.js`)

describe('sushi', () => {
    describe('config development username', () => {
        it('should get the development username', () => {
            expect(config['development']['username']).toEqual('root');
        });
    });
});