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
        Common.navigateL4 = function (item, parent, grandParent) {
            if (item.Id) {
                sessionStorage.setItem("SelectedL2", grandParent.Id);
                sessionStorage.setItem("SelectedL2Name", grandParent.Name);
                sessionStorage.setItem("SelectedL3", parent.Id);
                sessionStorage.setItem("SelectedL3Name", parent.Name);
                sessionStorage.setItem("SelectedL4", item.Id);
                sessionStorage.setItem("SelectedL4Name", item.Name);
                sessionStorage.setItem("NavLevel", "4");
            }
            window.location.href = "l4Nav.html";
        };
        Common.navigateL3 = function (item, parent) {
            if (item.Id) {
                sessionStorage.setItem("SelectedL2", parent.Id);
                sessionStorage.setItem("SelectedL2Name", parent.Name);
                sessionStorage.setItem("SelectedL3", item.Id);
                sessionStorage.setItem("SelectedL3Name", item.Name);
                sessionStorage.setItem("NavLevel", "3");
            }
            sessionStorage.removeItem("SelectedL4");
            sessionStorage.removeItem("SelectedL4Name");
            window.location.href = "l3Nav.html";
        };
        Common.navigateL2 = function (itemName, itemId) {
            sessionStorage.setItem("SelectedL2", itemId);
            sessionStorage.setItem("SelectedL2Name", itemName);
            sessionStorage.setItem("NavLevel", "2");
            sessionStorage.removeItem("SelectedL3");
            sessionStorage.removeItem("SelectedL3Name");
            sessionStorage.removeItem("SelectedL4");
            sessionStorage.removeItem("SelectedL4Name");
            window.location.href = "l2Nav.html";
        };
        Common.addZero = function (integer) {
            if (integer < 10) {
                integer = "0" + integer;
            }
            return integer;
        };
        return Common;
    }());
    App.Common = Common;
})(App || (App = {}));
//# sourceMappingURL=utils.js.map