module App.levelThree{
  "use strict"
  angular.module('levelThreeApp',[])
  .controller('levelThreeController', LevelThreeController)
  .service('dataService',LevelThreeDataService)


  export interface ILevelThreeScope extends IBaseScope{
    currentItem: any;
    sectionItems: Array<any>;
    documentTypes: Array<any>;
  }
}
