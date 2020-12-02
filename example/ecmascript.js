// Local modules.
import { default as languramaChecker } from '../dist/';

languramaChecker.isArray([]);
languramaChecker.isAsyncFunction(async function() {});
languramaChecker.isBigint(BigInt(666));
languramaChecker.isBoolean(true);
languramaChecker.isDate(new Date());
languramaChecker.isError(new Error());
languramaChecker.isFunction(function() {});
languramaChecker.isGeneratorFunction(function*() {});
languramaChecker.isNan(NaN);
languramaChecker.isNull(null);
languramaChecker.isNumber(666);
languramaChecker.isObject({});
class Test {}
languramaChecker.isObject(new Test());
languramaChecker.isObject(new Proxy({}, {}));
languramaChecker.isPromise(new Promise(() => {}));
languramaChecker.isString('hell');
languramaChecker.isSymbol(Symbol());
languramaChecker.isUndefined(undefined);
