const animations = {
  explosionImages: ["1_1.png", "1_2.png", "1_3.png", "1_4.png", "1_5.png", "1_6.png", "1_7.png", "1_8.png", "1_9.png"],
  explosionImages2: ["2_1.png", "2_2.png", "2_3.png", "2_4.png", "2_5.png", "2_6.png", "2_7.png", "2_8.png", "2_9.png"],
  animate: (imgfolder, imageArray, limit) => {
    let counter = 0;
    const length = animations[imageArray].length;
    const displayImage = (img) => {
      $(".animation").css("backgroundImage", `url("/Users/isaiahharrison/Documents/projects/game/img/${imgfolder}/${img}")`)
      console.log(img)
    }
    const animating = setInterval(() => {
      if (counter === limit) {
        // clearInterval(animating);
        counter = 0;
      } else {
        displayImage(animations[imageArray][counter]);
        counter++;
      }
    }, 80);
  }
}