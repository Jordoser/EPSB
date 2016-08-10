module App.curriculumIndex{
"use strict";

export class CurriculumIndexController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    constructor(public $scope: ICurriculumIndexScope,  public $timeout: ng.ITimeoutService, public dataService: CurriculumIndexDataService){
      super($scope,$timeout,$timeout);
        this.$scope.gradeTags = [];
        this.$scope.subjectTags = [];
        this.$scope.curriculumTags = []


        this.loadGradeTags();
        this.loadSubjectTags();
        this.loadCurriculumTags();
    }

      public loadGradeTags(){
        this.dataService.getGradeTags()
        .then(data => {
          App.Common.replaceArrayContents(this.$scope.gradeTags, data);
        })
      }

      public loadSubjectTags(){
        this.dataService.getSubjectTags()
        .then(data => {
          App.Common.replaceArrayContents(this.$scope.subjectTags, data);
        })

      }

      public loadCurriculumTags(){
        this.dataService.getCurriculumTags()
        .then(data => {
          App.Common.replaceArrayContents(this.$scope.curriculumTags, data);
        })

      }

      public redirect(filter, setNumber){
        var filterSet = {Filter: filter,SetNumber: setNumber}
        var filterSetString = JSON.stringify(filterSet);
        localStorage.setItem("FilterAndSet",filterSetString)
        window.location.href = "curriculumnAndAssesment";

      }
  }
}
