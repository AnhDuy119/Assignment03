"use strict";

// Chức năng ẩn thông tin cá nhân
const email = document.getElementById("my-email");
const info = document.querySelector(".info");
const inputEmail = document.querySelector(".input-email");

// Thêm event click Submit
submit.addEventListener("click", function () {
  // Kiểm tra mail nhập đúng định dạng
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Sử dụng hàm if trả về thông tin (nếu ko nhập giá trị vào email)
  if (!email.value) {
    alert("Vui lòng nhập địa chỉ email!");

    // Kiểm tra định dạng email bằng test() - Tham khảo W3Schools
  } else if (!regex.test(email.value)) {
    alert("Địa chỉ email không đúng định dạng. Vui lòng nhập lại! ");

    // Kiểm tra nhập đúng địa chỉ mail cá nhân ko?
  } else if (email.value !== "duynaFX22835@funix.edu.vn") {
    alert("Địa chỉ mail không chính xác!");

    // Nhập đúng địa chỉ mail cá nhân
  } else {
    info.classList.remove("hidden"); // Hiện thông tin bằng cách remove class hidden
    inputEmail.classList.add("hidden"); // Xoá input và submit bằng cách add class hidden
  }
});

// Chức năng ẩn thông tin nghề nghiệp
const btnViewMore = document.querySelectorAll(".viewmore");
const btnViewLess = document.querySelectorAll(".viewless");
const hoverJob = document.querySelectorAll(".job-block");
const moreInfo = document.querySelectorAll(".more-info");
const replace = document.querySelectorAll(".item3");

// Sử dụng vòng lặp for để chọn nhiều phần tử cùng class (tham khảo lab 20.1)
for (let i = 0; i < hoverJob.length; i++) {
  btnViewLess[i].parentNode.removeChild(btnViewLess[i]); // Xoá nút ViewLess

  // Thêm event click ViewMore
  btnViewMore[i].addEventListener("click", function () {
    moreInfo[i].classList.remove("hidden"); // Hiện nội dung thông tin bằng cách xoá class hidden
    replace[i].replaceChild(btnViewLess[i], btnViewMore[i]); // Chuyển nút ViewMore thành ViewLess
  });

  // Thêm event click ViewLess
  btnViewLess[i].addEventListener("click", function () {
    moreInfo[i].classList.add("hidden"); // Ẩn nội dung thông tin bằng cách thêm class hidden
    replace[i].replaceChild(btnViewMore[i], btnViewLess[i]); // Chuyển nút ViewLess thành ViewMore
  });
}
// Tham khảo thêm/xoá phần tử tại web https://hanoiict.edu.vn/them-xoa-phan-tu-thong-qua-js-dom
