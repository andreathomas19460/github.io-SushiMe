'use strict';

const config = require(`${__dirname}/../config/config.json`)
const db = require(`${__dirname}/../models/index.js`)
const htmlRoutes = require(`${__dirname}/../routes/htmlRoutes.js`)
const sushi = require(`${__dirname}/../public/assets/js/sushi.js`)

describe('sushi', () => {
    describe('config development username', () => {
        it('should get the development username', () => {
            expect(config['development']['username']).toEqual('root');
        });
    });

    describe('japanese translation match english', () => {
        it('should match the translation', () => {
            expect(htmlRoutes.sushiList[0][2]).toEqual('サバ');
        });
    });

});