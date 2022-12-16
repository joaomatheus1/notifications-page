const markAllAsRead = document.querySelectorAll(".item-notification");

markAllAsRead.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.remove("read");
  });
});

function clearNotifications() {
  markAllAsRead.forEach((item) => {
    item.classList.remove("read");
  });
}
