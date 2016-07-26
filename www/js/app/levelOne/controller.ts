module App.levelOne{
"use strict";

export class LevelOneController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    private currentItemIdNav;
    constructor(public $scope: ILevelOneScope,  public $timeout: ng.ITimeoutService, public dataService: LevelOneDataService){
      super($scope,$timeout,$timeout);
        this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[0];
        this.loadl1Item(this.currentItemIdNav.ContentId);
    }

    public loadl1Item(Id: string){
      this.dataService.loadItemById(Id)
      .then(data => {
        this.$scope.currentItem = data[0]
      });
    }
  }
}
