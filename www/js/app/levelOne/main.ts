module App.levelOne{
  "use strict"
  angular.module('levelOneApp',[])
  .controller('levelOneController', LevelOneController)
  .service('dataService',LevelOneDataService)


  export interface ILevelOneScope extends IBaseScope{
    currentItem: any;
  }
}