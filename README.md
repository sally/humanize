# [Humanize](http://humanizebot.herokuapp.com)

Engineer empathy and foster emotional intelligence in your workplace. HumanizeBot organizes workshop style sessions called Humanize sessions, and guides participants through specified discussion topics. Results of said sessions can be displayed, and user suggestions for future topics can be received. Any data received for analysis is anonymous.

![Humanize App Snapshot](/public/humanizess.png)

## Authored by

* Christopher Chan ([@christopherchan35](http://github.com/christopherchan35))
* Elisabeth Bahadori ([@elliedori](http://github.com/elliedori))
* Ilaria Varriale ([@HigitusFigitus](http://github.com/HigitusFigitus))
* Young Ju (Sally) Park ([@sally](http://github.com/sally))

## MVP functionalities

* Decoupled architecture consisting of:
  * [Rails back-end API](http://github.com/HigitusFigitus/humanize-api)
  * [Rails front-end web application](http://github.com/parkyngj/humanize)
  * [Third-party hosted Slack bot/application](https://github.com/elliedori/humanize-bot)

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
  * Receives user-generated suggestions for Humanize topics

## App Usage Flow

* An employee is pinged on Slack to be notified of an upcoming Humanize session.

* An employee takes an anonymous survey (provided by HBot) before the Humanize session about their emotional/mental state regarding company dynamics.

  ![Sample Survey](/public/samplesurveyss.gif)

* An employee is pinged on Slack to be notified of
  * Humanize session topic
  * Their pairs/groups for the session
  * Some definitions and/or helpful links centered around the topic

* An employee is pinged on Slack, and is prompted to meet with their pair/group

* HBot pings the pairs/groups
  * Prompts one person to begin conveying their thoughts about the topic (2 minutes)
  * Prompts switching off who speaks (2 minutes)
  * Prompts decompression time (1 minute)
  * Declares end of session

* An employee takes the same anonymous survey as before (provided by HBot) about their emotional/mental state after the conclusion of the Humanize session

* A Humanize admin (typically HR or C-Level company member) can view the aggregated results and evaluate next steps

  ![Sample Data Visual](/public/sampledatass.gif)

## Team Dynamics

* Schedule
  * 8am - 8pm (very flexible)

* Stand-Ups
  * 9am
  * 2pm
  * 6pm

* Check-In Protocol
  * Victories
  * Blockers & resolutions
  * Goals
  * Gratitude
  * Group hug 💕

* Slicing
  * Horizontal slice
  * Pair for challenging features
  * PR author does not merge their own PR
  * Collaborate to fix and solve merge conflicts
  * Branch for each feature

## Special Thanks

A whole-hearted thank you to Ilya Parizhsky, counselor at Dev Bootcamp, for providing us valuable feedback and material for our project.

We would also like to thank all of the DBC teachers, mentors, Bobolinks, Coyotes, and Wolves of SF 2016 for their endless support and encouragement!
