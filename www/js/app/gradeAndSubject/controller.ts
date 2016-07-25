module App.gradeAndSubject{
"use strict";

export class GradeAndSubjectController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];


    constructor(public $scope: IGradeAndSubjectScope,  public $timeout: ng.ITimeoutService, public dataService: GradeAndSubjectDataService){
      super($scope,$timeout,$timeout);
      this.$scope.resourceArray = [];
      this.$scope.gradeArray = [];
      this.$scope.subjectArray = []
      this.$scope.typeArray =[];

      this.$scope.gradeFilter ="";
      this.$scope.subjectFilter= "";
      this.$scope.typeFilter = ""

      this.loadGradeFilters();
      this.loadSubjectFilters();
      this.loadTypeFilters();
    }

    public loadGradeFilters(){
      this.dataService.getGradeFilters()
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.gradeArray, data);
      })
    }

    public loadTypeFilters(){
      this.dataService.getTypeFilters()
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.typeArray, data);
      })
    }

    public loadSubjectFilters(){
      this.dataService.getSubjectFilters()
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.subjectArray, data);
      })
    }

    public loadResources(){
      if(this.$scope.gradeFilter == "" && this.$scope.subjectFilter == "" && this.$scope.typeFilter == ""){
        this.$scope.resourceArray.length = 0;
        return;
      }
      this.dataService.getResources([this.$scope.gradeFilter,this.$scope.subjectFilter,this.$scope.typeFilter])
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.resourceArray, data);

        for(var i = 0; i < this.$scope.resourceArray.length; i++){
          this.loadMetadata(this.$scope.resourceArray[i], i);
        }
      })
    }

    public loadMetadata(resource, index){
      this.dataService.getMetadata(resource)
      .then(data =>{
        this.$scope.resourceArray[index].Metadata = data[0]
      });
    }
  }
}
