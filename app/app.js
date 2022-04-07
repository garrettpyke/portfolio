$(() => {
  console.log("Connected to app.js");

  const myTime = function () {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const milliSec = date.getMilliseconds();
    const timeNow = `${hour}:${min}:${sec}.${milliSec}`;

    console.log(timeNow);

    const whatIDo = [
      "relaxing",
      "programming",
      "Googling about programming",
      "sleeping",
    ];
    let whatImDoing = whatIDo[1];

    if (hour >= 8 && hour < 18) {
      whatImDoing = whatIDo[1];
    } else if (hour >= 18 && hour <= 24) {
      whatImDoing = whatIDo[2];
    } else if (hour >= 0 && hour < 8) {
      whatImDoing = whatIDo[3];
    } else {
      whatImDoing = whatIDo[0];
    }

    console.log(
      `It's now ${timeNow}. I should be ${whatImDoing}, but I'm most likely ${whatIDo[1]}.`
    );

    const myTimeNow = `It's now ${timeNow}. I should be ${whatImDoing}, but I'm most likely ${whatIDo[1]}.`;

    return myTimeNow;
  };

  forTheRecord = myTime();

  const $homeDiv = $(".home");
  const $timeP = $("<p>");
  $timeP.text(forTheRecord);
  $homeDiv.append($timeP);
});
