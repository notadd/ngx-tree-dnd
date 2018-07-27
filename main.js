(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.html":
/*!********************************************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n\tngxDroppable \n\t[dropZone]=\"dropZone\" \n\t[model]=\"model\" \n\t[copy]=\"copy\" \n\t[ngClass]=\"{ 'gu-empty': !model?.length }\" \n\t[removeOnSpill]=\"removeOnSpill\"\n  class='ngx-tree-dnd-container'>\n  <ng-container *ngIf=\"model\">\n    <ng-container *ngFor=\"let item of model\">\n\t\t\t<ngx-tree-dnd-item \n\t\t\t\tngxDraggable \n\t\t\t\t[model]=\"item\" \n\t\t\t\t[dropZone]=\"dropZone\" \n\t\t\t\t[dropZones]=\"dropZones\" \n\t\t\t\t[copy]=\"copy\" \n\t\t\t\t[moves]=\"moves\"\n\t\t\t\t[removeOnSpill]=\"removeOnSpill\" \n\t\t\t\t[droppableItemClass]=\"droppableItemClass\" \n\t\t\t\t[actions]=\"actions\">\n      </ngx-tree-dnd-item>\n    </ng-container>\n  </ng-container>\n  <ng-content *ngIf=\"!model\"></ng-content>\n</div>"

/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.scss":
/*!********************************************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-tree-dnd-container {\n  padding: 0 10px; }\n  .ngx-tree-dnd-container.gu-empty {\n    border: 1px dashed #e0e0e0;\n    padding: 20px 10px;\n    position: relative; }\n  .ngx-tree-dnd-container.gu-empty::before {\n      content: '';\n      width: 20px;\n      height: 1px;\n      background-color: #e5e5e5;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-1);\n              transform: translateY(-1);\n      left: -21px; }\n  .ngx-tree-dnd-container .handle {\n    padding: 0 5px;\n    margin-right: 5px;\n    background-color: rgba(0, 0, 0, 0.4);\n    cursor: move; }\n  .no-select {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  /* Konqueror */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE/Edge */\n  user-select: none;\n  /* non-prefixed version, currently\n                                  not supported by any browser */ }\n"

