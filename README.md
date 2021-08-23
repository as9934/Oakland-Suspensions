# Good Intentions, Uncertain Results: 

## An examination of Oakland Unified School District’s suspension rates, racial disparities.


There is a long-documented history of racial discrimination in school discipline. Black kids and in particular Black boys are suspended at much higher rates than their White classmates. This disparity not only removes children from instructional time it also has numerous other pernicious effects including lower college attendance and academic performance. In fact, one study from University of Kentucky researchers concluded that a fifth of the Black-White achievement gap could be attributed to suspension disparities.


Many would suspect that Oakland Unified School District would buck this trend. To address this issue, the OUSD has invested millions of dollars on several programs - they created an office catering just to Black male achievement, implemented restorative justice and positive behavior intervention programs and banned suspensions for “willful defiance.” 

But despite historic efforts and millions of dollars invested, the suspension rate and racial disparity in suspensions has stayed basically flat in the past five school years. 

This project visualizes the disparity between suspensions of White and Black children in Oakland over a five school year period, from 2015 to 2019. 

I wanted to create a dynamic, interactive and attention-grabbing visualization to introduce this issue to an audience of news readers. The intent for this visualization is to serve as a supplement for an in-depth investigative story on the issue of suspensions in Oakland schools, which could be pitched to major regional and national journalistic publications. 

A variety of methods were used to obtain, clean, analyze and visualize the data necessary for this project. 

I obtained school suspension data from the California Department of Education website using a Selenium scraper written in Python. The script scraped five school years’ worth of suspension data (2014-15 to 2018-19) from every school in Oakland Unified School District. These five years were chosen because they were the most recent data available at the outset of my research and they begin the year that willful defiance suspensions were banned. The data come from each school’s self-reported count of suspensions for each year. The data is displayed on the California DoE website as HTML tables but was transformed into CSVs by the web scraping script. Unfortunately, some of the enrollment and suspension data is redacted because of an (IMHO overly broad and legally dubious) interpretation of the Federal Education Rights and Privacy Act. 

Once I acquired the data for each school for each school year with the scraper, I unioned all the tables for the respective school year together with DB Browser. 

To get addresses for each school, I used a Python script to feed the name of every school in the 2014-15 sheet concatenated with the string “oakland” into the Google Maps API. These addresses were then saved into a list object in Python and appended as a column next to the corresponding school in a Pandas dataframe made from that school year’s sheet. This dataframe was then exported as a CSV and used as a template for the addresses in the proceeding school years. For the small number of schools that did not exist in the 2014-15 school year or where the Google Maps API did not work, I searched for the address manually using Google Maps or the OUSD website and inputted it into the spreadsheet. Each of the five sheets was then given a column containing the respective school year.  

I then inputted additional variables about each school (charter vs public, grades served etc.) manually using information from the OUSD website and greatschools.org. All five of these sheets were then unioned together again using DB Browser. Finally, I inputted the master sheet into Geocodio to get precise latitude and longitude coordinates for each school. I also generated a few basic charts in plotly to go along with the story. 

To produce the scrolling visualization, I uploaded the master sheet to Mapbox Studio and created 15 layers (one for White students, one for Black students and one with the text labels for every school year in the dataset) by filtering the data on the “Ethnicity” and “school_year” fields of the database and then styled them. Using templates provided by the Mapbox team, I then modified some HTML, CSS and JavaScript code to take advantage of the styled base map and layers. The Javascript code uses the Mapbox GL JS and Scrollama libraries to construct the final “scrollytelly” visualization. The final visualization is hosted on GitHub Pages here: https://as9934.github.io/suspensions_viz/.
