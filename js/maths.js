document.querySelector('#btnCheckOut').onclick = function (event){
    event.preventDefault();
    var customer = new CusChoice();
    customer.type = firstCheckCarType();
    // customer.type = document.querySelector('input[class="btnType"]:checked').value;
    
    console.log(customer.type);
    // firstCheckCarType(customer.type);
    customer.distance = document.querySelector('#distance').value - 1;
    customer.time = document.querySelector('#times').value;
    var price = customer.calPrice();
    var waitPrice = customer.calTime();
    var first1km = customer.first();
    var totalCost = (waitPrice*customer.time)+(price*customer.distance)+first1km
    console.log(customer);
    var contentHTML = `
    <div id="checkOutBox" class="alert alert-warning w-75">
    <h2>Thành tiền: ${totalCost} vnd</h2>
    </div>`
    document.querySelector('#checkOutBox').innerHTML = contentHTML;
    window.scrollTo(0, document.body.scrollHeight);
}

document.querySelector('#btnBill').onclick = function (event){
    event.preventDefault();
    event.preventDefault();
    var customer = new CusChoice();
    customer.type = document.querySelector('input[name="selector"]:checked').value;
    customer.distance = document.querySelector('#distance').value - 1;
    customer.time = document.querySelector('#times').value;
    var price = customer.calPrice();
    var waitPrice = customer.calTime();
    var first1km = customer.first();
    var totalCost = (waitPrice*customer.time)+(price*customer.distance)+first1km
    var contentHTML = '';
    contentHTML += `
    <table class="table">
    <thead>
      <tr>
        <th>Chi tiết</th>
        <th>Sử dụng</th>
        <th>Đơn giá</th>
        <th>Thành tiền</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${customer.type}</td>
        <td>1 km</td>
        <td>${first1km}</td>
        <td>${first1km}</td>
      </tr>
      <tr>
        <td>${customer.type}</td>
        <td>${customer.distance}</td>
        <td>${price}</td>
        <td>${customer.distance * price}</td>
      </tr>
      <tr>
        <td>Thời gian chờ</td>
        <td>${customer.time} phút</td>
        <td>${waitPrice}</td>
        <td>${customer.time * waitPrice}</td>
      </tr>
      <tr class ="alert alert-success">
        <td colspan="3">Toltal</td>
        <td>${totalCost}</td>
      </tr>
    </tbody>
  </table>
    `;
    document.querySelector('#txtcheckOutData').innerHTML = contentHTML;
}


// function firstCheckCarType(type){
//     if(type = 'uberX'){
//         alert("Vui lòng chọn loại xe");
//     };
// }


// if(document.querySelector('#uberX').checked) {
//     document.querySelector(' input[name="selector"]:checked').value;
//     //Male radio button is checked
//   }else if(document.getElementById('gender_Female').checked) {
//     //Female radio button is checked
//   }

//   document.querySelector('input[name="selector"]:checked').value;
function firstCheckCarType(){
    var customerType = '';
    if(document.getElementById('uberX').checked) {
        customerType = document.querySelector('input[class="btnType"]:checked').value;
    }else if(document.getElementById('uberSUV').checked) {
        customerType = document.querySelector('input[class="btnType"]:checked').value;
    }else if(document.getElementById('uberBlack').checked) {
        customerType = document.querySelector('input[class="btnType"]:checked').value;
    }else{
        alert("Vui lòng chọn loại xe");
        window.location.reload();
    };
    return customerType;
}