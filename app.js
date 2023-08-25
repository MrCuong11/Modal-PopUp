// toggle dùng để nếu phầN tử gốc đã có class hide thì sẽ xoá và ngược lại
// Khi một hàm không chạy thì ta truyền một tham số vào và ta dùng thuộc tính target để xem bị lỗi ở chỗ nào



// currentTarget trả về một phần tử được gắn tự kiện, mặc dù phần tử đó có ở trong lớp con hay lớp cha 
// vd: <div id="parent">
// <button id="child">Click me</button>
// </div>
// ---code JS 
// document.getElementById('parent').addEventListener('click', function(event) {
//     console.log(event.currentTarget.id);
//   });

//   thì luôn trả về id parent mặc dù có click vào child hay không

// target trả về một phần tử vừa được click 
// vd: <div id="parent">
// <button id="child">Click me</button>
// </div>
// ---code JS 
// document.getElementById('parent').addEventListener('click', function(event) {
//     console.log(event.target.id);
//   });

//   thì nếu click child thì trả về child, nếu click về parrent thì trả về parrent
var btnOpen = document.querySelector('.open_modal_btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');
var inner = document.querySelector('.modal-inner');

btnOpen.addEventListener('click', () => {
    modal.classList.add('show');
})
btnClose.addEventListener('click', () => {
    modal.classList.remove('show');
})


iconClose.addEventListener('click', () => {
    modal.classList.remove('show');
});
modal.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        modal.classList.remove('show');
    }
});