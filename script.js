const app = document.querySelector('#app');

let state = {
  screen: 'login',
  answers: {},
  score: 0
};

const courses = [
  {
    title: 'Military organization & structure',
    image: '/military.png',
    pages: 12,
    quizzes: 1,
    items: [
      'How the Danish defence is organized',
      'Introduction to the three services',
      'Introduction to military ranks',
      'How the army is organized'
    ]
  },

  {
    title: 'Introduction to NATO',
    image: '/nato.png',
    pages: 8,
    quizzes: 2,
    available: true, 
    items: [
      'A brief history of NATO',
      'The North Atlantic Treaty',
      'NATO structure explained',
      'NATO military structure',
      'NATOs decision making'
    ]
  },

  {
    title: 'How operational environments impact performance',
    image: '/environments.png',
    pages: 9,
    quizzes: 1,
    items: [
      'What is an operational environment?',
      'Urban environment',
      'Mountain environment',
      'Arctic/cold-weather environment',
      'Jungle/tropical environment',
      'Desert/hot and dry environment',
      'Open/temperate environment'
    ]
  },

  {
    title: 'Military first aid',
    image: '/firstaid.png',
    pages: 13,
    quizzes: 1,
    items: [
      'Core principles',
      'Essential IFAK contents',
      'Tactical Combat Casualty Care (TCCC) guidelines'
    ]
  },

  {
    title: 'INVISIO products',
    image: '/products.png',
    pages: 10,
    quizzes: 3,
    items: [
      'Headsets',
      'Control units',
      'Intercom-system',
      'Tactical hubs',
      'Accessories'
    ]
  },

  {
    title: 'User roles/functions/teams',
    image: '/userroles.png',
    pages: 5,
    quizzes: 1,
    items: [
      'Responsibilities',
      'Pain points',
      'Stress factors',
      'Daily routines',
      'Typical gear'
    ]
  }
];


/* =========================================================
   NAVIGATION
   ========================================================= */

function go(screen) {
  state.screen = screen;
  window.scrollTo(0, 0);
  render();
}


/* =========================================================
   HEADER
   ========================================================= */

function header() {
  return `
    <header class="topbar">

      <div class="brand">
        INVISIO
      </div>

      <nav class="nav">

        <button onclick="go('home')">
          Home
        </button>

        <button>
          My page
        </button>

        <button onclick="go('courses')">
          Courses
        </button>

        <button>
          Support
        </button>

      </nav>

      <div class="top-actions">

        <button class="btn btn-light">
          Profile
        </button>

        <button
          class="btn btn-light"
          onclick="go('login')">
          Log out
        </button>

      </div>

    </header>
  `;
}


/* =========================================================
   FOOTER
   ========================================================= */

function footer() {
  return `
    <footer class="footer">

      <div class="footer-grid">

        <div>
          <b>INVISIO</b>

          <p>
            Integrated communication solutions for professionals
            in mission-critical environments.
          </p>
        </div>

        <div>
          <b>Quick Links</b>

          <a>Home</a>
          <a>About Us</a>
          <a>Services</a>
          <a>Contact Us</a>
        </div>

        <div>
          <b>Contact & Support</b>

          <p>+45 7240 5500</p>
          <p>info@invisio.com</p>
          <p>Mon-Fri: 9AM-5PM</p>
        </div>

      </div>

      <div class="legal">
        © 2026 INVISIO. Prototype only · Privacy Policy · Terms of Service · Accessibility
      </div>

    </footer>
  `;
}


/* =========================================================
   LOGIN
   ========================================================= */

function login() {
  return `
    <main class="login">

      <section class="login-card">

        <div class="login-logo">
          INVISIO
        </div>

        <h1>
          Welcome to INVISIO E-learning
        </h1>

        <p>
          Build knowledge, understand the operational context,
          and strengthen the connection between user needs
          and product decisions.
        </p>

        <button
          class="btn btn-primary"
          onclick="go('home')">
          Log in
        </button>

      </section>

    </main>
  `;
}


/* =========================================================
   HOME
   ========================================================= */

function home() {
  return `
    ${header()}

    <section class="hero">

      <div class="hero-copy">

        <div class="eyebrow">
          Employee learning platform
        </div>

        <h1>
          E-learning for INVISIO employees
        </h1>

        <p>
          Develop an understanding of INVISIO's customers, their operational environments, and the demands of their daily work. Learn how different conditions affect user needs, and how product design decisions can enhance or limit performance, safety, and communication in the field.
        </p>

        <button
          class="btn btn-light"
          onclick="go('courses')">
          Explore courses
        </button>

      </div>

      <div class="hero-mark">
        INVISIO
      </div>

    </section>


    <section class="section">

      <h2>
        Learning with purpose
      </h2>

      <p class="lead">
        Each learning path connects knowledge to practical
        decisions and customer needs.
      </p>

      <div class="feature-row">

        <div class="feature">

          <div class="feature-icon">
            1
          </div>

          <h3>
            Deeper understanding
          </h3>

          <p>
            Gain a clearer picture of who INVISIO designs,
            sells and co-creates with.
          </p>

        </div>


        <div class="feature">

          <div class="feature-icon">
            2
          </div>

          <h3>
            Cultivate empathy
          </h3>

          <p>
            Understand each role's challenges,
            conditions and responsibilities.
          </p>

        </div>


        <div class="feature">

          <div class="feature-icon">
            3
          </div>

          <h3>
            Understand context
          </h3>

          <p>
            Connect comfort, safety and performance
            to real operational needs.
          </p>

        </div>

      </div>

    </section>

    ${footer()}
  `;
}


