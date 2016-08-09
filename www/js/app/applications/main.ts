// Created data binding controller for index page
module App.applications{
  "use strict"
  angular.module('applicationsApp',[])
  .controller('applicationsController', ApplicationsController)
  .service('dataService',ApplicationsDataService)


  export interface IApplicationsScope extends IBaseScope{
      currentItem: any;
      L3Items: Array<any>;
      relatedNewsItems: Array<any>;
      selectedApplications: any
      pageContent: any;
      pageAudit: any;
      applications: Array<any>;
      navigatedApplications;
      navigatedL3;
      navigatedL4;
  }
}
