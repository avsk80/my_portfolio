export const projects = [
  {
    title: "Cometitive Intelligence (At Lowe's)",
    description: "The aim is to provide a data driven tool which helps the pricing analysts to compare prices of similar items to Lowe's and its competitors by store location. It provides a scope to increase the revenue by understanding the market.",
      image: '/images/competitive_analysis.png',
      tags: ['Web Scraping', 'PySpark', 'Spark Streaming', 'Snowflake'],
      //source: "Done at Lowe's",
      //visit: 'https://google.com',
    id: 0,
  },
  {
    title: "Promo Measurement (At Lowe's)",
    description:"The objective is to build a dashboard that measures the sales, revenue, units sold and the effectiveness of past promotions on items in Lowe's calculated over a rolling 2-year period.",
    image: '/images/promo_measurement.png',
    tags: ['Sqoop', 'PySpark', 'HiveQL'],
    //source: 'https://google.com',
    //visit: 'https://google.com',
    id: 1,
  },
  {
    title: "Promo Forecast (At Lowe's)",
    description: "The primary purpose of this product is to help the business leaders understand the impact of a future promotion in terms of sales and units. Time Series(ARIMA) model is used to train on past 2-year data in order to make preductions.",
      image: '/images/promo_forecast.png',
      tags: ['PySpark', 'Time Series', 'Node.js', 'React.js'],
    //source: 'https://google.com',
    //visit: 'https://google.com',
    id: 2,
  },
  {
    title: "Data Quality and Validation Framework (At Lowe's)",
    description: "Developed a common framework which can be utilised by multiple teams to ensure the quality of data being ingested in the cluster. It can be customised based on user defined rules to validate the data.",
    image: '/images/data_quality.png',
    tags: ['Scala', 'PySpark', 'HiveQL', 'Apache Superset'],
    //source: 'https://google.com',
    //visit: 'https://google.com',
    id: 3,
  },
  {
    title: 'Data Grabber - A web scrapper (Academic)',
    description: "Scraped a reatil website called flipkart to obtain thousands of item data points. Specifically scraped for electronics category of items to obtain item description, reviews, price etc.",
    image: '/images/data_grabber.jpg',
    tags: ['Python'],
    //source: 'https://google.com',
    //visit: 'https://google.com',
    id: 4,
  },
  {
    title: "Evaluating Driver Distraction Level (Academic)",
    description: "This is a kaggle problem statement to predict the type of distraction faced by a driver. More info in my github",
    image: '/images/distracted_car_driving.jpg',
    tags: ['Python', 'Tensorflow', 'Keras'],
    //source: 'https://google.com',
    //visit: 'https://google.com',
    id: 5,
  }
];

export const TimeLineData = [
  { year: 2019, text: "Started my journey as Associate Data Engineer at Lowe's", },
  { year: 2020, text: "Promoted to Data Engineer at Lowe's", },
  { year: 2021, text: 'present', },
];