module App.levelFour{
  "use strict"
  angular.module('levelFourApp',[])
  .controller('levelFourController', LevelFourController)
  .service('dataService',LevelFourDataService)
  .directive('bzPopover',App.Directives.scopedPopover)
  .filter("trust", ['$sce', function($sce) {
      return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
      }
    }]);


  export interface ILevelFourScope extends IBaseScope{
    currentItem: any;
    documentTypes: Array<any>;
    employeeBar:boolean;
  }
}
