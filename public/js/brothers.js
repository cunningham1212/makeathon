var brothers = [
    {
        name: "William Peracchio",
        major: "Computer Science & Business (CSB)",
        from: "Manasquan, NJ",
        desc: "On campus, I'm a Gryphon up in Sayre, the Secretary for the Computer Science & Business Association, and a TRAC Fellow. I'm into tech, business, and global studies.",
        interests: [
            "Giants",
            "Rangers",
            "Mets",
            "Knicks",
            "Notre Dame",
            "Breaking Bad",
            "Game of Thrones",
            "Avatar",
            "Smash",
            "TLOZ"
        ],
        number: 0
    },
    {
        name: "Jack Cunningham",
        major: "Computer Science & Business (CSB)",
        from: "Westfield, NJ",
        desc: "I like problem solving and I use computer science to solve it. I made an app to connect women in developing countries to emergency responders and a website to make it easier to eat out with friends and family.",
        interests: [
            "Soccer",
            "Yankees",
            "Avatar",
            "Black Mirror",
            "3Blue1Brown",
            "CGPGrey",
            "KurzGesagt",
            "Nerdwriter",
            "SmarterEveryDay",
            "Vlogbrothers",
            "Monument Valley",
            "Ready Player One",
            "Harry Potter",
            "EDM"
        ],
        number: 1
    },
    {
        name: "Angel Matos",
        major: "Civil Engineering",
        from: "Philadelphia, PA",
        desc: "I trust that you can do that. Can’t think of anything",
        interests: [
            "Soccer",
            "Football",
            "Eagles"
        ],
        number: 2
    },
    {
        name: "Dom Allen",
        major: "Computer Science",
        from: "Syracuse, New York",
        desc: "My interests lie at the crossroads of computer science and graphic design. I love snowboarding, and have two Boston Terriers I like more than most people.",
        interests: [
            "Game of Thrones",
            "Stranger Things",
            "Twitch",
            "League of Legends"
        ],
        number: 3
    },
    {
        name: "Shane Quinn",
        major: "Computer Science & Business",
        from: "Norfolk, MA",
        desc: "I am in the class of 2021 and rushed Sigma Phi Delta during Spring semester of my freshman year. I consider myself to be very academically focused and never considered joining a fraternity before going to college; however, I have absolutely no regrets regarding Sigma Phi Delta.",
        interests: [
            "Patriots",
            "Celtics",
            "Rainbow Six Siege",
            "PUBG",
            "Overwatch",
            "Rick And Morty",
            "Atlanta",
            "Walking Dead",
            "Volleyball",
            "Frisbee"
        ],
        number: 4
    },
    {
        name: "Luan Quispe",
        major: "Chemical Engineer",
        from: "Belleville, New Jersey (but I was born in Peru).",
        desc: "I've been told that I look mad when someone meets me, and may make me unapproachable, but in all honesty I am far from that. I like to talk and meet new people, make dark or light humor, depending on the person, and be respectful of them, and I know my fair share of hip hop, old, new, experimental, or mainstream (I can get heated in a discussion involving music). If you need anything I'm always available.",
        interests: [
            "Soccer",
            "Peru [Soccer]",
            "Hip Hop",
            "Record Collecting",
            "Anime",
            "Overwatch",
            "Warframe"
        ],
        number: 5
    },
    {
        name: "Spencer Moros",
        major: "Bioengineering (Pharmaceutical)",
        from: "Hatboro, PA",
        desc: "Most remarkable thing about me is that I am an extremely sarcastic smartass. I like to make people laugh. I am pretty focused on academics but I know how to let loose as well. My long term goal is to go to medical school and I am involved with multiple pre med clubs as well as the on campus emergency medical service. I am also finishing my Emergency Medical Technician (EMT) certification. Lastly, I’m pretty chill and I won’t get offended by any jokes.",
        interests: [
            "Rainbow Six Siege",
            "Fortnite",
            "COD",
            "Halo",
            "GTA",
            "Tennis",
            "Skiing",
            "Rap",
            "EDM",
            "Blackbear",
            "Zedd"
        ],
        number: 6
    },
    {
        name: "Benjamin Schwartz",
        major: "IDEAS | CHEM E",
        from: "Morristown, NJ",
        desc: "I am a very active guy who loves playing sports and being outdoors. I really love learning about anything and just having conversations with other people.",
        interests: [
            "Soccer",
            "Basketball",
            "Football",
            "Outdoors"
        ],
        number: 7
    },
    {
        name: "Aleksander Gulkewicz",
        major: "Environmental Engineering",
        from: "Allentown, PA",
        desc: "A 3rd year student interested in environmental issues, especially on a global stage, and looking to potentially transition into environmental policy and law after graduation. Works for the Office of Sustainability and is a member of the Lehigh Philharmonic Orchestra.",
        interests: [
            "Phillies",
            "Flyers",
            "Eagles"
        ],
        number: 8
    },
    {
        name: "Alex Torres",
        major: "Pharmaceutical Chemistry",
        from: "Frederick, Maryland",
        desc: "Socially and professionally orientated student. Graduating in the spring of 2020. VP of Club relations in the Global Union and focused on all things global at Lehigh.",
        interests: [
            "Swim",
            "Walks",
            "League of Legends",
            "Travel"
        ],
        number: 9
    }
];

function genAllBrothers() {
    var str = ""
    for(var c = 0; c < brothers.length; c++) {
        str += "<article style=\"margin: 20px 0px\"><h2>" + brothers[c].name + "</h2><h3>" + brothers[c].major + "</h3><p>" + brothers[c].from + "</p><p>" + brothers[c].desc + "</p><ul class=\"actions\">";
        
        for(var cc = 0; cc < brothers[c].interests.length; cc++) {
            str += "<li style=\"margin: 5px\"><a class='button'>" + brothers[c].interests[cc] + "</a></li>";
        }
        
        str += "</ul></article>";
        if(c !== (brothers.length -1)) {
            str += "<hr style='margin: 40px 0px'>";
            console.log("HI")
        }
    }
    $('#peopleFill').html(str);
}