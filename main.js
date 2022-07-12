var notificationPanelHeight =
  document.getElementById("notification-panel").offsetHeight;
var pageHeight = document.body.offsetHeight;
var notificationClosed = false;

function closeNewsletter() {
  document.getElementById("newsletter").style.transform = "translateY(100%)";
  localStorage.setItem('closeDate', new Date);
}
  
function scrollFunction() {
  var y = window.scrollY;
 
  if (y >= pageHeight / 3) {
    document.getElementById("newsletter").style.transform = "translateY(0)";
  }
}

function checkNewsletter() {
  var nowDate = new Date;
  var closeDate = new Date(localStorage.getItem('closeDate'));
  var diff = nowDate.getTime() - closeDate.getTime();
  var minuteDiff = Math.floor(diff/1000/60);
  if (minuteDiff >= 10) {
    document.getElementById("newsletter").style.opacity = 1;
  } else {
    document.getElementById("newsletter").style.cssText = "transform: translateY(100%); opacity: 0;";
  }
}

function checkNotification() {
  if (notificationClosed) {
    document.getElementById("hero").style.marginTop = 0 + "px";
  } else {
    document.getElementById("hero").style.marginTop =
  notificationPanelHeight + "px";
  }
}

function closeNotification() {
  document.getElementById("notification-panel").style.transform =
    "translateY(-100%)";
  document.getElementById("panel-content").style.transform =
    "translateY(-100%)";
  document.getElementById("hero").style.marginTop = 0 + "px";
  notificationClosed = true;
}

window.addEventListener("load", checkNotification);
window.addEventListener("scroll", () => {
  scrollFunction();
  checkNewsletter();
});
