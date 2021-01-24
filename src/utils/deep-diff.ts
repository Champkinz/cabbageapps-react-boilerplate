import _ from "lodash";

(function (_) {
    function deepDiff(a: any, b: any, r: any) {
        _.each(a, function (v, k) {
            // already checked this or equal...
            if (r.hasOwnProperty(k) || (b && b[k] === v)) return;
            // but what if it returns an empty object? still attach?
            r[k] = _.isObject(v) ? (_ as any).diff(v, b ? b[k] : undefined) : v;
        });
    }

    /* the function */
    _.mixin({
        diff: function (a, b) {
            var r = {};
            deepDiff(a, b, r);
            deepDiff(b, a, r);
            return r;
        }
    });
})(_.noConflict());