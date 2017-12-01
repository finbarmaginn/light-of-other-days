function generateCap(people) {
  let caption = [];
  let peoples = people || [];

  for (let i = 0; i < peoples.length; i++) {
    let person = peoples[i];
    caption.push(person.first + " " + person.second)
  }

  if (peoples.length > 1) {
    let lastPerson = caption.splice(caption.length - 1);
    return caption.join(", ") + " and " + lastPerson
  }

  return caption.join(", ")
}

function compare(a, b) {
  let aString = a.people[0].second + " " + a.people[0].first,
    bString = b.people[0].second + " " + b.people[0].first;
  return aString.localeCompare(bString);
}

let dontSort = [],
  allImages = [{
      src: {
        medium: require("./Medium/Maguire Sean - Medium.jpg"),
        large: require("./Large/Maguire Sean - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Sean",
        second: "Maguire"
      }]
    },
    {
      src: {
        medium: require("./Medium/McGlynn Arty - Medium.jpg"),
        large: require("./Large/McGlynn Arty - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Arty",
        second: "McGlynn"
      }]
    },
    {
      src: {
        medium: require("./Medium/Sands Tommy - Medium.jpg"),
        large: require("./Large/Sands Tommy - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Tommy",
        second: "Sands"
      }]
    },
    {
      src: {
        medium: require("./Medium/Welsh Peter 2 - Medium.jpg"),
        large: require("./Large/Welsh Peter 2 - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Peter",
        second: "Welsh"
      }]
    },
    {
      src: {
        medium: require("./Medium/MacColl Ewan - Medium.jpg"),
        large: require("./Large/MacColl Ewan - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Ewan",
        second: "MacColl"
      }]
    },
    {
      src: {
        medium: require("./Medium/Wilkinson Desi - Medium.jpg"),
        large: require("./Large/Wilkinson Desi - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Desi",
        second: "Wilkinson"
      }]
    },
    {
      src: {
        medium: require("./Medium/O\'Flynn Liam - Medium.jpg"),
        large: require("./Large/O\'Flynn Liam - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Liam",
        second: "O'Flynn"
      }]
    },
    {
      src: {
        medium: require("./Medium/Keane Dolores - Medium.jpg"),
        large: require("./Large/Keane Dolores - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Dolores",
        second: "Keane"
      }]
    },
    {
      src: {
        medium: require("./Medium/Gillespie Sheila 1 - Medium.jpg"),
        large: require("./Large/Gillespie Sheila 1 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Sheila",
        second: "Gillespie"
      }]
    },
    {
      src: {
        medium: require("./Medium/Young Rohan - Medium.jpg"),
        large: require("./Large/Young Rohan - Large.jpg")
      },
      year: "201?",
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Rohan",
        second: "Young"
      }]
    },
    {
      src: {
        medium: require("./Medium/Gunn Brendan - Medium.jpg"),
        large: require("./Large/Gunn Brendan - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Brendan",
        second: "Gunn"
      }]
    },
    {
      src: {
        medium: require("./Medium/Russell Micho 1 - Medium.jpg"),
        large: require("./Large/Russell Micho 1 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Micho",
        second: "Russell"
      }]
    },
    {
      src: {
        medium: require("./Medium/Barry Maggie - Medium.jpg"),
        large: require("./Large/Barry Maggie - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Maggie",
        second: "Barry"
      }]

    },
    {
      src: {
        medium: require("./Medium/Maguire Sean And  Keane Dolores - Medium.jpg"),
        large: require("./Large/Maguire Sean And  Keane Dolores - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Sean",
          second: "Maguire"
        },
        {
          first: "Dolores",
          second: "Keane"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/O\'Connor Gerry and NíUallacháin Eithne - Medium.jpg"),
        large: require("./Large/O\'Connor Gerry and NíUallacháin Eithne - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
          first: "Gerry",
          second: "O'Connor"
        },
        {
          first: "Eithne",
          second: "NíUallacháin"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/Stiubhard Daibhidh - Medium.jpg"),
        large: require("./Large/Stiubhard Daibhidh - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Daibhidh",
        second: "Stiubhard"
      }]
    },
    {
      src: {
        medium: require("./Medium/Harpur Paddy - Medium.jpg"),
        large: require("./Large/Harpur Paddy - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Paddy",
        second: "Harpur"
      }]
    },
    {
      src: {
        medium: require("./Medium/Gillespie Sheila - Medium.jpg"),
        large: require("./Large/Gillespie Sheila - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Sheila",
        second: "Gillespie"
      }]
    },
    {
      src: {
        medium: require("./Medium/Gunn Tommy - Medium.jpg"),
        large: require("./Large/Gunn Tommy - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Tommy",
        second: "Gunn"
      }]
    },
    {
      src: {
        medium: require("./Medium/Wilkinson Desi with horns and O\'Connor Gerry - Medium.jpg"),
        large: require("./Large/Wilkinson Desi with horns and O\'Connor Gerry - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Desi",
          second: "Wilkinson"
        },
        {
          first: "Gerry",
          second: "O'Connor"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/Cullen Paddy 2012 - Medium.jpg"),
        large: require("./Large/Cullen Paddy 2012 - Large.jpg")
      },
      year: "2012",
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Paddy",
        second: "Cullen"
      }]
    },
    {
      src: {
        medium: require("./Medium/Carson Ciaran 2012 - Medium.jpg"),
        large: require("./Large/Carson Ciaran 2012 - Large.jpg")
      },
      year: "2012",
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Ciaran",
        second: "Carson"
      }]
    },
    {
      src: {
        medium: require("./Medium/Irvine Andy - Medium.jpg"),
        large: require("./Large/Irvine Andy - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Andy",
        second: "Irvine"
      }]
    },
    {
      src: {
        medium: require("./Medium/Hammond David - Medium.jpg"),
        large: require("./Large/Hammond David - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "David",
        second: "Hammond"
      }]
    },
    {
      src: {
        medium: require("./Medium/Clifford Julia and Begley Seamus - Medium.jpg"),
        large: require("./Large/Clifford Julia and Begley Seamus - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Julia",
          second: "Clifford"
        },
        {
          first: "Seamus",
          second: "Begley"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/O\'Neill Sarah Anne - Medium.jpg"),
        large: require("./Large/O\'Neill Sarah Anne - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Sarah Anne",
        second: "O'Neill"
      }]
    },
    {
      src: {
        medium: require("./Medium/McDermott Josie - Medium.jpg"),
        large: require("./Large/McDermott Josie - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Josie",
        second: "McDermott"
      }]
    },
    {
      src: {
        medium: require("./Medium/Spillane Davey - Medium.jpg"),
        large: require("./Large/Spillane Davey - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Davy",
        second: "Spillane"
      }]
    },
    {
      src: {
        medium: require("./Medium/NíDhomnaill Triona - Medium.jpg"),
        large: require("./Large/NíDhomnaill Triona - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Triona",
        second: "NíDhomnaill"
      }]
    },
    {
      src: {
        medium: require("./Medium/Gavin Frankie 2 - Medium.jpg"),
        large: require("./Large/Gavin Frankie 2 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Frankie",
        second: "Gavin"
      }]
    },
    {
      src: {
        medium: require("./Medium/Pidgeon Top - Medium.jpg"),
        large: require("./Large/Pidgeon Top - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Pigeon Top",
        second: "Co Tyrone"
      }]
    },
    {
      src: {
        medium: require("./Medium/Cathal McConnell sq - Medium.jpg"),
        large: require("./Large/Cathal McConnell sq - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Cathal",
        second: "McConnell"
      }]
    },
    {
      src: {
        medium: require("./Medium/MacColl Ewan 2 - Medium.jpg"),
        large: require("./Large/MacColl Ewan 2 - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Ewan",
        second: "MacColl"
      }]
    },
    {
      src: {
        medium: require("./Medium/Black Mary - Medium.jpg"),
        large: require("./Large/Black Mary - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Mary",
        second: "Black"
      }]
    },
    {
      src: {
        medium: require("./Medium/Vallely Dara - Medium.jpg"),
        large: require("./Large/Vallely Dara - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Dara",
        second: "Vallely"
      }]
    },
    {
      src: {
        medium: require("./Medium/Keenan Tommy - Medium.jpg"),
        large: require("./Large/Keenan Tommy - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Tommy",
        second: "Keenan"
      }]
    },
    {
      src: {
        medium: require("./Medium/Mulheron Joe - Medium.jpg"),
        large: require("./Large/Mulheron Joe - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Joe",
        second: "Mulheron"
      }]
    },
    {
      src: {
        medium: require("./Medium/The Light of Other Days cover - Medium.jpg"),
        large: require("./Large/The Light of Other Days cover - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "",
        second: ""
      }],

    },
    {
      src: {
        medium: require("./Medium/Byrne Packie Manus - Medium.jpg"),
        large: require("./Large/Byrne Packie Manus - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Packie Manus",
        second: "Byrne"
      }]
    },
    {
      src: {
        medium: require("./Medium/Packie Manus Byrne 2013 - Medium.jpg"),
        large: require("./Large/Packie Manus Byrne 2013 - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Packie Manus",
        second: "Byrne"
      }]
    },
    {
      src: {
        medium: require("./Medium/Maguire Eamon - Medium.jpg"),
        large: require("./Large/Maguire Eamon - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Eamon",
        second: "Maguire"
      }]
    },
    {
      src: {
        medium: require("./Medium/Bell Derek and McAuley Tony - Medium.jpg"),
        large: require("./Large/Bell Derek and McAuley Tony - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Derek",
          second: "Bell"
        },
        {
          first: "Tony",
          second: "McAuley"
        }

      ]
    },
    {
      src: {
        medium: require("./Medium/Gallagher Rita - Medium.jpg"),
        large: require("./Large/Gallagher Rita - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Rita",
        second: "Gallagher"
      }]
    },
    {
      src: {
        medium: require("./Medium/Seeger Peggy - Medium.jpg"),
        large: require("./Large/Seeger Peggy - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Peggy",
        second: "Seeger"
      }]
    },
    {
      src: {
        medium: require("./Medium/Cullen Paddy 1990 - Medium.jpg"),
        large: require("./Large/Cullen Paddy 1990 - Large.jpg")
      },
      year: "1990",
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Paddy",
        second: "Cullen"
      }]
    },
    {
      src: {
        medium: require("./Medium/Carson Deirdre - Medium.jpg"),
        large: require("./Large/Carson Deirdre - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Deirdre",
        second: "Carson"
      }]
    },
    {
      src: {
        medium: require("./Medium/Larrissey Brendan - Medium.jpg"),
        large: require("./Large/Larrissey Brendan - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Brendan",
        second: "Larrissey"
      }]
    },
    {
      src: {
        medium: require("./Medium/Shorthall Peter - Medium.jpg"),
        large: require("./Large/Shorthall Peter - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Peter",
        second: "Shorthall"
      }]
    },
    {
      src: {
        medium: require("./Medium/Burke Kevin - Medium.jpg"),
        large: require("./Large/Burke Kevin - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Kevin",
        second: "Burke"
      }]
    },
    {
      src: {
        medium: require("./Medium/Lunny Donal - Medium.jpg"),
        large: require("./Large/Lunny Donal - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Donal",
        second: "Lunny"
      }]
    },
    {
      src: {
        medium: require("./Medium/Keane Sean - Medium.jpg"),
        large: require("./Large/Keane Sean - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Sean",
        second: "Keane"
      }]
    },
    {
      src: {
        medium: require("./Medium/Clifford Julia - Medium.jpg"),
        large: require("./Large/Clifford Julia - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Julia",
        second: "Clifford"
      }]
    },
    {
      src: {
        medium: require("./Medium/Tansey Seamus - Medium.jpg"),
        large: require("./Large/Tansey Seamus - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Seamus",
        second: "Tansey"
      }]
    },
    {
      src: {
        medium: require("./Medium/Michael O\'Dhomhnaill - Medium.jpg"),
        large: require("./Large/Michael O\'Dhomhnaill - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Michael",
        second: "O'Dhomhnaill"
      }]
    },
    {
      src: {
        medium: require("./Medium/O\'Connor Máirtín - Medium.jpg"),
        large: require("./Large/O\'Connor Máirtín - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Máirtín",
        second: "O'Connor"
      }]
    },
    {
      src: {
        medium: require("./Medium/Stewart Rosie - Medium.jpg"),
        large: require("./Large/Stewart Rosie - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Rosie",
        second: "Stewart"
      }]
    },
    {
      src: {
        medium: require("./Medium/McAuley Tony - Medium.jpg"),
        large: require("./Large/McAuley Tony - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Tony",
        second: "McAuley"
      }]
    },
    {
      src: {
        medium: require("./Medium/McGlynn Arty and Casey Nollaig - Medium.jpg"),
        large: require("./Large/McGlynn Arty and Casey Nollaig - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Arty",
        second: "McGlynn"
      }, {
        first: "Nollaig",
        second: "Casey"
      }]
    },
    {
      src: {
        medium: require("./Medium/Hill Noel and Carson Cairan - Medium.jpg"),
        large: require("./Large/Hill Noel and Carson Cairan - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Noel",
          second: "Hill"
        },
        {
          first: "Cairan",
          second: "Carson"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/Hayden Cathal - Medium.jpg"),
        large: require("./Large/Hayden Cathal - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Cathal",
        second: "Hayden"
      }]
    },
    {
      src: {
        medium: require("./Medium/Black Mary 2 - Medium.jpg"),
        large: require("./Large/Black Mary 2 - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Mary",
        second: "Black"
      }]
    },
    {
      src: {
        medium: require("./Medium/Pol Mac Ruaidhri - Medium.jpg"),
        large: require("./Large/Pol Mac Ruaidhri - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Pol",
        second: "Mac Ruaidhri"
      }]
    },
    {
      src: {
        medium: require("./Medium/Arthur Davey 1 - Medium.jpg"),
        large: require("./Large/Arthur Davey 1 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Paul",
        second: "Furey"
      }, {
        first: "Davey",
        second: "Arthur"
      }]
    },
    {
      src: {
        medium: require("./Medium/Furey George - Medium.jpg"),
        large: require("./Large/Furey George - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "George",
        second: "Furey"
      }]
    },
    {
      src: {
        medium: require("./Medium/Ward Desmond - Medium.jpg"),
        large: require("./Large/Ward Desmond - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Desmond",
        second: "Ward"
      }]
    },
    {
      src: {
        medium: require("./Medium/O\'Connor Donal - Medium.jpg"),
        large: require("./Large/O\'Connor Donal - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Donal",
        second: "O'Connor"
      }]
    },
    {
      src: {
        medium: require("./Medium/Furey Eddie - Medium.jpg"),
        large: require("./Large/Furey Eddie - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Eddie",
        second: "Furey"
      }]
    },
    {
      src: {
        medium: require("./Medium/Rodgers Patsy Dan King of Tory - Medium.jpg"),
        large: require("./Large/Rodgers Patsy Dan King of Tory - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Patsy Dan",
        second: "Rodgers"
      }]
    },
    {
      src: {
        medium: require("./Medium/Arthur Davey and Furey Finbar  - Medium.jpg"),
        large: require("./Large/Arthur Davey and Furey Finbar  - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
          first: "Davey",
          second: "Arthur"
        },
        {
          first: "Finbar",
          second: "Furey"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/McGoldrick Eddie  and Foley Jim - Medium.jpg"),
        large: require("./Large/McGoldrick Eddie  and Foley Jim - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Eddie ",
          second: "McGoldrick"
        },
        {
          first: "Jim",
          second: "Foley"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/Bailey Brendan - Medium.jpg"),
        large: require("./Large/Bailey Brendan - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Brendan",
        second: "Bailey"
      }]
    },
    {
      src: {
        medium: require("./Medium/Cathal McConnell 35 - Medium.jpg"),
        large: require("./Large/Cathal McConnell 35 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Cathal",
        second: "McConnell"
      }]
    },
    {
      src: {
        medium: require("./Medium/Russell Micho 2 - Medium.jpg"),
        large: require("./Large/Russell Micho 2 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Micho",
        second: "Russell"
      }]
    },
    {
      src: {
        medium: require("./Medium/Malone Caitlin - Medium.jpg"),
        large: require("./Large/Malone Caitlin - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Caitlin",
        second: "Malone"
      }]
    },
    {
      src: {
        medium: require("./Medium/Murray Sam - Medium.jpg"),
        large: require("./Large/Murray Sam - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Sam",
        second: "Murray"
      }]
    },
    {
      src: {
        medium: require("./Medium/McGoldrick Eddie Hugh and May - Medium.jpg"),
        large: require("./Large/McGoldrick Eddie Hugh and May - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
          first: "Eddie",
          second: "McGoldrick"
        },
        {
          first: "Hugh",
          second: "McGoldrick"
        },
        {
          first: "May",
          second: "McGoldrick"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/Gavin Frankie - Medium.jpg"),
        large: require("./Large/Gavin Frankie - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Frankie",
        second: "Gavin"
      }]
    },
    {
      src: {
        medium: require("./Medium/Quinn Tommy - Medium.jpg"),
        large: require("./Large/Quinn Tommy - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Tommy",
        second: "Quinn"
      }]
    },
    {
      src: {
        medium: require("./Medium/O\'Rourke Jason - Medium.jpg"),
        large: require("./Large/O\'Rourke Jason - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Jason",
        second: "O'Rourke"
      }]
    },
    {
      src: {
        medium: require("./Medium/O\'Rourke Brian - Medium.jpg"),
        large: require("./Large/O\'Rourke Brian - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Brian",
        second: "O'Rourke"
      }]
    },
    {
      src: {
        medium: require("./Medium/Arthur Davey 2 - Medium.jpg"),
        large: require("./Large/Arthur Davey 2 - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Davey",
        second: "Arthur"
      }]
    },
    {
      src: {
        medium: require("./Medium/Furey Paul - Medium.jpg"),
        large: require("./Large/Furey Paul - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Paul",
        second: "Furey"
      }]
    },
    {
      src: {
        medium: require("./Medium/McGoldrick Hugh - Medium.jpg"),
        large: require("./Large/McGoldrick Hugh - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Hugh",
        second: "McGoldrick"
      }]
    },
    {
      src: {
        medium: require("./Medium/Welsh Peter 3 - Medium.jpg"),
        large: require("./Large/Welsh Peter 3 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Peter",
        second: "Welsh"
      }]
    },
    {
      src: {
        medium: require("./Medium/Carson Ciaran 1988 - Medium.jpg"),
        large: require("./Large/Carson Ciaran 1988 - Large.jpg")
      },
      year: "1988",
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Ciaran",
        second: "Carson"
      }]
    },
    {
      src: {
        medium: require("./Medium/McKeegan Archie 1 - Medium.jpg"),
        large: require("./Large/McKeegan Archie 1 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Archie",
        second: "McKeegan"
      }]
    },
    {
      src: {
        medium: require("./Medium/Furey Finbar - Medium.jpg"),
        large: require("./Large/Furey Finbar - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Finbar",
        second: "Furey"
      }]
    },
    {
      src: {
        medium: require("./Medium/McPeake Francie and Davy Spillane - Medium.jpg"),
        large: require("./Large/McPeake Francie and Davy Spillane - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Francie",
          second: "McPeake"
        },
        {
          first: "Davy",
          second: "Spillane"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/McLaughlin Joseph - Medium.jpg"),
        large: require("./Large/McLaughlin Joseph - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Joseph",
        second: "McLaughlin"
      }]
    },
    {
      src: {
        medium: require("./Medium/Armagh Rhymers 2 - Medium.jpg"),
        large: require("./Large/Armagh Rhymers 2 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Armagh",
        second: "Rhymers"
      }]
    },
    {
      src: {
        medium: require("./Medium/McKeegan Archie 2 - Medium.jpg"),
        large: require("./Large/McKeegan Archie 2 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Archie",
        second: "McKeegan"
      }]
    },
    {
      src: {
        medium: require("./Medium/McKillop Jim - Medium.jpg"),
        large: require("./Large/McKillop Jim - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Jim",
        second: "McKillop"
      }]
    },
    {
      src: {
        medium: require("./Medium/Maloney Paddy - Medium.jpg"),
        large: require("./Large/Maloney Paddy - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Paddy",
        second: "Maloney"
      }]
    },
    {
      src: {
        medium: require("./Medium/Graham Len - Medium.jpg"),
        large: require("./Large/Graham Len - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Len",
        second: "Graham"
      }]
    },
    {
      src: {
        medium: require("./Medium/O\'Neill Charley McCann Patsy  And Wilkinson  Desi - Medium.jpg"),
        large: require("./Large/O\'Neill Charley McCann Patsy  And Wilkinson  Desi - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Charley",
          second: "O'Neill"
        },
        {
          first: "Patsy",
          second: "McCann"
        },
        {
          first: "Desi",
          second: "Wilkinson"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/Kennedy John - Medium.jpg"),
        large: require("./Large/Kennedy John - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "John",
        second: "Kennedy"
      }]
    },
    {
      src: {
        medium: require("./Medium/Hanna Geordie and Sarah Anne O\'Neill - Medium.jpg"),
        large: require("./Large/Hanna Geordie and Sarah Anne O\'Neill - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Geordie",
          second: "Hanna"
        },
        {
          first: "Sarah Anne",
          second: "O'Neill"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/Furey Finbar Bristol - Medium.jpg"),
        large: require("./Large/Furey Finbar Bristol - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Finbar",
        second: "Furey"
      }]
    },
    {
      src: {
        medium: require("./Medium/Gunn Brendan and Tommy - Medium.jpg"),
        large: require("./Large/Gunn Brendan and Tommy - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Brendan",
          second: "Gunn"
        },
        {
          first: "Tommy",
          second: "Gunn"
        }
      ]
    },
    {
      src: {
        medium: require("./Medium/Daly Jackie - Medium.jpg"),
        large: require("./Large/Daly Jackie - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Jackie",
        second: "Daly"
      }]
    },
    {
      src: {
        medium: require("./Medium/Bell Derek - Medium.jpg"),
        large: require("./Large/Bell Derek - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Derek",
        second: "Bell"
      }]
    },
    {
      src: {
        medium: require("./Medium/Finn Alec - Medium.jpg"),
        large: require("./Large/Finn Alec - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Alec",
        second: "Finn"
      }]
    },
    {
      src: {
        medium: require("./Medium/NíUallacháin Eithne - Medium.jpg"),
        large: require("./Large/NíUallacháin Eithne - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Eithne",
        second: "NíUallacháin"
      }]
    },
    {
      src: {
        medium: require("./Medium/Hanna Geordie - Medium.jpg"),
        large: require("./Large/Hanna Geordie - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Geordie",
        second: "Hanna"
      }]
    },
    {
      src: {
        medium: require("./Medium/Stewart Rosie 1 - Medium.jpg"),
        large: require("./Large/Stewart Rosie 1 - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Rosie",
        second: "Stewart"
      }]
    },
    {
      src: {
        medium: require("./Medium/O\'Connor Gerry - Medium.jpg"),
        large: require("./Large/O\'Connor Gerry - Large.jpg")
      },
      year: null,
      format: "medium",
      ratio: [4, 4],
      people: [{
        first: "Gerry",
        second: "O'Connor"
      }]
    },
    {
      src: {
        medium: require("./Medium/Armagh Rhymers 1 - Medium.jpg"),
        large: require("./Large/Armagh Rhymers 1 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Armagh",
        second: "Rhymers"
      }]
    },
    {
      src: {
        medium: require("./Medium/Lunny Donal and Hammond David  - Medium.jpg"),
        large: require("./Large/Lunny Donal and Hammond David  - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
          first: "Donal",
          second: "Lunny"
        },
        {
          first: "David",
          second: "Hammond"
        }

      ]
    },
    {
      src: {
        medium: require("./Medium/Welsh Peter 1 - Medium.jpg"),
        large: require("./Large/Welsh Peter 1 - Large.jpg")
      },
      year: null,
      format: "35mmLandscape",
      ratio: [3, 2],
      people: [{
        first: "Peter",
        second: "Welsh"
      }]
    },
    {
      src: {
        medium: require("./Medium/Casey Nollaig - Medium.jpg"),
        large: require("./Large/Casey Nollaig - Large.jpg")
      },
      year: null,
      format: "35mmPortrait",
      ratio: [2, 3],
      people: [{
        first: "Nollaig",
        second: "Casey"
      }]
    }
  ]


for (let i = 0; i < allImages.length; i++) {
  if (allImages[i].people[0].second === "Rhymers" || allImages[i].people[0].second === "Co Tyrone") {
    dontSort.push(allImages[i])
  }
}

let noRhymers = allImages.filter(function(obj) {
  return obj.people[0].second !== "Rhymers"
});

let images = noRhymers.filter(function(obj) {
  return obj.people[0].second !== "Co Tyrone"
});

images.sort(compare);

for (let i = 0; i < dontSort.length; i++) {
  images.push(dontSort[i])
}

images.map((image) => {
  image.cap = function() {
    if (image.people[0].first.length) {
      return generateCap(image.people)
    }
  }
})

export default images;
