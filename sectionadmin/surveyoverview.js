class surveyoverview{

    surveyoverview(){
        cy.get('a[title="Survey Overview"]').click()
        cy.circle_dropdown();
        cy.division_dropdown();
        cy.subdivision_dropdown();
        cy.section_dropdown();
        cy.get('button[type="submit"]').click({force: true})
        cy.get('button[class="btn btn-outline-primary btn-sm ml-3"]').click();
        cy.get('a[href="/home/reports-download-center"]').click({force: true});
        cy.get('button[class="swal2-confirm swal2-styled"]').click()


    }
}
export default surveyoverview;