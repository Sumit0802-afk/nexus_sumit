/* ==========================================================================
   DARK ART COLLECTION — dark-art.js
   Gallery Interactions: Cursor, Lightbox, Scroll Reveal
   ========================================================================== */

(function () {
  'use strict';

  /* ── Artwork Data ────────────────────────────────────────────────────── */
  const ARTWORKS = [
    { src: 'assets/dark-art-01.jpg', num: 'I',    title: 'The Last Piece of Us' },
    { src: 'assets/dark-art-02.jpg', num: 'II',   title: 'Thread of a Lost Soul' },
    { src: 'assets/dark-art-03.jpg', num: 'III',  title: 'The Coffin of Memories' },
    { src: 'assets/dark-art-04.jpg', num: 'IV',   title: 'When Time Began to Bleed' },
    { src: 'assets/dark-art-05.jpg', num: 'V',    title: 'Two Souls, One Dying Thread' },
    { src: 'assets/dark-art-06.jpg', num: 'VI',   title: 'The House of Forgotten Faces' },
    { src: 'assets/dark-art-07.jpg', num: 'VII',  title: 'The Heart Beneath the Skin' },
    { src: 'assets/dark-art-08.jpg', num: 'VIII', title: 'The Anatomy of Loss' },
    { src: 'assets/dark-art-09.jpg', num: 'IX',   title: 'The Heart That Could Not Fly' },
    { src: 'assets/dark-art-10.jpg', num: 'X',    title: 'The Tower of Despair' },
    { src: 'assets/dark-art-11.jpg', num: 'XI',   title: 'The Burden of the Spire' },
    { src: 'assets/dark-art-12.jpg', num: 'XII',  title: 'A Heart Left Behind' },
    { src: 'assets/dark-art-13.jpg', num: 'XIII', title: 'The Masquerade of Grief' },
    { src: 'assets/dark-art-14.jpg', num: 'XIV',  title: 'The Garden of Broken Memories' },
    { src: 'assets/dark-art-15.jpg', num: 'XV',   title: 'The Celestial Martyr' },
  ];

  let currentLightboxIndex = 0;
  let isLightboxOpen = false;

  /* ── DOM References ──────────────────────────────────────────────────── */
  const cursor         = document.getElementById('dacCursor');
  const cursorFollower = document.getElementById('dacCursorFollower');
  const lightbox       = document.getElementById('dacLightbox');
  const lbBackdrop     = document.getElementById('dacLbBackdrop');
  const lbClose        = document.getElementById('dacLbClose');
  const lbPrev         = document.getElementById('dacLbPrev');
  const lbNext         = document.getElementById('dacLbNext');
  const lbImg          = document.getElementById('dacLbImg');
  const lbImgWrap      = document.getElementById('dacLbImgWrap');
  const lbCapNum       = document.getElementById('dacLbCapNum');
  const lbCapTitle     = document.getElementById('dacLbCapTitle');
  const lbCapCounter   = document.getElementById('dacLbCapCounter');
  const artworkItems   = document.querySelectorAll('.dac-artwork-item');

  /* ── Custom Cursor ───────────────────────────────────────────────────── */
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth follower via RAF
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Expand follower on hover over interactive elements
  document.querySelectorAll('.dac-artwork-item, .dac-nav-back, .dac-lb-close, .dac-lb-nav, .dac-footer-back-link, button, a').forEach(function(el) {
    el.addEventListener('mouseenter', function () {
      cursorFollower.classList.add('expanded');
    });
    el.addEventListener('mouseleave', function () {
      cursorFollower.classList.remove('expanded');
    });
  });

  /* ── Lightbox ────────────────────────────────────────────────────────── */
  function openLightbox(index) {
    currentLightboxIndex = index;
    isLightboxOpen = true;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    loadLightboxImage(index);
    lbClose.focus();
  }

  function closeLightbox() {
    isLightboxOpen = false;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function loadLightboxImage(index) {
    const artwork = ARTWORKS[index];
    if (!artwork) return;

    // Show loading state
    lbImgWrap.classList.add('loading');
    lbCapNum.textContent     = artwork.num;
    lbCapTitle.textContent   = artwork.title;
    lbCapCounter.textContent = (index + 1) + ' / ' + ARTWORKS.length;
    lbImg.alt = artwork.title + ' — Dark Art by Sumit';

    const tempImg = new Image();
    tempImg.onload = function () {
      lbImg.src = artwork.src;
      // Slight delay for the cross-fade feel
      setTimeout(function () {
        lbImgWrap.classList.remove('loading');
      }, 50);
    };
    tempImg.onerror = function () {
      lbImg.src = artwork.src; // try anyway
      lbImgWrap.classList.remove('loading');
    };
    tempImg.src = artwork.src;
  }

  function prevArtwork() {
    currentLightboxIndex = (currentLightboxIndex - 1 + ARTWORKS.length) % ARTWORKS.length;
    loadLightboxImage(currentLightboxIndex);
  }

  function nextArtwork() {
    currentLightboxIndex = (currentLightboxIndex + 1) % ARTWORKS.length;
    loadLightboxImage(currentLightboxIndex);
  }

  // Attach click to each artwork item
  artworkItems.forEach(function (item) {
    const index = parseInt(item.getAttribute('data-index'), 10);

    item.addEventListener('click', function () {
      openLightbox(index);
    });

    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });
  });

  // Lightbox controls
  if (lbClose)   lbClose.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
  if (lbPrev)    lbPrev.addEventListener('click', prevArtwork);
  if (lbNext)    lbNext.addEventListener('click', nextArtwork);

  // Keyboard nav
  document.addEventListener('keydown', function (e) {
    if (!isLightboxOpen) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  prevArtwork();
    if (e.key === 'ArrowRight') nextArtwork();
  });

  // Touch/swipe support for lightbox
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener('touchend', function (e) {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextArtwork();
      else prevArtwork();
    }
  }, { passive: true });

  /* ── Scroll Reveal ───────────────────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger items with slight delay based on column position
          const delay = (entry.target.getBoundingClientRect().left / window.innerWidth) * 120;
          setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    artworkItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    // Fallback: show all items
    artworkItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }

  /* ── Header Scroll Behaviour ─────────────────────────────────────────── */
  const header = document.getElementById('dacHeader');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      header.style.borderBottomColor = 'rgba(194, 165, 130, 0.22)';
    } else {
      header.style.borderBottomColor = 'rgba(194, 165, 130, 0.15)';
    }
  }, { passive: true });

  /* ── Preload adjacent images ─────────────────────────────────────────── */
  function preloadAdjacentImages(index) {
    const prev = (index - 1 + ARTWORKS.length) % ARTWORKS.length;
    const next = (index + 1) % ARTWORKS.length;
    [prev, next].forEach(function(i) {
      const img = new Image();
      img.src = ARTWORKS[i].src;
    });
  }

  // Preload on open
  lightbox.addEventListener('transitionend', function () {
    if (isLightboxOpen) preloadAdjacentImages(currentLightboxIndex);
  });

})();
