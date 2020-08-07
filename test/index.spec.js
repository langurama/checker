/**
 * @jest-environment node
 */

// Local modules.
import { default as languramaChecker } from '../src';

function check(type, object) {
    if (type !== 'array') expect(languramaChecker.array(object)).toBeFalsy();
    if (type !== 'asyncFunction') expect(languramaChecker.asyncFunction(object)).toBeFalsy();
    if (type !== 'bigint') expect(languramaChecker.bigint(object)).toBeFalsy();
    if (type !== 'boolean') expect(languramaChecker.boolean(object)).toBeFalsy();
    if (type !== 'date') expect(languramaChecker.date(object)).toBeFalsy();
    if (type !== 'error') expect(languramaChecker.error(object)).toBeFalsy();
    if (type !== 'function') expect(languramaChecker.function(object)).toBeFalsy();
    if (type !== 'generatorFunction')
        expect(languramaChecker.generatorFunction(object)).toBeFalsy();
    if (type !== 'nan') expect(languramaChecker.nan(object)).toBeFalsy();
    if (type !== 'null') expect(languramaChecker.null(object)).toBeFalsy();
    if (type !== 'number') expect(languramaChecker.number(object)).toBeFalsy();
    if (type !== 'object') expect(languramaChecker.object(object)).toBeFalsy();
    if (type !== 'promise') expect(languramaChecker.promise(object)).toBeFalsy();
    if (type !== 'string') expect(languramaChecker.string(object)).toBeFalsy();
    if (type !== 'symbol') expect(languramaChecker.symbol(object)).toBeFalsy();
    if (type !== 'undefined') expect(languramaChecker.undefined(object)).toBeFalsy();
}

describe('Type Checking', () => {
    it('should type check an array correctly', () => {
        // Setup.
        const object = [];
        // Assert.
        expect(languramaChecker.array(object)).toBeTruthy();
        check('array', object);
    });
    it('should type check an async function correctly', () => {
        // Setup.
        const object = async function() {};
        // Assert.
        expect(languramaChecker.asyncFunction(object)).toBeTruthy();
        check('asyncFunction', object);
    });
    it('should type check a big int correctly', () => {
        // Setup.
        // eslint-disable-next-line no-undef
        const object = BigInt(666);
        // Assert.
        expect(languramaChecker.bigint(object)).toBeTruthy();
        check('bigint', object);
    });
    it('should type check a boolean correctly', () => {
        // Setup.
        const object = true;
        // Assert.
        expect(languramaChecker.boolean(object)).toBeTruthy();
        check('boolean', object);
    });
    it('should type check a date correctly', () => {
        // Setup.
        const object = new Date();
        // Assert.
        expect(languramaChecker.date(object)).toBeTruthy();
        check('date', object);
    });
    it('should type check an error correctly', () => {
        // Setup.
        const object = new Error();
        // Assert.
        expect(languramaChecker.error(object)).toBeTruthy();
        check('error', object);
    });
    it('should type check a function correctly', () => {
        // Setup.
        const object = function() {};
        // Assert.
        expect(languramaChecker.function(object)).toBeTruthy();
        check('function', object);
    });
    it('should type check a generator function correctly', () => {
        // Setup.
        const object = function*() {};
        // Assert.
        expect(languramaChecker.generatorFunction(object)).toBeTruthy();
        check('generatorFunction', object);
    });
    it('should type check nan correctly', () => {
        // Setup.
        const object = NaN;
        // Assert.
        expect(languramaChecker.nan(object)).toBeTruthy();
        check('nan', object);
    });
    it('should type check null correctly', () => {
        // Setup.
        const object = null;
        // Assert.
        expect(languramaChecker.null(object)).toBeTruthy();
        check('null', object);
    });
    it('should type check a number correctly', () => {
        // Setup.
        const object = 666;
        // Assert.
        expect(languramaChecker.number(object)).toBeTruthy();
        check('number', object);
    });
    it('should type check a literal object correctly', () => {
        // Setup.
        const object = {};
        // Assert.
        expect(languramaChecker.object(object)).toBeTruthy();
        check('object', object);
    });
    it('should type check a class object correctly', () => {
        // Setup.
        class Test {}
        const object = new Test();
        // Assert.
        expect(languramaChecker.object(object)).toBeTruthy();
        check('object', object);
    });
    it('should type check a proxy object correctly', () => {
        // Setup.
        const object = new Proxy({}, {});
        // Assert.
        expect(languramaChecker.object(object)).toBeTruthy();
        check('object', object);
    });
    it('should type check a promise correctly', () => {
        // Setup.
        const object = new Promise(() => {});
        // Assert.
        expect(languramaChecker.promise(object)).toBeTruthy();
        check('promise', object);
    });
    it('should type check a string correctly', () => {
        // Setup.
        const object = 'hell';
        // Assert.
        expect(languramaChecker.string(object)).toBeTruthy();
        check('string', object);
    });
    it('should type check a symbol correctly', () => {
        // Setup.
        const object = Symbol();
        // Assert.
        expect(languramaChecker.symbol(object)).toBeTruthy();
        check('symbol', object);
    });
    it('should type check undefined correctly', () => {
        // Setup.
        const object = undefined;
        // Assert.
        expect(languramaChecker.undefined(object)).toBeTruthy();
        check('undefined', object);
    });
});
