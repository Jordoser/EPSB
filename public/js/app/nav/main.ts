// Created data binding controller for index page
module App.Nav{
  "use strict"
  angular.module('navApp',[])
  .controller('navController', NavController)
  .service('dataService',NavDataService)


  export interface INavScope extends IBaseScope{
      navItems: Array<any>;
      l2NavItems: Array<any>;
      l3NavItems: Array<any>;
      l4NavItems: Array<any>;

      selectedItemIds : Array<any>
      searchArea: string;
      menuClosed: boolean;
      openItemId: string;
      selectedItemId: string;
      selectedL1Item: any;
      selectedL2Item: any;
      selectedL3Item: any;
      selectedL4Item: any;
      navLevel: string;
  }
}