/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.ts":
/*!******************************************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_ngx_droppable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/ngx-droppable.directive */ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-droppable.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var i = 0;
function getNextId() {
    return i++;
}
/**
 * Component that allows nested ngxDroppable and ngxDraggables
 *
 * @export
 */
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this.copy = false;
        this.removeOnSpill = false;
        this.dropZone = "@@DefaultDropZone-" + getNextId() + "@@";
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.over = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.out = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ContainerComponent.prototype, "dropZones", {
        get: function () {
            return this._dropZones || this._defaultZones;
        },
        set: function (val) {
            this._dropZones = val;
        },
        enumerable: true,
        configurable: true
    });
    ContainerComponent.prototype.ngOnInit = function () {
        this._defaultZones = [this.dropZone];
    };
    ContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.droppable.drag.subscribe(function (v) { return _this.drag.emit(v); });
        this.droppable.drop.subscribe(function (v) { return _this.drop.emit(v); });
        this.droppable.over.subscribe(function (v) { return _this.over.emit(v); });
        this.droppable.out.subscribe(function (v) { return _this.out.emit(v); });
        this.droppable.remove.subscribe(function (v) { return _this.remove.emit(v); });
        this.droppable.cancel.subscribe(function (v) { return _this.cancel.emit(v); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "copy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "removeOnSpill", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "droppableItemClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "dropZone", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ContainerComponent.prototype, "dropZones", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], ContainerComponent.prototype, "moves", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ContainerComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ContainerComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directives_ngx_droppable_directive__WEBPACK_IMPORTED_MODULE_1__["DroppableDirective"]),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "droppable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContainerComponent.prototype, "drop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContainerComponent.prototype, "drag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContainerComponent.prototype, "over", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContainerComponent.prototype, "out", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContainerComponent.prototype, "remove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContainerComponent.prototype, "cancel", void 0);
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tree-dnd-container',
            template: __webpack_require__(/*! ./container.component.html */ "./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.scss */ "./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/components/item/item.component.html":
/*!**********************************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/components/item/item.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container [ngSwitch]=\"type\">\n\n  <ng-container *ngSwitchCase=\"'array'\">\n\t\t<ngx-tree-dnd-container\n\t\t\tclass=\"container\"\n\t\t\t[model]=\"model\"\n\t\t\t[template]=\"container.template\"\n\t\t\t[dropZone]=\"dropZone\"\n\t\t\t[dropZones]=\"dropZones\"\n\t\t\t[removeOnSpill]=\"removeOnSpill\"\n\t\t\t[droppableItemClass]=\"droppableItemClass\"\n\t\t\t[copy]=\"copy\"\n\t\t\t[actions]=\"actions\">\n    </ngx-tree-dnd-container>\n  </ng-container>\n\n  <ng-container *ngSwitchCase=\"'object'\">\n    <ng-template *ngIf=\"container.template\" [ngTemplateOutlet]=\"container.template\" [ngTemplateOutletContext]=\"data\">\n    </ng-template>\n    <ng-container *ngIf=\"!container.template\">\n      <button (click)=\"toggleExpanded()\" class=\"ngx-dnd-toggle-btn\">\n        <i class=\"material-icons\">chevron_right</i>\n      </button>\n      <div class=\"ngx-dnd-content\">\n        <span class=\"title\">{{model.label}}</span>\n        <div class=\"actions\">\n\t\t\t\t\t<button\n\t\t\t\t\t\tclass=\"material-icons\"\n\t\t\t\t\t\t*ngFor=\"let action of actions\"\n\t\t\t\t\t\t(click)=\"action.callback(model)\">\n            {{action.icon}}\n          </button>\n        </div>\n      </div>\n\t\t\t<ngx-tree-dnd-container\n\t\t\t\t*ngIf=\"model.children\"\n\t\t\t\tclass=\"container\"\n\t\t\t\t[model]=\"model.children\"\n\t\t\t\t[template]=\"container.template\"\n\t\t\t\t[dropZone]=\"dropZone\"\n\t\t\t\t[dropZones]=\"dropZones\"\n\t\t\t\t[removeOnSpill]=\"removeOnSpill\"\n\t\t\t\t[droppableItemClass]=\"droppableItemClass\"\n\t\t\t\t[copy]=\"copy\"\n\t\t\t\t[actions]=\"actions\">\n      </ngx-tree-dnd-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-container *ngSwitchCase=\"'undefined'\">\n  </ng-container>\n\n  <ng-container *ngSwitchDefault>\n    <ng-template *ngIf=\"container.template\" [ngTemplateOutlet]=\"container.template\" [ngTemplateOutletContext]=\"data\">\n    </ng-template>\n    <div *ngIf=\"!container.template\" class=\"ngx-dnd-content\">\n      {{model}}\n    </div>\n  </ng-container>\n\n</ng-container>\n"

/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/components/item/item.component.scss":
/*!**********************************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/components/item/item.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-tree-dnd-item {\n  font-size: 1.4rem;\n  line-height: 2rem;\n  letter-spacing: 0.01rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  padding: 5px 10px;\n  transition: opacity 0.4s ease-in-out;\n  border-left: 1px solid #e5e5e5;\n  display: block;\n  position: relative; }\n  .ngx-tree-dnd-item:not(.has-handle):not(.move-disabled),\n  .ngx-tree-dnd-item.has-handle [ngxdraghandle],\n  .ngx-tree-dnd-item.has-handle [ngxDragHandle] {\n    cursor: move;\n    cursor: grab;\n    cursor: -webkit-grab; }\n  .ngx-tree-dnd-item button {\n    outline: none;\n    box-sizing: border-box;\n    color: inherit;\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background: transparent;\n    border: none;\n    text-shadow: 1px 1px rgba(0, 0, 0, 0.07); }\n  .ngx-tree-dnd-item .ngx-dnd-toggle-btn {\n    position: absolute;\n    top: 23px;\n    left: -20px;\n    z-index: 2; }\n  .ngx-tree-dnd-item .ngx-dnd-toggle-btn > i {\n      background-color: #ffffff;\n      border-radius: 50%;\n      border: solid 1px #e0e0e0;\n      color: #808080;\n      display: inline-block;\n      font-size: 22px;\n      transition: -webkit-transform .3s;\n      transition: transform .3s;\n      transition: transform .3s, -webkit-transform .3s; }\n  .ngx-tree-dnd-item .ngx-dnd-content {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    margin: 10px;\n    padding: 5px 10px;\n    position: relative;\n    color: #333333;\n    background-color: transparent;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-content: center; }\n  .ngx-tree-dnd-item .ngx-dnd-content:hover {\n      background-color: #f7f7f7; }\n  .ngx-tree-dnd-item .ngx-dnd-content:hover > .actions {\n        display: flex;\n        transition: all .3s;\n        color: #808080; }\n  .ngx-tree-dnd-item .ngx-dnd-content::before {\n      content: \"\";\n      display: inline-block;\n      width: 20px;\n      height: 1px;\n      background-color: #e5e5e5;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-1);\n              transform: translateY(-1);\n      left: -21px; }\n  .ngx-tree-dnd-item .ngx-dnd-content > .actions {\n      display: none;\n      align-content: center; }\n  .ngx-tree-dnd-item:hover {\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n  .ngx-tree-dnd-item .ngx-tree-dnd-container {\n    margin: 0 10px;\n    display: none;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s; }\n  .ngx-tree-dnd-item.expanded > .ngx-dnd-toggle-btn > i {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s; }\n  .ngx-tree-dnd-item.expanded > .container > .ngx-tree-dnd-container {\n    display: block;\n    transition: all .3s; }\n  .ngx-tree-dnd-item.expanded > .ngx-dnd-content {\n    background-color: #f7f7f7;\n    transition: all .3s; }\n  .gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80); }\n  .gu-hide {\n  display: none !important; }\n  .gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }\n  .gu-transit {\n  opacity: .6;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n  filter: alpha(opacity=50); }\n"

/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/components/item/item.component.ts":
/*!********************************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/components/item/item.component.ts ***!
  \********************************************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/container.component */ "./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.ts");
