System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var MediaItemFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            MediaItemFormComponent = (function () {
                function MediaItemFormComponent() {
                }
                MediaItemFormComponent.prototype.ngOnInit = function () {
                    this.form = new common_1.ControlGroup({
                        'medium': new common_1.Control('Movies'),
                        'name': new common_1.Control('', common_1.Validators.compose([
                            common_1.Validators.required,
                            common_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        'category': new common_1.Control(''),
                        'year': new common_1.Control('', this.yearValidator)
                    });
                };
                MediaItemFormComponent.prototype.yearValidator = function (control) {
                    //null means it is valid!!!!! 
                    if (control.value.trim().length === 0)
                        return null;
                    var year = parseInt(control.value);
                    var minyear = 1800;
                    var maxyear = 2500;
                    if (year >= minyear && year <= maxyear)
                        return null;
                    //otherwise return any object that will be avaliable for the validator to use.
                    //notice how the property 'name' is referaned in the html template to get value 
                    //of the returned object
                    return { 'year': { 'min': minyear, 'max': maxyear } };
                };
                MediaItemFormComponent.prototype.onSubmit = function (mediaItem) {
                    console.log(mediaItem);
                };
                MediaItemFormComponent = __decorate([
                    core_1.Component({
                        selector: 'media-item-form',
                        templateUrl: 'app/media-item-form.component.html',
                        styleUrls: ['app/media-item-form.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MediaItemFormComponent);
                return MediaItemFormComponent;
            }());
            exports_1("MediaItemFormComponent", MediaItemFormComponent);
        }
    }
});
//# sourceMappingURL=media-item-form.component.js.map