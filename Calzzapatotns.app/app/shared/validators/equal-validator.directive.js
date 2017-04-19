"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = __decorate([
        core_1.Directive({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return EqualValidator; }), multi: true }
            ]
        }),
        __param(0, core_1.Attribute('validateEqual')),
        __param(1, core_1.Attribute('reverse')), 
        __metadata('design:paramtypes', [String, String])
    ], EqualValidator);
    return EqualValidator;
}());
exports.EqualValidator = EqualValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFpRCxlQUFlLENBQUMsQ0FBQTtBQUNqRSxzQkFBMEQsZ0JBQWdCLENBQUMsQ0FBQTtBQVEzRTtJQUNJLHdCQUFnRCxhQUFxQixFQUNwQyxPQUFlO1FBREEsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDcEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUVoRCxDQUFDO0lBRUQsc0JBQVkscUNBQVM7YUFBckI7WUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLEdBQUcsSUFBSSxHQUFFLEtBQUssQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELGlDQUFRLEdBQVIsVUFBUyxDQUFrQjtRQUN2QixhQUFhO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVoQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXZDLGtCQUFrQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUM7Z0JBQ0wsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQTtRQUNILENBQUM7UUFFRCwwQkFBMEI7UUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFFRCw4QkFBOEI7UUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ1IsYUFBYSxFQUFFLEtBQUs7YUFDdkIsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTdDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsd0ZBQXdGO1lBQ2xHLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxxQkFBYSxFQUFFLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEVBQWQsQ0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTthQUN6RjtTQUNKLENBQUM7bUJBRWdCLGdCQUFTLENBQUMsZUFBZSxDQUFDO21CQUNuQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQzs7c0JBSDNCO0lBeUNGLHFCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSxzQkFBYyxpQkF3QzFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sTmFtZV0sW3ZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sXSxbdmFsaWRhdGVFcXVhbF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVxdWFsVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRXF1YWxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCBAQXR0cmlidXRlKCd2YWxpZGF0ZUVxdWFsJykgcHVibGljIHZhbGlkYXRlRXF1YWw6IHN0cmluZyxcbiAgICAgICAgQEF0dHJpYnV0ZSgncmV2ZXJzZScpIHB1YmxpYyByZXZlcnNlOiBzdHJpbmcpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGlzUmV2ZXJzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJldmVyc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSA9PT0gJ3RydWUnID8gdHJ1ZTogZmFsc2U7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIC8vIHNlbGYgdmFsdWVcbiAgICAgICAgbGV0IHYgPSBjLnZhbHVlO1xuXG4gICAgICAgIC8vIGNvbnRyb2wgdmxhdWVcbiAgICAgICAgbGV0IGUgPSBjLnJvb3QuZ2V0KHRoaXMudmFsaWRhdGVFcXVhbCk7XG5cbiAgICAgICAgLy8gdmFsdWUgbm90IGVxdWFsXG4gICAgICAgIGlmIChlICYmIHYgIT09IGUudmFsdWUgJiYgIXRoaXMuaXNSZXZlcnNlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXF1YWw6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsdWUgZXF1YWwgYW5kIHJldmVyc2VcbiAgICAgICAgaWYgKGUgJiYgdiA9PT0gZS52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuICAgICAgICAgICAgZGVsZXRlIGUuZXJyb3JzWyd2YWxpZGF0ZUVxdWFsJ107XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKGUuZXJyb3JzKS5sZW5ndGgpIGUuc2V0RXJyb3JzKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsdWUgbm90IGVxdWFsIGFuZCByZXZlcnNlXG4gICAgICAgIGlmIChlICYmIHYgIT09IGUudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcbiAgICAgICAgICAgIGUuc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUVxdWFsOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXX0=