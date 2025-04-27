const youtubeLinks = [
  "https://www.youtube.com/watch?v=5qap5aO4i9A",
  "https://www.youtube.com/watch?v=DWcJFNfaw9c",
  "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
  "https://www.youtube.com/watch?v=ktvTqknDobU",
  "https://www.youtube.com/watch?v=Oq0X8q3gHdI",
  "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
  "https://www.youtube.com/watch?v=VbfpW0pbvaU",
  "https://www.youtube.com/watch?v=3JZ4pnNtyxQ",
  "https://www.youtube.com/watch?v=YqeW9_5kURI",
  "https://www.youtube.com/watch?v=RgKAFK5djSk"
];

function showNotification(message) {
  if (Notification.permission === "granted") {
    new Notification(message);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification(message);
      }
    });
  }
}

function openRandomYouTube() {
  const randomIndex = Math.floor(Math.random() * youtubeLinks.length);
  const url = youtubeLinks[randomIndex];
  window.open(url, '_blank');
}

function checkTime() {
  const now = new Date();
  const minutes = now.getMinutes();

  if (minutes === 15 || minutes === 30) {
    showNotification("잠깐 스트레칭 하세요!");
  }
  if (minutes === 45) {
    showNotification("5분만 더 집중하고 마무리하세요!");
  }
  if (minutes === 50) {
    openRandomYouTube();
  }
}

setInterval(checkTime, 60000);
Notification.requestPermission();


// 테스트 알림 추가
showNotification("테스트 알림: 앱이 정상 작동 중입니다!");