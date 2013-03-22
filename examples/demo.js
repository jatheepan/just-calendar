new JustCalendar({
    container: document.getElementById('calendar-example-three'),
    startDate: new Date(),
    calendars: 3
});
new JustCalendar({
    container: document.getElementById('calendar-example-one'),
    startDate: new Date(),
    calendars: 1
});
new JustCalendar({
    container: document.getElementById('calendar-example-two'),
    startDate: new Date(),
    calendars: 2
});

//Paint even days

new JustCalendar({
    container: document.getElementById('calendar-example-paint'),
    startDate: new Date(),
    calendars: 2,
    onRender: function(table, date) {
        this.options.container.style.background = "#eeeeee"; 
    },
    onCellRender:    function(cellContainer, cellDate, scopeDate) {
        if (!(cellDate.getDate().toString()%2)) {
            cellContainer.style.background = "#000000";
            cellContainer.style.color = "#ffffff";
            cellContainer.onclick = function() {
                alert("Black");
            }
        } else {
            cellContainer.style.background = "#cccccc";
            cellContainer.style.color = "#000000";
            cellContainer.onclick = function() {
                alert("Gray");
            }
        }
    }
});
