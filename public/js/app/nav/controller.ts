module App.Nav{
"use strict";

export class NavController extends BaseController{
    public static $inject = ['$scope','$timeout','$q','dataService'];
    public navigatedL1;
    public navigatedL2;
    public navigatedL3;
    public navigatedL4;
    public clickToClose;
    constructor(public $scope: INavScope,  public $timeout: ng.ITimeoutService,public $q: ng.IQService, public dataService: NavDataService){
      super($scope,$timeout,$timeout);
      this.$scope.menuClosed = true;
      this.$scope.searchArea= "";
      this.$scope.openItemId = "";
      this.$scope.searchString = "";
      this.$scope.navItems = [];
      this.$scope.l2NavItems = [];
      this.$scope.l3NavItems = [];
      this.$scope.l4NavItems = [];
      this.$scope.applications = [];
      this.$scope.navigatedItems = []
      this.$scope.selectedItemIds = []
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
      }

      this.$scope.searchItem = {
        Name: "Search",
        PageUrl: "searchResults.html"
      }

      this.$scope.userItem = {
        Name: "User",
        PageUrl: "userInfo.html"
      }

      this.$scope.currentUser =  sessionStorage.getItem("CurrentUser");
      if(!this.$scope.currentUser){
        this.$scope.currentUser = "Samantha Nugent"
      }


          var kkeys = [], konami = ["38","38",'40','40','37','39','37','39','66','65','13'];
          var that = this;
          window.addEventListener("keydown", function(e){
              kkeys.push( e.keyCode );
              if(konami.indexOf(e.keyCode.toString()) == -1){
                kkeys = [];
              }
              if ( kkeys.toString().indexOf( konami.toString() ) >= 0 ){
                  that.swapUsers();
                  kkeys = [];
                  }
          }, true);




      this.$scope.navigatedItems = JSON.parse(sessionStorage.getItem("NavArray"));


      if(!this.$scope.navigatedItems){
        this.$scope.navigatedItems = [];
      }

    }

    public toggleRightNav(){

    }

    public toggleMobile(){
    var menu = $('.mobile-menu')
    menu.toggleClass('open-mobile');
    /*var body = $('body')
    body.toggleClass('push-menu')*/
    }

    public toggleMobileRight(){
    var menu = $('.mobile-menu-right')
    menu.toggleClass('open-mobile-right');
    }

    public mobileL1(l1Nav, subNavIndex){
      var allSubs = $('.mobile-l2')
      var nav = $('#' + subNavIndex + "-l1")
      allSubs.animate({'height': "0"},10);


      if(nav.hasClass('open-nav-item-mobile')){
          nav.removeClass('open-nav-item-mobile');
          return;
      }
      this.loadNavItems(l1Nav)
      .then(data => {
        this.$timeout(()=>{
          var subNav = $('#' + subNavIndex + "-l2")
          subNav.css('height', 'auto')
          var height = subNav.height();
          subNav.css('height', '0')
          subNav.animate({'height': height + "px"},10);
        })

      })



      var allNavs =  $('.mobile-row')
      allNavs.removeClass('open-nav-item-mobile');


      nav.toggleClass('open-nav-item-mobile')
    }

    public mobileL1Right(subNavIndex){
      var allSubs = $('.mobile-l2')
      var nav = $('#' + subNavIndex + "-l1")
      allSubs.animate({'height': "0"},10);


      if(nav.hasClass('open-nav-item-mobile')){
          nav.removeClass('open-nav-item-mobile');
          return;
      }

        var subNav = $('#' + subNavIndex + "-l2")
        subNav.css('height', 'auto')
        var height = subNav.height();
        subNav.css('height', '0')
        subNav.animate({'height': height + "px"},10);






      var allNavs =  $('.mobile-row')
      allNavs.removeClass('open-nav-item-mobile');


      nav.toggleClass('open-nav-item-mobile')
    }


    public isOpenMobile(navIndex){
        var nav = $('#' + navIndex + "-l1");
        return(nav.hasClass('open-nav-item-mobile'))
    }
    public navListener(){
      var that =this
      $(document).mouseup(function (e)
      {



          var popovers = $(".popover-icon")
          var container = $('.left-nav');
          var appsButton = $('#appsIcon')
          var appsNav = $('.right-nav')
          var layoutfooter = $('.layout-footer')

          if(!popovers.is(e.target) && popovers.has(<any>e.target).length === 0){
            popovers.popover('destroy');
            popovers.popover();
          }else{
            popovers.popover();
          }

          if(layoutfooter.is(e.target)){
            that.swapUsers()
          }



          if ((!container.is(e.target) // if the target of the click isn't the container...
              && container.has(<any>e.target).length === 0)) // ... nor a descendant of the container
          {
              that.closeL2Nav();

          }
          var open = $(".right-nav-open");
          if((open[0] && (!appsNav.is(e.target)
              && appsNav.has(<any>e.target).length === 0)) && !appsButton.is(e.target) ){
            var appDrawer2 = $(".application-drawer");
            appDrawer2.toggleClass("right-nav-open");
          }
      });
    }

    public redirectToUser(){

    }

    public swapUsers(){
      if(this.$scope.currentUser == "Samantha Nugent"){
        sessionStorage.setItem("CurrentUser", "Steve Jacob");
          var indexOf = _.findIndex(this.$scope.navItems, (item) => {
          var itemId = item.Id
          return (itemId == 'Meadowlark School')
        });
        this.$scope.navItems[indexOf].Name = "The Centre For Education"
        this.dataService.setItem("LevelOneNavItems","Id",this.$scope.navItems[indexOf])
      }else{
          sessionStorage.setItem("CurrentUser",  "Samantha Nugent");
          var indexOf = _.findIndex(this.$scope.navItems, (item) => {
          var itemId = item.Id
            return (itemId == 'Meadowlark School')
          });
          this.$scope.navItems[indexOf].Name = "Meadowlark School"
          this.dataService.setItem("LevelOneNavItems","Id",this.$scope.navItems[indexOf])
      }

      window.location.reload()
    }


    public search(searchParam = ""){
        searchParam = (searchParam == "")? this.$scope.searchString: searchParam;
        sessionStorage.setItem("SearchString", searchParam);
        this.redirectToL1Nav(this.$scope.searchItem)
    }

    public loadApps(){
      this.dataService.getApps()
      .then(data =>{
        data = _.sortBy(data, (o)=>{return (o.Favorite == 'false')})
        App.Common.replaceArrayContents(this.$scope.applications, data)
      })
    }

    /*BEGIN SECTION: NAV FUNCTIONS*/

      /*Nav Loading*/
    public loadNav(): ng.IPromise<any>{
      var deferred = this.$q.defer();
      this.dataService.getNavItems()
      .then(data =>{
        if(data.length == 0){
          deferred.resolve(false);
        }
        else{
          for(var i = 0; i < data.length; i++){
            this.$scope.navItems.push(data[i])
            this.$scope.navItems[i].hasChildren = false;
            this.findl2Children(this.$scope.navItems[i])
          }
          deferred.resolve(true)
        }

        })
      .catch(ex => {
        alert(ex);
      })
      return deferred.promise;
    }

    //L2 Nav
    public loadNavItems(item): ng.IPromise<any>{
      var contentArea = $(".content-area")
      contentArea.bind("click", this.clickToClose);
      this.$scope.l2NavItems.length = 0;
      this.$scope.openItemId = item.Id
      var deferred = this.$q.defer();
      this.dataService.getL2NavItems(item.Id)
      .then(data =>{
        if(data.length == 0){
          deferred.resolve(false);
        }
        else{

          deferred.resolve(true)
          App.Common.replaceArrayContents(this.$scope.l2NavItems,data)

          for(var i =0; i < this.$scope.l2NavItems.length; i++){
            this.$scope.l2NavItems[i].hasChildren = false;
            this.findl3Children(this.$scope.l2NavItems[i])
          }
        }

      })
      return deferred.promise;
    }

    public loadL3NavItems(item): ng.IPromise<any>{
      var deferred = this.$q.defer();
      this.dataService.getL3NavItems(item.Id)
            .then(data => {
               if(data.length == 0){
                 deferred.resolve(false);
               }
               else{
                 deferred.resolve(true)
                 App.Common.replaceArrayContents(this.$scope.l3NavItems,data)

                 for(var i =0; i < this.$scope.l3NavItems.length; i++){
                   this.$scope.l3NavItems[i].hasChildren = false;
                   this.findl4Children(this.$scope.l3NavItems[i])
                 }
               }


            })
            return deferred.promise;
    }

    public loadL4NavItems(item): ng.IPromise<any>{
      var deferred = this.$q.defer();
      this.dataService.getL4NavItems(item.Id)
      .then(data => {
          if(data.length == 0){
            deferred.resolve(false);
          }
          else{
            deferred.resolve(true)
            App.Common.replaceArrayContents(this.$scope.l4NavItems,data)
          }

        })
      return deferred.promise;
    }



    public findl2Children(item){
      this.dataService.getL2NavItems(item.Id)
      .then(data => {
        item.hasChildren = (data.length > 0)
      })
    }
    public findl3Children(item){
      this.dataService.getL3NavItems(item.Id)
      .then(data => {
        item.hasChildren = (data.length > 0)
      })
    }

    public findl4Children(item){
      this.dataService.getL4NavItems(item.Id)
      .then(data => {
        item.hasChildren = (data.length > 0)
      })
    }


    /*Nav Opening*/
    public openL2NavForItem(item, isClick = false){
      if(this.IsOpenItem(item.Id)){
        this.closeL2Nav();
        return;
      }
      if(this.$scope.selectedItemIds[0] && this.$scope.selectedItemIds[0] != ""){
        this.closeL3Nav();
      }

      this.loadNavItems(item).then((hasChildren)=>{
        if(hasChildren){
          this.$scope.selectedItemIds[0] = item
          var l1nav = $('.l1-nav');
          var l1Width = l1nav.width();
          $('.l2-nav').animate({"left": l1Width+"px"},10);
          if(this.IsNavigated(item.Id) && (this.$scope.navigatedItems[1] && this.$scope.navigatedItems[1] != "")){
            this.openL3NavForItem(this.$scope.navigatedItems[1], true, l1Width);
          }
        }
        else if(isClick){
          this.redirectToL1Nav(item)
        }
      })


    }

    public openL3NavForItem(item, isChain = false, extraOffset = 0,isClick = false){
      if(this.IsOpenItem(item.Id) && !isChain){
        this.closeL3Nav();
        return;
      }
      if(this.$scope.selectedItemIds[1] && this.$scope.selectedItemIds[1] != ""){
        this.closeL4Nav();
      }

      this.loadL3NavItems(item).then((hasChildren) =>{

        if(hasChildren){
          this.$scope.selectedItemIds[1] = item
          var l2nav = $('.l2-nav');
          var l2Width = l2nav.width();
          var l2Offset = l2nav.offset().left
          var overallOffest = (!l2Offset)? extraOffset : l2Offset
          var offset = l2Width + overallOffest
          $('.l3-nav').css("left", l2Offset + "px")
          $('.l3-nav').animate({"left": (offset) +"px"},10);
          if(this.IsNavigated(item.Id) && (this.$scope.navigatedItems[2] && this.$scope.navigatedItems[2] != "")){
            this.openL4NavForItem(this.$scope.navigatedItems[2], true, offset);
          }
        }
        else if (isClick){
          this.redirectToL2Nav(item);
        }
      })

    }

    public openL4NavForItem(item, isChain = false, extraOffset = 0,isClick = false){
      if(this.IsOpenItem(item.Id) && !isChain){
        this.closeL4Nav();
        return;
      }

      this.loadL4NavItems(item).then((hasChildren) =>{
        if(hasChildren){
          this.$scope.selectedItemIds[2] = item
          var l3nav = $('.l3-nav');
          var l3Width = l3nav.width();
          var l3Offset = l3nav.offset().left
          var offsetOverall = (!l3Offset)? extraOffset : l3Offset;
          var offset = l3Width + offsetOverall;
          $('.l4-nav').css("left", l3Offset + "px")
          $('.l4-nav').animate({"left": (offset) +"px"},10);
        }
        else if(isClick){
          this.redirectToL3Nav(item);
        }
      })
    }


    /* Nav Closing */
    public closeL2Nav(){
      this.closeL3Nav(true);

        $('.l2-nav').animate({"left": "0"},10);

        this.$timeout(() =>{
            this.$scope.selectedItemIds[0] = '';
        },500)

    }

    public closeL3Nav(isChain = false){
      if(this.$scope.selectedItemIds[1] == "" || !this.$scope.selectedItemIds[1]){
        return
      }
      this.closeL4Nav(true);

      if(!isChain){
        var l2Offset = $('.l2-nav').offset().left;
          $('.l3-nav').animate({"left": l2Offset + "px"},10, () => {
            this.$timeout(() =>{
              $('.l3-nav').css({"left": "0"})
            },500)
          });
        }else{
          $('.l3-nav').animate({"left": "0"},10)
        }
        this.$timeout(() =>{
          this.$scope.selectedItemIds[1] = '';
        },500)

      }

    public closeL4Nav(isChain = false){
      if(this.$scope.selectedItemIds[2] == "" || !this.$scope.selectedItemIds[2]){
        return
      }


      var l3Offset = $('.l3-nav').offset().left;
      if(!isChain){
        $('.l4-nav').animate({"left": l3Offset + "px"},10, () => {
            this.$timeout(() =>{
          $('.l4-nav').css({"left": "0"})
        },500);
        });
      }else{
        $('.l4-nav').animate({"left": "0"},10)
      }
      this.$timeout(() =>{
          this.$scope.selectedItemIds[2] = '';
      },500)

    }

    /*EMD SECTION: NAV FUNCTIONS*/


    public displayApps(){
      var item = $(".app-row");
      var currentHeight =item.height();

      var megaMenu = $(".mega-menu")
      var currentPadding = parseInt(megaMenu.css("marginTop"));

      if(currentHeight == 0){
        //var height= item.css('height', 'auto').height();
        var height = 150;
        item.css('height','0');
        item.animate({height: height + "px"},{ duration: 200, queue: false });
        //megaMenu.animate({marginTop: (currentPadding + height) + "px"},{ duration: 150, queue: false });
      }
      else{
        item.animate({height: "0"},{ duration: 200, queue: false });
        //megaMenu.animate({marginTop: (currentPadding - currentHeight) + "px"},{ duration: 150, queue: false });
      }
    }

    public redirectToL1Nav(item, IsBreadCrumb = false){
        var navArray = (IsBreadCrumb)? this.$scope.navigatedItems.slice() : this.$scope.selectedItemIds.slice();
        navArray[0] = item
        if(item.PageUrl){
          App.Common.navigateL1(navArray, item.PageUrl)
          return;
        }
        App.Common.navigateL1(navArray)
    }

    public redirectToL2Nav(item, IsBreadCrumb = false){
      var navArray = (IsBreadCrumb)? this.$scope.navigatedItems.slice() : this.$scope.selectedItemIds.slice();
      navArray[1] = item
      if(item.PageUrl){
        App.Common.navigateL2(navArray, item.PageUrl)
        return;
      }
      App.Common.navigateL2(navArray)
    }


    public redirectToL3Nav(item, IsBreadCrumb = false){
      var navArray = (IsBreadCrumb)? this.$scope.navigatedItems.slice() : this.$scope.selectedItemIds.slice();
      navArray[2] = item
      if(item.PageUrl){
        App.Common.navigateL3(navArray, item.PageUrl)
        return;
      }
      App.Common.navigateL3(navArray)
    }

    public redirectToL4Nav(item, IsBreadCrumb = false){
      var navArray = (IsBreadCrumb)? this.$scope.navigatedItems.slice() : this.$scope.selectedItemIds.slice();
      navArray[3] = item
      App.Common.navigateL4(navArray)
    }

    public redirectHome(){
      App.Common.redirectHome();
    }

    public redirectFromBreadCrumb(itemIndex, navItem){
      switch(itemIndex){
        case 0:
          this.redirectToL1Nav(navItem, true)
          break;
        case 1:
          this.redirectToL2Nav(navItem, true)
          break;
        case 2:
          this.redirectToL3Nav(navItem, true)
          break;
        case 3:
          this.redirectToL4Nav(navItem, true)
          break;
        default:
          break;
      }
    }

    public openApplicationDrawer(){
      var appDrawer2 = $(".application-drawer");
      appDrawer2.toggleClass("right-nav-open");
    }



    public IsOpenItem(itemId):boolean{
      var matchingItems = $.grep(this.$scope.selectedItemIds, (item) =>{
        return item.Id == itemId
      });

      if(!matchingItems){
        return false;
      }
      return (matchingItems.length > 0);
    }

    public IsNavigated(itemId):boolean{
      var matchingItems = $.grep(this.$scope.navigatedItems, (item) =>{
        return item.Id == itemId
      });
      if(!matchingItems){
        return false;
      }
      return (matchingItems.length > 0);
    }



    private initiateClock(){
      var date = new Date();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var suffix = (hour >= 12)? "pm" : "am";
      if(hour == 0  && minute< 2){
        this.initiateDay();
      }
      var friendlyTime = App.Common.getFriendlyTime(hour,minute);
      $(".date-time > span.time").text(friendlyTime);
      $(".date-time > span.period").text(suffix)
      setTimeout(() =>{
        this.initiateClock();
        },15000)
    }

    private initiateDay(){
      var date = new Date();
      var weekday = new Array(7);
      weekday[0]=  "Sun";
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
      $(".date-time > span.date").text(day +", " + month + " " +numberedDate)
    }

  }
}
