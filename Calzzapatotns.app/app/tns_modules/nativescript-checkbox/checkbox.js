"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dependency_observable_1 = require("ui/core/dependency-observable");
var proxy_1 = require("ui/core/proxy");
var color_1 = require("color");
var button_1 = require("ui/button");
var observable_1 = require("data/observable");
var CheckBox = (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        var _this = _super.call(this) || this;
        _this._fillColor = "#0075ff";
        _this._tintColor = "#0075ff";
        _this._lineWidth = 1;
        _this._onCheckColor = "#ffffff";
        _this._fillColor = "#0075ff";
        _this._tintColor = "#0075ff";
        _this._onAnimationType = 2;
        _this._offAnimationType = 2;
        _this._iosCheckbox = BEMCheckBox.alloc().initWithFrame(CGRectMake(0, 0, 21, 21));
        _this._delegate = BEMCheckBoxDelegateImpl.initWithOwner(new WeakRef(_this));
        return _this;
    }
    Object.defineProperty(CheckBox.prototype, "checked", {
        get: function () {
            return this._getValue(CheckBox.checkedProperty);
        },
        set: function (value) {
            this._setValue(CheckBox.checkedProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "checkBoxBackgroundColor", {
        set: function (color) {
            this._iosCheckbox.backgroundColor = new color_1.Color(color).ios;
            this._checkBoxBackgroundColor = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "fillColor", {
        set: function (color) {
            this._iosCheckbox.onFillColor = new color_1.Color(color).ios;
            this._fillColor = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "tintColor", {
        set: function (color) {
            this._iosCheckbox.onTintColor = new color_1.Color(color).ios;
            this._tintColor = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "checkedAnimated", {
        set: function (value) {
            this._iosCheckbox.setOnAnimated(value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "lineWidth", {
        set: function (value) {
            this._iosCheckbox.lineWidth = value;
            this._lineWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "hideBox", {
        set: function (value) {
            this._iosCheckbox.hideBox = value;
            this._hideBox = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "boxType", {
        set: function (value) {
            var type = 0;
            if (value === 2) {
                type = 1;
            }
            if (this._iosCheckbox)
                this._iosCheckbox.boxType = type;
            else
                this._boxType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "tint", {
        set: function (color) {
            this._iosCheckbox.tintColor = new color_1.Color(color).ios;
            this._tint = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "onCheckColor", {
        set: function (color) {
            this._iosCheckbox.onCheckColor = new color_1.Color(color).ios;
            this._onCheckColor = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "animationDuration", {
        set: function (value) {
            this._iosCheckbox.animationDuration = value;
            this._animationDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "onAnimationType", {
        set: function (value) {
            if (this._iosCheckbox)
                this._iosCheckbox.onAnimationType = this.getAnimationType(value);
            else
                this._onAnimationType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "offAnimationType", {
        set: function (value) {
            this._iosCheckbox.offAnimationType = this.getAnimationType(value);
            this._offAnimationType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "nativeiOSCheckBox", {
        get: function () {
            return this._iosCheckbox;
        },
        enumerable: true,
        configurable: true
    });
    CheckBox.prototype.reload = function (value) {
        this._iosCheckbox.reload();
    };
    CheckBox.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        var fontSize;
        if (!this.style.fontSize) {
            fontSize = 15;
        }
        else {
            fontSize = this.style.fontSize;
        }
        this._iosCheckbox.delegate = this._delegate;
        this._iosCheckbox.frame = CGRectMake(0, 0, fontSize, fontSize);
        this._iosCheckbox.center = CGPointMake(this._iosCheckbox.center.x, (fontSize / 2) + 3);
        this.style.paddingLeft = fontSize + (fontSize > 20 ? 10 : 5);
        this.style.textAlignment = "left";
        this.ios.addSubview(this._iosCheckbox);
        this._iosCheckbox.on = this.checked;
        this.addEventListener("tap", function (args) {
            var checkbox = args.object;
            checkbox.checked = !checkbox.checked;
        });
        if (typeof this._lineWidth !== 'undefined') {
            this.lineWidth = this._lineWidth;
        }
        if (typeof this._hideBox !== 'undefined') {
            this.hideBox = this._hideBox;
        }
        if (typeof this._boxType !== 'undefined') {
            this.boxType = this._boxType;
        }
        if (typeof this._tint !== 'undefined') {
            this.tint = this._tint;
        }
        if (typeof this._onCheckColor !== 'undefined') {
            this.onCheckColor = this._onCheckColor;
        }
        if (typeof this._checkBoxBackgroundColor !== 'undefined') {
            this.checkBoxBackgroundColor = this._checkBoxBackgroundColor;
        }
        if (typeof this._fillColor !== 'undefined') {
            this.fillColor = this._fillColor;
        }
        if (typeof this._tintColor !== 'undefined') {
            this.tintColor = this._tintColor;
        }
        if (typeof this._animationDuration !== 'undefined') {
            this.animationDuration = this._animationDuration;
        }
        if (typeof this._onAnimationType !== 'undefined') {
            this.onAnimationType = this._onAnimationType;
        }
        if (typeof this._offAnimationType !== 'undefined') {
            this.offAnimationType = this._offAnimationType;
        }
    };
    CheckBox.prototype.onUnloaded = function () {
        this._iosCheckbox.delegate = null;
        this.removeEventListener("tap");
        _super.prototype.onUnloaded.call(this);
    };
    CheckBox.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    CheckBox.prototype.getAnimationType = function (value) {
        switch (value) {
            case 1:
                return 0;
            case 2:
                return 1;
            case 3:
                return 2;
            case 4:
                return 3;
            case 5:
                return 0;
            case 6:
                return 5;
        }
    };
    CheckBox.prototype._onCheckedPropertyChanged = function (data) {
        if (this._iosCheckbox) {
            this._iosCheckbox.setOnAnimated(data.newValue, true);
            var _old = data.oldValue;
            var _new = data.newValue;
            var obj = new observable_1.Observable({
                view: this,
                oldValue: _old,
                newValue: _new
            });
            this.notify({ eventName: "checkedChanged", object: obj });
        }
    };
    return CheckBox;
}(button_1.Button));
CheckBox.checkedProperty = new dependency_observable_1.Property("checked", "CheckBox", new proxy_1.PropertyMetadata(false));
exports.CheckBox = CheckBox;
function onCheckedPropertyChanged(data) {
    var checkbox = data.object;
    checkbox._onCheckedPropertyChanged(data);
}
CheckBox.checkedProperty.metadata.onSetNativeValue = onCheckedPropertyChanged;
var BEMCheckBoxDelegateImpl = (function (_super) {
    __extends(BEMCheckBoxDelegateImpl, _super);
    function BEMCheckBoxDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BEMCheckBoxDelegateImpl.initWithOwner = function (owner) {
        var delegate = BEMCheckBoxDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    BEMCheckBoxDelegateImpl.prototype.animationDidStopForCheckBox = function (checkBox) {
    };
    BEMCheckBoxDelegateImpl.prototype.didTapCheckBox = function (checkBox) {
        var owner = this._owner.get();
        if (owner) {
            owner._onPropertyChangedFromNative(CheckBox.checkedProperty, checkBox.on);
        }
    };
    return BEMCheckBoxDelegateImpl;
}(NSObject));
BEMCheckBoxDelegateImpl.ObjCProtocols = [BEMCheckBoxDelegate];
