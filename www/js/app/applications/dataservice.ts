module App.applications{
  export class ApplicationsDataService extends BaseJsonDataService{
    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }

    public getApplicationContent(){
      return this.getItemByKeyValue("OtherContent","Id","Applications")
    }

    public getApplications(){
      return this.getItems("Applications")
    }
  }
}
