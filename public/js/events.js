var events = [
    {
        title: "Club Fair",
        info: "8/27/2018 4PM Front Lawn",
        desription: "Meet brothers in person on the lawn. Learn about SPD's role in the Lehigh Community.",
        label: "Info Event"
    },
    {
        title: "Info Seesion",
        info: "8/30/2018 5:30PM Packard 466",
        desription: "Learn about Sigma Phi Delta and the professional resources and connections we provide fellow memebers.",
        label: "Info Event"
    },
    {
        title: "ENTP + ENGR",
        info: "8/31/2018 6PM Packard 466",
        desription: "Learn about how to apply engineering in an entrepreneurial manner and how SPD practice it every day.",
        label: "5x10"
    },
    {
        title: "Mon. Football",
        info: "9/3/2018 5PM Packard",
        desription: "Who doesn't like football? Even if you don't. Here's a great opportunity to chill and enjoy a good game with others.",
        label: "Social Event"
    }
];

function genEvents() {
    var str = ""
    for(var c = 0; c < events.length; c++) {
        str += "<article><div class=\"event\"><h1>" + events[c].title + "</h2><h3><i>" + events[c].info + "</i></h3><p>" + events[c].desription + "</p><a href=\"#\" class=\"button special small event-button\">" + events[c].label + "</a></div></article>"
    }
    $('#eventFill').html(str);
}