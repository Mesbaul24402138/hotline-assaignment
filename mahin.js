

let coins = 100;
let hearts = 0;
let copies = 0;

const coinEl = document.getElementById('coinCount');
const heartEl = document.getElementById('heartCount');
const copyEl  = document.getElementById('copyCount');
const historyList = document.getElementById('historyList');

function refreshCounters() {
  coinEl.textContent = coins;
  heartEl.textContent = hearts;
  copyEl.textContent = copies + (copies === 1 ? ' Copy' : ' Copies');
}

function nowTimeString() {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

// Heart buttons
const heartBtns = document.querySelectorAll('.heart-btn');
for (let i = 0; i < heartBtns.length; i++) {
  heartBtns[i].addEventListener('click', function() {
    hearts++;
    refreshCounters();
  });
}

// Copy buttons
const copyBtns = document.querySelectorAll('.copy-btn');
for (let i = 0; i < copyBtns.length; i++) {
  copyBtns[i].addEventListener('click', function() {
    const number = this.dataset.number; 
    navigator.clipboard.writeText(number).then(function() {
      copies++;
      refreshCounters();
      alert('Copied: ' + number);
    }).catch(function() {
      alert('Copy failed!');
    });
  });
}

// Call buttons (all 6 buttons work correctly)
const callBtns = document.querySelectorAll('.call-btn');
for (let i = 0; i < callBtns.length; i++) {
  callBtns[i].addEventListener('click', function() {
    const name = this.dataset.name;  
    const number = this.dataset.number;

    if (coins < 20) {
      alert('Not enough coins! Need 20.');
      return;
    }

    coins -= 20;
    refreshCounters();
    alert('Calling ' + name + ' (' + number + ')...');

    const div = document.createElement('div');
    div.className = 'flex justify-between';
    div.innerHTML = `
      <span>${name} - ${number}</span>
      <span>${nowTimeString()}</span>
    `;
    historyList.prepend(div);
  });
}

// Clear history
document.getElementById('clearHistory').addEventListener('click', function() {
  historyList.innerHTML = '';
});

refreshCounters();
