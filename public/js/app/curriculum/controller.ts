module App.curriculum{
"use strict";

export class CurriculumController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    constructor(public $scope: ICurriculumScope,  public $timeout: ng.ITimeoutService, public dataService: CurriculumDataService){
      super($scope,$timeout,$timeout);

          this.$scope.maxSubjects = 8
          this.$scope.maxContent = 8
          this.$scope.gradeTags = [];
          this.$scope.subjectTags = [];
          this.$scope.curriculumTags = [];
          this.$scope.curriculumTypeTags =[]
          this.$scope.contentTypeTags= [];
          this.$scope.gradeAndSubjectArray = [];
          this.$scope.curriculumArray = [];

          this.$scope.gradeFilter = '';
          this.$scope.subjectFilter  = '';
          this.$scope.resourceFilter = '';
          this.$scope.contentTypeFilter= '';
          this.$scope.curriculumTypeFilter = ''
          this.$scope.curriculumFilter = ''

          this.loadGradeTags();
          this.loadSubjectTags();
          this.loadCurriculumTags();
          this.loadCurriculumTypeTags();
          this.loadContentTypeTags();
          this.loadGradeAndSubjectResource();
          this.loadGradeAndSubjectResource(true)

          var filterSet = JSON.parse(localStorage.getItem("FilterAndSet"));
          switch(filterSet.SetNumber) {
            case 1:
                this.changeGradeTag(filterSet.Filter)
                break;
            case 2:
              this.changeSubjectTag(filterSet.Filter)
              break;
            case 3:
             $('a[href="#profile"]').trigger('click');
              this.changeCurriculumTag(filterSet.Filter,true)
              break;
            default:
                break;
        }
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

      public loadCurriculumTypeTags(){
        this.dataService.getCurriculumTypeTags()
        .then(data => {
          App.Common.replaceArrayContents(this.$scope.curriculumTypeTags, data);
        })
      }


      public loadContentTypeTags(){
        this.dataService.getContentTags()
        .then(data => {
          App.Common.replaceArrayContents(this.$scope.contentTypeTags, data);
        })
      }

      public loadGradeAndSubjectResource(isCurric = false){
        this.dataService.getGradeAndSubject([this.$scope.gradeFilter,this.$scope.subjectFilter,this.$scope.resourceFilter,this.$scope.contentTypeFilter,this.$scope.curriculumFilter,this.$scope.curriculumTypeFilter])
        .then(data=>{
          if(isCurric){
              App.Common.replaceArrayContents(this.$scope.curriculumArray, data)
              return;
          }
          App.Common.replaceArrayContents(this.$scope.gradeAndSubjectArray, data)
        })
      }


      public changeGradeTag(tag, curriculum = false){
        this.$scope.gradeFilter = tag;
        this.loadGradeAndSubjectResource(curriculum);
      }

      public changeSubjectTag(tag,curriculum = false){
        this.$scope.subjectFilter = tag;
        this.loadGradeAndSubjectResource(curriculum);
      }

      public changeContentTag(tag,curriculum = false){
        this.$scope.contentTypeFilter = tag;
        this.loadGradeAndSubjectResource(curriculum);
      }

      public changeCurriculumTypeTag(tag,curriculum = false){
        this.$scope.curriculumTypeFilter = tag
        this.loadGradeAndSubjectResource(curriculum);
      }

      public changeCurriculumTag(tag,curriculum = false){
          this.$scope.curriculumFilter = tag
          this.loadGradeAndSubjectResource(curriculum);
      }

      public clearFilters(){
        this.$scope.curriculumFilter = "";
        this.$scope.gradeFilter= "";
        this.$scope.subjectFilter ="";
        this.$scope.contentTypeFilter ="";
        this.$scope.curriculumFilter = "";
        this.$scope.curriculumTypeFilter =""
        this.loadGradeAndSubjectResource()
        this.loadGradeAndSubjectResource(true)
      }


  }
}
