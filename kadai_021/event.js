const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときの処理
btn.addEventListener('click', () => {
  // 2秒後にテキストを変更する
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});