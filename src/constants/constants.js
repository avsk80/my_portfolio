export const projects = [
  {
    title: "Competitive Intelligence (At Lowe's)",
    description: "This project intends to provide a tool that helps the pricing analysts to compare prices of similar items to Lowe's and its competitors by store location. Competitor's data is scraped on a daily basis. It provides a scope to increase the revenue by understanding the market.",
      image: '/images/competitive_analysis.png',
      tags: ['Web Scraping', 'PySpark', 'Spark Streaming', 'Snowflake'],
      //visit: '/src/components/html_static_pages/noaccess.html',
    id: 0,
  },
  {
    title: "Promo Measurement (At Lowe's)",
    description:"The objective is to build a dashboard that measures the sales, revenue, units sold and the effectiveness of past promotions on items at Lowe's. A rolling 2-year period worth of data is used for calculations.",
    image: '/images/promo_measurement.png',
    tags: ['Sqoop', 'PySpark', 'HiveQL', 'MicroStrategy'],
    //visit: 'https://google.com',
    id: 1,
  },
  {
    title: "Promo Forecast (At Lowe's)",
    description: "The primary purpose of this product is to help the business leaders understand the impact of a future promotion in terms of sales and units. ARIMA model was used for predictions and a 2-year worth of sales, units, promo data was used to train the model.",
    image: '/images/promo_forecast.png',
    tags: ['PySpark', 'Time Series', 'Node.js', 'React.js'],
    //visit: 'https://google.com',
    id: 2,
  },
  {
    title: "Data Quality and Validation Framework (At Lowe's)",
    description: "Developed a common framework to address the quality of data being ingested into the Hadoop cluster. It was leveraged by multiple teams by just customizing the user defined rules in a configuration file.",
    image: '/images/data_quality.png',
    tags: ['Scala', 'PySpark', 'HiveQL', 'Apache Superset'],
    //visit: 'https://google.com',
    id: 3,
  },
  {
    title: 'Data Grabber - A web scrapper (Academic)',
    description: "Scraped a reatil website called flipkart, specifically for electronics category of items to obtain item description, reviews, price etc. and stored the data in MySQL database ",
    image: '/images/data_grabber.jpg',
    tags: ['Python', 'MySQL'],
    visit: 'https://github.com/avsk80/web_scraping',
    id: 4,
  },
  {
    title: " Driver Distraction Image Classification (Academic)",
    description: "This is a kaggle problem statement to classify the type of distraction faced by a driver. The CNN model was 93% accurate on the test set. More info in my github",
    image: '/images/distracted_car_driving.jpg',
    tags: ['Python', 'Tensorflow', 'Keras'],
    visit: "https://github.com/avsk80/Driver_distraction_evaluation",
    id: 5,
  },
  {
    title: "Diabetes Prediction",
    description: "This is a kaggle problem statement that predicts if a person has diabetes or not based on parameters like glucose level, BMI, BP etc. More info in my github",
    image: '/images/diabetes.jpg',
    tags: ['Python', 'Flask', 'HTML', 'CSS'],
    visit: "https://github.com/avsk80/diabetes_prediction",
    id: 6,
  }
];

export const TimeLineData = [
  { year: 2019, text: "Started my journey as an Associate Data Engineer at Lowe's", },
  { year: 2020, text: "Promoted to a Data Engineer at Lowe's", },
  { year: 2021, text: 'Awarded with a "SOPT". Also, solved a lot of exciting problems in the retail sector', },
];