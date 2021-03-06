var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Nav;
    (function (Nav) {
        "use strict";
        var NavController = (function (_super) {
            __extends(NavController, _super);
            function NavController($scope, $timeout, $q, dataService) {
                _super.call(this, $scope, $timeout, $timeout);
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.$q = $q;
                this.dataService = dataService;
                this.$scope.menuClosed = true;
                this.$scope.searchArea = "";
                this.$scope.openItemId = "";
                this.$scope.searchString = "";
                this.$scope.navItems = [];
                this.$scope.l2NavItems = [];
                this.$scope.l3NavItems = [];
                this.$scope.l4NavItems = [];
                this.$scope.applications = [];
                this.$scope.navigatedItems = [];
                this.$scope.selectedItemIds = [];
                this.loadNav();
                this.loadApps();
                this.initiateClock();
                this.initiateDay();
                this.navListener();
                /*
                $('.POPOVER-DISMISS').POPOVER({
                  TRIGGER: 'FOCUS'
                })
                */
                this.$scope.applicationsItem = {
                    Name: "Applications",
                    PageUrl: "applications.html"
                };
                this.$scope.searchItem = {
                    Name: "Search",
                    PageUrl: "searchResults.html"
                };
                this.$scope.userItem = {
                    Name: "User",
                    PageUrl: "userInfo.html"
                };
                this.$scope.currentUser = sessionStorage.getItem("CurrentUser");
                if (!this.$scope.currentUser) {
                    this.$scope.currentUser = "Samantha Nugent";
                }
                var kkeys = [], konami = ["38", "38", '40', '40', '37', '39', '37', '39', '66', '65', '13'];
                var that = this;
                window.addEventListener("keydown", function (e) {
                    kkeys.push(e.keyCode);
                    if (konami.indexOf(e.keyCode.toString()) == -1) {
                        kkeys = [];
                    }
                    if (kkeys.toString().indexOf(konami.toString()) >= 0) {
                        that.swapUsers();
                        kkeys = [];
                    }
                }, true);
                this.$scope.navigatedItems = JSON.parse(sessionStorage.getItem("NavArray"));
                if (!this.$scope.navigatedItems) {
                    this.$scope.navigatedItems = [];
                }
            }
            NavController.prototype.toggleRightNav = function () {
            };
            NavController.prototype.toggleMobile = function () {
                var menu = $('.mobile-menu');
                menu.toggleClass('open-mobile');
                /*var body = $('body')
                body.toggleClass('push-menu')*/
            };
            NavController.prototype.toggleMobileRight = function () {
                var menu = $('.mobile-menu-right');
                menu.toggleClass('open-mobile-right');
            };
            NavController.prototype.mobileL1 = function (l1Nav, subNavIndex) {
                var _this = this;
                var allSubs = $('.mobile-l2');
                var nav = $('#' + subNavIndex + "-l1");
                allSubs.animate({ 'height': "0" }, 10);
                if (nav.hasClass('open-nav-item-mobile')) {
                    nav.removeClass('open-nav-item-mobile');
                    return;
                }
                this.loadNavItems(l1Nav)
                    .then(function (data) {
                    _this.$timeout(function () {
                        var subNav = $('#' + subNavIndex + "-l2");
                        subNav.css('height', 'auto');
                        var height = subNav.height();
                        subNav.css('height', '0');
                        subNav.animate({ 'height': height + "px" }, 10);
                    });
                });
                var allNavs = $('.mobile-row');
                allNavs.removeClass('open-nav-item-mobile');
                nav.toggleClass('open-nav-item-mobile');
            };
            NavController.prototype.mobileL1Right = function (subNavIndex) {
                var allSubs = $('.mobile-l2');
                var nav = $('#' + subNavIndex + "-l1");
                allSubs.animate({ 'height': "0" }, 10);
                if (nav.hasClass('open-nav-item-mobile')) {
                    nav.removeClass('open-nav-item-mobile');
                    return;
                }
                var subNav = $('#' + subNavIndex + "-l2");
                subNav.css('height', 'auto');
                var height = subNav.height();
                subNav.css('height', '0');
                subNav.animate({ 'height': height + "px" }, 10);
                var allNavs = $('.mobile-row');
                allNavs.removeClass('open-nav-item-mobile');
                nav.toggleClass('open-nav-item-mobile');
            };
            NavController.prototype.isOpenMobile = function (navIndex) {
                var nav = $('#' + navIndex + "-l1");
                return (nav.hasClass('open-nav-item-mobile'));
            };
            NavController.prototype.navListener = function () {
                var that = this;
                $(document).mouseup(function (e) {
                    var popovers = $(".popover-icon");
                    var container = $('.left-nav');
                    var appsButton = $('#appsIcon');
                    var appsNav = $('.right-nav');
                    var layoutfooter = $('.layout-footer');
                    if (!popovers.is(e.target) && popovers.has(e.target).length === 0) {
                        popovers.popover('destroy');
                        popovers.popover();
                    }
                    else {
                        popovers.popover('destroy');
                        popovers.popover();
                    }
                    if (layoutfooter.is(e.target)) {
                        that.swapUsers();
                    }
                    if ((!container.is(e.target) // if the target of the click isn't the container...
                        && container.has(e.target).length === 0)) {
                        that.closeL2Nav();
                    }
                    var open = $(".right-nav-open");
                    if ((open[0] && (!appsNav.is(e.target)
                        && appsNav.has(e.target).length === 0)) && !appsButton.is(e.target)) {
                        var appDrawer2 = $(".application-drawer");
                        appDrawer2.toggleClass("right-nav-open");
                    }
                });
            };
            NavController.prototype.redirectToUser = function () {
            };
            NavController.prototype.swapUsers = function () {
                if (this.$scope.currentUser == "Samantha Nugent") {
                    sessionStorage.setItem("CurrentUser", "Steve Jacob");
                    var indexOf = _.findIndex(this.$scope.navItems, function (item) {
                        var itemId = item.Id;
                        return (itemId == 'Meadowlark School');
                    });
                    this.$scope.navItems[indexOf].Name = "The Centre For Education";
                    this.dataService.setItem("LevelOneNavItems", "Id", this.$scope.navItems[indexOf]);
                }
                else {
                    sessionStorage.setItem("CurrentUser", "Samantha Nugent");
                    var indexOf = _.findIndex(this.$scope.navItems, function (item) {
                        var itemId = item.Id;
                        return (itemId == 'Meadowlark School');
                    });
                    this.$scope.navItems[indexOf].Name = "Meadowlark School";
                    this.dataService.setItem("LevelOneNavItems", "Id", this.$scope.navItems[indexOf]);
                }
                window.location.reload();
            };
            NavController.prototype.search = function (searchParam) {
                if (searchParam === void 0) { searchParam = ""; }
                searchParam = (searchParam == "") ? this.$scope.searchString : searchParam;
                sessionStorage.setItem("SearchString", searchParam);
                this.redirectToL1Nav(this.$scope.searchItem);
            };
            NavController.prototype.loadApps = function () {
                var _this = this;
                this.dataService.getApps()
                    .then(function (data) {
                    data = _.sortBy(data, function (o) { return (o.Favorite == 'false'); });
                    App.Common.replaceArrayContents(_this.$scope.applications, data);
                });
            };
            /*BEGIN SECTION: NAV FUNCTIONS*/
            /*Nav Loading*/
            NavController.prototype.loadNav = function () {
                var _this = this;
                var deferred = this.$q.defer();
                this.dataService.getNavItems()
                    .then(function (data) {
                    if (data.length == 0) {
                        deferred.resolve(false);
                    }
                    else {
                        for (var i = 0; i < data.length; i++) {
                            _this.$scope.navItems.push(data[i]);
                            _this.$scope.navItems[i].hasChildren = false;
                            _this.findl2Children(_this.$scope.navItems[i]);
                        }
                        deferred.resolve(true);
                    }
                })
                    .catch(function (ex) {
                    alert(ex);
                });
                return deferred.promise;
            };
            //L2 Nav
            NavController.prototype.loadNavItems = function (item) {
                var _this = this;
                var contentArea = $(".content-area");
                contentArea.bind("click", this.clickToClose);
                this.$scope.l2NavItems.length = 0;
                this.$scope.openItemId = item.Id;
                var deferred = this.$q.defer();
                this.dataService.getL2NavItems(item.Id)
                    .then(function (data) {
                    if (data.length == 0) {
                        deferred.resolve(false);
                    }
                    else {
                        deferred.resolve(true);
                        App.Common.replaceArrayContents(_this.$scope.l2NavItems, data);
                        for (var i = 0; i < _this.$scope.l2NavItems.length; i++) {
                            _this.$scope.l2NavItems[i].hasChildren = false;
                            _this.findl3Children(_this.$scope.l2NavItems[i]);
                        }
                    }
                });
                return deferred.promise;
            };
            NavController.prototype.loadL3NavItems = function (item) {
                var _this = this;
                var deferred = this.$q.defer();
                this.dataService.getL3NavItems(item.Id)
                    .then(function (data) {
                    if (data.length == 0) {
                        deferred.resolve(false);
                    }
                    else {
                        deferred.resolve(true);
                        App.Common.replaceArrayContents(_this.$scope.l3NavItems, data);
                        for (var i = 0; i < _this.$scope.l3NavItems.length; i++) {
                            _this.$scope.l3NavItems[i].hasChildren = false;
                            _this.findl4Children(_this.$scope.l3NavItems[i]);
                        }
                    }
                });
                return deferred.promise;
            };
            NavController.prototype.loadL4NavItems = function (item) {
                var _this = this;
                var deferred = this.$q.defer();
                this.dataService.getL4NavItems(item.Id)
                    .then(function (data) {
                    if (data.length == 0) {
                        deferred.resolve(false);
                    }
                    else {
                        deferred.resolve(true);
                        App.Common.replaceArrayContents(_this.$scope.l4NavItems, data);
                    }
                });
                return deferred.promise;
            };
            NavController.prototype.findl2Children = function (item) {
                this.dataService.getL2NavItems(item.Id)
                    .then(function (data) {
                    item.hasChildren = (data.length > 0);
                });
            };
            NavController.prototype.findl3Children = function (item) {
                this.dataService.getL3NavItems(item.Id)
                    .then(function (data) {
                    item.hasChildren = (data.length > 0);
                });
            };
            NavController.prototype.findl4Children = function (item) {
                this.dataService.getL4NavItems(item.Id)
                    .then(function (data) {
                    item.hasChildren = (data.length > 0);
                });
            };
            /*Nav Opening*/
            NavController.prototype.openL2NavForItem = function (item, isClick) {
                var _this = this;
                if (isClick === void 0) { isClick = false; }
                if (this.IsOpenItem(item.Id)) {
                    this.closeL2Nav();
                    return;
                }
                if (this.$scope.selectedItemIds[0] && this.$scope.selectedItemIds[0] != "") {
                    this.closeL3Nav();
                }
                this.loadNavItems(item).then(function (hasChildren) {
                    if (hasChildren) {
                        _this.$scope.selectedItemIds[0] = item;
                        var l1nav = $('.l1-nav');
                        var l1Width = l1nav.width();
                        $('.l2-nav').animate({ "left": l1Width + "px" }, 10);
                        if (_this.IsNavigated(item.Id) && (_this.$scope.navigatedItems[1] && _this.$scope.navigatedItems[1] != "")) {
                            _this.openL3NavForItem(_this.$scope.navigatedItems[1], true, l1Width);
                        }
                    }
                    else if (isClick) {
                        _this.redirectToL1Nav(item);
                    }
                });
            };
            NavController.prototype.openL3NavForItem = function (item, isChain, extraOffset, isClick) {
                var _this = this;
                if (isChain === void 0) { isChain = false; }
                if (extraOffset === void 0) { extraOffset = 0; }
                if (isClick === void 0) { isClick = false; }
                if (this.IsOpenItem(item.Id) && !isChain) {
                    this.closeL3Nav();
                    return;
                }
                if (this.$scope.selectedItemIds[1] && this.$scope.selectedItemIds[1] != "") {
                    this.closeL4Nav();
                }
                this.loadL3NavItems(item).then(function (hasChildren) {
                    if (hasChildren) {
                        _this.$scope.selectedItemIds[1] = item;
                        var l2nav = $('.l2-nav');
                        var l2Width = l2nav.width();
                        var l2Offset = l2nav.offset().left;
                        var overallOffest = (!l2Offset) ? extraOffset : l2Offset;
                        var offset = l2Width + overallOffest;
                        $('.l3-nav').css("left", l2Offset + "px");
                        $('.l3-nav').animate({ "left": (offset) + "px" }, 10);
                        if (_this.IsNavigated(item.Id) && (_this.$scope.navigatedItems[2] && _this.$scope.navigatedItems[2] != "")) {
                            _this.openL4NavForItem(_this.$scope.navigatedItems[2], true, offset);
                        }
                    }
                    else if (isClick) {
                        _this.redirectToL2Nav(item);
                    }
                });
            };
            NavController.prototype.openL4NavForItem = function (item, isChain, extraOffset, isClick) {
                var _this = this;
                if (isChain === void 0) { isChain = false; }
                if (extraOffset === void 0) { extraOffset = 0; }
                if (isClick === void 0) { isClick = false; }
                if (this.IsOpenItem(item.Id) && !isChain) {
                    this.closeL4Nav();
                    return;
                }
                this.loadL4NavItems(item).then(function (hasChildren) {
                    if (hasChildren) {
                        _this.$scope.selectedItemIds[2] = item;
                        var l3nav = $('.l3-nav');
                        var l3Width = l3nav.width();
                        var l3Offset = l3nav.offset().left;
                        var offsetOverall = (!l3Offset) ? extraOffset : l3Offset;
                        var offset = l3Width + offsetOverall;
                        $('.l4-nav').css("left", l3Offset + "px");
                        $('.l4-nav').animate({ "left": (offset) + "px" }, 10);
                    }
                    else if (isClick) {
                        _this.redirectToL3Nav(item);
                    }
                });
            };
            /* Nav Closing */
            NavController.prototype.closeL2Nav = function () {
                var _this = this;
                this.closeL3Nav(true);
                $('.l2-nav').animate({ "left": "0" }, 10);
                this.$timeout(function () {
                    _this.$scope.selectedItemIds[0] = '';
                }, 500);
            };
            NavController.prototype.closeL3Nav = function (isChain) {
                var _this = this;
                if (isChain === void 0) { isChain = false; }
                if (this.$scope.selectedItemIds[1] == "" || !this.$scope.selectedItemIds[1]) {
                    return;
                }
                this.closeL4Nav(true);
                if (!isChain) {
                    var l2Offset = $('.l2-nav').offset().left;
                    $('.l3-nav').animate({ "left": l2Offset + "px" }, 10, function () {
                        _this.$timeout(function () {
                            $('.l3-nav').css({ "left": "0" });
                        }, 500);
                    });
                }
                else {
                    $('.l3-nav').animate({ "left": "0" }, 10);
                }
                this.$timeout(function () {
                    _this.$scope.selectedItemIds[1] = '';
                }, 500);
            };
            NavController.prototype.closeL4Nav = function (isChain) {
                var _this = this;
                if (isChain === void 0) { isChain = false; }
                if (this.$scope.selectedItemIds[2] == "" || !this.$scope.selectedItemIds[2]) {
                    return;
                }
                var l3Offset = $('.l3-nav').offset().left;
                if (!isChain) {
                    $('.l4-nav').animate({ "left": l3Offset + "px" }, 10, function () {
                        _this.$timeout(function () {
                            $('.l4-nav').css({ "left": "0" });
                        }, 500);
                    });
                }
                else {
                    $('.l4-nav').animate({ "left": "0" }, 10);
                }
                this.$timeout(function () {
                    _this.$scope.selectedItemIds[2] = '';
                }, 500);
            };
            /*EMD SECTION: NAV FUNCTIONS*/
            NavController.prototype.displayApps = function () {
                var item = $(".app-row");
                var currentHeight = item.height();
                var megaMenu = $(".mega-menu");
                var currentPadding = parseInt(megaMenu.css("marginTop"));
                if (currentHeight == 0) {
                    //var height= item.css('height', 'auto').height();
                    var height = 150;
                    item.css('height', '0');
                    item.animate({ height: height + "px" }, { duration: 200, queue: false });
                }
                else {
                    item.animate({ height: "0" }, { duration: 200, queue: false });
                }
            };
            NavController.prototype.redirectToL1Nav = function (item, IsBreadCrumb) {
                if (IsBreadCrumb === void 0) { IsBreadCrumb = false; }
                var navArray = (IsBreadCrumb) ? this.$scope.navigatedItems.slice() : this.$scope.selectedItemIds.slice();
                navArray[0] = item;
                if (item.PageUrl) {
                    App.Common.navigateL1(navArray, item.PageUrl);
                    return;
                }
                App.Common.navigateL1(navArray);
            };
            NavController.prototype.redirectToL2Nav = function (item, IsBreadCrumb) {
                if (IsBreadCrumb === void 0) { IsBreadCrumb = false; }
                var navArray = (IsBreadCrumb) ? this.$scope.navigatedItems.slice() : this.$scope.selectedItemIds.slice();
                navArray[1] = item;
                if (item.PageUrl) {
                    App.Common.navigateL2(navArray, item.PageUrl);
                    return;
                }
                App.Common.navigateL2(navArray);
            };
            NavController.prototype.redirectToL3Nav = function (item, IsBreadCrumb) {
                if (IsBreadCrumb === void 0) { IsBreadCrumb = false; }
                var navArray = (IsBreadCrumb) ? this.$scope.navigatedItems.slice() : this.$scope.selectedItemIds.slice();
                navArray[2] = item;
                if (item.PageUrl) {
                    App.Common.navigateL3(navArray, item.PageUrl);
                    return;
                }
                App.Common.navigateL3(navArray);
            };
            NavController.prototype.redirectToL4Nav = function (item, IsBreadCrumb) {
                if (IsBreadCrumb === void 0) { IsBreadCrumb = false; }
                var navArray = (IsBreadCrumb) ? this.$scope.navigatedItems.slice() : this.$scope.selectedItemIds.slice();
                navArray[3] = item;
                App.Common.navigateL4(navArray);
            };
            NavController.prototype.redirectHome = function () {
                App.Common.redirectHome();
            };
            NavController.prototype.redirectFromBreadCrumb = function (itemIndex, navItem) {
                switch (itemIndex) {
                    case 0:
                        this.redirectToL1Nav(navItem, true);
                        break;
                    case 1:
                        this.redirectToL2Nav(navItem, true);
                        break;
                    case 2:
                        this.redirectToL3Nav(navItem, true);
                        break;
                    case 3:
                        this.redirectToL4Nav(navItem, true);
                        break;
                    default:
                        break;
                }
            };
            NavController.prototype.openApplicationDrawer = function () {
                var appDrawer2 = $(".application-drawer");
                appDrawer2.toggleClass("right-nav-open");
            };
            NavController.prototype.IsOpenItem = function (itemId) {
                var matchingItems = $.grep(this.$scope.selectedItemIds, function (item) {
                    return item.Id == itemId;
                });
                if (!matchingItems) {
                    return false;
                }
                return (matchingItems.length > 0);
            };
            NavController.prototype.IsNavigated = function (itemId) {
                var matchingItems = $.grep(this.$scope.navigatedItems, function (item) {
                    return item.Id == itemId;
                });
                if (!matchingItems) {
                    return false;
                }
                return (matchingItems.length > 0);
            };
            NavController.prototype.initiateClock = function () {
                var _this = this;
                var date = new Date();
                var hour = date.getHours();
                var minute = date.getMinutes();
                var suffix = (hour >= 12) ? "pm" : "am";
                if (hour == 0 && minute < 2) {
                    this.initiateDay();
                }
                var friendlyTime = App.Common.getFriendlyTime(hour, minute);
                $(".date-time > span.time").text(friendlyTime);
                $(".date-time > span.period").text(suffix);
                setTimeout(function () {
                    _this.initiateClock();
                }, 15000);
            };
            NavController.prototype.initiateDay = function () {
                var date = new Date();
                var weekday = new Array(7);
                weekday[0] = "Sun";
                weekday[1] = "Mon";
                weekday[2] = "Tues";
                weekday[3] = "Wed";
                weekday[4] = "Thurs";
                weekday[5] = "Fri";
                weekday[6] = "Sat";
                var day = weekday[date.getDay()];
                var numberedDate = date.getDate();
                var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
                ];
                var month = monthNames[date.getMonth()];
                $(".date-time > span.date").text(day + ", " + month + " " + numberedDate);
            };
            NavController.$inject = ['$scope', '$timeout', '$q', 'dataService'];
            return NavController;
        }(App.BaseController));
        Nav.NavController = NavController;
    })(Nav = App.Nav || (App.Nav = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map