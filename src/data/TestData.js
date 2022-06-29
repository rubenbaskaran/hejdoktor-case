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
          "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
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
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
      },
      {
        name: "The Departed",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
      },
      {
        name: "Shutter Island",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
      },
      {
        name: "Goodfellas",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
      },
      {
        name: "Taxi Driver",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
      },
      {
        name: "The Irishman",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
      },
      {
        name: "The Aviator",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
      },
      {
        name: "Hugo",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
      },
      {
        name: "Raging Bull",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
      },
      {
        name: "Gangs of New York",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
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
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      },
      {
        name: "Sweden",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      },
      {
        name: "Norway",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      },
      {
        name: "Finland",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      },
      {
        name: "Germany",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      },
      {
        name: "France",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      },
      {
        name: "Italy",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      },
      {
        name: "Spain",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      },
      {
        name: "Canada",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      },
      {
        name: "Australia",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
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
