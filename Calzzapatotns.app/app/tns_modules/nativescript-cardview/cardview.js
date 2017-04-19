"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var content_view_1 = require("ui/content-view");
var color_1 = require("color");
var platform_1 = require("platform");
var style = require("ui/styling/style");
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        var _this = _super.call(this) || this;
        var width = platform_1.screen.mainScreen.widthDIPs - 20;
        _this._ios = new UIView(CGRectMake(10, 30, width, 0));
        _this._ios.layer.masksToBounds = false;
        _this.shadowColor = "black";
        _this.radius = "1";
        _this.shadowRadius = "1";
        _this.shadowOpacity = "0.4";
        _this.shadowOffsetHeight = "2";
        _this.shadowOffsetWidth = "0";
        return _this;
    }
    Object.defineProperty(CardView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "_nativeView", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "radius", {
        set: function (value) {
            this._ios.layer.cornerRadius = +value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "shadowRadius", {
        set: function (value) {
            this._ios.layer.shadowRadius = +value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "shadowOffsetWidth", {
        set: function (value) {
            this._ios.layer.shadowOffset = CGSizeMake(+value, this._ios.layer.shadowOffset.height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "shadowOffsetHeight", {
        set: function (value) {
            this._ios.layer.shadowOffset = CGSizeMake(this._ios.layer.shadowOffset.width, +value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "shadowColor", {
        set: function (value) {
            this._ios.layer.shadowColor = new color_1.Color(value).ios.CGColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "shadowOpacity", {
        set: function (value) {
            this._ios.layer.shadowOpacity = +value;
        },
        enumerable: true,
        configurable: true
    });
    return CardView;
}(content_view_1.ContentView));
exports.CardView = CardView;
var CardViewStyler = (function () {
    function CardViewStyler() {
    }
    CardViewStyler.setBackgroundProperty = function (view, newValue) {
        if (view._nativeView) {
            try {
                view._nativeView.backgroundColor = newValue;
            }
            catch (error) {
                console.log("bad background-color value:", error);
            }
        }
    };
    CardViewStyler.resetBackgroundProperty = function (view, nativeValue) {
    };
    CardViewStyler.registerHandlers = function () {
        style.registerHandler(style.backgroundColorProperty, new style.StylePropertyChangedHandler(CardViewStyler.setBackgroundProperty, CardViewStyler.resetBackgroundProperty), "CardView");
        style.registerHandler(style.backgroundInternalProperty, style.ignorePropertyHandler, "CardView");
    };
    return CardViewStyler;
}());
exports.CardViewStyler = CardViewStyler;
CardViewStyler.registerHandlers();
//# sourceMappingURL=cardview.js.map