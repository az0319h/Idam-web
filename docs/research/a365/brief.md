# a365.at — homepage brief

Source: https://www.a365.at/ (Webflow, published 2026-08-31). Single requested URL → local route `/`.
Evidence captured 2026-10-24 with Playwright Chromium (headless, 15px scrollbar → 1425px content width at 1440).

## Route map
| Source | Local | Notes |
|---|---|---|
| `/` | `/` (src/app/page.tsx) | replaces untouched template homepage |
| `/work`, `/about`, `/inside`, `/contact`, `/works/*`, `/blog/*`, `/info/impressum`, PDFs | not cloned → links point to `https://www.a365.at/...` | disclosed in deliverable |

## Platform / page-wide behavior
- Webflow + IX2 interactions, jQuery. No Lenis / smooth scroll. Native scrolling.
- `html` 16px. Breakpoints: ≤991, ≤767, ≤479 (12-col grid → 4-col at ≤479).
- Colors: `--black-100 #000`, `--white-100 #fff`, `--white-15 #ffffff26`, `--black-10 #0000001a`. Body bg #fff.
- Fonts (loaded, self-hosted woff2): Helvetica Neue 400 (`font55`) + 500 (`font65`); GT Alpina Standard Light Italic 300. Saved to `public/sites/a365/fonts/`.
- Nav is `position:absolute` at top (not sticky). z-index 3.

## Section order (desktop 1440 / mobile 390 heights)
1. Nav 55px / 43px — 2 columns (1fr 1fr), bottom border white-15, col1 right border. Logo 22px (18px ≤767). Links: Work About Inside | Contact (16px white). "Creative Studio" GT Alpina italic 16px right-aligned in col1. Mobile: single row logo + "Menu" button (mix-blend difference), full-screen black overlay menu, links 17svw, Social list + ©2024.
2. Hero 100svh — bg image `agentur-shooting.jpg` (video element exists but `.background-video{display:none}` → never shown) + mask rgba(0,0,0,.3). H1 "Building Brands that Resonate" 10vw/90% -0.02em white, padding-top 1.5vw, container padding-top 4rem. Bottom grid: "since 2006" (serif, col 1-3, align end), paragraph (col 4-7, max 450px), scroll arrow 24px (col 12). ≤767 h1 17vw; ≤479 16vw/100%; mobile grid: p row1 full, since row2, arrow row2 col4.
   Intro animation: h1 translateY 72px→0; grid opacity 0 & translateY 120px→0; mask opacity 0→1.
