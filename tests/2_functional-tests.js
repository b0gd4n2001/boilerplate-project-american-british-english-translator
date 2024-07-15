const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('Translation with text and locale fields: POST request to /api/translate', function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({
                locale: 'british-to-american',
                text: 'Paracetamol takes up to an hour to work.'
            })
            .end((err, res) => {
                assert.equal(res.body.translation, `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
                done();
            });
    });
    test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({
                locale: 'british-to-romanian',
                text: 'Paracetamol takes up to an hour to work.'
            })
            .end((err, res) => {
                assert.equal(res.body.error, `Invalid value for locale field`);
                done();
            });
    });
    test('Translation with missing text field: POST request to /api/translate', function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({
                locale: 'british-to-american'
            })
            .end((err, res) => {
                assert.equal(res.body.error, `Required field(s) missing`);
                done();
            });
    });
    test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({
                text: 'Paracetamol takes up to an hour to work.'
            })
            .end((err, res) => {
                assert.equal(res.body.error, `Required field(s) missing`);
                done();
            });
    });
    test('Translation with missing text field: POST request to /api/translate', function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({
                locale: 'british-to-american',
                text: ''
            })
            .end((err, res) => {
                assert.equal(res.body.error, `No text to translate`);
                done();
            });
    });
    test('Translation with text and locale fields: POST request to /api/translate', function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({
                locale: 'british-to-american',
                text: `I’ve been working on the World Wide Web, All the live-long day. I’ve been coding, designing, and debugging, Just to make the internet play.`
            })
            .end((err, res) => {
                assert.equal(res.body.translation, `Everything looks good to me!`);
                done();
            });
    });

});
