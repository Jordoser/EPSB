// Created data binding controller for index page
module App.news{
  "use strict"
  angular.module('newsApp',[])
  .controller('newsController', NewsController)
  .service('dataService',NewsDataService).filter('highlight', ($sce)=>{
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



  export interface INewsScope extends IBaseScope{
      currentItem: any;
      L3Items: Array<any>;
      relatedNewsItems: Array<any>;
      selectedNews: any
      pageContent: any;
      pageAudit: any;
      news: Array<any>;
      categoryFilter: string;
      dateFilter: string;
      newsFilters: Array<any>
      searchString:string;
      dateFilters:Array<any>
  }
}
