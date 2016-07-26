module App.levelTwo{
"use strict";

export class LevelTwoController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    private currentItemIdNav;
    constructor(public $scope: ILevelTwoScope,  public $timeout: ng.ITimeoutService, public dataService: LevelTwoDataService){
      super($scope,$timeout,$timeout);
        this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[1];
        this.loadl2Item(this.currentItemIdNav.ContentId);
    }

    public loadl2Item(Id: string){
      this.dataService.loadItemById(Id)
      .then(data => {
        this.$scope.currentItem = data[0]
      });
    }
  }
}
