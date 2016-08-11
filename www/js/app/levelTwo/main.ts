module App.levelTwo{
  "use strict"
  angular.module('levelTwoApp',[])
  .controller('levelTwoController', LevelTwoController)
  .service('dataService',LevelTwoDataService)
  .directive('bzPopover',App.Directives.scopedPopover)


  export interface ILevelTwoScope extends IBaseScope{
    currentItem: any;
    sectionItems: Array<any>;
    documentTypes: Array<any>;
    employeeBar: boolean;
  }
}
