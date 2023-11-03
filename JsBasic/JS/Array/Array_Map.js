// Bài 50: n cho Array (ForEach(), Every(), Some(), Find(), Filter())'

// Sử dụng khi muốn chỉnh sửa hoặc thay đổi các phần tử của một Array

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 0
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

function courseHandler(course, index, originArray) {
    // console.log(course);
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray
    };
}

 var newCourses = courses.map(courseHandler);

 console.log(newCourses)