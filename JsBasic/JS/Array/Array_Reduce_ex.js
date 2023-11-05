// Bài 52: Array reduce() method qua ví dụ

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 250
    },
    {
        id: 3,
        name: 'Java',
        coin: 250
    },
    {
        id: 4,
        name: 'JS',
        coin: 250
    },
    {
        id: 5,
        name: 'SQL',
        coin: 250 
    }
];


// ex 1: cần truyền initial vakue
var totalCoin = courses.reduce(function (total, course) {  
    console.log(total, course)
    return total + course.coin;
}, 0); // inital value

console.log(totalCoin);


// ex 2: không cần truyền initial vakue
var number = [100, 200, 300, 400, 500];

var totalCoin2 = number.reduce(function(total, number){
    return total + number;
},0);

console.log(totalCoin2);

// bài tập

// BT 1: Flat - 'Làm phẳng' mảng từ Depth array - 'Mảng sâu'
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOuput, depItem){
    // concat: nối mảng
    return flatOuput.concat(depItem)
}, []);

console.log(flatArray);



// BT 2:  Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: 'Front-end',
        courses: [
                {
                    id: 1,
                    title: 'HTML, CSS'
                },
                {
                    id: 2,
                    title: 'JavaScript'
                }
            ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 3,
                title: 'PHP'
            },
            {
                id: 4,
                title: 'NodeJs'
            }
        ]
    }
    ];

var newCorses = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses);
},[]);

console.log(newCorses);


var htmls = newCorses.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2> 
            <p>${course.id}</p>    
        </div>
    `;
});

console.log(htmls.join(''))