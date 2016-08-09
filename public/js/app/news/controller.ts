module App.news{
"use strict";

export class NewsController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    constructor(public $scope: INewsScope,  public $timeout: ng.ITimeoutService, public dataService: NewsDataService){
      super($scope,$timeout,$timeout);
      this.$scope.currentItem = null;
      this.$scope.news = []
      this.$scope.newsFilters = [];
      this.$scope.months = ["","January", "February", "March", "April", "May", "June", "July","August", "September","October", "November", "December"]
      this.$scope.categoryFilter = "";
      this.$scope.monthFilter = "";
      this.$scope.dateFilter = "2015-2016";
      this.$scope.searchString = ""
      this.loadNews();
      this.loadNewsOptionSet();

      this.$scope.dateFilters = [{Name:"2015-2016",Start:2015, End: 2016},{Name:"2014-2015",Start:2014, End: 2015},{Name:"2013-2014",Start:2013, End: 2014}]
    }

    public loadNewsContent(){
      this.dataService.getApplicationContent().then(data =>{
        this.$scope.currentItem = data[0];
      })
    }

    public loadNews(){
      this.dataService.getNews([this.$scope.categoryFilter])
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.news, data)
        for(var i = 0; i < this.$scope.news.length; i++){
          this.loadMetaData(this.$scope.news[i])
        }
      })
    }

    public loadMetaData(item){
      this.dataService.getMetadata(item.MetadataId)
      .then((data) =>{
        item.Metadata = data[0];
      })
    }
    public loadNewsOptionSet(){
      this.dataService.getNewsFilters().then(data =>{
        App.Common.replaceArrayContents(this.$scope.newsFilters,data) ;
      })
    }

    public changeTag(tag){
      this.$scope.categoryFilter = tag;
      this.loadNews();
    }

    public containsMonth(item){
      if(this.$scope.monthFilter == ""){
        return true;
      }
       return item.Metadata.CreatedOn.indexOf(this.$scope.monthFilter) > -1
    }

  }
}