/* harmony import */ var _directives_ngx_draggable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/ngx-draggable.directive */ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-draggable.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component that allows nested ngxDroppable and ngxDraggables
 * Should only be use inside a ngx-dnd-container
 * Outside a ngx-dnd-container use ngxDroppable
 *
 * @export
 */
var ItemComponent = /** @class */ (function () {
    function ItemComponent(container, draggableDirective) {
        this.container = container;
        this.draggableDirective = draggableDirective;
        this._copy = false;
        this._removeOnSpill = false;
        this.isExpanded = false;
    }
    Object.defineProperty(ItemComponent.prototype, "dropZone", {
        get: function () {
            return this._dropZone || this.container.dropZone;
        },
        set: function (val) {
            this._dropZone = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "dropZones", {
        get: function () {
            return this._dropZones || this.container.dropZones;
        },
        set: function (val) {
            this._dropZones = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "droppableItemClass", {
        get: function () {
            return this._droppableItemClass || this.container.droppableItemClass;
        },
        set: function (val) {
            this._droppableItemClass = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "removeOnSpill", {
        get: function () {
            return typeof this._removeOnSpill === 'boolean' ? this._removeOnSpill : this.container.removeOnSpill;
        },
        set: function (val) {
            this._removeOnSpill = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "copy", {
        get: function () {
            return typeof this._copy === 'boolean' ? this._copy : this.container.copy;
        },
        set: function (val) {
            this._copy = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "hasHandle", {
        get: function () {
            return this.draggableDirective.hasHandle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "moveDisabled", {
        get: function () {
            return !this.draggableDirective.canMove();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "classString", {
        get: function () {
            var itemClass = typeof this.droppableItemClass === 'function' ? this.droppableItemClass(this.model) : this.droppableItemClass;
            var classes = ['ngx-tree-dnd-item', itemClass || ''];
            if (this.moveDisabled) {
                classes.push('move-disabled');
            }
            if (this.hasHandle) {
                classes.push('has-handle');
            }
            return classes.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "type", {
        get: function () {
            if (Array.isArray(this.model)) {
                return 'array';
            }
            return typeof this.model;
        },
        enumerable: true,
        configurable: true
    });
    ItemComponent.prototype.ngOnInit = function () {
        this.data = {
            model: this.model,
            type: this.type,
            dropZone: this.dropZone,
            template: this.container.template
        };
    };
    ItemComponent.prototype.toggleExpanded = function () {
        this.isExpanded = !this.isExpanded;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ItemComponent.prototype, "dropZone", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ItemComponent.prototype, "dropZones", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ItemComponent.prototype, "droppableItemClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ItemComponent.prototype, "removeOnSpill", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ItemComponent.prototype, "copy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ItemComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ItemComponent.prototype, "classString", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.expanded'),
        __metadata("design:type", Boolean)
    ], ItemComponent.prototype, "isExpanded", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tree-dnd-item',
            template: __webpack_require__(/*! ./item.component.html */ "./projects/notadd/ngx-tree-dnd/src/lib/components/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./projects/notadd/ngx-tree-dnd/src/lib/components/item/item.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_container_container_component__WEBPACK_IMPORTED_MODULE_1__["ContainerComponent"], _directives_ngx_draggable_directive__WEBPACK_IMPORTED_MODULE_2__["DraggableDirective"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-drag-handle.directive.ts":
/*!**************************************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-drag-handle.directive.ts ***!
  \**************************************************************************************/
/*! exports provided: DragHandleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragHandleDirective", function() { return DragHandleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Adds properties and events to drag handle elements
 *
 * @export
 */
var DragHandleDirective = /** @class */ (function () {
    function DragHandleDirective() {
    }
    DragHandleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[ngxDragHandle]' })
    ], DragHandleDirective);
    return DragHandleDirective;
}());



/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-draggable.directive.ts":
/*!************************************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-draggable.directive.ts ***!
  \************************************************************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_droppable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-droppable.directive */ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-droppable.directive.ts");
/* harmony import */ var _services_drake_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/drake-store.service */ "./projects/notadd/ngx-tree-dnd/src/lib/services/drake-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Adds properties and events to draggable elements
 *
 * @export
 */
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el, drakesService, droppableDirective) {
        this.el = el;
        this.drakesService = drakesService;
        this.droppableDirective = droppableDirective;
        this._moves = true;
        /*
        ContentChildren doesn't get children created with NgTemplateOutlet
        See https://github.com/angular/angular/issues/14842
        Implemented via updateElements method
      
        @ContentChildren(DragHandleDirective, {descendants: true})
        handlesList: QueryList<DragHandleDirective>; */
        this.handles = [];
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragDelay = 200; // milliseconds
        this.dragDelayed = true;
    }
    Object.defineProperty(DraggableDirective.prototype, "dropZones", {
        get: function () {
            return this._dropZones || this.ngxDraggable || this._parentDropzones;
        },
        set: function (val) {
            this._dropZones = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "hasHandle", {
        get: function () {
            return !!this.handles.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "element", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    // From: https://github.com/bevacqua/dragula/issues/289#issuecomment-277143172
    DraggableDirective.prototype.onMove = function (e) {
        if (!this._moves || this.dragDelayed) {
            e.stopPropagation();
            clearTimeout(this.touchTimeout);
        }
    };
    DraggableDirective.prototype.onDown = function () {
        var _this = this;
        if (this._moves) {
            this.touchTimeout = setTimeout(function () {
                _this.dragDelayed = false;
            }, this.dragDelay);
        }
    };
    DraggableDirective.prototype.onUp = function () {
        if (this._moves) {
            clearTimeout(this.touchTimeout);
            this.dragDelayed = true;
        }
    };
    DraggableDirective.prototype.ngOnInit = function () {
        this.update();
    };
    DraggableDirective.prototype.update = function () {
        this._parentDropzones = [this.droppableDirective.dropZone];
        this.drakesService.registerDraggable(this);
        this.updateElements();
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this.drakesService.removeDraggable(this);
    };
    DraggableDirective.prototype.updateElements = function () {
        var nativeElement = this.el.nativeElement;
        var handles = nativeElement.querySelectorAll('[ngxdraghandle]');
        this.handles = Array.from(handles).filter(function (h) { return findFirstDraggableParent(h) === nativeElement; });
        function findFirstDraggableParent(c) {
            while (c.parentNode) {
                c = c.parentNode;
                if (c.hasAttribute && c.hasAttribute('ngxdraggable')) {
                    return c;
                }
            }
        }
    };
    DraggableDirective.prototype.canMove = function (source, handle, sibling) {
        if (typeof this._moves === 'boolean')
            return this._moves;
        if (typeof this._moves === 'function')
            return this._moves(this.model, source, handle, sibling);
        return true;
    };
    DraggableDirective.prototype.moves = function (source, handle, sibling) {
        if (!this.canMove(source, handle, sibling))
            return false;
        return this.hasHandle ? this.handles.some(function (h) { return handelFor(handle, h); }) : true;
        function handelFor(c, p) {
            if (c === p)
                return true;
            while ((c = c.parentNode) && c !== p)
                ; // tslint:disable-line
            return !!c;
        }
    };
    DraggableDirective.prototype.ngDoCheck = function () {
        this.updateElements();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DraggableDirective.prototype, "ngxDraggable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DraggableDirective.prototype, "dropZones", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('moves'),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "_moves", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DraggableDirective.prototype, "drag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onMove", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchstart'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchend'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onUp", null);
    DraggableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[ngxDraggable]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_drake_store_service__WEBPACK_IMPORTED_MODULE_2__["DrakeStoreService"],
            _ngx_droppable_directive__WEBPACK_IMPORTED_MODULE_1__["DroppableDirective"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-droppable.directive.ts":
/*!************************************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-droppable.directive.ts ***!
  \************************************************************************************/
/*! exports provided: DroppableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppableDirective", function() { return DroppableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drake_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/drake-store.service */ "./projects/notadd/ngx-tree-dnd/src/lib/services/drake-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var i = 10000;
function getNextId() {
    return i++;
}
/**
 * Makes the container droppable and children draggable.
 *
 * @export
 */
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(el, renderer, drakesService) {
        this.el = el;
        this.renderer = renderer;
        this.drakesService = drakesService;
        this.copy = false;
        this.removeOnSpill = false;
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.over = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.out = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DroppableDirective.prototype, "container", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableDirective.prototype, "dropZone", {
        get: function () {
            return this._dropZone || this.ngxDroppable || this.defaultZone;
        },
        set: function (val) {
            this._dropZone = val;
        },
        enumerable: true,
        configurable: true
    });
    DroppableDirective.prototype.ngOnInit = function () {
        this.defaultZone = "@@DefaultDropZone-" + getNextId() + "@@";
        this.drakesService.register(this);
    };
    DroppableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.over.subscribe(function () {
            _this.renderer.addClass(_this.container, 'gu-over');
        });
        this.out.subscribe(function () {
            _this.renderer.removeClass(_this.container, 'gu-over');
        });
    };
    DroppableDirective.prototype.ngOnDestroy = function () {
        this.drakesService.remove(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "copy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "removeOnSpill", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DroppableDirective.prototype, "ngxDroppable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableDirective.prototype, "drop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableDirective.prototype, "drag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableDirective.prototype, "over", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableDirective.prototype, "out", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableDirective.prototype, "remove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableDirective.prototype, "cancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DroppableDirective.prototype, "dropZone", null);
    DroppableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[ngxDroppable]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _services_drake_store_service__WEBPACK_IMPORTED_MODULE_1__["DrakeStoreService"]])
    ], DroppableDirective);
    return DroppableDirective;
}());



/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/ngx-tree-dnd.module.ts":
/*!*********************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/ngx-tree-dnd.module.ts ***!
  \*********************************************************************/
/*! exports provided: NgxTreeDnDModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTreeDnDModule", function() { return NgxTreeDnDModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_ngx_draggable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/ngx-draggable.directive */ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-draggable.directive.ts");
/* harmony import */ var _directives_ngx_droppable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/ngx-droppable.directive */ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-droppable.directive.ts");
/* harmony import */ var _directives_ngx_drag_handle_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/ngx-drag-handle.directive */ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-drag-handle.directive.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/container/container.component */ "./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.ts");
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/item/item.component */ "./projects/notadd/ngx-tree-dnd/src/lib/components/item/item.component.ts");
/* harmony import */ var _services_drake_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/drake-store.service */ "./projects/notadd/ngx-tree-dnd/src/lib/services/drake-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var components = [_components_container_container_component__WEBPACK_IMPORTED_MODULE_5__["ContainerComponent"], _components_item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"]];
var directives = [_directives_ngx_draggable_directive__WEBPACK_IMPORTED_MODULE_2__["DraggableDirective"], _directives_ngx_droppable_directive__WEBPACK_IMPORTED_MODULE_3__["DroppableDirective"], _directives_ngx_drag_handle_directive__WEBPACK_IMPORTED_MODULE_4__["DragHandleDirective"]];
var NgxTreeDnDModule = /** @class */ (function () {
    function NgxTreeDnDModule() {
    }
    NgxTreeDnDModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: components.concat(directives),
            exports: components.concat(directives),
            providers: [_services_drake_store_service__WEBPACK_IMPORTED_MODULE_7__["DrakeStoreService"]]
        })
    ], NgxTreeDnDModule);
    return NgxTreeDnDModule;
}());



/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/lib/services/drake-store.service.ts":
/*!******************************************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/lib/services/drake-store.service.ts ***!
  \******************************************************************************/
/*! exports provided: DrakeStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrakeStoreService", function() { return DrakeStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_dragula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/dragula */ "./node_modules/@swimlane/dragula/dragula.js");
/* harmony import */ var _swimlane_dragula__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_dragula__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// see https://github.com/dherges/ng-packagr/issues/217
var dragula = _swimlane_dragula__WEBPACK_IMPORTED_MODULE_1__;
/**
 * Central service that handles all events
 *
 * @export
 */
var DrakeStoreService = /** @class */ (function () {
    function DrakeStoreService() {
        this.droppableMap = new WeakMap();
        this.draggableMap = new WeakMap();
        this.dragulaOptions = this.createDrakeOptions();
        this.drake = dragula([], this.dragulaOptions);
        this.registerEvents();
    }
    DrakeStoreService.prototype.register = function (droppable) {
        this.droppableMap.set(droppable.container, droppable);
        this.drake.containers.push(droppable.container);
    };
    DrakeStoreService.prototype.remove = function (droppable) {
        this.droppableMap.delete(droppable.container);
        var idx = this.drake.containers.indexOf(droppable.container);
        if (idx > -1) {
            this.drake.containers.splice(idx, 1);
        }
    };
    DrakeStoreService.prototype.registerDraggable = function (draggable) {
        this.draggableMap.set(draggable.element, draggable);
    };
    DrakeStoreService.prototype.removeDraggable = function (draggable) {
        this.draggableMap.delete(draggable.element);
    };
    DrakeStoreService.prototype.createDrakeOptions = function () {
        var _this = this;
        var accepts = function (el, target /*, source: any, sibling: any */) {
            if (el.contains(target)) {
                return false;
            }
            var elementComponent = _this.draggableMap.get(el);
            var targetComponent = _this.droppableMap.get(target);
            if (elementComponent && targetComponent) {
                return elementComponent.dropZones.includes(targetComponent.dropZone);
            }
            return true;
        };
        var copy = function (_, source) {
            var sourceComponent = _this.droppableMap.get(source);
            if (sourceComponent) {
                return sourceComponent.copy;
            }
            return false;
        };
        var moves = function (el, source, handle, sibling) {
            var elementComponent = _this.draggableMap.get(el);
            if (elementComponent) {
                return elementComponent.moves(source, handle, sibling);
            }
            return true;
        };
        return { accepts: accepts, copy: copy, moves: moves, revertOnSpill: true, direction: 'vertical' };
    };
    DrakeStoreService.prototype.registerEvents = function () {
        var _this = this;
        var dragElm;
        var draggedItem;
        this.drake.on('drag', function (el, source) {
            draggedItem = undefined;
            dragElm = el;
            if (!el || !source) {
                return;
            }
            if (_this.draggableMap.has(el)) {
                var elementComponent = _this.draggableMap.get(el);
                draggedItem = elementComponent.model;
                elementComponent.drag.emit({
                    type: 'drag',
                    el: el,
                    source: source,
                    value: draggedItem
                });
            }
            if (_this.droppableMap.has(source)) {
                var sourceComponent = _this.droppableMap.get(source);
                _this.dragulaOptions.removeOnSpill = sourceComponent.removeOnSpill;
                sourceComponent.drag.emit({
                    type: 'drag',
                    el: el,
                    source: source,
                    sourceComponent: sourceComponent,
                    value: draggedItem
                });
            }
        });
        this.drake.on('drop', function (el, target, source) {
            var targetComponent = _this.droppableMap.get(target);
            if (!targetComponent) {
                // not a target, abort
                return;
            }
            var dropElmModel = draggedItem;
            var dropIndex = Array.prototype.indexOf.call(target.children, el);
            if (dropIndex < 0) {
                // dropIndex is bad... cancel
                _this.drake.cancel(true);
                return;
            }
            var sourceComponent = _this.droppableMap.get(source);
            if (sourceComponent) {
                var sourceModel = sourceComponent.model;
                var targetModel = targetComponent.model;
                var hasDragModel = !!(sourceModel && draggedItem);
                var dragIndex = hasDragModel ? sourceModel.indexOf(draggedItem) : -1;
                if (hasDragModel && dragIndex < 0) {
                    // dragIndex is bad... cancel
                    _this.drake.cancel(true);
                    return;
                }
                if (targetModel) {
                    var reorder = dragIndex > -1 && sourceModel && target === source;
                    var copy = !sourceModel || dragElm !== el;
                    if (reorder) {
                        sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
                    }
                    else {
                        if (el.parentNode === target) {
                            target.removeChild(el);
                        }
                        if (copy) {
                            dropElmModel = JSON.parse(JSON.stringify(dropElmModel));
                        }
                        else {
                            if (el.parentNode !== source) {
                                // add element back, let angular remove it
                                _this.drake.cancel(true);
                            }
                            sourceModel.splice(dragIndex, 1);
                        }
                        targetModel.splice(dropIndex, 0, dropElmModel);
                    }
                }
            }
            targetComponent.drop.emit({
                type: 'drop',
                el: el,
                source: source,
                value: dropElmModel,
                dropIndex: dropIndex
            });
        });
        this.drake.on('remove', function (el, container, source) {
            if (_this.droppableMap.has(source)) {
                var sourceComponent = _this.droppableMap.get(source);
                var sourceModel = sourceComponent.model;
                var dragIndex = draggedItem && sourceModel ? sourceModel.indexOf(draggedItem) : -1;
                if (dragIndex > -1) {
                    if (el.parentNode !== source) {
                        // add element back, let angular remove it
                        source.appendChild(el);
                    }
                    sourceModel.splice(dragIndex, 1);
                }
                sourceComponent.remove.emit({
                    type: 'remove',
                    el: el,
                    container: container,
                    source: source,
                    value: draggedItem
                });
            }
        });
        this.drake.on('cancel', function (el, container, source) {
            if (_this.droppableMap.has(container)) {
                var containerComponent = _this.droppableMap.get(container);
                containerComponent.cancel.emit({
                    type: 'cancel',
                    el: el,
                    container: container,
                    source: source,
                    value: draggedItem
                });
            }
        });
        this.drake.on('over', function (el, container, source) {
            if (_this.droppableMap.has(container)) {
                var containerComponent = _this.droppableMap.get(container);
                containerComponent.over.emit({
                    type: 'over',
                    el: el,
                    container: container,
                    source: source,
                    value: draggedItem
                });
            }
        });
        this.drake.on('out', function (el, container, source) {
            if (_this.droppableMap.has(container)) {
                var containerComponent = _this.droppableMap.get(container);
                containerComponent.out.emit({
                    type: 'out',
                    el: el,
                    container: container,
                    source: source,
                    value: draggedItem
                });
            }
        });
    };
    DrakeStoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DrakeStoreService);
    return DrakeStoreService;
}());



/***/ }),

/***/ "./projects/notadd/ngx-tree-dnd/src/public_api.ts":
/*!********************************************************!*\
  !*** ./projects/notadd/ngx-tree-dnd/src/public_api.ts ***!
  \********************************************************/
/*! exports provided: DraggableDirective, DroppableDirective, DragHandleDirective, ItemComponent, ContainerComponent, DrakeStoreService, NgxTreeDnDModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_tree_dnd_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-tree-dnd.module */ "./projects/notadd/ngx-tree-dnd/src/lib/ngx-tree-dnd.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxTreeDnDModule", function() { return _lib_ngx_tree_dnd_module__WEBPACK_IMPORTED_MODULE_0__["NgxTreeDnDModule"]; });

/* harmony import */ var _lib_directives_ngx_draggable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/directives/ngx-draggable.directive */ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-draggable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return _lib_directives_ngx_draggable_directive__WEBPACK_IMPORTED_MODULE_1__["DraggableDirective"]; });

/* harmony import */ var _lib_directives_ngx_droppable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directives/ngx-droppable.directive */ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-droppable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DroppableDirective", function() { return _lib_directives_ngx_droppable_directive__WEBPACK_IMPORTED_MODULE_2__["DroppableDirective"]; });

/* harmony import */ var _lib_directives_ngx_drag_handle_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/directives/ngx-drag-handle.directive */ "./projects/notadd/ngx-tree-dnd/src/lib/directives/ngx-drag-handle.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragHandleDirective", function() { return _lib_directives_ngx_drag_handle_directive__WEBPACK_IMPORTED_MODULE_3__["DragHandleDirective"]; });

