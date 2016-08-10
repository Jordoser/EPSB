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
      currentItem: any;
      L3Items: Array<any>;
      relatedCurriculumItems: Array<any>;
      selectedCurriculum: any
      pageContent: any;
      pageAudit: any;
      curriculum: Array<any>;
      categoryFilter: string;
      dateFilter: string;
      curriculumFilters: Array<any>
      searchString:string;
      dateFilters:Array<any>
      months:Array<any>;
      monthFilter: any;
  }
}
