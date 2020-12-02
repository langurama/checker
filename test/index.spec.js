/**
 * @jest-environment node
 */

// Local modules.
import { default as languramaChecker } from '../src';

function check(type, object) {
    if (type !== 'array') expect(languramaChecker.isArray(object)).toBeFalsy();
    if (type !== 'asyncFunction') expect(languramaChecker.isAsyncFunction(object)).toBeFalsy();
    if (type !== 'bigint') expect(languramaChecker.isBigint(object)).toBeFalsy();
    if (type !== 'boolean') expect(languramaChecker.isBoolean(object)).toBeFalsy();
    if (type !== 'date') expect(languramaChecker.isDate(object)).toBeFalsy();
    if (type !== 'error') expect(languramaChecker.isError(object)).toBeFalsy();
    if (type !== 'function') expect(languramaChecker.isFunction(object)).toBeFalsy();
    if (type !== 'generatorFunction')
        expect(languramaChecker.isGeneratorFunction(object)).toBeFalsy();
    if (type !== 'nan') expect(languramaChecker.isNan(object)).toBeFalsy();
    if (type !== 'null') expect(languramaChecker.isNull(object)).toBeFalsy();
    if (type !== 'number') expect(languramaChecker.isNumber(object)).toBeFalsy();
    if (type !== 'object') expect(languramaChecker.isObject(object)).toBeFalsy();
    if (type !== 'promise') expect(languramaChecker.isPromise(object)).toBeFalsy();
    if (type !== 'string') expect(languramaChecker.isString(object)).toBeFalsy();
    if (type !== 'symbol') expect(languramaChecker.isSymbol(object)).toBeFalsy();
    if (type !== 'undefined') expect(languramaChecker.isUndefined(object)).toBeFalsy();
}

describe('Type Checking', () => {
    it('should type check an array correctly', () => {
        // Setup.
        const object = [];
        // Assert.
        expect(languramaChecker.isArray(object)).toBeTruthy();
        check('array', object);
    });
    it('should type check an async function correctly', () => {
        // Setup.
        const object = async function() {};
        // Assert.
        expect(languramaChecker.isAsyncFunction(object)).toBeTruthy();
        check('asyncFunction', object);
    });
    it('should type check a big int correctly', () => {
        // Setup.
        // eslint-disable-next-line no-undef
        const object = BigInt(666);
        // Assert.
        expect(languramaChecker.isBigint(object)).toBeTruthy();
        check('bigint', object);
    });
    it('should type check a boolean correctly', () => {
        // Setup.
        const object = true;
        // Assert.
        expect(languramaChecker.isBoolean(object)).toBeTruthy();
        check('boolean', object);
    });
    it('should type check a date correctly', () => {
        // Setup.
        const object = new Date();
        // Assert.
        expect(languramaChecker.isDate(object)).toBeTruthy();
        check('date', object);
    });
    it('should type check an error correctly', () => {
        // Setup.
        const object = new Error();
        // Assert.
        expect(languramaChecker.isError(object)).toBeTruthy();
        check('error', object);
    });
    it('should type check a function correctly', () => {
        // Setup.
        const object = function() {};
        // Assert.
        expect(languramaChecker.isFunction(object)).toBeTruthy();
        check('function', object);
    });
    it('should type check a generator function correctly', () => {
        // Setup.
        const object = function*() {};
        // Assert.
        expect(languramaChecker.isGeneratorFunction(object)).toBeTruthy();
        check('generatorFunction', object);
    });
    it('should type check nan correctly', () => {
        // Setup.
        const object = NaN;
        // Assert.
        expect(languramaChecker.isNan(object)).toBeTruthy();
        check('nan', object);
    });
    it('should type check null correctly', () => {
        // Setup.
        const object = null;
        // Assert.
        expect(languramaChecker.isNull(object)).toBeTruthy();
        check('null', object);
    });
    it('should type check a number correctly', () => {
        // Setup.
        const object = 666;
        // Assert.
        expect(languramaChecker.isNumber(object)).toBeTruthy();
        check('number', object);
    });
    it('should type check a literal object correctly', () => {
        // Setup.
        const object = {};
        // Assert.
        expect(languramaChecker.isObject(object)).toBeTruthy();
        check('object', object);
    });
    it('should type check a class object correctly', () => {
        // Setup.
        class Test {}
        const object = new Test();
        // Assert.
        expect(languramaChecker.isObject(object)).toBeTruthy();
        check('object', object);
    });
    it('should type check a proxy object correctly', () => {
        // Setup.
        const object = new Proxy({}, {});
        // Assert.
        expect(languramaChecker.isObject(object)).toBeTruthy();
        check('object', object);
    });
    it('should type check a promise correctly', () => {
        // Setup.
        const object = new Promise(() => {});
        // Assert.
        expect(languramaChecker.isPromise(object)).toBeTruthy();
        check('promise', object);
    });
    it('should type check a string correctly', () => {
        // Setup.
        const object = 'hell';
        // Assert.
        expect(languramaChecker.isString(object)).toBeTruthy();
        check('string', object);
    });
    it('should type check a symbol correctly', () => {
        // Setup.
        const object = Symbol();
        // Assert.
        expect(languramaChecker.isSymbol(object)).toBeTruthy();
        check('symbol', object);
    });
    it('should type check undefined correctly', () => {
        // Setup.
        const object = undefined;
        // Assert.
        expect(languramaChecker.isUndefined(object)).toBeTruthy();
        check('undefined', object);
    });
});
