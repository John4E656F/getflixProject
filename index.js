// section 
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);



// tooltip homepage
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl);
});
















(function() {
    var cssMain = document.createElement('link');
    cssMain.href = '/css/main.css';
    cssMain.rel = 'stylesheet';
    cssMain.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(cssMain);
})();

(function() {
    var cssFa = document.createElement('link');
    cssFa.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
    cssFa.rel = 'stylesheet';
    cssFa.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(cssFa);
})();