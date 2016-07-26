module App.levelThree{
"use strict";

export class LevelThreeController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    private currentItemIdNav;
    constructor(public $scope: ILevelThreeScope,  public $timeout: ng.ITimeoutService, public dataService: LevelThreeDataService){
      super($scope,$timeout,$timeout);
        this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[2];
        this.loadl3Item(this.currentItemIdNav.ContentId);
    }

    public loadl3Item(Id: string){
      this.dataService.loadItemById(Id)
      .then(data => {
        this.$scope.currentItem = data[0]
      });
    }
  }
}
