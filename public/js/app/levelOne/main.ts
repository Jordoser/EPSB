module App.levelOne{
  "use strict"
  angular.module('levelOneApp',[])
  .controller('levelOneController', LevelOneController)
  .service('dataService',LevelOneDataService)
  .directive('bzPopover',App.Directives.scopedPopover)
  .filter("trust", ['$sce', function($sce) {
      return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
      }
    }]);


  export interface ILevelOneScope extends IBaseScope{
    currentItem: any;
    sectionItems: Array<any>;
    relatedNews : Array<any>;
    relatedApps : Array<any>;
    documentTypes: Array<any>;
    relatedContacts: Array<any>;
    l3NavItems: Array<any>;
    employeeBar: boolean;
  }
}
