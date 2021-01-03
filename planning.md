# App Structure

* App
  * PomControl
    * Button for Pomodoro
    * Button for Short Break
    * Button for Long Break 
  * Timer
    * Display current remaining time
    * Button for Start
    * Button for Stop
    * Button for Reset 


App must be stateful and must track: 

* Current pomodoro setting (pom, short or long break)
  * determines timer value 
* Current timer 
  * needs to get passed onto timer via props