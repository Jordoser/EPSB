module App.levelOne{
"use strict";

export class LevelOneController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    private currentItemIdNav;
    private navArray;
    constructor(public $scope: ILevelOneScope,  public $timeout: ng.ITimeoutService, public dataService: LevelOneDataService){
      super($scope,$timeout,$timeout);

        this.$scope.sectionItems = []
        this.$scope.relatedNews = [];
        this.$scope.relatedApps = [];
        this.navArray = JSON.parse(sessionStorage.getItem("NavArray"))
        this.currentItemIdNav = this.navArray[0];
        this.loadl1Item(this.currentItemIdNav.ContentId);
    }

    public loadl1Item(Id: string){
      this.dataService.getItemById(Id)
      .then(data => {
        this.$scope.currentItem = data[0]
        this.loadSectionItems(Id);
        this.loadRelatedNews(data[0].Tags);
        this.loadRelatedApps(data[0].Tags)
      });
    }

    public loadSectionItems(Id: string){
      this.dataService.getSectionItemsById(Id)
      .then(data =>{
        App.Common.replaceArrayContents(this.$scope.sectionItems, data)
      })
    }

    public redirectToL2Nav(item){
      this.navArray[1] = item;
      App.Common.navigateL2(this.navArray)
    }

    public loadRelatedNews(Tags: Array<string>){
        this.dataService.getRelatedNews(Tags)
        .then(data =>{
          App.Common.replaceArrayContents(this.$scope.relatedNews, data)
          for(var i = 0; i < this.$scope.relatedNews.length; i++){
            this.loadMetadata(this.$scope.relatedNews[i], i, this.$scope.relatedNews);
          }
        })
    }

    public loadRelatedApps(Tags: Array<string>){
      this.dataService.getRelatedApps(Tags)
      .then(data =>{
        App.Common.replaceArrayContents(this.$scope.relatedApps, data)
        for(var i = 0; i < this.$scope.relatedApps.length; i++){
          this.loadMetadata(this.$scope.relatedApps[i], i, this.$scope.relatedApps);
        }
      })
    }

    public loadMetadata(resource, index, returnArray){
      this.dataService.getMetadata(resource)
      .then(data =>{
        returnArray[index].Metadata = data[0]
      });
    }
  }
}
