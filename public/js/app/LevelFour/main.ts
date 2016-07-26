module App.levelFour{
  "use strict"
  angular.module('levelFourApp',[])
  .controller('levelFourController', LevelFourController)
  .service('dataService',LevelFourDataService)


  export interface ILevelFourScope extends IBaseScope{
    currentItem: any;
  }
}
