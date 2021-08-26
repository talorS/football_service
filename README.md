Football Matches fixtures & results - RESTful API Service (implemented in Node + Express)
This project provides a football game service which allows the client to get the fixtures (upcoming matches) and the results of football matches from 2 csv file sources:

result_played.csv
result_upcoming.csv

The restful api service is running on port 8800.
The system provides 4 different methods:
• Get a list of matches by team
• Get a list of matches by team & status (played/upcoming)
• Get a list of matches by tournament
• Get a list of matches by tournament filtered by status


Instructions:

1. Extract "football_service" folder and open it.

2. Open the cmd from the folder path.

3. In order to set on the RESTful API Server - Write the following command in the console:
node app.js

4. Open your browser or Postman app.

5. Navigate to: http://localhost:8800/api/football (in postman make a GET request with that url)

• Get a list of matches by team:
http://localhost:8800/api/football/team/name

• Get a list of matches by team & status (played/upcoming):
http://localhost:8800/api/football/team/name/status
 
• Get a list of matches by tournament:
http://localhost:8800/api/football/tournament/tournamentName

• Get a list of matches by tournament filtered by status:
http://localhost:8800/api/football/tournament/tournamentName/status
 
