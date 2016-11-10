## [Humanize](http://humanizebot.herokuapp.com)

Engineer empathy and foster emotional intelligence in your workplace. HumanizeBot organizes workshop style sessions and guides participants through specified discussion topics. Results of said sessions can be displayed, and user suggestions for future session topics can be received. Any data received for analysis is anonymous.

### Authored by

* Christopher Chan ([@christopherchan35](http://github.com/christopherchan35))
* Elisabeth Bahadori ([@elliedori](http://github.com/elliedori))
* Ilaria Varriale ([@HigitusFigitus](http://github.com/HigitusFigitus))
* Young Ju Park ([@parkyngj](http://github.com/parkyngj))

### App Usage Flow

* An employee is pinged on Slack to be notified of an upcoming EE session.

* An employee takes an anonymous survey (provided by HBot) before the EE session about their emotional/mental state regarding company dynamics.

* An employee is pinged on Slack to be notified of
  * EE session topic
  * Their pairs/groups for the session
  * Some definitions and/or helpful links centered around the topic

* An employee is pinged on Slack, and is prompted to meet with their pair/group

* HBot pings the pairs/groups
  * Prompts one person to begin conveying their thoughts about the topic (2 minutes)
  * Prompts switching off who speaks (2 minutes)
  * Prompts decompression time (1 minute)
  * Declares end of session

* An employee takes the same anonymous survey as before (provided by HBot) about their emotional/mental state after the conclusion of the EE session

* A Humanize admin (typically HR or C-Level company member) can view the aggregated results and evaluate next steps

### MVP functionalities

* Decoupled architecture consisting of:
  1. Rails back-end API
  2. Rails front-end web application
  3. Third-party hosted Slack bot/application

* Rails back-end API features
  * receives GET requests for JSONs of requested resources
    * builds customized results based on parsing of appropriate query strings
  * receives POST requests for creation of resources in database
  * cursory documentation

* Rails front-end web app features
  * front page for displaying further information about HBot and engineering empathy
  * initializes creation of resources in back-end API database from user input
  * integrates data visualization from parsed data from back-end API

* Slack bot/application features
  * Timed messages
  * Responsive, conversational mannerisms
  * Receives user-generated suggestions for EE topics

### Team Dynamics

* Schedule
  * 8am - 8pm (very flexible)

* StandUps/Check-ins
  * 9am
  * 2pm
  * 6pm

* Topics
  * Daily Goals
  * Victories
  * Blockers + possible resolutions
  * Gratitude
  * Group Hug 💕

* Slice/Pairing
  * Pair of twos.
  * Horizontal slice.
  * Person who makes pull request does not merge it themself.
  * Collaborate to fix and solve merge conflicts.
  * Branch for each feature.
