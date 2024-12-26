document.getElementById('draw-button').addEventListener('click', function() {
  const fortunes = ["大吉", "中吉", "小吉", "末吉", "凶"];
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const result = fortunes[randomIndex];

  document.getElementById('result').textContent = result;

  const colors = {
    "大吉": "#FFD700", // ゴールド
    "中吉": "#87CEEB", // スカイブルー
    "小吉": "#CD7F32", // ブロンズ
    "末吉": "#C0C0C0", // シルバー
    "凶": "#FF6347" // トマト
  };

  document.body.style.backgroundColor = colors[result];
});
