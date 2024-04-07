# Clepher Qualification Test

The tes app is deployed on Vercel under the following URL: https://alpha-v-test.vercel.app/

## How To Run Locally

- git clone git@github.com:stevendaye/alpha.git
- cd alpha
- npm install
- npm run dev

## Description

This technical test uses the Alpha Vantage API to display a large dataset.
In this test, my approach has been to use mainly 2 kind of Stock APIs for development. There are many others, but I chose these two. They are:

- Time Series (Core Stock API)
- Digital Currencies

There is a button that let you select the kind of stock you want to see displayed. I put no limit to the amount of dataset coming from the API.

Both stocks apis send the full data as they are per type of series. This means _DAILY_, _WEEKLY_ and _MONTHLY_.

On the UI, there is a 3 Tabs that let you select each type of series and display them accordingly.

## Fonctionality

- **Data**: Displays 2 kind of stocks (Time Series Core and Digital Currencies)
- **Tab**: Displays 3 type of Tab: DAILY, WEEKLY and MONTHLY
- **Pagination**:
  - The data is paginated and handles thousands of data for each type.
  - The initial data is set to 25 rows or items, then it lets you go trough the rest of items with back and forward arrow buttons.
  - This feature is friction-free and can handle even more that 10,000+ data seamlessly.
- **Caching**: My thought after anylsis for a performant app is to cache the data as they arrive for the first time in each series and type.
  - Then it let you go through each series again in each tab without making new resquests. Only a page refresh/reload can make new calls.

## Performance Techiques Applied

- Virtualization: with **react-window** library to control the visible items just enough to fill the viewport
- Caching: by storing the type of stock/series as key in an object, then checks if it does not exist before making a new call
- Pagination: initially set 25 items in the viewport, then add **Next** and **Previous** buttons to go through the remaining data each time by 25 rows.
  - If you are running the app locally, you can change the number to either 10, 40, 100 or any number to see it reflect in the viewport. This can be done in the index file of constants directory on line 95.
- React's **memo()** hook: to prevent unnecessary update if component's props does not change

## Technologies Used

- React.js
- TypeScript
- Chakra UI
- Vite Framework

## Projects Structure Description

In this project I modularized the code just enough to make it clean and easy to undersand what's in each directory
The list here are only the essentails in the **src directory**. Thus, we have the following directories:

- **components**

  - **index.ts** [Entry file for all components. This exports components to make all imports coming from one single file]
  - **main-header.tsx** [Is the vey top header displaying a title and a button to choose the kind of Time Series Stock you wan to see displayed]
  - **footer.tsx** [Is the bottom footer displaying the time series selected and handle pagination]
  - **header-list.tsx** [Displays an horizontal list of the kind of data rendered in each column]
  - **time-series-metadata.tsx** [Displays basic metadata information on the data rendered]
  - **time-series-list.tsx** [List **Time Series** or **Digital Currencies**]
  - **time-row.tsx** [List each **Time Serie** item as a row in the list]
  - **digital-row.tsx** [List each **Digital Currency** as a row in the list]
  - **tabs-list.tsx** [Displays 3 types of tabs for each Time Serie or Stock request]

- **pages**

  - **home.tsx** [Is the main entry of the app. It contains all other components]
  - **index.ts** [Exports home to other files to make the import coming from a singe file]

- **layout**

  - **layout.tsx** [This is the main layout of the app that renders all other pages with the same design. In our case, we have just one page: **home**]
  - **index.ts** [Exports layout to other files to make the import coming from a singe file]

- **constants**

  - **index.ts** [This defines all kind of constants and parameters the app needs to re-use in many other components. This reduces typos and avoid repetitions while making the code look cleaner]

- **hooks**

  - **useGetTimeSeries.ts** [This hook calls the Alpha Vantage API. It takes parameters dynamically and make requests to 2 different kind of stocks as stated above: **Time Series Core** and **Digital Currencies**]
  - **useShowToast.ts** [This hook shows notification messages. It can be re-used in any other component. At this time it only serves for displaying error message from the api]

- **props**

  - **index.ts** [This contains all the TypeScript types the app will ever need in each component. It re-uses also types from other components and helps avoid repetition]

- **utils**
  - **apiClient.ts** [Contains the base URL of Alpha Vantage API and makes all our calls]

Last but not least, I applied a little design to the app to make it a bit more appealing and came with the idea of Tabs to make request to each stock daily, weekly and montly.

**I noticed that the API key has a daily limit of 25 requests per day. Currently in production on Vercel, the app is using the API key sent to me by _Berna_. So I created 4 more API's key that can be used to test the app in case it hits the daily limit locally when running the app. I sent the 4 API KEYS in an email to _Berna_. In case, you need it, just replace any of the keys in the index file of the constants directory on line 6. This is to avoid you the pain of having to create new ones yourself**
