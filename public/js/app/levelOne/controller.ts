module App.levelOne{
"use strict";

export class LevelOneController extends BaseController{
    public static $inject = ['$scope','$timeout','$q','dataService'];

    private currentItemIdNav;
    private navArray;
    constructor(public $scope: ILevelOneScope,  public $timeout: ng.ITimeoutService,public $q: ng.IQService, public dataService: LevelOneDataService){
      super($scope,$timeout,$timeout);

        this.$scope.sectionItems = []
        this.$scope.relatedNews = [];
        this.$scope.relatedApps = [];
        this.$scope.documentTypes = [];
        this.$scope.l3NavItems = [];
        this.navArray = JSON.parse(sessionStorage.getItem("NavArray"))
        this.currentItemIdNav = this.navArray[0];
        this.$scope.employeeBar =  this.navArray[0].Id == "Employee Essentials"
        this.loadl1Item(this.currentItemIdNav.ContentId);
        this.loadDocumentFilters();
    }


    public alertTest(){
      alert("Test")
    }

    public toggleExpandingNav(){
      var menu = $('.expanding-nav');
      var contentArea = $('.content-area')
      var initialHeight = menu.height();
      menu.css("height", "auto");
      var menuHeight = menu.height();

      if(initialHeight){
          menu.animate({"height": "0"},10)
          contentArea.removeClass('content-area-open')
          return
      }
      menu.css("height", "0");

      menu.animate({"height": menuHeight+"px"},10)
      contentArea.toggleClass('content-area-open')
    }
    public loadl1Item(Id: string){
      this.dataService.getItemById(Id)
      .then(data => {
        this.$scope.currentItem = data[0]
        this.loadSectionItems(Id);
        if(data[0]){
          this.loadRelatedNews(data[0].Tags);
          this.loadRelatedApps(data[0].Tags)
        }
      });
    }


    public mobileL1(l1Nav, subNavIndex){
      var allSubs = $('#levelOneDiv .mobile-l2')
      var nav = $('#levelOneDiv #' + subNavIndex + "-l1")
      allSubs.animate({'height': "0"},10);


      if(nav.hasClass('open-nav-item-mobile')){
          nav.removeClass('open-nav-item-mobile');
          return;
      }
      this.loadNavItems(l1Nav)
      .then(data => {
        this.$timeout(()=>{
          var subNav = $('#levelOneDiv #' + subNavIndex + "-l2")
          subNav.css('height', 'auto')
          var height = subNav.height();
          subNav.css('height', '0')
          subNav.animate({'height': height + "px"},10);
        })

      })
      var allNavs =  $('#levelOneDiv .mobile-row')
      allNavs.removeClass('open-nav-item-mobile');


      nav.toggleClass('open-nav-item-mobile')
    }

    public loadNavItems(item): ng.IPromise<any>{


      this.$scope.l3NavItems.length = 0;

      var deferred = this.$q.defer();
      this.dataService.getL3NavItems(item.Id)
      .then(data =>{
        if(data.length == 0){
          deferred.resolve(false);
        }
        else{

          deferred.resolve(true)
          App.Common.replaceArrayContents(this.$scope.l3NavItems,data)

          for(var i =0; i < this.$scope.l3NavItems.length; i++){
            this.$scope.l3NavItems[i].hasChildren = false;
            this.findl3Children(this.$scope.l3NavItems[i])
          }
        }

      })
      return deferred.promise;
    }

    public loadSectionItems(Id: string){
      this.dataService.getSectionItemsById(Id)
      .then(data =>{
        App.Common.replaceArrayContents(this.$scope.sectionItems, data)
        for(var i = 0; i < this.$scope.sectionItems.length; i++){
          this.$scope.sectionItems[i].hasChildren = false;
          this.findl3Children(this.$scope.sectionItems[i])
        }
      })
    }

    public findl3Children(item){
      this.dataService.getL3NavItems(item.Id)
      .then(data => {
        item.hasChildren = (data.length > 0)
      })
    }

    public redirectToSectionItem(item){
      this.navArray[1] = item;
      App.Common.navigateL2(this.navArray)
    }

    public loadRelatedNews(Tags: Array<string>){
        this.dataService.getItemsByTag(Tags,"NewsItems")
        .then(data =>{
          App.Common.replaceArrayContents(this.$scope.relatedNews, <any>data)
          for(var i = 0; i < this.$scope.relatedNews.length; i++){
            this.loadMetadata(this.$scope.relatedNews[i]);
          }
        })
    }

    public loadRelatedApps(Tags: Array<string>){
      this.dataService.getRelatedApps(Tags)
      .then(data =>{
        App.Common.replaceArrayContents(this.$scope.relatedApps, data)
        for(var i = 0; i < this.$scope.relatedApps.length; i++){
          this.loadMetadata(this.$scope.relatedApps[i]);
        }
      })
    }
    public loadMetadata(Item){
      this.dataService.getMetadataById(Item.MetadataId)
      .then(data => {
        Item.Metadata = data[0];
      })
    }

    public loadDocumentFilters(){
      this.dataService.getDocumentTypeFilters()
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.documentTypes, data)
        for(var i = 0; i < this.$scope.documentTypes.length; i++){
          this.$scope.documentTypes[i].Documents = []
          this.loadDocumentForTag([this.currentItemIdNav.Id, data[i].Tag],  this.$scope.documentTypes[i].Documents)
        }
      })
    }

    public loadDocumentForTag(Tags: Array<any>, refrenceArray: Array<any>){
      this.dataService.getTaggedDocuments(Tags)
      .then(data => {
        App.Common.replaceArrayContents(refrenceArray, data)
        for(var i =0; i < refrenceArray.length; i++){
          this.loadMetadata(refrenceArray[i])
        }
      })
    }

  }
}
