(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initAccordions();
    initSmoothScroll();
    initFormValidation();
    initScrollAnimations();
    initHeaderScroll();
    initCountUp();
  });

  function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });

    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      }
    });
  }

  function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        const accordionItem = header.parentElement;
        const isOpen = accordionItem.classList.contains('open');

        const parent = accordionItem.parentElement;
        parent.querySelectorAll('.accordion-item').forEach(function(item) {
          item.classList.remove('open');
        });

        if (!isOpen) {
          accordionItem.classList.add('open');
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

  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .timeline-item').forEach(function(el) {
      observer.observe(el);
    });
  }

  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScrollY = 0;

    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScrollY = scrollY;
    }, { passive: true });
  }

  function initCountUp() {
    const countUpElements = document.querySelectorAll('.stat-number[data-count]');

    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const prefix = el.getAttribute('data-prefix') || '';
          const duration = 2000;
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            el.textContent = prefix + current.toLocaleString() + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.textContent = prefix + target.toLocaleString() + suffix;
            }
          }

          requestAnimationFrame(updateCount);
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    countUpElements.forEach(function(el) {
      observer.observe(el);
    });
  }
})();