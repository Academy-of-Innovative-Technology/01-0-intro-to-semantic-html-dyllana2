var main = document.querySelector("main");

let posts = [
    {
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgScUudTU882ckYGOPd37Wsow7mp2UKY91g&s",
        Title: "Son I love you so much",
        Post: "This is the story of a kid that was on his way to school and his parent records a video of them saying SON I LOVE YOU SO MUCH"
    },
    {
        Image: "https://i.redd.it/9f0levt56hbc1.jpeg",
        Title: "GTYOYF",
        Post: "This is the story of spongebob when he shoved a watermelon up his nose"
    },
    {
        Image: "https://media.gettyimages.com/id/3270228/photo/sheik-mujibur-rahman-bangladesh-president-in-london-in-1972-he-was-killed-in-a-dawn-coup-in-1975.jpg?s=612x612&w=gi&k=20&c=ZT0BbUivkPylC_DKlfZD6EheeLSXqGPXIxQ0Qh7D444=",
        Title: "Sheikh Mujibur Rahman",
        Post: "ç∫ç∂´∂∫ç∫∂©∑ ∫´∫∫ç∫ √∑∂∫∆ç ç∫´ˆ∑´¥∂ ∂ƒ˙©ƒ ç∫ç´˙"
    }

    ];

    posts.forEach(function(post){
        main.insertAdjacentHTML('beforeend', `
           <img src = ${post.Image}>
           ${post.Title}
           ${post.Post}
        `);
    });
    

