const markAllAsRead = document.querySelectorAll(".item-notification");

let amountUnread = document.querySelector("#count_notifications");
let markRead = markAllAsRead.length;
let count = 0;

markAllAsRead.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("read")) {
      count--;
      amountUnread.innerHTML = count;
    }
    item.classList.remove("read");
  });
  if (item.classList.contains("read")) {
    count++;
  }
});

amountUnread.innerHTML = count;

function clearNotifications() {
  markAllAsRead.forEach((item) => {
    item.classList.remove("read");
    count = 0;
    amountUnread.innerHTML = count;
  });
}
