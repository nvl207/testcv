export const myProfile = {
    contract: [
      { id: 1, name: "Phone", content: "12346789" },
      { id: 2, name: "Email", content: "web5ngay@gmail.com" },
      { id: 3, name: "Address", content: "38 Yen Bai" },
    ],
    expertise: [
      { id: 1, name: "MSWord", rank: 5 },
      { id: 2, name: "Excel", rank: 3 },
      { id: 2, name: "Photoshop", rank: 4 },
      { id: 2, name: "Illstrator", rank: 3 },
      { id: 2, name: "Corel Draw", rank: 4 },
      
    ],

    personalskill:[
      { id: 1, name: "Public Speaking"},
      { id: 2, name: "Financial Management"},
      { id: 2, name: "Creative Idea"},
      { id: 3, name: "Project Manager"},
      { id: 4, name: "Director"},
    ],

    education:[
      { id: 1, major: "MACHANICAL ENGINEER", type:"University", time:"2011-2012"},
      { id: 2, major: "BACHELOR OF DESIGN", type: "Insitute", time:"2012-2013"},
    ],
    experience:[
      { id: 1, job: "ENGINEER", company:"Aptech", time:"2013-2014", desc:"You describe scenario of one-way deployment. I would not add the credentials to avoid any automerging commits. Yes, you will see the problem with this error, but this will mean that someone is poking around production and changes files manually triggering the merge."},
      { id: 2, job: "DESIGNER", company: "Google", time:"2014-2015", desc:"This will destroy any uncommitted local changes / commits, and will leave your HEAD pointing to a commit (not a branch). But neither of those should be a problem for an app server since you shouldn't be making local changes or committing to that repository."},
    ]

    
  };