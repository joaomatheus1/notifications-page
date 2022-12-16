const markAllAsRead = document.querySelectorAll(".item-notification");
let amoutUnread = document.querySelector("#count_notifications");
let cont = markAllAsRead.length;
let containsClass = 0;
markAllAsRead.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.remove("read");
  });
  if (item.classList.contains("read")) {
    containsClass++;
  }
});
amoutUnread.innerHTML = containsClass;

function clearNotifications() {
  markAllAsRead.forEach((item) => {
    item.classList.remove("read");
    containsClass--;
    console.log(containsClass);
  });
}
