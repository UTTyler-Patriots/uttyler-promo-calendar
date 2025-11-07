const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let currentDate = new Date(2025, 7, 1);

const sportFilterEl = document.getElementById('sportFilter');
const typeFilterEl = document.getElementById('typeFilter');
const searchInputEl = document.getElementById('searchInput');
const daysGridEl = document.getElementById('daysGrid');
const monthYearTextEl = document.getElementById('monthYearText');
const calendarEl = document.getElementById('calendar');
const eventListEl = document.getElementById('eventList');
const toggleViewBtn = document.getElementById('toggleViewBtn');
const printBtn = document.getElementById('printBtn');
let isListView = false;

const iconMap = {
  m_soccer: '<i class="fas fa-futbol"></i>',
  w_soccer: '<i class="fas fa-futbol"></i>',
  volleyball: '<i class="fas fa-volleyball-ball"></i>',
  m_basketball: '<i class="fas fa-basketball-ball"></i>',
  w_basketball: '<i class="fas fa-basketball-ball"></i>',
  athletic: '<i class="fas fa-running"></i>',
  promo: '<i class="fas fa-bullhorn"></i>'
};

  const events = {
    '2025-08-22': [{ type: 'athletic', sport: 'volleyball', title: 'Volleyball Scrimmage vs. ETBU' }],
    '2025-09-04': [
      { type: 'athletic', sport: 'm_soccer', title: 'M. Soccer vs. DBU' },
      { type: 'athletic', sport: 'volleyball', title: 'Patriot Classic vs. Ferris State' },
      { type: 'promo', title: 'Welcome Back Event', description: 'Kick off the year with food, music, and fun! Earn raffle tickets to win a pair of AirPods at the Volleyball game vs. Ferris State! 100 Lawnchairs for first 100 fans at the soccer game vs. DBU.' }
    ],
    '2025-09-05': [{ type: 'athletic', sport: 'volleyball', title: 'Patriot Classic vs. Central Oklahoma' }],
    '2025-09-06': [
       { type: 'athletic', sport: 'volleyball', title: 'Patriot Classic vs. Ouachita Baptist' },
       { type: 'athletic', sport: 'volleyball', title: 'Patriot Classic vs. Mississippi College' }
],
    '2025-09-10': [
      { type: 'athletic', sport: 'w_soccer', title: 'W. Soccer vs. Jarvis Christian' },
      { type: 'promo', title: 'NPHC Tailgate', description: 'Tailgate with the Greeks and learn about what Greek life at UT Tyler has to offer.' }
    ],
    '2025-09-11': [{ type: 'athletic', sport: 'm_soccer', title: 'M. Soccer vs. UCCS' }],
    '2025-09-13': [
      { type: 'athletic', sport: 'm_soccer', title: 'M. Soccer vs. Co. Christian' },
      { type: 'athletic', sport: 'w_soccer', title: 'W. Soccer vs. NE State (Senior Day)' },
      { type: 'promo', title: 'Military Appreciation Day', description: 'Come honor our troops with a fun day of soccer and celebration as we welcome our veteran community to Citizens 1st Bank-Perkins Field! Free longsleeve T-shirts for the first 100 students. *Veterans will have priority'  }
    ],
    '2025-09-20': [{ type: 'athletic', sport: 'w_soccer', title: 'W. Soccer vs. Texas A&M International' }],
    '2025-09-24': [
      { type: 'athletic', sport: 'w_soccer', title: 'W. Soccer vs. DBU' },
      { type: 'promo', title: 'Pups on the Pitch', description: 'Bring your furry friends to Citizens 1st Bank-Perkins Field! All animals will receive treats and a bandana!'  }
    ],
    '2025-09-26': [
      { type: 'athletic', sport: 'volleyball', title: 'Volleyball vs. Cameron' },
      { type: 'promo', title: 'Youth Night', description: 'Welcoming all youth volleyball players in the East Texas region and their families.' },
      { type: 'promo', title: 'Family Weekend' }
    ],
    '2025-09-27': [
      { type: 'athletic', sport: 'volleyball', title: 'Volleyball vs. OK Christian' },
      { type: 'promo', title: 'Family Raffle', description: 'Welcoming the families of all UT Tyler Patriots! Raffle tickets will be distributed at the doors for all families, with the winners receiving matching UT Tyler gear!'  },
      { type: 'promo', title: 'Family Weekend' }
    ],
    '2025-10-04': [
      { type: 'athletic', sport: 'w_soccer', title: 'W. Soccer vs. TWU' },
      { type: 'athletic', sport: 'm_soccer', title: 'M. Soccer vs. West Texas A&M' },
      { type: 'athletic', sport: 'volleyball', title: 'Volleyball vs. UT Dallas' },
      { type: 'promo', title: 'Fall Fest', description: 'Calling athletic alumni! Soccer Hall of Fame induction and a fun celebration of our athletic history with fun, games, and a Chili Cook-Off!' }
    ],
    '2025-10-08': [
      { type: 'athletic', sport: 'w_soccer', title: 'W. Soccer vs. OK Christian' },
      { type: 'promo', title: 'Youth Night', description: 'Welcoming all youth soccer players in the East Texas region and their families.'  }
    ],
    '2025-10-11': [
      { type: 'athletic', sport: 'm_soccer', title: 'M. Soccer vs. Lubbock Christian (Senior Day)' }
    ],
    '2025-10-15': [
      { type: 'athletic', sport: 'm_soccer', title: 'M. Soccer vs. St. Marys' },
      { type: 'promo', title: 'Youth Night', description: 'Welcoming all youth soccer players in the East Texas region and their families.' }
    ],
    '2025-10-17': [
      { type: 'athletic', sport: 'volleyball', title: 'Volleyball vs. Lubbock Christian' },
      { type: 'promo', title: 'Pink Out', description: 'Help us Spike Out cancer! We would like to celebrate those who have fought courageously against cancer. Free pink t-shirts for the first 100 fans.' }
    ],
    '2025-10-18': [
      { type: 'athletic', sport: 'w_soccer', title: 'W. Soccer vs. Sul Ross State' },
      { type: 'athletic', sport: 'volleyball', title: 'Volleyball vs. Midwestern State' }
    ],
    '2025-10-22': [
      { type: 'athletic', sport: 'm_soccer', title: 'M. Soccer vs. Texas A&M International' },
      { type: 'athletic', sport: 'w_soccer', title: 'W. Soccer vs. St. Marys' }
    ],
    '2025-10-29': [
      { type: 'athletic', sport: 'm_soccer', title: 'M. Soccer vs. UT Dallas' },
      { type: 'athletic', sport: 'w_soccer', title: 'W. Soccer vs. ENMU' },
      { type: 'promo', title: 'Blue Out', description: 'Join us as we paint the pitch at Citizens 1st Bank-Perkins Field blue!' }
    ],
    '2025-10-31': [
      { type: 'athletic', sport: 'volleyball', title: 'Volleyball vs. Sul Ross State' },
      { type: 'promo', title: 'Halloween Costume Contest', description: 'Come wearing a costume and be entered into a costume contest, judged by the fans! Winner will receive a $250 gift card.' }
    ],
    '2025-11-14': [
      { type: 'athletic', sport: 'volleyball', title: 'Volleyball vs. TWU' },
      { type: 'promo', title: 'Fan Appreciation', description: 'We want to thank all who help contrbute to the success of UT Tyler Athletics. Whether it be faculty, staff, students, or our community, we appreciate you all! Free hats for the first 100 fans! There will also be raffle drawings throughout the game. Remember to wear blue!' },
      { type: 'promo', title: 'Blue Out', description: 'Wear your best Patriots gear and be ready to turn the HPC blue!' }
    ],
    '2025-11-15': [{ type: 'athletic', sport: 'volleyball', title: 'Volleyball vs. DBU' }
    ],
    '2025-11-21': [{ type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Jarvis Christian' }
    ],
    '2025-11-24': [
       { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. Our Lady of the Lake'},
       { type: 'promo', title: 'Opening Night', description: 'Come celebrate the start of basketball season as the Patriots open their season against Our Lady of the Lake!'}
    ],
    '2025-11-25': [
      { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. Our Lady of the Lake' },
    ],
    '2025-11-28': [{ type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Dallas Christian' }],
    '2025-12-13': [
      { type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. St. Edwards' },
      { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. St. Edwards' },
      { type: 'promo', title: 'Holiday Hoopla', description: 'Come celebrate the holiday season with us! Donate to our food and toy drives and receive free admission and a free beanie! We will also have a Santa photo station!'  }
    ],
    '2025-12-17': [{ type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Adams State' }],
    '2025-12-18': [
      { type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Fort Lewis College' },
    ],
    '2026-01-08': [
      { type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. WNMU' },
      { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. WNMU' },
      { type: 'promo', title: 'Rep the Rose Night', description: 'Come Rep the Rose and celebrate our beautiful city of Tyler. We will be highlighting our community and what makes it so special, socome help us show how grateful we are to call Tyler home!' }
    ],
    '2026-01-10': [
      { type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Sul Ross State' },
      { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. Sul Ross State' },
      { type: 'promo', title: 'Southside Bank Day', description: 'Callling all Southside Bank customers and employees. Thanking you for all that you do to help the Tyler community and UT Tyler Athletics! Free admission for Southside Bank customers and employees.' }
    ],
    '2026-01-22': [
      { type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Lubbock Christian' },
      { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. Lubbock Christian' },
      { type: 'promo', title: 'Hawaiian Night presented by UTHealth East Texas', description: 'Welcoming all students back to campus! Free food and Hawaiian shirts as well as a luau tailgate before the game! Come start off the semester right!' }
    ],
    '2026-01-24': [
      { type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Midwestern State' },
      { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. Midwestern State' },
      { type: 'promo', title: 'Military Appreciation Day', description: 'Thanking all First Responders and service members for all that they do to protect us!'} 
    ],
    '2026-02-14': [
      { type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Oklahoma Christian' },
      { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. Oklahoma Christian' },
      { type: 'promo', title: 'Shoot Your Shot Night', description: 'Love is in the air! Shoot your Shot and bring someone to the game, or grab your sweetheart and come cheer on the Patriots for some exciting Valentines Day action!'}
    ],
    '2026-02-17': [
      { type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Texas Womans University' },
      { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. Dallas Baptist' },
      { type: 'promo', title: 'Student Success Night', description: 'Help us celebrate our students and light up the HPC! Glow theme night with a VERY special performance at halftime!'}
    ],
    '2026-02-26': [
      { type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Texas A&M International' },
      { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. Texas A&M International' },
      { type: 'promo', title: '80s Night/Greek Night', description: 'Lets kick it old school and also celbrate our Greek Life at UTTyler. Come for special retro themed giveways and a vibe that you just cant match these days.'}
    ],
   '2026-02-28': [
      { type: 'athletic', sport: 'w_basketball', title: 'W. Basketball vs. Texas A&M Kingsville' },
      { type: 'athletic', sport: 'm_basketball', title: 'M. Basketball vs. Texas A&M Kingsville' },
      { type: 'promo', title: 'Texas Day', description: 'Help us celebrate the great state we call home, with special performances and giveaways that help highlight why everything is better in Texas.'}
    ]
  };
function renderCalendar() {
  monthYearTextEl.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  daysGridEl.innerHTML = '';

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startingWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const isMobileView = window.innerWidth <= 768;

  for (let i = 0; i < startingWeekday; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('empty-cell');
    daysGridEl.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateObj = new Date(year, month, day);
    const dateStr = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;

    const dayCell = document.createElement('div');
    dayCell.classList.add('day-cell');

    if (dateObj.getDay() === 0 || dateObj.getDay() === 6) {
      dayCell.classList.add('weekend');
    }

    const dayNumberEl = document.createElement('div');
    dayNumberEl.classList.add('day-number');
    dayNumberEl.textContent = day;
    dayCell.appendChild(dayNumberEl);

    if (events[dateStr]) {
      dayCell.classList.add('has-events');

      const filteredEvents = events[dateStr].filter(event => {
        if (sportFilterEl.value !== 'all' && event.sport !== sportFilterEl.value) return false;
        if (typeFilterEl.value !== 'all' && event.type !== typeFilterEl.value) return false;
        if (searchInputEl.value.trim() !== '') {
          const term = searchInputEl.value.trim().toLowerCase();
          return event.title.toLowerCase().includes(term) || (event.description && event.description.toLowerCase().includes(term));
        }
        return true;
      });

      filteredEvents.forEach(event => {
        const eventEl = document.createElement('div');
        eventEl.classList.add('event', event.type);
        const icon = iconMap[event.sport] || iconMap[event.type] || '';
        eventEl.innerHTML = `${icon} ${event.title}`;

        if (event.type === 'promo' && event.description) {
          eventEl.style.textDecoration = 'underline';
          eventEl.style.cursor = 'pointer';
          eventEl.setAttribute('tabindex', '0');
          eventEl.setAttribute('role', 'button');
          eventEl.setAttribute('aria-label', `Promo event: ${event.title}`);
          eventEl.addEventListener('click', () => openModal(event.title, event.description));
          eventEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') openModal(event.title, event.description);
          });
        }

        if (!isMobileView) {
          dayCell.appendChild(eventEl);
        }
      });

      if (isMobileView) {
        dayCell.classList.add('clickable-day');
        dayCell.addEventListener('click', () => {
          const content = filteredEvents.map(e => {
            const icon = iconMap[e.sport] || iconMap[e.type] || '';
            return `<div>${icon} ${e.title}${e.description ? `<div style="margin-top: 10px;">${e.description}</div>` : ''}</div>`;
          }).join('<hr>');
          openModal(`${monthNames[month]} ${day}, ${year}`, content);
        });
      }
    }

    daysGridEl.appendChild(dayCell);
  }
}

function openModal(title, content) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').innerHTML = content;
  document.getElementById('promoModal').style.display = 'flex';
  document.getElementById('closeModal').focus();
}

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('promoModal').style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target.id === 'promoModal') {
    document.getElementById('promoModal').style.display = 'none';
  }
});

document.getElementById('prevMonth').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
  if (isListView) generateListView();
});

document.getElementById('nextMonth').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
  if (isListView) generateListView();
});

sportFilterEl.addEventListener('change', () => {
  renderCalendar();
  if (isListView) generateListView();
});
typeFilterEl.addEventListener('change', () => {
  renderCalendar();
  if (isListView) generateListView();
});
searchInputEl.addEventListener('input', () => {
  renderCalendar();
  if (isListView) generateListView();
});

toggleViewBtn.addEventListener('click', () => {
  isListView = !isListView;
  toggleViewBtn.textContent = isListView ? 'Grid View' : 'List View';
  toggleViewBtn.setAttribute('aria-pressed', isListView.toString());
  calendarEl.classList.toggle('list-mode', isListView);
  if (isListView) generateListView();
  else eventListEl.innerHTML = '';
});

printBtn.addEventListener('click', () => window.print());

function generateListView() {
  eventListEl.innerHTML = '';
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const dateMap = {};

  for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
    const date = new Date(year, month, day);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    if (events[key]) {
      const filtered = events[key].filter(e => {
        if (sportFilterEl.value !== 'all' && e.sport !== sportFilterEl.value) return false;
        if (typeFilterEl.value !== 'all' && e.type !== typeFilterEl.value) return false;
        if (searchInputEl.value.trim() !== '') {
          const term = searchInputEl.value.trim().toLowerCase();
          return e.title.toLowerCase().includes(term) || (e.description && e.description.toLowerCase().includes(term));
        }
        return true;
      });

      if (filtered.length) dateMap[key] = filtered;
    }
  }

  if (!Object.keys(dateMap).length) {
    eventListEl.textContent = 'No events match the filters.';
    return;
  }

  Object.entries(dateMap).sort().forEach(([key, list]) => {
    const [yyyy, mm, dd] = key.split("-");
const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
    const dayBlock = document.createElement('div');
    const dateHeader = document.createElement('h3');
    dateHeader.textContent = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    dayBlock.appendChild(dateHeader);

    list.forEach(event => {
      const div = document.createElement('div');
      div.classList.add('event-item', event.type);
      const icon = iconMap[event.sport] || iconMap[event.type] || '';
      div.innerHTML = `${icon} ${event.title}`;

      if (event.type === 'promo' && event.description) {
        div.style.textDecoration = 'underline';
        div.style.cursor = 'pointer';
        div.setAttribute('tabindex', '0');
        div.setAttribute('role', 'button');
        div.setAttribute('aria-label', `Promotional event: ${event.title}`);
        div.addEventListener('click', () => openModal(event.title, event.description));
      }

      dayBlock.appendChild(div);
    });

    eventListEl.appendChild(dayBlock);
  });
}

renderCalendar();






