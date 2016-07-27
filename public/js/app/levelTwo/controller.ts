module App.levelTwo{
"use strict";

export class LevelTwoController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    private currentItemIdNav;
    private navArray;
    constructor(public $scope: ILevelTwoScope,  public $timeout: ng.ITimeoutService, public dataService: LevelTwoDataService){
      super($scope,$timeout,$timeout);
        $('.collapse').collapse()
        this.$scope.sectionItems =  [];
        this.$scope.documentTypes =  [];
        this.navArray = JSON.parse(sessionStorage.getItem("NavArray"))
        this.currentItemIdNav = this.navArray[1];
        this.loadl2Item(this.currentItemIdNav.ContentId);
        this.loadDocumentFilters();
    }

    public loadl2Item(Id: string){
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
      this.navArray[2] = item;
      App.Common.navigateL3(this.navArray)
    }

    public loadDocumentFilters(){
      this.dataService.getDocumentTypeFilters()
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.documentTypes, data)
      })
    }
  }
}
