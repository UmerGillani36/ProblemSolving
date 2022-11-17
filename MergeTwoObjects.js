
const titles = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
];

const posts = [
    { id: 1, post: "This is post 1" },
    { id: 3, post: "This is post 3" },
    { id: 2, post: "This is post 2" },
];

                    //Expected Output
                    // [
                        //     { "id": 1, "title": "Title 1", "post": "This is post 1" },
                    //     { "id": 2, "title": "Title 2", "post": "This is post 2" },
                    //     { "id": 3, "title": "Title 3", "post": "This is post 3" }
                    // ]
const output = titles.map(val => ({ ...val, ...posts.find(subpost => subpost.id === val.id) }));

console.log("Output is  ", output);