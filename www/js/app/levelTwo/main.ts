module App.levelTwo{
  "use strict"
  angular.module('levelTwoApp',[])
  .controller('levelTwoController', LevelTwoController)
  .service('dataService',LevelTwoDataService)
  .directive('bzPopover',App.Directives.scopedPopover)
  .filter("trust", ['$sce', function($sce) {
      return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
      }
    }]);


  export interface ILevelTwoScope extends IBaseScope{
    currentItem: any;
    sectionItems: Array<any>;
    documentTypes: Array<any>;
    employeeBar: boolean;
  }
}
