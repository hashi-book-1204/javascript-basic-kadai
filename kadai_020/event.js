const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときの処理
btn.addEventListener('click', () => {
  text.textContent = 'クリックしました';
});
