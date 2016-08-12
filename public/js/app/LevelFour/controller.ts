module App.levelFour{
"use strict";

export class LevelFourController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];
    private navArray;
    private currentItemIdNav;
    constructor(public $scope: ILevelFourScope,  public $timeout: ng.ITimeoutService, public dataService: LevelFourDataService){
      super($scope,$timeout,$timeout);
        $('.collapse').collapse()
        this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[3];
        this.$scope.documentTypes = [];
        this.loadl4Item(this.currentItemIdNav.ContentId);
        this.$scope.employeeBar =  this.navArray[0].Id == "Employee Essentials"

    }

    public loadl4Item(Id: string){
      this.dataService.loadItemById(Id)
      .then(data => {
        this.$scope.currentItem = data[0]
        this.loadDocumentFilters();
      });
    }

    public loadDocumentFilters(){
      this.dataService.getDocumentTypeFilters()
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.documentTypes, data)
        for(var i = 0; i < this.$scope.documentTypes.length; i++){
          this.$scope.documentTypes[i].Documents = []
          this.loadDocumentForTag([this.$scope.currentItem.Id, data[i].Tag],  this.$scope.documentTypes[i].Documents)
        }
      })
    }

    public loadDocumentForTag(Tags: Array<any>, refrenceArray: Array<any>){
      this.dataService.getTaggedDocuments(Tags)
      .then(data => {
        App.Common.replaceArrayContents(refrenceArray, data)
      })
    }
  }
}
