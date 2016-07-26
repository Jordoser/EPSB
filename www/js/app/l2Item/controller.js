var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var l2item;
    (function (l2item) {
        "use strict";
        var L2Controller = (function (_super) {
            __extends(L2Controller, _super);
            function L2Controller($scope, $timeout, dataService) {
                _super.call(this, $scope, $timeout, $timeout);
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.dataService = dataService;
                this.$scope.L3Items = [];
                this.$scope.relatedNewsItems = [];
                this.$scope.navigatedL2 = sessionStorage.getItem("SelectedL2");
                this.navLevel = sessionStorage.getItem("NavLevel");
                this.$scope.navigatedL3 = sessionStorage.getItem("SelectedL3");
                this.$scope.navigatedL4 = sessionStorage.getItem("SelectedL4");
                if (this.$scope.navigatedL2) {
                    this.LoadCurrentL2(this.$scope.navigatedL2);
                }
                this.loadPage();
                $('.custom-tab a').click(function (e) {
                    e.preventDefault();
                    $(this).tab('show');
                });
            }
            L2Controller.prototype.loadPage = function () {
                var _this = this;
                switch (this.navLevel) {
                    case "1":
                        break;
                    case "2":
                        break;
                    case "3":
                        break;
                    case "4":
                        this.dataService.loadL4Content(this.$scope.navigatedL4)
                            .then(function (data) {
                            _this.$scope.pageContent = data[0];
                            _this.dataService.expandUserContacts(data[0].UserContacts)
                                .then(function (expandedData) {
                                _this.$scope.pageContent.UserContacts = expandedData;
                            });
                            _this.loadRelatedNews(data[0].Id);
                            _this.loadPageAudit(data[0].PageAuditId);
                        });
                        break;
                    default:
                        break;
                }
            };
            L2Controller.prototype.loadRelatedNews = function (topic) {
                var _this = this;
                this.dataService.getRelatedNews(topic)
                    .then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        _this.$scope.relatedNewsItems.push(data[i]);
                    }
                });
            };
            L2Controller.prototype.loadPageAudit = function (auditId) {
                var _this = this;
                this.dataService.getPageAudit(auditId)
                    .then(function (data) {
                    _this.$scope.pageAudit = data[0];
                });
            };
            L2Controller.prototype.LoadCurrentL2 = function (objectId) {
                var _this = this;
                this.dataService.getL2ItemById(objectId)
                    .then(function (data) {
                    _this.$scope.selectedL2 = data[0];
                    if (_this.navLevel == '2') {
                        _this.$scope.currentItem = _this.$scope.selectedL2;
                    }
                    _this.$scope.selectedL2 = data[0];
                    _this.loadRelatedL3Items(data[0].Id);
                })
                    .catch(function (ex) {
                    alert(ex);
                });
            };
            L2Controller.prototype.loadRelatedL3Items = function (id) {
                var _this = this;
                this.dataService.getL3NavItems(id)
                    .then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        _this.$scope.L3Items[i] = data[i];
                        _this.$scope.L3Items[i].L4Items = [];
                        _this.loadRelatedL4Items(data[i].Id, i);
                    }
                });
            };
            L2Controller.prototype.loadRelatedL4Items = function (id, index) {
                var _this = this;
                this.dataService.getL4Items(id)
                    .then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        _this.$scope.L3Items[index].L4Items.push(data[i]);
                        if (_this.navLevel == '4' && data[i].Id == _this.$scope.navigatedL4) {
                            _this.$scope.currentItem = data[i];
                        }
                    }
                    if (_this.navLevel == '3' || _this.navLevel == '4') {
                        _this.$timeout(function () {
                            if (id == _this.$scope.navigatedL3 && _this.navLevel == '3') {
                                _this.$scope.currentItem = _this.$scope.L3Items[index];
                            }
                            _this.expandL3(id, true);
                        }, 100);
                    }
                });
            };
            L2Controller.prototype.expandL3 = function (id, skipAnimation) {
                if (skipAnimation === void 0) { skipAnimation = false; }
                var item = $("#l3" + id + " .l4-item-wrapper");
                var currentHeight = item.height();
                if (currentHeight == 0) {
                    var height = item.css('height', 'auto').height();
                    item.css('height', '0');
                    if (skipAnimation) {
                        item.height(height + "px");
                        return;
                    }
                    item.animate({ height: height + "px" }, 200);
                }
                else {
                    if (skipAnimation) {
                        item.height("0");
                    }
                    item.animate({ height: "0" }, 200);
                }
            };
            L2Controller.prototype.redirectToL4Nav = function (item, parent, grandParent) {
                App.Common.navigateL4(item, parent, grandParent);
            };
            L2Controller.prototype.redirectToL3Nav = function (item, parent) {
                App.Common.navigateL3(item, parent);
            };
            L2Controller.$inject = ['$scope', '$timeout', 'dataService'];
            return L2Controller;
        }(App.BaseController));
        l2item.L2Controller = L2Controller;
    })(l2item = App.l2item || (App.l2item = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map