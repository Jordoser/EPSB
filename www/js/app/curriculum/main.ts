// Created data binding controller for index page
module App.curriculum{
  "use strict"
  angular.module('curriculumApp',[])
  .controller('curriculumController', CurriculumController)
  .service('dataService',CurriculumDataService).filter('highlight', ($sce)=>{
    return function(text, phrase) {
     if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
       '<span class="highlighted">$1</span>')

     return $sce.trustAsHtml(text)
   }
  })
  .filter('fullhighlight', ($sce)=>{
    return function(text, phrase) {
     if (phrase) text = text.replace(new RegExp('('+phrase+'$)', 'gi'),
       '<span class="highlighted">$1</span>')

     return $sce.trustAsHtml(text)
   }
  })



  export interface ICurriculumScope extends IBaseScope{
    gradeTags: Array<any>;
    subjectTags: Array<any>;
    curriculumTags: Array<any>;
    curriculumTypeTags: Array<any>;
    contentTypeTags: Array<any>;
    curriculumArray: Array<any>;
    maxSubjects: number;
    maxContent: number;


    gradeFilter: string;
    subjectFilter: string;
    resourceFilter: string;
    contentTypeFilter: string;
    curriculumTypeFilter: string;
    curriculumFilter: string;
    gradeAndSubjectArray: Array<any>
  }
}
