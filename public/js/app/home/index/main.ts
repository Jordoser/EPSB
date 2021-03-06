// Created data binding controller for index page
module App.Home.Index{
  "use strict"
  angular.module('homeIndexApp',[])
  .controller('homeIndexController', HomeIndexController)
  .service('dataService',HomeDataService);

  export interface IHomeIndexScope extends IBaseScope{
      name: string;
      searchString: string;
      searchResults: Array<any>;
      newsItems: Array<any>;
      featuredStory: any;
      currentUser: any;
      shareSites: Array<any>;
      selectedShareSite: any;
      topContent: Array<any>
      selectedLocation: string;
  }
}
