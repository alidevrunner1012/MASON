MUKESH KUMAR PORTFOLIO - project guide
======================================
Kholne ke liye: index.html par double click karo (browser me khulega). Internet chahiye sirf fonts ke liye.

FOLDERS
  index.html       -> poora page (text, sections, categories)
  css/style.css    -> design aur colours
  js/script.js     -> animation (scroll par building banna)
  js/images.js     -> har image ka naam (key) aur file path
  images/          -> saari renders. p03.jpg = PDF page 3, q_... = Queensfield, edges.jpg = hero ka wireframe

COLOUR PALETTE badalna (css/style.css me sabse upar :root)
  --bg   #23262B  background
  --ink  #EEF0F3  text
  --cy   #7FD4FF  cyan (lines, highlights)
  --am   #FFB347  amber (buttons, progress)
Sirf hex code badlo, poori site ka colour badal jayega.

TEXT badalna
  Naam, email, phone, resume details: index.html me search karo aur text badal do.
  Landing ka text: index.html me <div id="land"> ke andar.

NAYA PROJECT ADD karna
  1) Image ko images/ folder me daalo, jaise newproject.jpg (width 1000px, JPG).
  2) js/images.js me ek line add karo:  newproject:"images/newproject.jpg",
  3) index.html me us category ke andar ek thumbnail add karo:
     <figure class="t" data-s><img data-i="newproject" alt="Description"></figure>
  Featured (bada, wipe wala) card ke liye kisi existing <div class="b" ...> ko copy karke image keys badal do.

ANIMATION speed
  js/script.js me  r.height*.75+vh*.25  jitna bada number, utna zyada scroll lagega ek project banne me.
  Hero ki lambai: css/style.css me  .hero{height:400vh}