3. About 857px — container `padding:1rem 1rem 12rem` (≤991 bottom 10rem, ≤767 4rem + side .75rem, ≤479 5rem, top 1.5rem). Grid 1: h2 "About" (16px) col 1-3, large text 48px/110% 500 with text-indent calc(25% - .25rem) spanning 1-13 (same row → heading sits in indent). ≤767: heading row1, text row2, indent 0. Grid 2 (gap 6rem below): paragraph + "Mehr über uns" (underlined link) at col 7-10. Paragraph hidden ≤479.
4. Work 2002px — header block (mb 4rem): row1 bordered (black-10, pb .75rem): "Work" 12svw/90% col 1-6, "(2006-2026)" col 7-9 align end (hidden ≤479), "Alle Projekte" col 11-13 end. Row2 (gap 2rem): "Aktuelle Projekte." large-text col 7-12 (≤767 from col 1). Grid 2 cols gap 4rem/1rem (≤767 1 col, gap 3rem; ≤479 2rem). Item: thumbnail (natural ratio ≈12:7) + name 16px + category serif italic. Hover: thumbnail scale 1.1, underline slides in under name.
5. Service 583px — "Service" 12svw, dropdown list. **First item "01 Strategy" has class `open-by-default` → `display:none` in source CSS. Only 02 Design and 03 Communication render.** Header: padding 1.5rem 0 (1rem ≤479), number (hidden ≤479) col auto, title 48px col 4-11, plus icon 32px (20px ≤479) col 11-13 center/end. Click: content display block + translateY 24→0/opacity, icon rotates 45°. Content: images 2-up (col 4-8, ≤991 1-9, ≤479 stacked), text (headline + divider + paragraph) col 4-8, Tools list col 10-13 (bordered rows with 6px dot). Text content padding 4rem 0 8rem (≤991 bottom 4rem, ≤479 top 2rem).
6. Parallax image 831px — `agentur-shooting-02.webp` width 100% natural ratio (2330×1360), overflow hidden, `transform: scale()` driven by scroll: 1.2 when element top at viewport bottom → 1.0 when top reaches viewport top (samples: -900→1.2, -600→1.13, -300→1.06, 0→1.0). ≤479 aspect 16/9.
7. Inside 1035px — container padding-top 3rem (2rem ≤479). Header like Work: "Inside" col 1-6, "Alle News" col 11-13. Large text col 7-12. Blog grid 4 cols gap 1rem (≤991 2 cols row-gap 4rem, ≤479 1 col 3rem). Thumbnails natural ratio ≈12:7 (one is a GIF).
8. Footer 678px — top border, padding-top 1.2rem. Content flex column gap 12rem (≤991 8rem, ≤767 4rem, ≤479 6rem). Row1 grid: logo (black, 22px) col 1-3, link list (48px Work/About/Inside/Contact, hidden underline shows on hover) col 4-7, Social list (bordered rows + arrow icon) col 10-13. Row2: "Interesse an einer Zusammenarbeit?" + "Let's Chat" 12svw (3px underline on hover) col 4-13. Bottom bar: border-top, mt 1rem, py 1rem: "Creative Studio" serif (tel link) col 1-3, Impressum/AGB/Datenschutz col 4-8 (gap 2rem; ≤479 grid 2 cols), "©2026" col 11-13 end.

## Reveal
`.fade-in-block-wrapper` starts opacity 0 / translateY 32px and animates in when scrolled into view (all sections below hero).

