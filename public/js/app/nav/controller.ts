module App.Nav{
"use strict";

export class NavController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];
    public navigatedL1;
    public navigatedL2;
    public navigatedL3;
    public navigatedL4;
    public clickToClose;
    constructor(public $scope: INavScope,  public $timeout: ng.ITimeoutService, public dataService: NavDataService){
      super($scope,$timeout,$timeout);
      this.$scope.menuClosed = true;
      this.$scope.searchArea= "";
      this.$scope.openItemId = "";
      this.$scope.navItems = [];
      this.$scope.l2NavItems = [];
      this.$scope.l3NavItems = [];
      this.$scope.l4NavItems = []
      this.$scope.selectedItemIds = []
      this.loadNav();
      this.initiateClock();
      this.initiateDay();


      $('.popover-dismiss').popover({
        trigger: 'focus'
      })



      this.navigatedL1 = sessionStorage.getItem("SelectedL1");
      this.navigatedL2 = sessionStorage.getItem("SelectedL2");
      this.navigatedL3 = sessionStorage.getItem("SelectedL3");
      this.navigatedL4 = sessionStorage.getItem("SelectedL4");


      this.$scope.selectedL2Item =sessionStorage.getItem("SelectedL2Name");
      this.$scope.selectedL3Item =sessionStorage.getItem("SelectedL3Name");
      this.$scope.selectedL4Item =sessionStorage.getItem("SelectedL4Name");


      this.$scope.navLevel = sessionStorage.getItem("NavLevel")
      this.clickToClose = () =>{
        this.openL2NavForItem("",true)
      };
      if(this.navigatedL1){
        this.$scope.selectedItemId = this.navigatedL1;
      }

    }

    public loadNav(){
      this.dataService.getNavItems()
      .then(data =>{
        for(var i = 0; i < data.length; i++){
          this.$scope.navItems.push(data[i])
        }
        })
      .catch(ex => {
        alert(ex);
      })
    }

    public openL2NavForItem(item, forceClose = false){
      if(this.IsOpenItem(item.Id)){
        this.closeL2Nav();
        return;
      }
      this.$scope.selectedItemIds[0] = item.Id
      var l1nav = $('.l1-nav');
      var l1Width = l1nav.width();
      $('.l2-nav').animate({"left": l1Width+"px"},10);
      this.loadNavItems(item)
      /*
      if(forceClose || this.$scope.openItemId == item.Id){
        this.$scope.menuClosed = true;
        this.$scope.openItemId = "";
        var contentArea = $(".content-area")
        contentArea.unbind("click", this.clickToClose);
        this.$timeout(() => {this.$scope.$apply()},100);
        return;
      }

      if(this.$scope.openItemId == ""){
        this.loadNavItems(item)
        return;
      }

      if(this.$scope.openItemId != ""){
        this.$scope.menuClosed = true;
        var contentArea = $(".content-area")
        contentArea.unbind("click", this.clickToClose);
        this.$timeout(()=>{
          this.loadNavItems(item);
        },100);
        return;
      }
      this.loadNavItems(item)
      */
    }

    public closeL2Nav(){
      this.closeL3Nav(true);
      this.$scope.selectedItemIds[0] = '';
        $('.l2-nav').animate({"left": "0"},10);

    }

    public closeL3Nav(isChain = false){
      if(this.$scope.selectedItemIds[1] == "" || !this.$scope.selectedItemIds[1]){
        return
      }
      this.closeL4Nav(true);
      this.$scope.selectedItemIds[1] = '';
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

    }

    public closeL4Nav(isChain = false){
      if(this.$scope.selectedItemIds[2] == "" || !this.$scope.selectedItemIds[2]){
        return
      }
      this.$scope.selectedItemIds[2] = '';
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

    }



    public openL3NavForItem(item){
      if(this.IsOpenItem(item.Id)){
        this.closeL3Nav();
        return;
      }
      this.$scope.selectedItemIds[1] = item.Id
      var l2nav = $('.l2-nav');
      var l2Width = l2nav.width();
      var l2Offset = l2nav.offset().left
      var offset = l2Width + l2Offset
      $('.l3-nav').css("left", l2Offset + "px")
      $('.l3-nav').animate({"left": (offset) +"px"},10);
      this.loadL3NavItems(item)
    }
    public loadL3NavItems(item){
      this.dataService.getL3NavItems(item.Id)
      .then(data => {

          App.Common.replaceArrayContents(this.$scope.l3NavItems,data)

      })
    }

    public openL4NavForItem(item){
      if(this.IsOpenItem(item.Id)){
        this.closeL4Nav();
        return;
      }
      this.$scope.selectedItemIds[2] = item.Id
      var l3nav = $('.l3-nav');
      var l3Width = l3nav.width();
      var l3Offset = l3nav.offset().left
      var offset = l3Width + l3Offset;
      $('.l4-nav').css("left", l3Offset + "px")
      $('.l4-nav').animate({"left": (offset) +"px"},10);
      this.loadL4NavItems(item)
    }
    public loadL4NavItems(item){
      this.dataService.getL4NavItems(item.Id)
      .then(data => {

          App.Common.replaceArrayContents(this.$scope.l4NavItems,data)

      })
    }

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

    public redirectToL2Nav(item, breadCrubmNav = false){
      if(this.$scope.openItemId){
        sessionStorage.setItem("SelectedL1", this.$scope.openItemId);
      }
      if(item){
        if(!breadCrubmNav){
          App.Common.navigateL2(item.Name, item.Id)

        }else{
          App.Common.navigateL2(item, this.$scope.selectedL2Item)

        }
      }
    }

    public redirectToL3Nav(item, parent, breadCrumbNav = false){
      if(this.$scope.openItemId){
        sessionStorage.setItem("SelectedL1", this.$scope.openItemId);
      }

      if(!breadCrumbNav){
          App.Common.navigateL3(item,parent);
      }else{
        var childItem =  {Name: item, Id: this.navigatedL3}
        var parentItem = {Name: parent, Id: this.navigatedL2}
        App.Common.navigateL3(childItem, parentItem)
      }
    }

    public loadNavItems(item){
      var contentArea = $(".content-area")
      contentArea.bind("click", this.clickToClose);
      this.$scope.l2NavItems.length = 0;
            this.$scope.openItemId = item.Id
      this.dataService.getL2NavItems(item.Id)
      .then(data =>{
          App.Common.replaceArrayContents(this.$scope.l2NavItems,data)
        })
    }

    public IsOpenItem(itemId):boolean{
      return (this.$scope.selectedItemIds.indexOf(itemId) > -1);
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
