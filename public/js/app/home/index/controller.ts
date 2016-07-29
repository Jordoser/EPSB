module App.Home.Index{
"use strict";

export class HomeIndexController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    constructor(public $scope: IHomeIndexScope,public $timeout: ng.ITimeoutService, public dataService: HomeDataService){
      super($scope,$timeout,dataService);
      this.$scope.name = "Search Database";
      this.$scope.searchString = ""
      this.$scope.searchResults = [];
      $(".custom-container").css("margin-top", "160px")
      this.$scope.newsItems = [];
      this.loadNewsitems();
      this.$scope.currentUser =  sessionStorage.getItem("CurrentUser");
      if(!this.$scope.currentUser){
        this.$scope.currentUser = "Samantha Nugent"
      }
    }

    public alert(){
      this.dataService.getTestItemById(this.$scope.searchString)
      .then((data) =>{
        this.$scope.searchResults.length = 0;
        for(var i = 0; i < data.length; i++){
          this.$scope.searchResults.push(data[i])
        }
      })
      .catch((ex) =>{
        alert(ex);
      })
    }

    public redirectToObject(id?: string){
      if(id){
        sessionStorage.setItem("Id",id);
      }
      window.location.href = "editTestItem.html";
    }

    public loadNewsitems(){
        this.dataService.getNewsItems()
        .then(data => {
          for(var i= 0; i < data.length; i++){
            if(data[i].Tags.indexOf("Featured") > -1 && !this.$scope.featuredStory){
              this.$scope.featuredStory = data[i]
              var truncate =data[i].Description.length > 125;
              if(truncate){
                this.$scope.featuredStory.Description = this.$scope.featuredStory.Description.substring(0,125) + " ..."
              }
              this.loadMetadata(this.$scope.featuredStory)
            }else{
              this.$scope.newsItems.push(data[i]);
              var indexOf = this.$scope.newsItems.indexOf(data[i]);
              this.loadMetadataForArray(data[i], indexOf, this.$scope.newsItems)
            }
          }
        })
    }

    public loadMetadataForArray(resource, index, returnArray){
      this.dataService.getMetadata(resource).then(data =>{
          returnArray[index].Metadata = data[0]
      });
    }

    public loadMetadata(item){
      this.dataService.getMetadata(item).then(data =>{
          item.Metadata = data[0]
      });
    }
  }
}
