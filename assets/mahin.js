

    // let coins = 100;
    // let hearts = 0;
    // let copies = 0;

    // const coinEl = document.getElementById('coinCount');
    // const heartEl = document.getElementById('heartCount');
    // const copyEl  = document.getElementById('copyCount');
    // const historyList = document.getElementById('historyList');

    // function refreshCounters() {
    //   coinEl.textContent = coins;
    //   heartEl.textContent = hearts;
    //   copyEl.textContent = copies + ' Copy';
    // }

    // function nowTimeString() {
    //   return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    // }

    // document.querySelectorAll('.heart-btn').forEach(btn => {
    //   btn.addEventListener('click', () => {
    //     hearts++;
    //     refreshCounters();
    //   });
    // });

    // async function copyToClipboard(text) {
    //   try {
    //     await navigator.clipboard.writeText(text);
    //     return true;
    //   } catch {
    //     return false;
    //   }
    // }

    // document.querySelectorAll('.copy-btn').forEach(btn => {
    //   btn.addEventListener('click', async () => {
    //     const number = btn.dataset.number;
    //     if (await copyToClipboard(number)) {
    //       copies++;
    //       refreshCounters();
    //       alert('Copied: ' + number);
    //     }
    //   });
    // });

    // document.querySelectorAll('.call-btn').forEach(btn => {
    //   btn.addEventListener('click', () => {
    //     const name = btn.dataset.name;
    //     const number = btn.dataset.number;
    //     if (coins < 20) {
    //       alert('Not enough coins! Need 20.');
    //       return;
    //     }
    //     coins -= 20;
    //     refreshCounters();
    //     alert('Calling ' + name + ' (' + number + ')...');
    //     const div = document.createElement('div');
    //     div.className = 'flex justify-between';
    //     div.innerHTML = <span>${name} - ${number}</span><span>${nowTimeString()}</span>;
    //     historyList.prepend(div);
    //   });
    // });

    // document.getElementById('clearHistory').addEventListener('click', () => {
    //   historyList.innerHTML = '';
    // });

    // refreshCounters();