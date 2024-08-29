/// <reference types="cypress" />

import  surveylist  from "../../pageobject/sectionadmin/surveylist"
import  surveyoverview  from "../../pageobject/sectionadmin/surveyoverview"
describe('surveylist',function(){
    this.beforeEach(function(){
        cy.fixture('Section_login').then(function(data) {
          this.data = data
          cy.clearAllCookies();
          cy.clearLocalStorage();
        })
    })
   
    /* it('surveylist',function(){
        cy.section_logins(this.data.sectionuser, this.data.sectionpassword)
        const Surveylist = new surveylist();
        Surveylist.surveylist();
        Surveylist.sectionLevelReport();
        cy.wait(3000)
        Surveylist.divisionWiseReport();
        Surveylist.uscMasterReport();
        cy.wait(3000)
        Surveylist.percentageReport();
        
     })*/
     it('surveyoverview',function(){
      cy.section_logins(this.data.sectionuser, this.data.sectionpassword)
        const Surveyoverview = new surveyoverview();
        Surveyoverview.surveyoverview();


     })
})
