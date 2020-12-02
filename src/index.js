export default {
    isArray: object => Array.isArray(object),
    isAsyncFunction: object => Object.prototype.toString.call(object) === '[object AsyncFunction]',
    isBigint: object => typeof object === 'bigint',
    isBoolean: object => object === true || object === false,
    isDate: object => object instanceof Date,
    isError: object => Object.prototype.toString.call(object) === '[object Error]',
    isFunction: object => Object.prototype.toString.call(object) === '[object Function]',
    isGeneratorFunction: object =>
        Object.prototype.toString.call(object) === '[object GeneratorFunction]',
    isNan: object => Number.isNaN(object),
    isNull: object => object === null,
    isNumber: object => typeof object === 'number' && Number.isNaN(object) === false,
    isObject: object =>
        typeof object === 'object' &&
        object !== null &&
        Array.isArray(object) === false &&
        !(object instanceof Date) &&
        Object.prototype.toString.call(object) === '[object Object]',
    isPromise: object => Object.prototype.toString.call(object) === '[object Promise]',
    isString: object => typeof object === 'string',
    isSymbol: object => typeof object === 'symbol',
    isUndefined: object => object === undefined
};
