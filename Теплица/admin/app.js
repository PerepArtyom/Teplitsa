anychart.onDocumentLoad(function() {
    
    var chart = anychart.line([
        {x: "1.11", value: 18},
        {x: "8.11", value: 20},
        {x: "15.11", value: 23},
        {x: "22.11", value: 26}, 
        {x: "29.11", value: 30}
    ]);
    var rangeMarker = chart.rangeMarker();
    rangeMarker.axis(chart.yAxis());
    rangeMarker.from(0);
    rangeMarker.to(30);
    rangeMarker.fill({
    keys: [".1 #fff", ".4 #fff", ".9 #fff"],
    angle: -90,
    opacity: 0.3
    });
    chart.title("График температур");
    chart.yAxis().title("Температура (°С)");
    chart.xAxis().title("Дата");
    chart.container("graph").draw();
});

anychart.onDocumentLoad(function() {
    
    var chart = anychart.line([
        {x: "1.11", value: 40},
        {x: "8.11", value: 50},
        {x: "15.11", value: 55},
        {x: "22.11", value: 55}, 
        {x: "29.11", value: 60}
    ]);
    var rangeMarker = chart.rangeMarker();
    rangeMarker.axis(chart.yAxis());
    rangeMarker.from(30);
    rangeMarker.to(60);
    rangeMarker.fill({
    keys: [".1 #fff", ".2 #fff", ".9 #fff"],
    angle: -90,
    opacity: 0.3
    });
    chart.title("График влажности воздуха");
    chart.yAxis().title("Влажность (%)");
    chart.xAxis().title("Дата");
    chart.container("graph-1").draw();
});


!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
        e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
        
        modalElem = document.querySelector('.modal');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
        modalElem.classList.add('active');
        overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready


$(function() {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});