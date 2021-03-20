(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['my-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var MyLibService = /** @class */ (function () {
        function MyLibService() {
        }
        return MyLibService;
    }());
    MyLibService.ɵfac = function MyLibService_Factory(t) { return new (t || MyLibService)(); };
    MyLibService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: MyLibService, factory: MyLibService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MyLibService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent() {
        }
        MyLibComponent.prototype.ngOnInit = function () {
        };
        return MyLibComponent;
    }());
    MyLibComponent.ɵfac = function MyLibComponent_Factory(t) { return new (t || MyLibComponent)(); };
    MyLibComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: MyLibComponent, selectors: [["lib-my-lib"]], decls: 2, vars: 0, template: function MyLibComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, " my-lib works! ");
                i0__namespace.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MyLibComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-my-lib',
                        template: "\n    <p>\n      my-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        return MyLibModule;
    }());
    MyLibModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: MyLibModule });
    MyLibModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function MyLibModule_Factory(t) { return new (t || MyLibModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(MyLibModule, { declarations: [MyLibComponent], exports: [MyLibComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MyLibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [MyLibComponent],
                        imports: [],
                        exports: [MyLibComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of my-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;
    exports.MyLibService = MyLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib.umd.js.map
