module App.levelFour{
"use strict";

export class LevelFourController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];
    private navArray;
    private currentItemIdNav;
    constructor(public $scope: ILevelFourScope,  public $timeout: ng.ITimeoutService, public dataService: LevelFourDataService){
      super($scope,$timeout,$timeout);
        $('.collapse').collapse()
        this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[3];
        this.$scope.documentTypes = [];
        this.loadl4Item(this.currentItemIdNav.ContentId);
        this.navArray = [];
         this.$scope.relatedNews = [];
        this.$scope.relatedApps = [];
        this.$scope.relatedContacts = [];

        //this.$scope.employeeBar =  this.navArray[0].Id == "Employee Essentials"


    }

    public loadl4Item(Id: string){
      this.dataService.loadItemById(Id)
      .then(data => {
        this.$scope.currentItem = data[0]
         if(data[0]){
           this.loadRelatedNews(data[0].Tags);
          this.loadRelatedApps(data[0].Tags)
          this.loadRelatedContacts(data[0].Tags)
        }
        this.loadDocumentFilters();
      });
    }



    public loadRelatedNews(Tags: Array<string>){
        this.dataService.getItemsByTag(Tags,"NewsItems")
        .then(data =>{
          App.Common.replaceArrayContents(this.$scope.relatedNews, <any>data)
          for(var i = 0; i < this.$scope.relatedNews.length; i++){
            this.loadMetadata(this.$scope.relatedNews[i]);
          }
        })
    }

    public loadRelatedApps(Tags: Array<string>){
      this.dataService.getRelatedApps(Tags)
      .then(data =>{
        App.Common.replaceArrayContents(this.$scope.relatedApps, data)
        for(var i = 0; i < this.$scope.relatedApps.length; i++){
          this.loadMetadata(this.$scope.relatedApps[i]);
        }
      })
    }

    //Todo add load related contacts
    public loadRelatedContacts (Tags: Array<string>){
      this.dataService.getRelatedContacts(Tags)
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.relatedContacts, data)
        // for(var i = 0; i < this.$scope.relatedApps.length; i++){
        //   this.loadMetadata(this.$scope.relatedContacts[i]);
        // }
      })
    }

    public loadDocumentFilters(){
      this.dataService.getDocumentTypeFilters()
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.documentTypes, data)
        for(var i = 0; i < this.$scope.documentTypes.length; i++){
          this.$scope.documentTypes[i].Documents = []
          this.loadDocumentForTag([this.$scope.currentItem.Id, data[i].Tag],  this.$scope.documentTypes[i].Documents)
        }
      })
    }

    public loadMetadata(Item){
      this.dataService.getMetadataById(Item.MetadataId)
      .then(data => {
        Item.Metadata = data[0];
      })
    }

    public loadDocumentForTag(Tags: Array<any>, refrenceArray: Array<any>){
      this.dataService.getTaggedDocuments(Tags)
      .then(data => {
        App.Common.replaceArrayContents(refrenceArray, data)
        for(var i =0; i < refrenceArray.length; i++){
          this.loadMetadata(refrenceArray[i])
        }
      })
    }
  }
}
