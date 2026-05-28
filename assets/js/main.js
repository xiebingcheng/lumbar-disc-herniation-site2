(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initAccordions();
    initSmoothScroll();
    initFormValidation();
  });

  function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      }
    });
  }

  function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        const parent = accordionItem.parentElement;
        parent.querySelectorAll('.accordion-item').forEach(function(item) {
          item.classList.remove('active');
        });
        
        if (!isActive) {
          accordionItem.classList.add('active');
        }
      });
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        let isValid = true;
        
        form.querySelectorAll('[required]').forEach(function(field) {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
          } else {
            field.classList.remove('error');
          }
        });
        
        if (!isValid) {
          e.preventDefault();
        }
      });
    });
  }
})();