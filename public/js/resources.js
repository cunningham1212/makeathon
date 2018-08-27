var resources = [
    {
        title: "Makeathon",
        desription: "Makeathon is a hackathon Lehigh SPD helps run focused on making the community a better place.",
        link: "https://lumakeathon.herokuapp.com/"
    },
    {
        title: "Peer To Peer",
        desription: "The best resource of SPD is fellow students. Learn more about how SPD facilitates networking.",
        link: "/coming-soon"
    },
    {
        title: "Professional Events",
        desription: "SPD hosts all kinds of events that help professional development, including resume workshops and mock interviews.",
        link: "/coming-soon"
    },
    {
        title: "A Network Far Beyond SPD",
        desription: "Brothers of SPD are involved across campus. This includes, but is not limited to The Baker's Institute and Global Lehigh.",
        link: "/coming-soon"
    }
];

function genResources() {
    var str = ""
    for(var c = 0; c < resources.length; c++) {
        str += "<article><h3>" + resources[c].title + "</h3><p>" + resources[c].desription + "</p><ul class=\"actions\"><li><a href=\"" + resources[c].link + "\" class='button'>More</a></li></ul></article>";
    }
    $('#profFill').html(str);
}

