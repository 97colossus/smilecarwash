// 1. 공통 데이터
const images = [
    { src: "src/washingCar.jpeg", title: "" },
    { src: "src/soap.jpeg", title: "" },
    { src: "src/towel.jpeg", title: "" }
];

let currentIndex = 0;

// 2. 공통 자동 이미지 슬라이더 실행
function startGlobalSlider() {
    const imgElement = document.getElementById('main-img');
    const titleElement = document.getElementById('img-title');

    function updateSlider() {
        // 부드러운 전환을 위해 투명도 조절
        imgElement.style.opacity = 0;
        
        setTimeout(() => {
            imgElement.src = images[currentIndex].src;
            titleElement.innerText = images[currentIndex].title;
            imgElement.style.opacity = 1;
            currentIndex = (currentIndex + 1) % images.length;
        }, 500); 
    }

    updateSlider(); // 첫 실행
    setInterval(updateSlider, 4000); // 4초마다 반복
}

// 3. SPA 라우팅 기능
function route(page) {
    const content = document.getElementById('content');
    
    if (page === 'home') {
        // 백틱(`)을 사용하면 여러 줄의 HTML을 편하게 작성할 수 있습니다.
        content.innerHTML = `
            <h3>스마일카워시는</h3>
            <p>30년전 차에 대한 애정에서 시작되었습니다</p>
            <br><br><br>
            <h3>30년의 노하우</h3>
            <img src="src/20years.jpeg" alt="노하우 이미지" 
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br><br><br>
            <h3>만족스러운 서비스와 합리적인 가격</h3>
            <img src="src/coins.jpeg" alt="노하우 이미지" 
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br><br><br> 
        `;
    } else if (page === 'posts') {
        content.innerHTML = `
            <p>🚘 워터리스 출장세차란?</p>
            <p>💧 고압펌프를 사용하여 크고 작은오염물 제거가능</p>
            <p>🧴 전용 세정제를 분사해 오염을 감싸고</p>
            <p>🧽 마이크로화이버 타월로 안전하게 닦아내는 방식</p>
            <br>
            <p>✅️장점</p>
            <p>○ 지하주차장 가능</p>
            <p>○ 물사용 제한구역에서도 가능</p>
            <p>○ 소음 거의 없음</p>
            <p>○ 배수 문제 없음</p>
            <p>○ 작업 시간 단축</p>
            <br><br><br>
            <h3>1회성 방문세차</h3>
            <br>
            <p>필요할 때만 세차받는</p> 
            <p>방문세차 서비스입니다</p>
            <img src="src/onetimePrice.png" alt="노하우 이미지" 
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br><br><br>
            <h3>월단위 방문세차</h3>
            <br>
            <p>정기적으로 세차받는</p> 
            <p>월단위 방문세차 서비스입니다</p>
            <p>연락을 못받을 때가 많으니</p>
            <p>문의 사항이나 예약은 문자 요청드립니다</p>
            <br>
            <a href="tel:010-2656-6085">
            <img src="src/phone.png" alt="전화하기"
                style="width: 100%; max-width: 150px;">
            </a>
            <br>
            <img src="src/monthly.png" alt="노하우 이미지" 
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br>
            <img src="src/audiWash.jpg" alt=""
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br><br><br><br><br><br>
            <h3>실내 크리닝 서비스 소개</h3>
            <br>
            <p>실내 크리닝은 단순 먼지 제거가 아닙니다</p>
            <p>시트 깊숙이 스며든 오염, 보이지 않는 세균, 생활 냄새까지</p>
            <p>정밀 세척하여 차량 실내 환경을</p>
            <p>처음 상태에 가깝게 복원하는 전문 케어 서비스입니다</p>
            <br>
            <p>🧼 작업 범위</p>
            <p>1️⃣</p>
            <p>고온 스팀 살균</p>
            <p>시트 세척 (직물 / 가죽 구분 작업)</p>
            <p>전용 약품 오염 분해</p>
            <p>습식 흡입 장비로 오염수 제거</p>
            <p>가죽 전용 클리닝 및 컨디셔닝</p>
            <br>
            <p>2️⃣</p>
            <p>바닥 & 매트 케어</p>
            <p>매트 분리 고압 세척</p>
            <p>바닥 카펫 심층 습식 크리닝</p>
            <p>건조 작업</p>
            <br>
            <p>3️⃣</p>
            <p>천장 & 도어트림</p>
            <p>천장 오염 제거</p>
            <p>도어 내장재 세척</p>
            <p>플라스틱 트림 복원 관리</p>
            <br>
            <p>4️⃣</p>
            <p>대시보드 & 센터콘솔</p>
            <p>틈새 브러싱 디테일링</p>
            <p>항균 스팀 살균</p>
            <p>광택 및 보호 코팅</p>
            <br>
            <p>5️⃣</p>
            <p>탈취 & 항균 마무리</p>
            <p>실내 전체 스팀 살균</p>
            <p>에어컨 송풍구 항균 처리</p>
            <p>냄새 중화 작업</p>
            <br>
            <p>⏱ 작업 소요 시간✅️</p>
            <p>승용: 약 3~4시간</p>
            <p>SUV 및 대형차: 약 4~6시간</p>
            <p>차량 상태에 따라 변동될 수 있습니다.</p>
            <br><br>
            <p>이런 분들께 추천드립니다</p>
            <p>✅️ 아이와 함께 차량을 이용하는 가정</p>
            <p>✅️ 중고차 구매 후 실내 리셋이 필요한 경우</p>
            <p>✅️ 음식물,담배,곰팡이 냄새 제거 목적</p>
            <p>✅️ 장기간 실내 관리가 없었던 차량</p> 
            <br>
            <p>작업 후 효과</p>
            <p>✅️ 실내 공기 질 개선</p>
            <p>✅️ 눈에 보이는 오염 제거</p>
            <p>✅️ 세균 및 냄새 감소</p>
            <p>✅️ 쾌적한 운전 환경 복원</p>    
            <br><br>
            <img src="src/cleaningPrice.png" alt="노하우 이미지" 
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br><br>
            <img src="src/shiningPrice.png" alt="노하우 이미지" 
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br><br>
            <img src="src/shiningCoatingPrice.png" alt="노하우 이미지" 
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br><br><br><br>
        `;
    } else if (page === 'contact') {
        content.innerHTML = `
            <h3>고객지원</h3>
            <br>
            <p>세차서비스와 관련된 문의사항은</p>
            <p>아래 고객지원센터로 연락주세요</p>
            <br>
        `;
    }
}

// 초기 실행
window.onload = () => {
    startGlobalSlider(); // 이미지 슬라이더 시작
    route('home');       // 기본 페이지 홈 설정
};
