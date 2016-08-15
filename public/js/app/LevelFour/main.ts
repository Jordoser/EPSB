module App.levelFour{
  "use strict"
  angular.module('levelFourApp',[])
  .controller('levelFourController', LevelFourController)
  .service('dataService',LevelFourDataService)
  .directive('bzPopover',App.Directives.scopedPopover)


  export interface ILevelFourScope extends IBaseScope{
    currentItem: any;
    documentTypes: Array<any>;
    employeeBar:boolean;
  }
}
