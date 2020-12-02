declare module '@langurama/checker' {
    interface LanguramaChecker {
        isArray: (object: any) => boolean;
        isAsyncFunction: (object: any) => boolean;
        isBigint: (object: any) => boolean;
        isBoolean: (object: any) => boolean;
        isDate: (object: any) => boolean;
        isError: (object: any) => boolean;
        isFunction: (object: any) => boolean;
        isGeneratorFunction: (object: any) => boolean;
        isNan: (object: any) => boolean;
        isNull: (object: any) => boolean;
        isNumber: (object: any) => boolean;
        isObject: (object: any) => boolean;
        isPromise: (object: any) => boolean;
        isString: (object: any) => boolean;
        isSymbol: (object: any) => boolean;
        isUndefined: (object: any) => boolean;
    }

    export const languramaChecker: LanguramaChecker;

    export default languramaChecker;
}
