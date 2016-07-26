module App.levelOne{
"use strict";

export class LevelOneController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    private currentItemIdNav;
    private navArray;
    constructor(public $scope: ILevelOneScope,  public $timeout: ng.ITimeoutService, public dataService: LevelOneDataService){
      super($scope,$timeout,$timeout);

        this.$scope.sectionItems = []
        this.navArray = JSON.parse(sessionStorage.getItem("NavArray"))
        this.currentItemIdNav = this.navArray[0];
        this.loadl1Item(this.currentItemIdNav.ContentId);
    }

    public loadl1Item(Id: string){
      this.dataService.getItemById(Id)
      .then(data => {
        this.$scope.currentItem = data[0]
        this.loadSectionItems(Id);
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
  }
}
