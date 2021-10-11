let arch = [
    {
      name: "Небоскрёб",
      adress: `1.jpeg`,
      styleDefault: `height: 150px;`,
      styleBig: "height: 350px;",
      about: "Небоскрёб — очень высокое многоэтажное здание с несущим стальным, железобетонным или композитным каркасом, предназначенное для жизни и работы людей. В русском языке также используется термин «высотное здание» или просто «высотка».",
      clickOn: "imgClick(0)"
    },
    {
      name: "Коттедж с бассейном",
      adress: `2.jpeg`,
      styleDefault: `height: 150px;`,
      styleBig: "height: 340px;",
      about: "Проекты дома с бассейном пользуются особым вниманием у обеспеченных людей, приверженцев здорового образа жизни.",
      clickOn: "imgClick(1)"
    },
    {
      name: "Дачный кооператив",
      adress: `3.jpeg`,
      styleDefault: `height: 150px;`,
      styleBig: "height: 350px;",
      about: "Дачный кооператив – это объединение граждан, являющихся собственниками участков в пределах одной территории, созданное для решения социально значимых задач в сфере ведения дачного хозяйстваю.",
      clickOn: "imgClick(2)"
    }
  ];


  //--- Outputs 3 images from an array of objects (Выводит 3 изображения из массива объектов)
  function getImg() {
      let s = "";
      let x = document.getElementById(`container`);
      for (i = 0; i < arch.length; i++) {
        s += `<figure>
                <img style="${arch[i].styleDefault}" src="img/${arch[i].adress}" onClick = "${arch[i].clickOn}">
                <figcaption>${arch[i].name}</figcaption>
              </figure>`
      }
      x.innerHTML = s;
  }


  //--- Click to enlarge an image (Увеличение изображения по клику)
  function imgClick(k) {
      let x = document.getElementById(`imgClickDiv`);
      x.innerHTML = `<figure>
                        <img style="${arch[k].styleBig}" src="img/${arch[k].adress}" onClick = "clearDiv()" alt="">
                        <figcaption style="width: 525px; margin: auto;">${arch[k].about}</figcaption>
                     </figure>`
  }


  //--- Delete enlarged image on click (Удаление увеличенного изображения по клику)
  function clearDiv() {
    let y = document.getElementById(`imgClickDiv`);
    y.innerHTML = "";
 }