module App.search{
"use strict";

export class SearchController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService','$q'];

    constructor(public $scope: ISearchScope,  public $timeout: ng.ITimeoutService, public dataService: SearchDataService,public $q: ng.IQService){
      super($scope,$timeout,$timeout);
      this.$scope.currentItem = null;
      this.$scope.searchString =   sessionStorage.getItem("SearchString");
      this.$scope.searchResults = []
      this.$scope.tags = [];
      this.$scope.typeArray = [];

      this.searchAll(this.$scope.searchString)
      this.loadTypeFilters();
    }

    public loadTypeFilters(){
      this.dataService.getTypeFilters()
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.typeArray, data);
      })
    }

    public isTypeFilter(tag){
      return (_.filter(this.$scope.typeArray, (type)=>{
        return type.Tag == tag
      }).length > 0)
    }


    public searchReset(searchstring){
      this.$scope.searchString =searchstring;
      this.searchAll(searchstring);
    }

    public searchAll(searchString: string){
      this.$scope.tags.length = 0
      this.$scope.searchResults.length = 0;

      let promises = {
        documents: this.searchDocuments(searchString),
        apps: this.searchApps(searchString),
        l2: this.searchL2(searchString),
        l3: this.searchL3(searchString),
        l4: this.searchL4(searchString)
      }
      var tags = []
      this.$q.all(promises).then((values)=>{

        for(var i = 0; i < values["documents"].length; i++){
          this.$scope.searchResults.push(values["documents"][i])
          tags = _.concat(tags, values["documents"][i].Tags)
        }

        for(var i = 0; i < values["apps"].length; i++){
          this.$scope.searchResults.push(values["apps"][i])
        tags = _.concat(tags, values["apps"][i].Tags)
        }

        for(var i = 0; i < values["l2"].length; i++){
          values["l2"][i].Tags = [values["l2"][i].Id]
          this.$scope.searchResults.push(values["l2"][i])
          tags = _.concat(tags, values["l2"][i].Tags)
        }

        for(var i = 0; i < values["l3"].length; i++){
          values["l3"][i].Tags = [values["l3"][i].Id]
          this.$scope.searchResults.push(values["l3"][i])
          tags = _.concat(tags, values["l3"][i].Tags)
        }

        for(var i = 0; i < values["l4"].length; i++){
          values["l4"][i].Tags = [values["l4"][i].Id]
          this.$scope.searchResults.push(values["l4"][i])
          tags = _.concat(tags, values["l4"][i].Tags)
        }
        this.$scope.totalResults = this.$scope.searchResults.length

        if(this.$scope.searchResults.length > 15){
          this.$scope.searchResults.length = 15;
        }


          var uniqTags = _.uniq(tags);
          tags = _.map(uniqTags, (tag)=> {
            var length = _.reject(tags, (e) =>{
              return (e.indexOf(tag) < 0);
            }).length
            return {tag: tag, count: length}
          })
          App.Common.replaceArrayContents(this.$scope.tags,tags)
      })
    }

    public searchApps(searchString: string): ng.IPromise<Array<any>>{
      var deferred = this.$q.defer();
      this.dataService.getApps()
      .then((data)=>{
        data = _.filter(data, (o)=>{
          return(
            o.Name.includes(searchString) ||
            o.Description.includes(searchString) ||
            (o.Tags.indexOf(searchString) > -1)
          )
        })
        deferred.resolve(data);
      })
      .catch(ex=>{
        deferred.reject();
      })
      return deferred.promise;
    }

    public searchDocuments(searchString: string): ng.IPromise<Array<any>>{
      var deferred = this.$q.defer();
      this.dataService.getDocuments()
      .then((data)=>{
        data = _.filter(data, (o)=>{
          return(
            o.Name.includes(searchString) ||
            o.Description.includes(searchString) ||
            (o.Tags.indexOf(searchString) > -1)
          )
        })
        deferred.resolve(data);
      })
      .catch(ex=>{
        deferred.reject();
      })
      return deferred.promise;
    }


    public searchL2(searchString: string): ng.IPromise<Array<any>>{
      var deferred = this.$q.defer();
      this.dataService.getL2Items()
      .then((data)=>{
        data = _.filter(data, (o)=>{
          o.Description = (o.Description)? o.Description : ""
          return(
            o.Name.includes(searchString) ||
            o.Description.includes(searchString)
          )
        })
        deferred.resolve(data);
      })
      .catch(ex=>{
        deferred.reject();
      })
      return deferred.promise;
    }

    public searchL3(searchString: string): ng.IPromise<Array<any>>{
      var deferred = this.$q.defer();
      this.dataService.getL3Items()
      .then((data)=>{
        data = _.filter(data, (o)=>{
          o.Description = (o.Description)? o.Description : ""
          return(
            o.Name.includes(searchString) ||
            o.Description.includes(searchString)
          )
        })
        deferred.resolve(data);
      })
      .catch(ex=>{
        deferred.reject();
      })
      return deferred.promise;
    }

    public searchL4(searchString: string): ng.IPromise<Array<any>>{
      var deferred = this.$q.defer();
      this.dataService.getL4Items()
      .then((data)=>{
        data = _.filter(data, (o)=>{
          o.Description = (o.Description)? o.Description : ""
          return(
            o.Name.includes(searchString) ||
            o.Description.includes(searchString)
          )
        })
        deferred.resolve(data);
      })
      .catch(ex=>{
        deferred.reject();
      })
      return deferred.promise;
    }


  }
}