/* =========================================================
   COURSE CARD
   ========================================================= */

function courseCard(c, i) {

  return `
    <article class="card">

      <div class="course-image">

        ${
          c.image
            ? `<img src="${c.image}" alt="${c.title}">`
            : c.icon
        }

      </div>


      <div class="card-body">

        <h3>
          ${c.title}
        </h3>

        <ul>
  ${c.items.map(x => `<li>${x}</li>`).join('')}
</ul>

      </div>


      <div class="meta">

        <span>
          ${c.pages} pages
        </span>

        <span>
          ${c.quizzes}
          quiz${c.quizzes > 1 ? 'zes' : ''}
        </span>

      </div>


<button
class="btn ${c.available ? 'btn-primary' : 'btn-light'}"
  onclick="${
  c.available
    ? "go('overview')"
    : "alert('This course is not included in the prototype yet.')"
}">

  ${c.available ? 'Open course' : 'Coming soon'}


</button>

    </article>
  `;
}


/* =========================================================
   COURSES PAGE
   ========================================================= */

function coursesPage() {

  return `
    ${header()}

    <section class="section">

      <h2>
        Select a course tailored to your needs
      </h2>

      <p class="lead">
        Select the course that best fits your desired
        topic of knowledge.
      </p>

      <div class="grid">

        ${courses.map(courseCard).join('')}

      </div>

    </section>

    ${footer()}
  `;
}


/* =========================================================
   NATO COURSE OVERVIEW
   ========================================================= */

function overview() {

  const mods = [

    {
      title: 'NATO at a glance: A brief history',
      image: '/NATO-at-a-glance.png'
    },

    {
      title: 'The North Atlantic Treaty',
      image: '/The-north-atlantic-treaty.png'
    },

    {
      title: 'How NATO is organised',
      image: '/How-nato-is-organised.png'
    },

    {
      title: 'How NATO is organised',
      image: '/How-nato-is-organised.png'
    },

    {
      title: 'How NATO is organised',
      image: '/How-nato-is-organised.png'
    },

    {
      title: 'NATO military structure',
      image: '/military-structure.png'
    }

  ];


  return `
    ${header()}


    <!-- HERO -->

    <section class="hero">

      <div class="hero-copy">

        <div class="eyebrow">
          Course overview
        </div>

        <h1>
          Introduction to NATO
        </h1>

        <p>
          Gain a deeper understanding of NATO, its purpose,
          and its organizational structure. Understanding how
          NATO operates is relevant because many customers
          work within NATO frameworks.
        </p>

        <button
          class="btn btn-light"
          onclick="go('reader')">

          Start course

        </button>

      </div>


      <div class="hero-mark">

        <img
          src="/nato.png"
          alt="NATO">

      </div>

    </section>


    <!-- COURSE MODULES -->

    <section class="section">

      <h2>
        Overview of the course
      </h2>

      <p class="lead">
        Introduction to NATO
      </p>


      <div class="modules">

        ${mods.map((m, i) => `

          <article class="module">

            <b>
              ${i + 1}
            </b>

            <h3>
              ${m.title}
            </h3>


            <div class="thumb">

              <img
                src="${m.image}"
                alt="${m.title}">

            </div>

          </article>

        `).join('')}

      </div>

    </section>


    ${footer()}
  `;
}


/* =========================================================
   PDF READER
   ========================================================= */

function reader() {

  return `
    ${header()}


    <section class="section course-reader-section">


      <div class="pdf-reader-header">

        <div>

          <div class="eyebrow">
            Course material
          </div>

          <h1>
            Introduction to NATO
          </h1>

          <p>
            Read the course material below. You can scroll
            through the document, zoom in, or open it in
            a separate browser tab.
          </p>

        </div>


        <a
          href="/nato-module-original.pdf.pdf"
          target="_blank">

          Open PDF in new tab

        </a>

      </div>


      <div class="pdf-viewer-container">

        <iframe
          class="pdf-viewer"
          src="/nato-module-original.pdf.pdf#page=1&zoom=page-width"
          title="Introduction to NATO course material">
        </iframe>

      </div>


      <div class="reader-navigation">


        <button
          class="btn btn-light"
          onclick="go('overview')">

          Back to course overview

        </button>


        <button
          class="btn btn-primary"
          onclick="go('quiz')">

          Continue to quiz

        </button>


      </div>

    </section>


    ${footer()}
  `;
}


/* =========================================================
   QUIZ
   ========================================================= */

