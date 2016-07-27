module App.levelTwo{
  "use strict"
  angular.module('levelTwoApp',[])
  .controller('levelTwoController', LevelTwoController)
  .service('dataService',LevelTwoDataService)


  export interface ILevelTwoScope extends IBaseScope{
    currentItem: any;
    sectionItems: Array<any>;
  }
}
