

/// Pharagraph aniamtion
TweenMax.from('.blogers_section__grid__box__paragraph',2,{
    opacity:0,
    ease: Back.easeOut.config(1.1),
    y: 100 
});



/// Bloggers  aniamtion
TweenMax.from('.blogers-textbox--main',2,{
    opacity:0,
    ease: Back.easeOut.config(1.3),
    x: -300 
});

TweenMax.from('.blogers-textbox--sub',2,{
    opacity:0,
    ease: Back.easeOut.config(1.3),
    x: 300 
});

