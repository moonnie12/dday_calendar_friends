// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "드디어 12월ㅋㅋㅋ" },
  { "number": 2, "message": "드디어 토요일" },
  { "number": 3, "message": "3일은 일요일 " },
  { "number": 4, "message": "4일은 월요병.." },
  { "number": 5, "message": "5일은 화요병" },
  { "number": 6, "message": "6일은 수요병.." },
  { "number": 7, "message": "7일은 럭끼" },
  { "number": 8, "message": "8일은 88하게" },
  { "number": 9, "message": "9일은 더웠던 겨울" },
  { "number": 10, "message": "10일은 일요일 푹 쉬장" },
  { "number": 11, "message": "11일은 끔찍한 월요병.... 힘내즈" },
  { "number": 12, "message": "화요일은 화나는 날" },
  { "number": 13, "message": "수요일은 수트레스 받는 날" },
  { "number": 14, "message": "목요일은 목이 답답한 날" },
  { "number": 15, "message": "금요일은 불금이지" },
  { "number": 16, "message": "토요일에 배민시켜먹어" },
  { "number": 17, "message": "누구의 생일이 다가오고 있어" },
  { "number": 18, "message": "18일은 생일 하루 전" },
  { "number": 19, "message": "19일은 생일이얌" },
  { "number": 20, "message": "내 생일 하루 지났덩" },
  { "number": 21, "message": "연말 얼마 안 남았둥" },
  { "number": 22, "message": "22......." },
  { "number": 23, "message": "존버하자" },
  { "number": 24, "message": "ㅎㅎ드뎌 이브" }
];

