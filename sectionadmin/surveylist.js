class surveylist{

    surveylist(){
        cy.get('a[title="Survey List"]').click({ force: true });      
    }

    sectionLevelReport(){
        cy.get('a[title="Reports"]').click({ force: true }); 
        cy.get('a[title="Section Level Report"]').click({force: true}) 
        cy.circle_dropdown();
        cy.division_dropdown();
        cy.subdivision_dropdown();
        cy.section_dropdown();
        cy.get('button[type="submit"]').click({force: true})
        cy.get('button[title="Export to csv"]').click() 
    }  

    divisionWiseReport(){
        cy.get('a[title="Reports"]').click({ force: true }); 
        cy.get('a[title="Division Wise GIS Report"]').click();
        cy.circle_dropdown();
        cy.division_dropdown();
        cy.subdivision_dropdown();
        cy.section_dropdown();
        cy.feeder_dropdown();
        cy.get('button[type="submit"]').click({force: true})
        cy.get('button[class="swal2-confirm swal2-styled"]').click();
    }

    uscMasterReport(){ 
        cy.get('a[title="Reports"]').click({ force: true }); 
        cy.get('[title="Usc Master Report"]').click();
        cy.circle_dropdown();
        cy.division_dropdown();
        cy.subdivision_dropdown();
        cy.section_dropdown();
        cy.get('button[type="submit"]').click({force: true})
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
    }

    percentageReport(){
        cy.get('a[title="Reports"]').click({ force: true }); 
        cy.get('a[title="Percentage Report"]').click();
        cy.circle_dropdown();
        cy.division_dropdown();
        cy.subdivision_dropdown();
        cy.section_dropdown();
        cy.feeder_dropdown();
        cy.get('button[type="submit"]').click({force: true})
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
    }
}
export default surveylist;