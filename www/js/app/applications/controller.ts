module App.applications{
"use strict";

export class ApplicationsController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    constructor(public $scope: IApplicationsScope,  public $timeout: ng.ITimeoutService, public dataService: ApplicationsDataService){
      super($scope,$timeout,$timeout);
      this.$scope.currentItem = null;
      this.$scope.applications = []
      this.loadApplicationsContent();
      this.loadApplications();
    }

    public loadApplicationsContent(){
      this.dataService.getApplicationContent().then(data =>{
        this.$scope.currentItem = data[0];
      })
    }

    public loadApplications(){
      this.dataService.getApplications()
      .then(data => {
        data = _.sortBy(data, (o)=>{return (o.Favorite == 'false')})
        App.Common.replaceArrayContents(this.$scope.applications, data)
      })
    }

  }
}
