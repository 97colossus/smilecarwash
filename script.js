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
            <h3>1회성 방문세차</h3>
            <p>필요할 때만 세차받는 방문세차 서비스입니다</p>
            <img src="src/onetime.png" alt="노하우 이미지" 
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br><br><br>
            <h3>월단위 방문세차</h3>
            <p>정기적으로 세차받는 월단위 방문세차 서비스입니다</p>
            <img src="src/monthly.png" alt="노하우 이미지" 
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br><br><br>
            <img src="src/audiWash.jpg" alt=""
                style="width: 100%; max-width: 650px;
                height: auto; margin-top: 10px;">
            <br><br><br>
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
