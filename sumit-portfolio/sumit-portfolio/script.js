/* ==========================================================================
   SUMIT — GRAPHIC DESIGNER PORTFOLIO
   Interactive Logic: Custom Cursor, Case Study Modal, Filter, Parallax
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Project Case Studies Data ---
  const projectData = {
    'project-w1': {
      title: 'WEBSITE DESIGN — FALCON',
      client: 'PERSONAL PROJECT',
      category: 'DIGITAL DESIGN // UI/UX // WEB',
      year: '2025',
      refCode: 'REF: WEB-2025/FLN',
      coverImg: 'assets/work-falcon-website.png',
      detailImg: 'assets/work-falcon-website.png',
      overview: 'A high-fidelity UI design and visual concept for an intelligent design system platform. Designed to communicate sophistication, intelligence, and creative power at first glance.',
      creativeDirection: 'Deep black canvas with warm golden-bronze 3D typographic sculpture as the hero centerpiece. Minimal layout with strong editorial micro-labels, purposeful negative space and a premium SaaS aesthetic.',
      process: 'Wireframing, component hierarchy mapping, visual polish, and typographic refinement. Final visual optimized for both desktop and responsive breakpoints.'
    },
    'project-rb1': {
      title: 'HIRING NOW — TNN CLUB',
      client: 'TEAM NEXT NEXUS',
      category: 'SOCIAL MEDIA // RECRUITMENT',
      year: '2025',
      refCode: 'REF: HN-2025/NX',
      coverImg: 'assets/work-hiringnow.jpg',
      detailImg: 'assets/work-hiringnow.jpg',
      overview: 'A vintage-grunge styled recruitment poster for Team Next Nexus Club at VIT-AP University. Designed to feel raw, expressive and attention-commanding in social media feeds.',
      creativeDirection: 'Deep crimson red background with cracked wall texture creates tactile, distressed atmosphere. A high-contrast halftone portrait of a bespectacled man (representing the creative professional persona) anchors the composition. Distressed chalk-effect "HIRING NOW" title at the top, flanked by comic-style hand illustrations with doodle accents. Bottom star icons and QR code complete the layout.',
      process: 'Vintage grunge texture sourcing, halftone portrait effect application, distressed typography treatment, hand illustration element compositing, star icon design and QR code integration.'
    },
    'project-rb2': {
      title: 'EID AL-FITR MUBARAK',
      client: 'TEAM NEXT NEXUS × VIT-AP',
      category: 'SOCIAL MEDIA // FESTIVE GREETING',
      year: '2025',
      refCode: 'REF: EID-2025/NX',
      coverImg: 'assets/work-eid.jpg',
      detailImg: 'assets/work-eid.jpg',
      overview: 'A graceful festive greeting creative for Eid Al-Fitr, designed for Team Next Nexus at VIT-AP University. Crafted to spread warmth and celebrate the occasion with visual elegance.',
      creativeDirection: 'Soft pastel sky blue and blush watercolour wash as the atmospheric background. Delicate blue peony floral arrangements frame the upper corners with gold leaf accents. A monumental hand-drawn mosque illustration fills the lower half. "Eid Al-Fitr Mubarak" rendered in flowing calligraphic serif script, with an Arabic line above for cultural authenticity.',
      process: 'Watercolour texture background painting, floral arrangement compositing, mosque architectural illustration selection, bilingual typographic hierarchy and colour-harmony finishing.'
    },
    'project-rb3': {
      title: 'QUANTIX — 24HR HACKATHON',
      client: 'TEAM NEXT NEXUS × AIBPT × VIT-AP',
      category: 'EVENT CREATIVES // DIGITAL DESIGN',
      year: '2025',
      refCode: 'REF: QX-2025/NX',
      coverImg: 'assets/work-quantix.png',
      detailImg: 'assets/work-quantix.png',
      overview: 'Event poster for QuantiX, a 24-hour hackathon focused on AI, Blockchain and Cybersecurity — hosted by Team Next Nexus in collaboration with AiBPT at VIT-AP University.',
      creativeDirection: 'Dark deep-space black background with subtle city grid bokeh creates an immersive technology atmosphere. A glowing blue cybersecurity shield with holographic padlock floats in cupped hands as the hero visual. "QUANTIX" rendered in neon red/white with dynamic font mixing creates title impact. Structured info modules for prize pool, categories and venue ensure event legibility.',
      process: 'Cybersecurity visual theme research, holographic shield asset sourcing and compositing, neon title typography treatment, information hierarchy layout design, QR registration code integration.'
    },
    'project-rb4': {
      title: 'WE ARE RECRUITING',
      client: 'TEAM NEXT NEXUS',
      category: 'SOCIAL MEDIA // RECRUITMENT',
      year: '2025',
      refCode: 'REF: REC-2025/NX',
      coverImg: 'assets/work-recruiting.jpg',
      detailImg: 'assets/work-recruiting.jpg',
      overview: 'A retro 70s funk-inspired recruitment poster for Team Next Nexus that breaks all conventions of standard job ads. Designed to be bold, distinctive and shareable across social media.',
      creativeDirection: 'Warm terracotta-orange and vintage cream as the hero palette — evoking a classic 1970s record sleeve aesthetic. A charismatic model in a full pattern suit, wide-brim hat and gold accessories commands the right half. "We Are Recruiting" in enormous italic calligraphic script dominates the left field. An icon-driven open positions list, circular "Next Nexus" globe badge, and retro STEREO/FUNK footer brand strips complete the composition.',
      process: 'Retro era mood board research, typography style selection (script + serif), model compositing with period-appropriate treatment, icon system design, structured positions list, and badge/label design.'
    },
    'project-ra1': {

      title: 'DR. APJ ABDUL KALAM — TRIBUTE',
      client: 'TEAM NEXT NEXUS × VIT-AP',
      category: 'TRIBUTE CREATIVE // SOCIAL MEDIA',
      year: '2025',
      refCode: 'REF: APJ-2025/NX',
      coverImg: 'assets/work-apjkalam.jpg',
      detailImg: 'assets/work-apjkalam.jpg',
      overview: 'A heartfelt tribute poster for Bharat Ratan Dr. APJ Abdul Kalam, the Missile Man of India. Created for Team Next Nexus at VIT-AP University to honour his legacy and inspire students.',
      creativeDirection: 'Vibrant Indian tricolour spray-paint explosion as the background atmosphere — saffron, white and green merging into a dynamic abstract haze. A photorealistic portrait of Dr. Kalam is composited with a PSLV rocket and Bharat Ratan medal. Bold white calligraphic display type anchors his name with gravitas.',
      process: 'Reference image research, portrait retouching and enhancement, tricolour spray texture compositing, symbolic prop selection (rocket + medal), typographic hierarchy and brand logo placement.'
    },
    'project-ra2': {
      title: 'WE ARE HIRING — TEAM NEXT NEXUS',
      client: 'TEAM NEXT NEXUS',
      category: 'SOCIAL MEDIA // RECRUITMENT',
      year: '2025',
      refCode: 'REF: WAH-2025/NX',
      coverImg: 'assets/work-wearehiring.png',
      detailImg: 'assets/work-wearehiring.png',
      overview: 'A punchy, high-contrast recruitment poster designed for Team Next Nexus to announce open positions across multiple departments. Built to stop the scroll and drive applications.',
      creativeDirection: 'Crumpled dark paper texture creates tactile depth. Oversized condensed sans-serif type forms the dominant visual: "WE ARE HIRING" in high-contrast white. Bold golden-yellow accents and hand-drawn doodle elements (megaphone, pen) from halftone illustration art add expressive personality and humanize the technical recruitment context.',
      process: 'Halftone illustration sourcing, textured paper background creation, typographic scale hierarchy, bullet-list role design, QR code integration and "JOIN NOW" CTA framing.'
    },
    'project-ra3': {
      title: 'JOIN TEAM NEXT NEXUS',
      client: 'TEAM NEXT NEXUS',
      category: 'SOCIAL MEDIA // RECRUITMENT',
      year: '2025',
      refCode: 'REF: JTN-2025/NX',
      coverImg: 'assets/work-joinnexus.jpg',
      detailImg: 'assets/work-joinnexus.jpg',
      overview: 'A premium recruitment poster for Team Next Nexus inviting passionate creatives and technologists to join the team. Positioned as a prestige brand statement rather than a standard job ad.',
      creativeDirection: 'Deep black canvas with a dramatic golden moonrise halo effect as the atmospheric centrepiece. Two photorealistic 3D metallic chrome thorn/spike sculptural elements float in the composition, conveying creative danger and ambition. Gold and grey metallic typography pairs with a structured open-positions list and icon system.',
      process: 'Premium dark aesthetic direction, 3D object sourcing and compositing, golden halo atmosphere building, icon system design, open positions hierarchy and QR code integration.'
    },
    'project-ra4': {
      title: 'NOW HIRING — FRESHERS',
      client: 'TEAM NEXT NEXUS',
      category: 'SOCIAL MEDIA // RECRUITMENT',
      year: '2025',
      refCode: 'REF: FRESH-2025/NX',
      coverImg: 'assets/work-freshers.jpg',
      detailImg: 'assets/work-freshers.jpg',
      overview: 'A bold, cinematic horror-themed freshers recruitment creative designed to break category conventions and generate social media buzz. Aimed at first-year students joining VIT-AP.',
      creativeDirection: 'A lone ethereal figure with long dark hair in atmospheric blue-teal fog holds a rustic wooden "FRESHERS" sign — evoking iconic horror cinema energy. Neon glowing "TEAM NEXT NEXUS" text at the top and hand-written style "NOW HIRING" at the bottom create typographic tension between the supernatural and the institutional.',
      process: 'Horror film reference research, atmospheric blue fog photo compositing, wooden sign prop design, neon glow typographic treatment, QR code placement and final tonal grading.'
    },
    'project-ra5': {
      title: 'JAVA JUMPSTART 3.0',
      client: 'TEAM NEXT NEXUS × VIT-AP',
      category: 'EVENT CREATIVES // DIGITAL DESIGN',
      year: '2026',
      refCode: 'REF: JJ3-2026/NX',
      coverImg: 'assets/work-javajump3.png',
      detailImg: 'assets/work-javajump3.png',
      overview: 'Event poster for Java Jumpstart 3.0, an advanced Java workshop covering Collections & Multithreading for high-performance concurrent applications. Presented by Team Next Nexus.',
      creativeDirection: 'A dark robotic mech warrior character as the atmospheric background — representing the advanced, high-performance nature of the subject. Glitch-chrome display typography with scanline digital distortion effects. Clean rounded info-card containers for event logistics ensure readability within the chaotic environment.',
      process: 'Advanced level differentiation from 2.0 poster, mech robot background sourcing, glitch typography treatment, structured info-card component system, and final export.'
    },
    'project-r5': {

      title: 'HYPER LOOP — COMPETITIVE PROGRAMMING',
      client: 'TEAM NEXT NEXUS × VIT-AP',
      category: 'EVENT CREATIVES // POSTER DESIGN',
      year: '2025',
      refCode: 'REF: HL-2025/NX',
      coverImg: 'assets/work-hyperloop.jpg',
      detailImg: 'assets/work-hyperloop.jpg',
      overview: 'Event poster for Hyper Loop, a competitive programming contest hosted by Team Next Nexus at VIT-AP University. A high-octane visual built to excite engineering students and drive registrations.',
      creativeDirection: 'Dark cinematic black base with aggressive neon red speed-trails and a futuristic Hyper Loop pod blasting through a glowing tunnel. Custom distressed metal-texture typography for the title. Tech-spec info grid at the bottom balances the visual drama with structured clarity.',
      process: 'Event brief research, speed/tech visual reference collection, typographic distress effect application, 3D locomotive compositing, QR code and sponsor logo integration.'
    },
    'project-r6': {
      title: 'MEET & GREET — TNN × AIBPT',
      client: 'TEAM NEXT NEXUS × AIBPT',
      category: 'EVENT CREATIVES // SOCIAL MEDIA',
      year: '2025',
      refCode: 'REF: MG-2025/NX',
      coverImg: 'assets/work-meetgreet.png',
      detailImg: 'assets/work-meetgreet.png',
      overview: 'A vibrant, pop-energy event poster for the Meet & Greet collaboration between Team Next Nexus (TNN) and AiBPT at VIT-AP University — Rock Plaza, September 10.',
      creativeDirection: 'Explosive yellow primary canvas with high-contrast black bold type, scattered geometric star shapes and red blob organic elements. A fashion-forward model portrait adds youthful energy and photographic dimension. The TNN × AIBPT collab logotype anchors brand partnerships clearly in the header.',
      process: 'Colour-pop reference mood board, organic shape compositing, bold editorial hierarchy layout, model cutout treatment, and multi-logo collab header design.'
    },
    'project-r7': {
      title: 'V-TAPP × TNN — SAME TRACK',
      client: 'V-TAPP × TEAM NEXT NEXUS × VIT-AP',
      category: 'EVENT CREATIVES // DIGITAL DESIGN',
      year: '2026',
      refCode: 'REF: VTAPP-2026/NX',
      coverImg: 'assets/work-vtapp.jpg',
      detailImg: 'assets/work-vtapp.jpg',
      overview: 'A dramatic dual-event poster for V-TAPP featuring a Fintech Innovate Hackathon and HackerRank Coding Challenge — two tracks, one destination. Designed with cinematic depth and motorsport energy.',
      creativeDirection: 'Split-world composition: ice-blue fintech hacker on the left, bloodred cyber villain on the right, divided by deep space. A Formula 1 car powers through the midground at full speed, unifying both challenges. All event logistics rendered in structured UI-style data cards for instant readability.',
      process: 'Dual-narrative visual concept, split atmospheric lighting compositing, F1 car CGI integration, icon system for event specs, and typographic hierarchy balancing two separate event brands.'
    },
    'project-r8': {
      title: 'JAVA JUMPSTART 2.0',
      client: 'TEAM NEXT NEXUS × VIT-AP',
      category: 'EVENT CREATIVES // DIGITAL DESIGN',
      year: '2026',
      refCode: 'REF: JJ-2026/NX',
      coverImg: 'assets/work-javajump.png',
      detailImg: 'assets/work-javajump.png',
      overview: 'Event poster for Java Jumpstart 2.0, a workshop on Object-Oriented Programming presented by Team Next Nexus. Designed to attract beginner coders and communicate tech energy with neon-dark aesthetics.',
      creativeDirection: 'Dark purple-black gradient canvas layered with glowing purple neon typography. "JAVA JUMPSTART 2.0" rendered in oversized luminous type dominates the composition. Geometric neon corner accents and a QR registration code provide functional information within a sci-fi inspired layout.',
      process: 'Typography neon glow treatment, abstract purple fluid background generation, geometric corner element design, and event information hierarchy layout.'
    },
    'project-r9': {
      title: 'MADHYA BHARAT — RECRUITMENT',
      client: 'MADHYA BHARAT CULTURAL CLUB × VIT-AP',
      category: 'SOCIAL MEDIA // POSTER DESIGN',
      year: '2026',
      refCode: 'REF: MB-2026/CULT',
      coverImg: 'assets/work-madhyabharat.jpg',
      detailImg: 'assets/work-madhyabharat.jpg',
      overview: 'A heritage-inspired recruitment poster for Madhya Bharat, The Cultural Club at VIT-AP University. Designed to invite freshers to join a community that celebrates central Indian culture, traditions, and arts.',
      creativeDirection: 'Rich warm sepia and deep maroon palette evoking aged parchment and royal Mughal-era manuscripts. Temple silhouette photography as the atmospheric background. Madhwa tribal folk art dancers as a decorative footer frieze. Circular icon system presents four membership values in a clean, approachable layout.',
      process: 'Cultural research into Madhya Pradesh heritage visual language, vintage poster typography selection, icon illustration design, architectural photo compositing, and folk art footer integration.'
    },
    'project-r1': {
      title: 'HAPPY DUSSEHRA — SOCIAL POSTER',
      client: 'TEAM NEXT NEXUS',
      category: 'EVENT CREATIVES // SOCIAL MEDIA',
      year: '2025',
      refCode: 'REF: DUSS-2025/NX',
      coverImg: 'assets/work-dussehra.png',
      detailImg: 'assets/work-dussehra.png',
      overview: 'A festive social media creative designed for Team Next Nexus, VIT-AP University. The poster communicates Dussehra greetings with a dramatic night-sky composition, symbolic silhouette artwork and elegant calligraphic display typography.',
      creativeDirection: 'Deep navy blue starry night background paired with soft glowing moon halo. Floral mandala corner elements reinforce the festive cultural context. Contrast between the bold Dussehra title glow and the dark atmospheric environment creates visual impact.',
      process: 'Theme research, festive asset curation, composition planning with mandala placement, typography hierarchy with glow effects, and final export for Instagram feed and stories.'
    },
    'project-r2': {
      title: 'MARWAR — EVENT CAMPAIGN POSTER',
      client: 'RAJASTHAN ASSOCIATION, VIT-AP',
      category: 'EVENT CREATIVES // POSTER DESIGN',
      year: '2025',
      refCode: 'REF: MRW-2025/RAJ',
      coverImg: 'assets/work-marwar.jpg',
      detailImg: 'assets/work-marwar.jpg',
      overview: 'A bold, culturally rich event poster created for the Marwar cultural event presented by the Rajasthan Association at VIT-AP University. The design celebrates the vibrancy of Rajasthani heritage.',
      creativeDirection: 'Warm desert sand texture background references the Thar desert landscape. A full-body cultural performer in traditional Rajasthani attire serves as the hero visual, flanked by camel caravan silhouettes, architectural line art of an Agra Gate, and bold high-contrast typography.',
      process: 'Event brief analysis, cultural reference collection, photographic subject integration, custom typography rendering, and multi-platform format delivery.'
    },
    'project-r3': {
      title: 'TEAM NEXT NEXUS — NOW HIRING',
      client: 'TEAM NEXT NEXUS',
      category: 'SOCIAL MEDIA // RECRUITMENT CREATIVE',
      year: '2025',
      refCode: 'REF: HIRE-2025/NX',
      coverImg: 'assets/work-hiring.jpg',
      detailImg: 'assets/work-hiring.jpg',
      overview: 'A high-impact recruitment poster designed for Team Next Nexus at VIT-AP University to attract new creative talent. Designed to be visually aggressive, memorable, and effective on social media.',
      creativeDirection: 'Bold red background for maximum social feed contrast. Oversized condensed typeface creates a dominant graphic layer, with the model positioned between typographic layers to add depth and dimensionality. Yellow "NOW HIRING" accent text creates urgency.',
      process: 'Brief analysis, competition poster reference research, subject photography direction, typography grid composition, and final delivery optimized for Instagram and WhatsApp campaign.'
    },
    'project-r4': {
      title: 'HACKATHON — BUILD THE SYSTEM',
      client: 'TEAM NEXT NEXUS',
      category: 'EVENT CREATIVES // DIGITAL DESIGN',
      year: '2025',
      refCode: 'REF: HACK-2025/NX',
      coverImg: 'assets/work-hackathon.png',
      detailImg: 'assets/work-hackathon.png',
      overview: 'A dramatic promotional poster for a hardware hackathon event. The design needed to communicate technical intensity, innovation, and a pop-culture energy that resonates with engineering students.',
      creativeDirection: 'Spider-Man themed dark red and black cinematic environment with a photorealistic custom-built PC as the centrepiece. Dramatic neon red underglow lighting, bold condensed HACKATHON typography with custom letter replacements, and detailed icon-driven information hierarchy.',
      process: 'Event theme direction, Spider-Man visual reference integration, 3D PC asset sourcing and compositing, custom glyph modifications, icon system design, and high-resolution poster export.'
    },
    'project-01': {
      title: 'EVENT CREATIVES',
      client: 'TEAM NEXT NEXUS',
      category: 'POSTER DESIGN // EVENT CAMPAIGN',
      year: '2026',
      refCode: 'REF: EC-2026/NX',
      coverImg: 'assets/project-01-event.jpg',
      detailImg: 'assets/project-04-poster.jpg',
      overview: 'A bold, comprehensive promotional campaign developed for a major international typography and modernist design event.',
      creativeDirection: 'Inspired by the geometric precision of the Swiss International Typographic Style and mid-century Bauhaus poster art.',
      process: 'Extensive exploration into mathematical modular grids, typographic kerning under extreme scales, and risograph texture tests.'
    },
    'project-02': {
      title: 'SOCIAL MEDIA CAMPAIGN',
      client: 'ARCHETYPE DIGITAL',
      category: 'DIGITAL DESIGN // SOCIAL SYSTEMS',
      year: '2025',
      refCode: 'REF: SMC-2025/ARC',
      coverImg: 'assets/project-02-social.jpg',
      detailImg: 'assets/project-03-brand.jpg',
      overview: 'An editorial social media campaign system engineered for high-engagement multi-slide carousels and story narratives.',
      creativeDirection: 'Pairing classical serif typography with neutral grotesk sub-labels over warm sandstone textures and architectural photography.',
      process: 'Developed over 40 responsive component templates establishing guidelines for photo grading, margins, and typographic hierarchy.'
    },
    'project-03': {
      title: 'BRAND IDENTITY',
      client: 'AETHERA ATELIER',
      category: 'BRANDING // IDENTITY SUITE',
      year: '2025',
      refCode: 'REF: BI-2025/AET',
      coverImg: 'assets/project-03-brand.jpg',
      detailImg: 'assets/project-02-social.jpg',
      overview: 'A visual identity exploration focused on creating a distinctive and consistent brand language.',
      creativeDirection: 'Tactile luxury expressed through restraint. Debossed geometric monogram marks on warm linen papers.',
      process: 'Comprehensive brand guidelines covering logo clearspace, custom wordmark geometry, and physical print specifications.'
    },
    'project-04': {
      title: 'CREATIVE POSTER SERIES',
      client: 'MUSEUM OF AVANT-GARDE ART',
      category: 'POSTER DESIGN // EXPERIMENTAL',
      year: '2024',
      refCode: 'REF: CPS-2024/EXP',
      coverImg: 'assets/project-04-poster.jpg',
      detailImg: 'assets/project-06-experiment.jpg',
      overview: 'An experimental typography and poster exploration challenging the boundaries between legibility and abstract visual form.',
      creativeDirection: 'Radical deconstruction of letterforms across an orthogonal wireframe grid.',
      process: 'Physical ink transfers, risograph print scanning, and digital vector assembly.'
    }
  };


  // --- 1. Custom Interactive Cursor (Desktop) ---
  const cursor = document.getElementById('customCursor');
  const follower = document.getElementById('cursorFollower');
  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;

  if (window.innerWidth > 768 && cursor && follower) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    // Smooth lerp follower
    const renderCursor = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(renderCursor);
    };
    renderCursor();

    // Hover states for projects
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering-project');
        cursor.textContent = 'VIEW';
        follower.style.transform = 'translate(-50%, -50%) scale(1.4)';
        follower.style.borderColor = '#111111';
      });
      card.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering-project');
        cursor.textContent = '';
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.borderColor = 'rgba(17, 17, 17, 0.4)';
      });
    });

    // Hover states for links and buttons
    document.querySelectorAll('a, button, .filter-btn, .tool-tag').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering-link');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering-link');
      });
    });
  }

  // --- 2. Portfolio Category Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // --- 3. Editorial Case Study Modal ---
  const modalBackdrop = document.getElementById('caseStudyModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCloseBtnBottom = document.getElementById('modalCloseBtnBottom');

  const modalTitle = document.getElementById('modalProjectTitle');
  const modalClient = document.getElementById('modalClient');
  const modalCategory = document.getElementById('modalCategory');
  const modalYear = document.getElementById('modalYear');
  const modalRefCode = document.getElementById('modalRefCode');
  const modalCoverImg = document.getElementById('modalCoverImg');
  const modalDetailImg = document.getElementById('modalDetailImg');
  const modalOverviewText = document.getElementById('modalOverviewText');
  const modalDirectionText = document.getElementById('modalDirectionText');
  const modalProcessText = document.getElementById('modalProcessText');

  const openProjectModal = (projectId) => {
    const data = projectData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalClient.textContent = data.client;
    modalCategory.textContent = data.category;
    modalYear.textContent = data.year;
    modalRefCode.textContent = data.refCode;
    modalCoverImg.src = data.coverImg;
    modalCoverImg.alt = `${data.title} Cover Artwork`;
    modalDetailImg.src = data.detailImg;
    modalDetailImg.alt = `${data.title} Process Artifact`;
    modalOverviewText.textContent = data.overview;
    modalDirectionText.textContent = data.creativeDirection;
    modalProcessText.textContent = data.process;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      openProjectModal(pid);
    });

    // Keyboard support (Enter or Space)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const pid = card.getAttribute('data-project-id');
        openProjectModal(pid);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalCloseBtnBottom) modalCloseBtnBottom.addEventListener('click', closeProjectModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeProjectModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // --- 4. Floating Elements Mouse Parallax (Hero Section) ---
  const heroCard = document.getElementById('heroCard');
  const floatSpecimen = document.getElementById('floatSpecimen');
  const floatPreview = document.getElementById('floatPreview');

  if (heroCard && window.innerWidth > 992) {
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (floatSpecimen) {
        floatSpecimen.style.transform = `rotate(${3 + x * 4}deg) translate(${x * 12}px, ${y * 12}px)`;
      }
      if (floatPreview) {
        floatPreview.style.transform = `rotate(${-2.5 - x * 3}deg) translate(${-x * 10}px, ${-y * 10}px)`;
      }
    });

    heroCard.addEventListener('mouseleave', () => {
      if (floatSpecimen) floatSpecimen.style.transform = 'rotate(3deg)';
      if (floatPreview) floatPreview.style.transform = 'rotate(-2.5deg)';
    });
  }

  // --- 5. Mobile Navigation Toggle ---
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileNavToggle && navLinks) {
    mobileNavToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const isOpen = navLinks.classList.contains('mobile-open');
      mobileNavToggle.textContent = isOpen ? 'CLOSE [✕]' : 'MENU [≡]';
      mobileNavToggle.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileNavToggle.textContent = 'MENU [≡]';
      });
    });
  }

  // --- 6. Active Navigation Link on Scroll ---
  const sections = document.querySelectorAll('section[id], header[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentId}`) {
        item.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNav);

  // --- 7. Interactive Contact Form ---
  const contactForm = document.getElementById('contactForm');
  const formStatusMsg = document.getElementById('formStatusMsg');

  if (contactForm && formStatusMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<span>TRANSMITTING...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<span>SENT SUCCESSFULLY</span>';
        formStatusMsg.style.display = 'block';
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 4000);
      }, 900);
    });
  }

  // --- 8. Email One-Click Copy ---
  const emailBtn = document.getElementById('emailCopyBtn');
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      // Allow default mailto opening, but also provide copy feedback
      navigator.clipboard.writeText('bhamusumit223@gmail.com').then(() => {
        const prevText = emailBtn.textContent;
        emailBtn.textContent = 'EMAIL COPIED TO CLIPBOARD! ↗';
        setTimeout(() => {
          emailBtn.textContent = prevText;
        }, 2500);
      }).catch(() => {});
    });
  }

});
