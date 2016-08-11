var App;
(function (App) {
    "use strict";
    var BaseController = (function () {
        function BaseController($scope, $timeout, dataService) {
            this.$scope = $scope;
            this.$timeout = $timeout;
            this.dataService = dataService;
            this.$scope.ctrl = this;
            this.dataService = dataService;
            this.$scope.contractType = "Teachers & Principals";
            $(function () {
                var popover = $('[data-toggle="popover"]');
                if (popover) {
                    popover.popover();
                }
            });
        }
        return BaseController;
    }());
    App.BaseController = BaseController;
    var BaseJsonDataService = (function () {
        function BaseJsonDataService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.jsonDataBase = new App.JSONDatabase();
        }
        BaseJsonDataService.prototype.getItems = function (dataBase, showDeleted) {
            if (showDeleted === void 0) { showDeleted = false; }
            var deferred = this.$q.defer();
            var isSessionStored = sessionStorage.getItem("IsSessionStored" + dataBase);
            if (isSessionStored) {
                var data = $.parseJSON(sessionStorage.getItem(dataBase));
                if (!showDeleted) {
                    data = $.grep(data, function (item) {
                        if (!item.hasOwnProperty("IsDeleted")) {
                            return true;
                        }
                        return (item['IsDeleted'] == "false" || item['IsDeleted'] == false);
                    });
                }
                deferred.resolve(data);
                return deferred.promise;
            }
            var data = this.jsonDataBase[dataBase];
            var dataArray = [];
            $.each(data, function (key, val) {
                if (!val.hasOwnProperty("IsDeleted")) {
                    dataArray.push(val);
                }
                else {
                    if (val['IsDeleted'] == "false" || val['IsDeleted'] == false) {
                        dataArray.push(val);
                    }
                }
            });
            var jsonData = JSON.stringify(dataArray);
            sessionStorage.setItem("IsSessionStored" + dataBase, "True");
            sessionStorage.setItem(dataBase, jsonData);
            deferred.resolve(dataArray);
            return deferred.promise;
        };
        BaseJsonDataService.prototype.getItemByKeyValue = function (dataBase, key, value) {
            var deferred = this.$q.defer();
            this.getItems(dataBase)
                .then(function (data) {
                var filtered = $.grep(data, function (item) {
                    return item[key] == value;
                });
                deferred.resolve(filtered);
            })
                .catch(function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseJsonDataService.prototype.expandPropery = function (dataArray, dataBase, key) {
            var deferred = this.$q.defer();
            this.getItems(dataBase)
                .then(function (data) {
                var filtered = $.grep(data, function (item) {
                    return dataArray.indexOf(item.Id) > -1;
                });
                deferred.resolve(filtered);
            })
                .catch(function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseJsonDataService.prototype.getItemsByTag = function (tags, database) {
            var deferred = this.$q.defer();
            this.getItems(database)
                .then(function (data) {
                _.remove(tags, function (item) { return item == ""; });
                var filtered = $.grep(data, function (item) {
                    var intersectionArray = _.intersection(item.Tags, tags);
                    return (intersectionArray.length >= tags.length);
                });
                deferred.resolve(filtered);
            })
                .catch(function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseJsonDataService.prototype.setItem = function (dataBase, key, object) {
            var deferred = this.$q.defer();
            this.getItems(dataBase)
                .then(function (data) {
                var filteredItem = $.grep(data, function (item) {
                    return item[key] == object[key];
                });
                if (filteredItem.length == 0 || filteredItem.length > 1) {
                    data.push(object);
                }
                else {
                    var i = data.indexOf(filteredItem[0]);
                    data[i] = object;
                }
                var jsonData = JSON.stringify(data);
                sessionStorage.setItem("IsSessionStored" + dataBase, "True");
                sessionStorage.setItem(dataBase, jsonData);
                deferred.resolve(true);
            })
                .catch(function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseJsonDataService.prototype.getDocumentTypeFilters = function () {
            return this.getItems("DocumentTypeFilters");
        };
        BaseJsonDataService.prototype.getTaggedDocuments = function (TagArray) {
            return this.getItemsByTag(TagArray, "Documents");
        };
        BaseJsonDataService.$inject = [
            '$http',
            '$q'
        ];
        return BaseJsonDataService;
    }());
    App.BaseJsonDataService = BaseJsonDataService;
    var Common = (function () {
        function Common() {
        }
        Common.guid = function () {
            var gen = function (s) {
                var p = (Math.random().toString(16) + "000000000").substr(2, 8);
                return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
            };
            return gen(null) + gen(true) + gen(true) + gen(null);
        };
        Common.getFriendlyTime = function (hour, minute) {
            var updatedhour = ((hour + 11) % 12 + 1);
            minute = this.addZero(minute);
            return (updatedhour + ":" + minute);
        };
        Common.replaceArrayContents = function (existingArray, newContents) {
            if (existingArray) {
                var args = [0, existingArray.length].concat(newContents);
                Array.prototype.splice.apply(existingArray, args);
            }
        };
        Common.navigate = function (location, navArray) {
            var navString = JSON.stringify(navArray);
            sessionStorage.setItem("NavArray", navString);
            window.location.href = location;
        };
        Common.navigateL4 = function (navArray) {
            this.navigate("levelFour.html", navArray);
        };
        Common.navigateL3 = function (navArray, pageUrl) {
            if (pageUrl === void 0) { pageUrl = "levelThree.html"; }
            navArray = navArray.splice(0, 3);
            this.navigate(pageUrl, navArray);
        };
        Common.navigateL2 = function (navArray, pageUrl) {
            if (pageUrl === void 0) { pageUrl = "levelTwo.html"; }
            navArray = navArray.splice(0, 2);
            this.navigate(pageUrl, navArray);
        };
        Common.navigateL1 = function (navArray, pageUrl) {
            if (pageUrl === void 0) { pageUrl = "levelOne.html"; }
            navArray = navArray.splice(0, 1);
            this.navigate(pageUrl, navArray);
        };
        Common.addZero = function (integer) {
            if (integer < 10) {
                integer = "0" + integer;
            }
            return integer;
        };
        Common.redirectHome = function () {
            this.navigate("index.html", []);
        };
        return Common;
    }());
    App.Common = Common;
    var Directives = (function () {
        function Directives() {
        }
        Directives.scopedPopover = function ($compile, $http) {
            return {
                restrict: "A",
                replace: false,
                scope: {
                    currencies: "=data",
                    selected: "=selected"
                },
                link: function (scope, element, attrs) {
                    var html = '<div style="color: black !important" class="currency-popup">' +
                        '<div><span>Your contract Type is :</span></div>' +
                        '<div class="bold">{{selected}}<div>' +
                        '<div><span class="small-text text-muted">Report an Error</span></div>' +
                        '<hr class="hr-thin"/>' +
                        '<div><span class="small-text bold">CONTRACT TYPES</span></div>' +
                        '<div ng-click="selected = &#39;Custodial&#39;"><a>Custodial</a></div>' +
                        '<div ng-click="selected = &#39;Exempt&#39;"><a>Exempt</a></div>' +
                        '<div ng-click="selected = &#39;Leadership&#39;"><a>Leadership</a></div>' +
                        '<div ng-click="selected = &#39;Maintenance&#39;"><a>Maintenance</a></div>' +
                        '<div ng-click="selected = &#39;Support&#39;"><a>Support</a></div>' +
                        '<div ng-click="selected = &#39;Teachers & Principals&#39;"><a>Teachers & Principals</a></div>' +
                        '</div>';
                    var compiled = $compile(html)(scope);
                    $(element).popover({
                        content: compiled,
                        html: true,
                        placement: 'bottom',
                        trigger: 'manual'
                    });
                    $(element).bind('click', function () {
                        $(element).popover('toggle');
                    });
                    scope.alertTest = (function () {
                        alert("test");
                    });
                }
            };
        };
        return Directives;
    }());
    App.Directives = Directives;
})(App || (App = {}));
//# sourceMappingURL=utils.js.map