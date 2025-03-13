Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })
  
  describe('reps-id auto qa', () => {

    let myUrl = Cypress.env('base_url')
    let newUrl = ''
      
    before(() => {
      cy.task('writeLine',`automation test by ${Cypress.env('developer')} version: ${Cypress.env('version')}`)
      cy.visit(myUrl)
      cy.screenshot()
      cy.get('#elementor-popup-modal-105277 > div > div.dialog-close-button.dialog-lightbox-close-button > i').click()
    })

    it('nutritions page',()=>{
        cy.task('writeLine','open nutritions page from menu bar')
        cy.get('#menu-1-279e860 > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-104961 > a').click()
        cy.url().should('include','/nutritions')
        cy.screenshot()
        cy.task('writeLine','open page link entitled ikan gabus')
        cy.get('body > div.elementor.elementor-104858.elementor-location-single.post-104834.page.type-page.status-publish.hentry > div > section > div > div > div.has_ae_slider.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-3dd7517d.ae-bg-gallery-type-default > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-578a0f6.elementor-widget.elementor-widget-theme-post-content > div > div > div > div > section > div > div > div > div > div > div > div > div.ae-outer-wrapper > div.ae-post-collection > article:nth-child(5) > div > div > div > div > div > section > div > div > div.has_ae_slider.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-7345883.ae-bg-gallery-type-default > div > div > div.elementor-element.elementor-element-8f4b01d.elementor-widget.elementor-widget-ae-post-title > div > a').click()
        cy.url().should('include','/ekstrak-ikan-gabus-untuk-pemulihan')
        cy.screenshot()
    })

    it('search artikel entitle protein otot',()=>{
      cy.visit(myUrl)
      cy.get('#elementor-popup-modal-105277 > div > div.dialog-close-button.dialog-lightbox-close-button > i').click()
      cy.task('writeLine','input search page from menu bar')
      cy.get('body > div.elementor.elementor-104861.elementor-location-header > div > section.has_ae_slider.elementor-section.elementor-top-section.elementor-element.elementor-element-fefa120.elementor-section-content-middle.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.ae-bg-gallery-type-default > div > div > div > div > div > div.elementor-element.elementor-element-013af51.elementor-widget__width-initial.elementor-widget-mobile__width-inherit.elementor-widget-tablet__width-initial.elementor-search-form--skin-classic.elementor-search-form--button-type-icon.elementor-search-form--icon-search.elementor-widget.elementor-widget-search-form > div > form > div > input').type('protein otot {enter}')
      cy.url().should('include','/?s=protein+otot')
      cy.screenshot()
      cy.get('#elementor-popup-modal-105277 > div > div.dialog-close-button.dialog-lightbox-close-button > i').click()
      cy.task('writeLine','open page link entitled kiat jaga berat badan')
      cy.get('body > div.elementor.elementor-105210.elementor-location-archive > div > section > div > div > div.has_ae_slider.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-5744077.ae-bg-gallery-type-default > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-4046aac.ae-grid-list.overlay-h-pos-center.overlay-v-pos-middle.elementor-widget.elementor-widget-ae-post-blocks-adv > div > div.ae-outer-wrapper.no-ajax > div.ae-post-collection > article:nth-child(6) > div > div > div > div > div > section > div > div > div.has_ae_slider.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-7345883.ae-bg-gallery-type-default > div > div > div.elementor-element.elementor-element-8f4b01d.elementor-widget.elementor-widget-ae-post-title > div > a').click()
      cy.url().should('include','/kiat-jaga-berat-badan-dan-massa-otot-selama-puasa')
      cy.screenshot()
  })

    })