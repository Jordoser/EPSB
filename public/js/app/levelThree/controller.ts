module App.levelThree{
"use strict";

export class LevelThreeController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    private currentItemIdNav;
    private navArray;
    constructor(public $scope: ILevelThreeScope,  public $timeout: ng.ITimeoutService, public dataService: LevelThreeDataService){
      super($scope,$timeout,$timeout);
      this.$scope.sectionItems = [];
      this.$scope.documentTypes =  [];
      this.navArray = JSON.parse(sessionStorage.getItem("NavArray"))
      this.loadDocumentFilters();
      this.currentItemIdNav = this.navArray[2];
        this.loadl3Item(this.currentItemIdNav.ContentId);
    }

    public loadl3Item(Id: string){
      this.dataService.loadItemById(Id)
      .then(data => {
        this.$scope.currentItem = data[0]
        this.loadSectionItems(this.$scope.currentItem.Id)
      });
    }

    public loadSectionItems(Id: string){
      this.dataService.getSectionItemsById(Id)
      .then(data =>{
        App.Common.replaceArrayContents(this.$scope.sectionItems, data)
      })
    }

    public redirectToSectionItem(item){
      this.navArray[3] = item;
      App.Common.navigateL4(this.navArray)
    }

    public loadDocumentFilters(){
      this.dataService.getDocumentTypeFilters()
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.documentTypes, data)
      })
    }
  }
}