const questions = [

  {
    q: 'In what year was NATO founded?',
    opts: [
      '1945',
      '1947',
      '1949',
      '1951'
    ],
    correct: '1949',
    explain: 'On April 4th 1949, 12 countries sign the North Atlantic Treaty in Washington, D.C. NATO is founded on shared values including democracy, individual liberty and the rule of law.',
    image: '/nato-hq.png'
  },

  {
    q: 'How many sovereign nations are part of NATO?',
    opts: [
      '31',
      '32',
      '33',
      '34'
    ],
    correct: '32',
    explain: 'NATO was founded as an alliance of 12 countries. Since then, the alliance has expanded considerably, with many nations joining over the years, while several others continue to express an interest in membership.',
    image: '/nato-members.png'
  }

];


/* =========================================================
   QUIZ ANSWER
   ========================================================= */

function choose(q, a) {

  state.answers[q] = a;

  render();

}


/* =========================================================
   SUBMIT QUIZ
   ========================================================= */

function submitQuiz() {

  state.score = questions.filter(
    (q, i) => state.answers[i] === q.correct
  ).length;

  go('complete');

  setTimeout(confetti, 100);

}


/* =========================================================
   QUIZ PAGE
   ========================================================= */

function quiz() {

  return `
    ${header()}


    <section class="hero">

      <div class="hero-copy">

        <div class="eyebrow">
          Knowledge check
        </div>

        <h1>
          You have now finished the course
          “Introduction to NATO”
        </h1>

        <p>
          To help reinforce your learning and assess your understanding of the course, we have prepared a short quiz for you.
        </p>

      </div>


     <div class="hero-mark">

  <img
    src="/nato.png"
    alt="NATO">

</div>

    </section>


    <section class="section quiz">

      ${questions.map((q, i) => `

        <article class="question">

          <h3>
            Question ${i + 1}
          </h3>

          <p>
            ${q.q}
          </p>


          <div class="answers">

            ${q.opts.map(a => `

              <button
                class="answer ${
                  state.answers[i] === a
                    ? 'selected'
                    : ''
                }"
                onclick="choose(${i}, '${a}')">

                ${a}

              </button>

            `).join('')}

          </div>


          ${
  state.answers[i]
    ? state.answers[i] === q.correct
      ? `
        <div class="feedback-rich">

          <img
            src="${q.image}"
      ck-text">

            <h4>✅ Correct!</h4>

            <p>
              ${q.explain}
            </p>

          </div>

        </div>
      `
      : `
        <div class="feedback">

          <b>❌ Try again</b>

          <br>

          Review the course and select another answer.

        </div>
      `
    : ''
}
        </article>

      `).join('')}


      <button
        class="btn btn-primary"
        ${
          Object.keys(state.answers).length < questions.length
            ? 'disabled'
            : ''
        }
        onclick="submitQuiz()">

        Finish course

      </button>

    </section>


    ${footer()}
  `;
}


/* =========================================================
   COMPLETION PAGE
   ========================================================= */

function complete() {

  return `
    ${header()}


    <section class="section">

      <div class="complete">

        <div class="eyebrow">
          Course completed
        </div>

        <h1>
          Congratulations!
        </h1>

        <p>
          You have passed the course
          “Introduction to NATO”.
        </p>

        <div class="score">
          ${state.score}/${questions.length}
        </div>

        <p>
          Your points have been added
          to your prototype profile.
        </p>

        <button
          class="btn btn-primary"
          onclick="go('courses')">

          Explore more courses

        </button>

      </div>

    </section>


    <section class="section">

      <h2>
        Ready to learn more?
      </h2>

      <div class="grid">

        ${courses.slice(3).map(courseCard).join('')}

      </div>

    </section>


    ${footer()}
  `;
}


/* =========================================================
   RENDER
   ========================================================= */

function render() {

  const pages = {
    login: login,
    home: home,
    courses: coursesPage,
    overview: overview,
    reader: reader,
    quiz: quiz,
    complete: complete
  };

  app.innerHTML = pages[state.screen]();

}


/* =========================================================
   CONFETTI
   ========================================================= */

function confetti() {

  const c = document.querySelector('#confetti');

  if (!c) return;

  const x = c.getContext('2d');

  c.width = innerWidth;
  c.height = innerHeight;


  let p = Array.from(
    { length: 140 },
    () => ({
      x: Math.random() * c.width,
      y: -20 - Math.random() * c.height * 0.3,
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 4,
      r: 3 + Math.random() * 5,
      col: [
        '#003b73',
        '#0b66c3',
        '#fbbf24',
        '#ef4444',
        '#22c55e'
      ][Math.floor(Math.random() * 5)]
    })
  );


  let f = 0;


  (function draw() {

    x.clearRect(
      0,
      0,
      c.width,
      c.height
    );


    p.forEach(o => {

      o.x += o.vx;
      o.y += o.vy;

      x.fillStyle = o.col;

      x.fillRect(
        o.x,
        o.y,
        o.r,
        o.r * 1.8
      );

    });


    if (f++ < 220) {

      requestAnimationFrame(draw);

    } else {

      x.clearRect(
        0,
        0,
        c.width,
        c.height
      );

    }

  })();

}


/* =========================================================
   START APP
   ========================================================= */

render();
