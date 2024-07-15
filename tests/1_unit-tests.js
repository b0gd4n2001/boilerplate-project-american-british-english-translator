const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const trl = new Translator;

suite('Unit Tests', () => {
    test('Translate Mangoes are my favorite fruit. to British English', function (done) {
        assert.equal(trl.translate({ locale: 'american-to-british', text: 'Mangoes are my favorite fruit.' }).translation, `Mangoes are my <span class="highlight">favourite</span> fruit.`)
        done();
    })
    test(`Translate I ate yogurt for breakfast. to British English`, function (done) {
        assert.equal(trl.translate({ locale: `american-to-british`, text: `I ate yogurt for breakfast.` }).translation, `I ate <span class="highlight">yoghurt</span> for breakfast.`)
        done();
    })
    test(`Translate We had a party at my friend's condo. to British English`, function (done) {
        assert.equal(trl.translate({ locale: `american-to-british`, text: `We had a party at my friend's condo.` }).translation, `We had a party at my friend's <span class="highlight">flat</span>.`)
        done();
    })
    test(`Translate Can you toss this in the trashcan for me? to British English`, function (done) {
        assert.equal(trl.translate({ locale: `american-to-british`, text: `Can you toss this in the trashcan for me?` }).translation, `Can you toss this in the <span class="highlight">bin</span> for me?`)
        done();
    })
    test(`Translate The parking lot was full. to British English`, function (done) {
        assert.equal(trl.translate({ locale: `american-to-british`, text: `The parking lot was full.` }).translation, `The <span class="highlight">car park</span> was full.`)
        done();
    })
    test(`Translate Like a high tech Rube Goldberg machine. to British English`, function (done) {
        assert.equal(trl.translate({ locale: `american-to-british`, text: `Like a high tech Rube Goldberg machine.` }).translation, `Everything looks good to me!`)
        done();
    })
    test(`Translate To play hooky means to skip class or work. to British English`, function (done) {
        assert.equal(trl.translate({ locale: `american-to-british`, text: `To play hooky means to skip class or work.` }).translation, `To <span class="highlight">bunk off</span> means to skip class or work.`)
        done();
    })
    test(`Translate No Mr. Bond, I expect you to die. to British English`, function (done) {
        assert.equal(trl.translate({ locale: `american-to-british`, text: `No Mr. Bond, I expect you to die.` }).translation, `No <span class="highlight">Mr</span> Bond, I expect you to die.`)
        done();
    })
    test(`Translate Dr. Grosh will see you now. to British English`, function (done) {
        assert.equal(trl.translate({ locale: `american-to-british`, text: `Dr. Grosh will see you now.` }).translation, `<span class="highlight">Dr</span> Grosh will see you now.`)
        done();
    })
    test(`Translate Lunch is at 12:15 today. to British English`, function (done) {
        assert.equal(trl.translate({ locale: `american-to-british`, text: `Lunch is at 12:15 today.` }).translation, `Lunch is at <span class="highlight">12.15</span> today.`)
        done();
    })
    test(`Translate We watched the footie match for a while. to American English`, function (done) {
        assert.equal(trl.translate({ locale: `british-to-american`, text: `We watched the footie match for a while.` }).translation, `We watched the <span class="highlight">soccer</span> match for a while.`)
        done();
    })
    test(`Translate Paracetamol takes up to an hour to work. to American English`, function (done) {
        assert.equal(trl.translate({ locale: `british-to-american`, text: `Paracetamol takes up to an hour to work.` }).translation, `<span class="highlight">Tylenol</span> takes up to an hour to work.`)
        done();
    })
    test(`Translate First, caramelise the onions. to American English`, function (done) {
        assert.equal(trl.translate({ locale: `british-to-american`, text: `First, caramelise the onions.` }).translation, `First, <span class="highlight">caramelize</span> the onions.`)
        done();
    })
    test(`Translate I spent the bank holiday at the funfair. to American English`, function (done) {
        assert.equal(trl.translate({ locale: `british-to-american`, text: `I spent the bank holiday at the funfair.` }).translation, `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`)
        done();
    })
    test(`Translate I had a bicky then went to the chippy. to American English`, function (done) {
        assert.equal(trl.translate({ locale: `british-to-american`, text: `I had a bicky then went to the chippy.` }).translation, `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`)
        done();
    })
    test(`Translate I've just got bits and bobs in my bum bag. to American English`, function (done) {
        assert.equal(trl.translate({ locale: `british-to-american`, text: `I've just got bits and bobs in my bum bag.` }).translation, `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`)
        done();
    })
    test(`Translate The car boot sale at Boxted Airfield was called off. to American English`, function (done) {
        assert.equal(trl.translate({ locale: `british-to-american`, text: `The car boot sale at Boxted Airfield was called off.` }).translation, `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`)
        done();
    })
    test(`Translate Have you met Mrs Kalyani? to American English`, function (done) {
        assert.equal(trl.translate({ locale: `british-to-american`, text: `Have you met Mrs Kalyani?` }).translation, `Have you met <span class="highlight">Mrs.</span> Kalyani?`)
        done();
    })
    test(`Translate Prof Joyner of King's College, London. to American English`, function (done) {
        assert.equal(trl.translate({ locale: `british-to-american`, text: `Prof Joyner of King's College, London.` }).translation, `<span class="highlight">Prof.</span> Joyner of King's College, London.`)
        done();
    })
    test(`Translate Tea time is usually around 4 or 4.30. to American English`, function (done) {
        assert.equal(trl.translate({ locale: `british-to-american`, text: `Tea time is usually around 4 or 4.30.` }).translation, `Tea time is usually around 4 or <span class="highlight">4:30</span>.`)
        done();
    })
    test(`[OBSOLETE: covered in previous test] Highlight translation in Mangoes are my favorite fruit.`, function (done) {
        assert.include(trl.translate({ locale: 'american-to-british', text: 'Mangoes are my favorite fruit.' }).translation, `<span class="highlight">favourite</span>`)
        done();
    })
    test(`[OBSOLETE: covered in previous test] Highlight translation in I ate yogurt for breakfast.`, function (done) {
        assert.include(trl.translate({ locale: 'american-to-british', text: `I ate yogurt for breakfast.` }).translation, `<span class="highlight">yoghurt</span>`)
        done();
    })
    test(`[OBSOLETE: covered in previous test] Highlight translation in We watched the footie match for a while.`, function (done) {
        assert.include(trl.translate({ locale: 'british-to-american', text: `We watched the footie match for a while.` }).translation, `<span class="highlight">soccer</span>`)
        done();
    })
    test(`[OBSOLETE: covered in previous test] Highlight translation in Paracetamol takes up to an hour to work.`, function (done) {
        assert.include(trl.translate({ locale: 'british-to-american', text: `Paracetamol takes up to an hour to work.` }).translation, `<span class="highlight">Tylenol</span>`)
        done();
    })
    

});
