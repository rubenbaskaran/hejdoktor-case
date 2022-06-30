const TestData = [
  {
    question: "Who is your favorite MCU superhero?",
    numberOfRequiredAnswers: 1,
    answers: [
      {
        name: "Iron Man",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
      },
      {
        name: "Captain America",
        image:
          "https://upload.wikimedia.org/wikipedia/en/9/91/CaptainAmerica109.jpg",
      },
      {
        name: "Hulk",
        image:
          "https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png",
      },
      {
        name: "Thor",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      },
      {
        name: "Black Widow",
        image:
          "https://upload.wikimedia.org/wikipedia/en/f/f6/Scarlett_Johansson_as_Black_Widow.jpg",
      },
      {
        name: "Hawkeye",
        image:
          "https://upload.wikimedia.org/wikipedia/en/9/99/Hawkeye_%28Clinton_Barton%29.png",
      },
      {
        name: "Spider-Man",
        image:
          "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
      },
      {
        name: "Black Panther",
        image:
          "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
      },
      {
        name: "Ant-Man",
        image:
          "https://upload.wikimedia.org/wikipedia/en/6/6b/Irredeemable_Ant-Man_Vol_1_5_Textless.jpg",
      },
      {
        name: "Doctor Strange",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
      },
    ],
  },
  {
    question: "What are your three favorite Martin Scorsese movies?",
    numberOfRequiredAnswers: 3,
    answers: [
      {
        name: "The Wolf of Wall Street",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
      },
      {
        name: "The Departed",
        image: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
      },
      {
        name: "Shutter Island",
        image:
          "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg",
      },
      {
        name: "Goodfellas",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
      },
      {
        name: "Taxi Driver",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/33/Taxi_Driver_%281976_film_poster%29.jpg",
      },
      {
        name: "The Irishman",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/80/The_Irishman_poster.jpg",
      },
      {
        name: "The Aviator",
        image:
          "https://upload.wikimedia.org/wikipedia/en/f/fa/The_Aviator_%282004%29.png",
      },
      {
        name: "Hugo",
        image: "https://upload.wikimedia.org/wikipedia/en/7/73/Hugo_Poster.jpg",
      },
      {
        name: "Raging Bull",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Raging_Bull_poster.jpg",
      },
      {
        name: "Gangs of New York",
        image:
          "https://upload.wikimedia.org/wikipedia/en/a/ae/Gangs_of_New_York_Poster.jpg",
      },
    ],
  },
  {
    question: "What are your three favorite countries?",
    numberOfRequiredAnswers: 3,
    answers: [
      {
        name: "Denmark",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1024px-Flag_of_Denmark.svg.png",
      },
      {
        name: "Sweden",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1024px-Flag_of_Sweden.svg.png",
      },
      {
        name: "Norway",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1024px-Flag_of_Norway.svg.png",
      },
      {
        name: "Finland",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1024px-Flag_of_Finland.svg.png",
      },
      {
        name: "Germany",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1024px-Flag_of_Germany.svg.png",
      },
      {
        name: "France",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png",
      },
      {
        name: "Italy",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png",
      },
      {
        name: "Spain",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1024px-Bandera_de_Espa%C3%B1a.svg.png",
      },
      {
        name: "Canada",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1024px-Flag_of_Canada_%28Pantone%29.svg.png",
      },
      {
        name: "Australia",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1024px-Flag_of_Australia_%28converted%29.svg.png",
      },
    ],
  },
  {
    question: "Who is your favorite politician?",
    numberOfRequiredAnswers: 1,
    answers: [
      {
        name: "Abraham Lincoln",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
      },
      {
        name: "Barack Obama",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
      },
      {
        name: "Arnold Schwarzenegger",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
      },
      {
        name: "Donald Trump",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
      },
      {
        name: "Bernie Sanders",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
      },
      {
        name: "Emmanuel Macron",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
      },
      {
        name: "Justin Trudeau",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
      },
      {
        name: "Nelson Mandela",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
      },
      {
        name: "Kim Jong-un",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
      },
      {
        name: "Vladimir Putin",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
      },
    ],
  },
];

export default TestData;
