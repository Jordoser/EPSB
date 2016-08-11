module App.levelOne{
  "use strict"
  angular.module('levelOneApp',[])
  .controller('levelOneController', LevelOneController)
  .service('dataService',LevelOneDataService)
  .directive('bzPopover',App.Directives.scopedPopover)


  export interface ILevelOneScope extends IBaseScope{
    currentItem: any;
    sectionItems: Array<any>;
    relatedNews : Array<any>;
    relatedApps : Array<any>;
    employeeBar: boolean;
  }
}
