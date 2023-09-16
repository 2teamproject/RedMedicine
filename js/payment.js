$("#check_module").click(function () {
    var IMP = window.IMP; // 생략가능
    IMP.init('imp22267731'); 
    // i'mport 관리자 페이지 -> 내정보 -> 가맹점식별코드
    // ''안에 띄어쓰기 없이 가맹점 식별코드를 붙여넣어주세요. 안그러면 결제창이 안뜹니다.
    IMP.request_pay({
       pg: 'kakaopay.TC0ONETIME',
       pay_method: 'card',
       merchant_uid: 'merchant_' + new Date().getTime(),
       /* 
        *  merchant_uid에 경우 
        *  https://docs.iamport.kr/implementation/payment
        *  위에 url에 따라가시면 넣을 수 있는 방법이 있습니다.
        */
       name: '주문명 : 상담사월결제',
       // 결제창에서 보여질 이름
       // name: '주문명 : ${auction.a_title}',
       // 위와같이 model에 담은 정보를 넣어 쓸수도 있습니다.
       amount: 50000,
       // amount: ${bid.b_bid},
       // 가격 
       buyer_name: '노의진',
       // 구매자 이름, 구매자 정보도 model값으로 바꿀 수 있습니다.
       // 구매자 정보에 여러가지도 있으므로, 자세한 내용은 맨 위 링크를 참고해주세요.
       buyer_postcode: '123-456',
       }, function (rsp) {
          console.log(rsp);
       if (rsp.success) {
          var msg = '결제가 완료되었습니다.';
          msg += '결제 금액 : ' + rsp.paid_amount;
          // success.submit();
          // 결제 성공 시 정보를 넘겨줘야한다면 body에 form을 만든 뒤 위의 코드를 사용하는 방법이 있습니다.
          // 자세한 설명은 구글링으로 보시는게 좋습니다.
       } else {
          var msg = '결제에 실패하였습니다.';
          msg += '에러내용 : ' + rsp.error_msg;
       }
       alert(msg);
    });
 });

















// const numberElement = document.getElementById("number");
// const priceElement = document.getElementById("price");
// const increaseButton = document.getElementById("increase");
// const decreaseButton = document.getElementById("decrease");
// const paymentButton = document.querySelector(".payment");

// let quantity = 1;
// let price = 50000;

// function updatePriceAndQuantity() {
//     priceElement.innerText = price.toLocaleString() + "원";
//     numberElement.innerText = quantity;
// }

// increaseButton.onclick = () => {
//     quantity++;
//     price = quantity * 50000;
//     updatePriceAndQuantity();
// };

// decreaseButton.onclick = () => {
//     if (quantity <= 1) {
//         alert("최소 결제는 1개월 입니다.");
//     } else {
//         quantity--;
//         price = quantity * 50000;
//         updatePriceAndQuantity();
//     }
// };

// paymentButton.addEventListener("click", () => {
//     // 페이지 이동을 원하는 URL로 변경
//     window.location.href = "결제페이지의 URL 주소";
// });

// // 페이지 로드 시 초기 가격 설정
// updatePriceAndQuantity();