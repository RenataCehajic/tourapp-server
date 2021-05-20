"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tours", [
      {
        title: "Tour through Centrum",
        description:
          "With your guide you can walk canal-side on the streets of the city, seeing the historic sites, including the Van Gogh and Rijks Museums, Anne Frank House, and charming Jordaan district. Hop in a canal boat and see Amsterdam's unique architecture from the water.",
        cafes: "Cafe Hout, Cafe Dries",
        district: "Centrum",
        time: "2021-05-17",
        rate: 22,
        imageUrl:
          "https://www.toursbylocals.com/images/guides/33/33830/2018312065254934.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Coffeeshop Tour",
        description:
          "Amsterdam is revered for its coffeeshops. But did you know there is more to coffeeshops than just getting high? How it is possible that weed and hash can be bought and sold, whilst technically being illegal? Join us on this interesting and informative Coffeeshop Tour to find out the answers to this Dutch riddle! We explore the history of decriminalization and the roots of Amsterdam´s weed heritage. Join us to explore the streets of Amsterdam East together with your local guide. Come with us as we take a long toke on the history, culture, coffeeshops and secret highlights of Amsterdam….. the roots of the liberal culture. No visit to Amsterdam is complete without the Coffeeshop Tour.",
        cafes: "De Dampkring, Tweede Kamer, The Bulldog, Boeren Jongens",
        district: "Centrum",
        time: "2021-05-17",
        rate: 420,
        imageUrl:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/19/3b/7a.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Tour South",
        description:
          "Encompassing the neighborhoods of Oud Zuid, De Pijp and Zuidoost, the south of Amsterdam is a vibrant district that represents the artistic heart of the city. It is home to iconic museums, world class music venues, high-end shopping and innovative restaurants. Amsterdam Zuid offers so much to see and do (and eat and drink) that you’ll be inspired to make a return trip",
        cafes: "Fidelio, Blazer, Carbon",
        district: "South",
        time: "2021-05-17",
        rate: 420,
        imageUrl:
          "https://www.toursbylocals.com/images/guides/33/33830/2018312065254934.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Noord Gestoord",
        description:
          "A tour starting in Amsterdam is a great way to see North Holland. We have 6 tours that range from 4 days up to 8 days. The most popular time for tours from Amsterdam is August, which has the most tour departures.",
        cafes: "Noorderlicht, NDSM",
        district: "North",
        time: "2021-05-19",
        rate: 40,
        imageUrl:
          "https://cdn.tourradar.com/s3/tour/232x170/217562_5a872137.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Western Tour",
        description:
          "One of Amsterdam's most scenic parts, the Western Canal Belt is where the web of historic canals is most tranquil. Various attractions are found here, from tiny shops and cafes to churches, museums and galleries. Fine views and excellent shopping opportunities abound particularly in the Nine Little Streets that run between the canals. Take this self-guided walk to explore the best sights of the Western Canal Belt",
        cafes: "Cafe Doelen, Cafe Kaap de Goede Hoop, Cafe de Walvis",
        district: "West",
        time: "2021-05-17",
        rate: 20,
        imageUrl: "https://www.gpsmycity.com/img/gd/1416.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "East Tour",
        description:
          "One of Amsterdam's most scenic parts, the Western Canal Belt is where the web of historic canals is most tranquil. Various attractions are found here, from tiny shops and cafes to churches, museums and galleries. Fine views and excellent shopping opportunities abound particularly in the Nine Little Streets that run between the canals. Take this self-guided walk to explore the best sights of the Western Canal Belt.",
        cafes: "Cafe Basquiat",
        district: "East",
        time: "2021-05-17",
        rate: 34,
        imageUrl:
          "https://www.iamsterdam.com/media/fotosartikelen/verity/oud-west/canal-sup-amsterdam-stand-up-paddleboard-1-1800x1020.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Nieuwmarkt Walking Tour (Self Guided), Amsterdam",
        description:
          "With your guide you can walk canal-side on the streets of the city, seeing the historic sites, including the Van Gogh and Rijks Museums, Anne Frank House, and charming Jordaan district. Hop in a canal boat and see Amsterdam's unique architecture from the water.",
        cafes: "Cafe Hout, Cafe Dries",
        district: "Centrum",
        time: "2021-05-17",
        rate: 22,
        imageUrl: "https://www.gpsmycity.com/img/ctw/5.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Southern Canal Belt Walking Tour (Self Guided), Amsterdam",
        description:
          "Amsterdam is revered for its coffeeshops. But did you know there is more to coffeeshops than just getting high? How it is possible that weed and hash can be bought and sold, whilst technically being illegal? Join us on this interesting and informative Coffeeshop Tour to find out the answers to this Dutch riddle! We explore the history of decriminalization and the roots of Amsterdam´s weed heritage. Join us to explore the streets of Amsterdam East together with your local guide. Come with us as we take a long toke on the history, culture, coffeeshops and secret highlights of Amsterdam….. the roots of the liberal culture. No visit to Amsterdam is complete without the Coffeeshop Tour.",
        cafes: "De Dampkring, Tweede Kamer, The Bulldog, Boeren Jongens",
        district: "Centrum",
        time: "2021-05-17",
        rate: 420,
        imageUrl: "https://www.gpsmycity.com/img/gd/1754.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pijp Walking Tour",
        description:
          "Encompassing the neighborhoods of Oud Zuid, De Pijp and Zuidoost, the south of Amsterdam is a vibrant district that represents the artistic heart of the city. It is home to iconic museums, world class music venues, high-end shopping and innovative restaurants. Amsterdam Zuid offers so much to see and do (and eat and drink) that you’ll be inspired to make a return trip",
        cafes: "Fidelio, Blazer, Carbon",
        district: "South",
        time: "2021-05-17",
        rate: 20,
        imageUrl: "https://www.gpsmycity.com/img/ctw/7.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "9 Small Streets (De 9 Straatjes) Shopping",
        description:
          "A tour starting in Amsterdam is a great way to see North Holland. We have 6 tours that range from 4 days up to 8 days. The most popular time for tours from Amsterdam is August, which has the most tour departures.",
        cafes: "Noorderlicht, NDSM",
        district: "Centrum",
        time: "2021-05-19",
        rate: 40,
        imageUrl: "https://www.gpsmycity.com/img/ctw/45.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Traveller in Amsterdam",
        description:
          "One of Amsterdam's most scenic parts, the Western Canal Belt is where the web of historic canals is most tranquil. Various attractions are found here, from tiny shops and cafes to churches, museums and galleries. Fine views and excellent shopping opportunities abound particularly in the Nine Little Streets that run between the canals. Take this self-guided walk to explore the best sights of the Western Canal Belt",
        cafes: "Cafe Doelen, Cafe Kaap de Goede Hoop, Cafe de Walvis",
        district: "Centrum",
        time: "2021-05-17",
        rate: 20,
        imageUrl: "https://www.gpsmycity.com/img/adp/1699.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Jewish heritage Tour",
        description:
          " Amsterdam has been the center of the Dutch Jewish community from the 16th century up until the Second World War. Once crowded with open-air stalls, smoking factories and tenement buildings, the Old Jewish Quarter still retains several moving reminders of the Jewish community that was torn apart during the war. Follow this self-guided walk to explore several key sights in the area, which have much to reveal about the century-long Jewish contribution to Amsterdam’s history",
        cafes: "Cafe Basquiat",
        district: "East",
        time: "2021-05-17",
        rate: 34,
        imageUrl: "https://www.gpsmycity.com/img/gd/1393.jpg",
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tours", null, {});
  },
};
