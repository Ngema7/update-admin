const toggleBtn = document.getElementById("toggleBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

// Open sidebar
toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});






  // MARQUEE
  function updateMarquee() {
    const text = document.getElementById('marqueeText').value.trim();
    const marquee = document.getElementById('liveMarquee');
    marquee.textContent = text || "Your marquee will appear here...";
    document.getElementById('marqueeText').value = '';
  }

  // EVENTS
  function addEvent() {
    const title = document.getElementById('eventTitle').value.trim();
    const date = document.getElementById('eventDate').value;
    const time = document.getElementById('eventTime').value;

    if (!title || !date || !time) {
      alert('Please fill title, date, and time.');
      return;
    }

    const container = document.getElementById('eventContainer');

    const eventBox = document.createElement('div');
    eventBox.className = 'event-box';

    const info = document.createElement('div');
    info.className = 'event-info';

    const eventTitle = document.createElement('span');
    eventTitle.className = 'event-title';
    eventTitle.textContent = title;

    const eventDate = document.createElement('span');
    eventDate.className = 'event-date';
    eventDate.textContent = new Date(date).toLocaleDateString();

    const eventTime = document.createElement('span');
    eventTime.className = 'event-time';
    eventTime.textContent = time;

    info.appendChild(eventTitle);
    info.appendChild(eventDate);
    info.appendChild(eventTime);

    const actions = document.createElement('div');
    actions.className = 'event-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editEvent(eventBox, title, date, time);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => container.removeChild(eventBox);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    eventBox.appendChild(info);
    eventBox.appendChild(actions);
    container.appendChild(eventBox);

    // Reset inputs
    document.getElementById('eventTitle').value = '';
    document.getElementById('eventDate').value = '';
    document.getElementById('eventTime').value = '';
  }

  function editEvent(eventBox, oldTitle, oldDate, oldTime) {
    const newTitle = prompt('Edit event title:', oldTitle);
    if (newTitle === null) return;

    const newDate = prompt('Edit event date (YYYY-MM-DD):', oldDate);
    if (newDate === null) return;

    const newTime = prompt('Edit event time (HH:MM):', oldTime);
    if (newTime === null) return;

    const info = eventBox.querySelector('.event-info');
    info.querySelector('.event-title').textContent = newTitle;
    info.querySelector('.event-date').textContent = new Date(newDate).toLocaleDateString();
    info.querySelector('.event-time').textContent = newTime;
  }