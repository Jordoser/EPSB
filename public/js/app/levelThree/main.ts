module App.levelThree{
  "use strict"
  angular.module('levelThreeApp',[])
  .controller('levelThreeController', LevelThreeController)
  .service('dataService',LevelThreeDataService)
  .directive('bzPopover',App.Directives.scopedPopover)
  .filter("trust", ['$sce', function($sce) {
      return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
      }
    }]);


  export interface ILevelThreeScope extends IBaseScope{
    currentItem: any;
    sectionItems: Array<any>;
    documentTypes: Array<any>;
    relatedNews : Array<any>;
    relatedApps : Array<any>;
    relatedContacts: Array<any>;
    employeeBar:boolean;
  }
}