## Link underline rules
- nav (white): hidden (translateX -100%) → slides to 0 on hover, back on leave.
- `with-underline` (visible): on hover slides out to left and re-enters from right.
- `hidden` (work names, footer links, bottom bar): slides in on hover of parent link.
- `footer` (Let's Chat): 3px, slides in on hover.

## Assets → local
See `public/sites/a365/`: icons (logo white/black, down-arrow, link-arrow white/black, plus), fonts, hero jpg, parallax webp, work/ (6), blog/ (4), service/ (6, 894×564). PDFs (AGB, Datenschutz) and the hidden hero video not downloaded.

## Screenshots
`source-desktop-1440-hero.png`, `source-desktop-1440-full.png`, `source-desktop-1920-hero.png`, `source-desktop-work-hover.png`, `source-desktop-service-closed/open/open-2.png`, `source-tablet-991-full.png`, `source-tablet-767-full.png`, `source-mobile-390-hero/full/menu-open/service-open.png`.

---

# /contact — brief (added 2026-10-24)

Source: https://www.a365.at/contact → local `/contact` (src/app/contact/page.tsx). Shares Nav (dark variant), Footer, fonts and a365.css with `/`.

## Layout (desktop 1440: nav 56 / heading 460 / body 834 / footer 678 = 1971px; mobile 390: 46 / 207 / 1219 / 705 = 2131px)
- Nav `.nav-2-column.black`: border-top + border-bottom black-10, black logo, black links with hidden black underline on hover. ≤479: white background; overlay menu identical to home.
- Page heading: `.content-container.page-heading` padding 4rem 1rem 15rem (≤991 bottom 10rem, ≤767 5rem). H1 "Hello" = big-section-heading (12svw).
- Body: top divider, container `1rem 1rem 12rem`, 12-col grid big-gap (row-gap 3rem; ≤479 .75rem):
  - info column col 1-4 (3 cols, 336px), flex column gap 4rem (≤767 2rem). Each block = 2-col grid gap 1rem, border-top black-10 + padding-top .5rem (first block none). Address block: lines col 2 row 1, map link col 2 row 2.
  - map `.map-box` span 4 cols (cols 4-7), image `Map_Desktop.png` (3792×3056) object-fit cover, height = row height. ≤991: row 2 full width; ≤479 margin-top 20px.
  - form wrapper col 8-13 height 100%: `.form-input-block` black bg padding 2rem (≤767 1rem, ≤479 .75rem). Title large-text white 48px, gap 6rem to form. Inputs: black bg, bottom border white-15 (focus → white), 22.4px text, min-height 3rem, mb 1.5rem; textarea min-height 8rem mb 2rem; submit text button 19.2px with 1px white bottom border, hover opacity .5. ≤479 text 16px.
  - ≤991: order info → map → form, each full width.
- Form in source posts to Webflow + reCAPTCHA. Locally: native `required` validation, then opens `mailto:office@a365.at` with the message and shows the source success copy. No backend.
- The source contact page's mobile overlay still contains Webflow placeholder social links ("Facebook", webflow.com). The shared Nav uses the real links from the homepage instead.

## Screenshots
`contact-source-*.png` / `contact-local-*.png` (desktop 1440 top/full, form focus/error, mobile 390 top/full/menu-open).

---

# /work — brief (added 2026-10-24)

Source: https://www.a365.at/work → local `/work` (src/app/work/page.tsx). Shares Nav (dark), Footer, styles. Home nav/footer "Work" and the homepage "Alle Projekte" link now point to `/work`.

## Layout (desktop 1440: nav 56 / heading 460 / body 5486 grid or 4044 list / footer 678 → doc 6623 grid, 5181 list)
- H1 "Projects" in `.content-container.page-heading`.
- Body: top divider, `.content-container.work-page` (padding 0 1rem 12rem), `.tabs` = 12-col grid gap 16px: `.tabs-menu` col 1-3 (flex, gap 1rem, padding-top 1rem; links "Grid"/"List" 16px, inactive opacity .5, no hover change), `.tabs-content` col 3-13.
- Grid pane: padding-top 1rem, 2-col collection gap 4rem/1rem, 24 cards identical to homepage cards (thumb natural ratio, name + hidden underline on hover, serif category, thumb scale 1.1 on hover).
- List pane: rows `.collection-item` border-bottom black-10, padding 1rem 0, height 161. Row = 10-col grid gap 1rem: year (col 1) 16px, name `.medium-text` 32px/110% 500 (col 2-6), thumbnail (col 7-9, 219×128), "Zum Projekt" + hidden underline (col 9-11, justify end). Hover: thumb scale 1.1, underline slides in.
- ≤991: `.tabs` → flex column (gap 16; Webflow ::before/::after clearfix adds 16px above/below), menu padding-top 0, list grid 8 cols, "Zum Projekt" hidden, list pane border-top, medium-text 1.8rem. ≤767: tab menu hidden (grid only), 1 column. ≤479: medium-text 1.5rem, list grid 4 cols, collection row-gap 2rem.
- Two thumbnails are SVG (Caritas, Kunesch; viewBox 2330×1350).

## Assets
18 new thumbnails → `public/sites/a365/work/<slug>.<ext>` (plus the 6 already used by the homepage). Project detail pages `/works/*` are not cloned; cards link to the source.

## Screenshots
`work-source-*.png` / `work-local-*.png`: desktop 1440 top/full (grid), list top/hover/full, mobile 390 top/full.

---

# a365.at/about — page brief

Source: https://www.a365.at/about → local `/about` (src/app/about/page.tsx). Evidence captured 2026-10-24 (Playwright Chromium headless, 1440×900 and 390×844).
Files: `src/components/sites/a365/AboutPage.tsx` (AboutHeading, AboutIntro, AboutSpirit, AboutAwards), `about-data.ts`, `about.css` (page-only rules, imported by the route; shared primitives stay in `a365.css`). Reuses `Nav` (dark, `current="/about"`), `Service` (new `hiddenNumber` prop), `ParallaxImage` (now takes image props), `Footer`, `Reveal`, `UnderlineLink`.

## Section order (desktop 1440 / mobile 390 heights — local matches to ≤1px desktop, ≤4px mobile)
1. Heading 460 / 207 — `page-heading` container (pt 4rem, pb 15rem → 10rem ≤991 → 5rem ≤767). H1 "Studio" big-section-heading (12svw), fade-in.
2. Intro 782 / 997 — top divider, container `1rem 1rem 1rem`. vflex gap 16rem (10rem ≤991, 5rem ≤479). Grid 1: lead 48px/110% 500 with text-indent calc(25% − .25rem) col 1-13 (≤991 end 9; ≤767 row 2, indent 0; ≤479 end 5), h2 "We are A365" 16px col 1-3. Grid 2 (row-gap 3rem): 4 statistic blocks `span 3` (≤991 span 4; ≤479 full width): left border black-10, pl 1rem, number 10rem/90% −0.02em 400 (6rem ≤767), label GT Alpina italic 16px.
3. Parallax 852 / 219 — `about-a365-04.jpg` (2400×1420), same scale 1.2→1.0 scroll rule as home; ≤479 aspect 16/9.
4. Service 583 / 299 — identical markup to the homepage, **but here item "02 Design" carries `open-by-default` (display:none) so 01 Strategy + 03 Communication render.** Open item height 815px source = local.
5. Spirit 1755 / 1629 (local 1625) — black background, container `1rem 1rem 12rem` (bottom 10rem ≤991, 4rem ≤767, 5rem ≤479), vflex gap 8rem (6rem ≤991, 3rem ≤767). Heading grid: white indented lead (keeps `.large-text` −0.5rem bottom margin, unlike the black indent variant) + "Spirit" white 16px col 1-3. Values vflex gap 6rem (3rem ≤767, 2rem ≤479); each `.value-item` top border white-15, pt 1rem, grid: icon col 1 (star 22px / heart 19px / circle 18px white SVGs), title col 4-8 (≤991 3-5; ≤767 row 2 col 1-9), text col 10-13 max 450px (≤991 6-9; ≤767 row 3 col 1). Titles are `<strong>` except "Get Inspired". Each item fades in.
6. Awards 797 / 1048 — top divider, container pb 12rem, vflex gap 4rem (2rem ≤767). Header grid: "Awards" col 1-3, medium-text 32px/110% 500 col 4-10 (≤991 end 9; ≤767 row 2 col 1). List col 4-13 (≤991 1-9): 7 `.award-item` rows: 9-col grid (8 ≤991), gap 1rem (.5rem ≤767), top border, py 1rem. number col 1 (hidden ≤479), name col 2-5, category link col 6-9 (hidden underline slides in on hover; **source href is the Webflow placeholder `https://webflow.com`, kept as-is**), year col 9 end. ≤767: number row1, name row2 col1, link row2 col5 end, year row3; ≤479 name row1, link row2 full, year row3.
7. Parallax 851 / 219 — `about-a365-03.jpg` (2600×1538).
8. Footer — shared.

## Hidden in source (not rendered, not cloned)
- `.section-3` "Featured Client" (Adobe/Nike/Webflow/Google/Zara/Uniqlo placeholder list) — `display:none`.
- `.content-container.jobs` "Our Team" grid (`display-none`) and "Join us" job dropdowns (`open-by-default` → `display:none`).

## Assets → local
- about-a365-04.jpg, about-a365-03.jpg → `public/sites/a365/about/`
- a365-star/heart/circle-icon-white.svg → `public/sites/a365/icons/{star,heart,circle}-white.svg`

## Screenshots
`about-source-*` / `about-local-*`: desktop-1440 top/full/service-open/award-hover, mobile-390 top/full/menu-open.

---

# /info/impressum — brief (added 2026-10-24)

Source: https://www.a365.at/info/impressum (`noindex`) → local `/info/impressum`. Footer "Impressum" link now local.

- Dark nav (no current link), H1 "Impressum" in `.page-heading` (no reveal wrapper), then top divider + container (1rem 1rem 12rem) + 12-col grid.
- `.info-container` grid-area 1/4/2/9 (≤991 col-start 3, ≤767 1/8, ≤479 1/5): flex column, gap 1rem, padding-top 1rem. Seven `.medium-text` lines (32px/110% 500; 1.8rem ≤991; 1.5rem ≤479); phone and e-mail are plain block links (no underline, text black).
- Desktop 1440: heading 460 / body 638 / footer 678 → 1775px. Mobile 390: 207 / 497 / 705 → 1409px.
- The source page's markup nests the nav `<section>` inside the heading section and its mobile overlay again carries Webflow placeholder social links; the shared Nav is used instead.

---

# a365.at/inside — page brief

Source: https://www.a365.at/inside → local `/inside` (src/app/inside/page.tsx). Evidence captured 2026-10-24 at 1440 / 991 / 767 / 390.
Files: `src/components/sites/a365/InsidePage.tsx` (InsideHeading, InsideList), `inside-data.ts`, `inside.css`. Reuses `Nav` (dark, `current="/inside"`), `Footer`, `Reveal`, and the homepage blog classes (`a365-blog-list`, `a365-blog-link`, `a365-thumb-wrap`, `a365-thumb` hover scale 1.1).

## Layout (desktop 1440: heading 460 / list 2837 / footer 677 = 3974px; 991: 331/2173/607; 767: 227/1680/501; 390: 207/3051/705 — local equal at every width)
1. Heading — `page-heading` container, H1 "News" (12svw), fade-in.
2. List — top divider, container `1rem 1rem 12rem` (10rem ≤991, 4rem ≤767, 5rem ≤479). vflex gap 6rem (3rem ≤767, 2rem ≤479). Header grid (one fade-in): "Aktuelle Beiträge" 16px col 1-7, lead medium-text 32px/110% 500 col 7-13 (≤991 28.8px; ≤479 24px, row 2 col 1-5). Blog list `_2-columns`: 2 cols, gap 6rem/1rem (≤991 row-gap 4rem; ≤479 1 col, 3rem). 8 items, each fade-in: link flex column gap .5rem → thumbnail (natural ratio ≈12:7, overflow hidden, hover scale 1.1) + vflex gap 4rem (2rem ≤767) → title standard-text, meta row (flex, gap .5rem, align center, pb .5rem, bottom border black-10): date · 4px dot · category.
3. Footer — shared.

## Links
Blog detail pages (`/blog/*`) are not cloned → items open the source URL in a new tab.

## Assets → local
Thumbnails 1-4 already in `public/sites/a365/blog/` (homepage); new: x-mas-24b.jpg (2000×1169), fluffy-a365.gif (2000×1168), fashion-shirt-01.jpg (2000×1169), wandel-01.jpg (2000×1168). Source serves `-p-800`/`-p-500` variants via srcset; local serves the full file (≤0.4px thumbnail height difference).

## Screenshots
`inside-source-*` / `inside-local-*`: desktop-1440 top/full/blog-hover, mobile-390 top/full/menu-open.

---

# a365.at/blog/visitenkarten-… — news post brief

Source: https://www.a365.at/blog/visitenkarten---gedruckt-auf-hochwertigem-baumwollpapier-von-gmund-veredelt-im-letterpress-verfahren → local same pathname (`src/app/blog/visitenkarten---…/page.tsx`). Evidence captured 2026-10-24 at 1440 / 991 / 390.
Files: `src/components/sites/a365/BlogPost.tsx` (BlogPostHeading, BlogPostBody, BlogPostMore — take a `BlogPost` so further posts can reuse them), `blog-data.ts`, `blog.css` (+ `inside.css` for the blog card/meta rules). Reuses `Nav` (dark), `Footer`, `Reveal`, `NewsCard` (extracted from InsidePage), `ParallaxImage` (`bare` → no own `<section>`).

## Layout (desktop 1440: heading 534 / body 1280 / more 530 / footer 677 = 3022px; 991: 383/896/517/607; 390: 319/602/776/705)
1. Heading — `page-heading` container; H1 `.news-title` 5svw/100% −0.02em 400, pt 1vw (≤479 8svw/110%), fade-in.
2. Body — container `.news-rich-text` (pb 8rem, 4rem ≤991), one fade-in, vflex gap 1rem:
   - info block (bottom border black-10, pb 1rem) grid: author col 1-4 (≤479 1-5) = 48px GIF avatar + name; date · 4px dot · category col 7-10 place-self end start (≤991 5-8; ≤479 row 2 col 1-5); black down arrow 24px col 12 place-self end (≤991 col 8; hidden ≤479). Arrow IX2 plays once on load (0 → +24px → wraps from −24px → 0, ≈1.1s) then rests.
   - parallax wrapper inside the container (width 1408): `vk-studio.jpg`, same scroll rule as elsewhere. **Rule refined from samples on this page: scale = 1.2 → 1.0 linearly from "top edge at viewport bottom" to "image centred in viewport"** (`progress = (vh − top) / ((vh + h) / 2)`); applied to the shared ParallaxImage.
   - rich-text wrapper pt 3rem (1rem ≤479), grid: `.rich-text` col 7-11 (≤991 1-9); p 16px/130% black, mb 4rem (3rem ≤991), strong 700.
3. Weitere News — top divider, container pb 12rem; grid: label col 4-7 (≤991 1-9), 2-column blog list col 7-13 (≤991 row 2 col 1-9) with the next two posts (cards identical to /inside).
4. Footer — shared.

## Links
"Weitere News" cards go to the source blog (those posts are not cloned). `/inside` now links this post locally.

## Assets → local
`Favicon.gif` (48×48 author avatar) → `public/sites/a365/blog/author-favicon.gif`; `Down Arrow - Black.svg` → `public/sites/a365/icons/down-arrow-black.svg`; hero reuses `blog/vk-studio.jpg`.

## Screenshots
`blog-vk-source-*` / `blog-vk-local-*`: desktop-1440 top/full, mobile-390 top/full.

---

# /works/<slug> — project detail template (added 2026-10-24, first page: efs-ag)

Source: https://www.a365.at/works/efs-ag → local `/works/efs-ag` via the dynamic route `src/app/works/[slug]/page.tsx` (`dynamicParams = false`; only slugs in `projects.ts` build, others 404). Cards on `/`, `/work` and "Next Project" link locally when the slug is cloned, otherwise to the source.

## Layout (desktop 1440: heading 455 / overview+text 1753 / gallery 9711 / next 453 / footer 678 → 13049px)
- H1 `.work-title` = hero heading metrics (10svw/90%, padding-top 1.5vw; ≤479 11svw/110%) inside `.page-heading`.
- Container (1rem 1rem 12rem), flex column gap 1rem:
  - overview block (border-bottom black-10, padding-bottom 1rem): year `.medium-text` col 1-3 align end; info grid col 7-13 (≤991 4/9; ≤767 row 2 full, flex column, rows with border-top + space-between) of Kunde / Service / Branche.
  - hero image in `.paralax-image-wrapper` (same scroll-scale as home; the scale rule is Webflow IX2: progress = 2·(vh − top)/(vh + h), 1.2 → 1.0).
  - detail: flex column gap 8rem (≤991 6rem, ≤767 3rem): lead `.large-text` col 1-7 (≤767 1/9), then `.project-text-content` (border-top, padding-top .5rem) grid big-gap: Services list col 1-4 (≤991 1/9) with `.deliverable-item` rows, paragraph + link col 10-13 (≤991 row 2 1/9).
- Gallery: container + 12-col grid gap 16 (≤767 12): `project_wrapper_wide` span 12 (≤479 span 4) — image `width:100vw` centered and clipped by the wrapper (≤479 100%); `project_wrapper_tall` span 6 (≤479 span 2), aspect 1:1, image object-fit cover. Videos are inline `<video autoplay muted loop playsinline>` in aspect boxes (1920/1280, 1920/1440, 1/1) from daten.a365.at; saved locally (3.6 MB).
- Next Project: top divider, grid: label col 4-6 (≤991 1/3, ≤479 1/5), 2-col collection col 7-13 (≤991 3/9, ≤479 row 2 1/5; ≤767 1 column). Cards use `.serif-text` without padding-top.

## Assets
`public/sites/a365/works/efs-ag/` — 12 images (originals) + 4 mp4.
