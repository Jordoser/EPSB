module App.levelFour{
"use strict";

export class LevelFourController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    private currentItemIdNav;
    constructor(public $scope: ILevelFourScope,  public $timeout: ng.ITimeoutService, public dataService: LevelFourDataService){
      super($scope,$timeout,$timeout);
        this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[3];
        this.$scope.documentTypes = [];
        this.loadl4Item(this.currentItemIdNav.ContentId);
        this.loadDocumentFilters();
    }

    public loadl4Item(Id: string){
      this.dataService.loadItemById(Id)
      .then(data => {
        this.$scope.currentItem = data[0]
      });
    }

    public loadDocumentFilters(){
      this.dataService.getDocumentTypeFilters()
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.documentTypes, data)
      })
    }
  }
}