/* harmony import */ var _lib_components_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/components/item/item.component */ "./projects/notadd/ngx-tree-dnd/src/lib/components/item/item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return _lib_components_item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"]; });

/* harmony import */ var _lib_components_container_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/container/container.component */ "./projects/notadd/ngx-tree-dnd/src/lib/components/container/container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return _lib_components_container_container_component__WEBPACK_IMPORTED_MODULE_5__["ContainerComponent"]; });

/* harmony import */ var _lib_services_drake_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services/drake-store.service */ "./projects/notadd/ngx-tree-dnd/src/lib/services/drake-store.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrakeStoreService", function() { return _lib_services_drake_store_service__WEBPACK_IMPORTED_MODULE_6__["DrakeStoreService"]; });










/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div fxLayout=\"row nowrap\" fxFill>\n    <div fxFlex=\"50%\">\n      <div class='wrapper'>\n        <ngx-tree-dnd-container\n          [model]=\"nestedLists\"\n          [actions]=\"actions\">\n        </ngx-tree-dnd-container>\n      </div>\n    </div>\n    <div fxFlex=\"25%\">\n      <h3>Model</h3>\n      <code>\n        <pre>nestedLists = {{nestedLists | json}}</pre>\n      </code>\n    </div>\n    <div fxFlex=\"25%\">\n      <h3>Using Components</h3>\n      <pre><code ngNonBindable>\n        <![CDATA[<ngx-tree-dnd-container\n          [model]=\"nestedLists\"\n          [actions]=\"actions\">\n        </ngx-tree-dnd-container>]]>\n      </code></pre>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  padding: 20px; }\n  main .wrapper {\n    padding: 0 30px; }\n  main code {\n    margin: 0;\n    padding: 0;\n    overflow-wrap: break-word;\n    white-space: pre-wrap; }\n  main pre {\n    width: 90%;\n    padding: 1rem;\n    background: #282a36;\n    color: #f8f8f2;\n    margin: .5rem 0;\n    font-family: \"Inconsolata\", \"Monaco\", \"Consolas\", \"Andale Mono\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace;\n    overflow-x: auto;\n    line-height: 1.45;\n    -moz-tab-size: 2;\n      -o-tab-size: 2;\n         tab-size: 2;\n    position: relative;\n    border-radius: 2px;\n    font-size: 0.8rem; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.nestedLists = [
            { label: 'Item 1', children: [] },
            {
                label: 'Item 2',
                children: [
                    { label: 'Item 2a', children: [] },
                    { label: 'Item 2b', children: [] },
                    { label: 'Item 2c', children: [] }
                ]
            },
            {
                label: 'Item 3',
                children: [
                    { label: 'Item 3a', children: [] },
                    { label: 'Item 3b', children: [] },
                    { label: 'Item 3c', children: [] }
                ]
            }
        ];
        this.actions = [
            {
                icon: 'remove_red_eye',
                callback: function (model) { return console.log(model); }
            },
            {
                icon: 'edit',
                callback: function (model) { return _this.edit(model); }
            },
            {
                icon: 'delete',
                callback: function (model) { return console.log(model); }
            }
        ];
    }
    AppComponent.prototype.edit = function (modle) {
        console.log(modle);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _projects_notadd_ngx_tree_dnd_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/notadd/ngx-tree-dnd/src/public_api */ "./projects/notadd/ngx-tree-dnd/src/public_api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _projects_notadd_ngx_tree_dnd_src_public_api__WEBPACK_IMPORTED_MODULE_3__["NgxTreeDnDModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tianhun/workspace/npm/ngx-tree-dnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map