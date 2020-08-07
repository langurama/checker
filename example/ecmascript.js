// Local modules.
import { default as languramaChecker } from '../dist/';

languramaChecker.array([]);
languramaChecker.asyncFunction(async function() {});
languramaChecker.bigint(BigInt(666));
languramaChecker.boolean(true);
languramaChecker.date(new Date());
languramaChecker.error(new Error());
languramaChecker.function(function() {});
languramaChecker.generatorFunction(function*() {});
languramaChecker.nan(NaN);
languramaChecker.null(null);
languramaChecker.number(666);
languramaChecker.object({});
class Test {}
languramaChecker.object(new Test());
languramaChecker.object(new Proxy({}, {}));
languramaChecker.promise(new Promise(() => {}));
languramaChecker.string('hell');
languramaChecker.symbol(Symbol());
languramaChecker.undefined(undefined);
