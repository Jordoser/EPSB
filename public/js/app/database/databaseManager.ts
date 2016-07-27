module App {
  export class JSONDatabase{
    public LevelOneNavItems
    public LevelTwoNavItems
    public LevelThreeNavItems
    public LevelFourNavItems
    public UserContacts

    public LevelOneContent;
    public LevelTwoContent;
    public LevelThreeContent;
    public LevelFourContent;

    public PageAudits;
    public NewsItems;


    //Used for grade and Resources
    public Resources;
    public Metadata;
    public Users;

    public Applications;

    public GradeFilters;
    public SubjectFilters;
    public ResourceTypeFilters;

    constructor(){
      var navItems = new NavItemsDatabase();
      this.LevelOneNavItems = navItems.LevelOneNavItems;
      this.LevelTwoNavItems = navItems.LevelTwoNavItems;
      this.LevelThreeNavItems= navItems.LevelThreeNavItems;
      this.LevelFourNavItems = navItems.LevelFourNavItems;


      var levelOneContent = new LevelOneContentDatabase();
      this.LevelOneContent = levelOneContent.LevelOneContent;

      var levelTwoContent = new LevelTwoContentDatabase();
      this.LevelTwoContent = levelTwoContent.LevelTwoContent;

      var levelThreeContent = new LevelThreeContentDatabase();
      this.LevelThreeContent = levelThreeContent.LevelThreeContent;

      var levelFourContent = new LevelFourContentDatabase();
      this.LevelFourContent = levelFourContent.LevelFourContent;

      var pageAudits = new PageAuditDatabase();
      this.PageAudits = pageAudits.PageAudits;

      var userContacts = new UserContactDatabase();
      this.UserContacts = userContacts.UserContacts;

      var newsItems = new NewsItemDatabase();
      this.NewsItems = newsItems.NewsItems;


      var tagFilters = new TagFilterDatabase();
      this.ResourceTypeFilters = tagFilters.ResourceTypeFilters;
      this.GradeFilters = tagFilters.GradeFilters;
      this.SubjectFilters = tagFilters.SubjectFilters;


      var resources = new ResourcesDatabase();
      this.Resources = resources.Resources;


      var applications = new ApplicationsDatabase();
      this.Applications = applications.Applications;


      var metadata = new MetadataDatabase();
      this.Metadata = metadata.Metadata;

    }
  }
}
