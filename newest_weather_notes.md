##Overall Questions
Can we make it so that individual volumes of each wave file are easily adjustable?

Can we mock up some weather patterns sound that I can “sound check” different temperatures, wind speeds, and rain and set my levels accordingly on site?

How do we account for fluctuations in wind speed or rains amount that would make sudden or awkward changes back and forth to volume controls or sound triggers?


##Overall design

We will be using the following Sensors:
* Radiation Sensor
* Temperature Sensor
* Precipitation Sensor
* Wind Sensor

Either all the Sun Sounds or all the  Clouds Sounds or some combination thereof will always be going UNLESS one of the following conditions are true…
Rain is at .02 inch/hr OR wind is averaging more than 4mph

Also these are always true…
* Wind will not cancel rain sounds
* Rain will not cancel wind sounds


##Sun and Clouds

Cross fading between the sun and the clouds(no-sun) sound will function as follows. Between 0-150 w/m2 we would hear only the clouds sounds. At 150 w/m2 the cloud sounds could begin fading down and the sun sounds could begin fading up.  Then, when we hit 300 w/m2 the cloud sound could be faded completely to silence and the sun sound could be faded completely up.  

_Cross fades between banks of sounds depending on temperature with Sun/Wind/Clouds_

Different temperature ranges are assigned different groups of sounds.  

For instance clouds is labeled 11-32 and the next cloud sound temp range is 32-38.  The cross fade should begin at 32 degrees  and end at 33 degrees.  So that the 32-38 range begins at 0dB at at 32 degrees and fades into its peak volume at 33 degrees.    And the 11-32 range Cloud sound would begin fading down from its peak volume at 33 and would land at 0dB at 33 degrees.  One degree of cross fade.    The same would go for the Ear Wind sound AND some of the Sun Sounds with the following exceptions…

_NO Cross fades on these files...(either between temps or on individual files)_
* Sun beating
* Sun wave1
* Sun wave2
* Sun wave3
* Sun wave4
* Sun Flare
* Sun Spot
 

_Also, The following Files will need to be locked during playback (as if they were stereo files)_
 * Sun beating
 * Sun wave1
 * Sun wave2
 * Sun wave3
 * Sun wave4
 * Sun Shimmer
 * Sun Warm
 * Sun Shine


##WIND

I think a the 3 second (or instant?)data woudld work best for Ear Sound.


I think a 2 minute Rolling Average wind speed will work best for wind breeze sounds.<br/>
-but maybe a 10 minute would be better = less radical shifts?
-or mayber OVERALL Ear Sound volume is 2 minute average and Breeze sound is 10 minute?

###Wind Breeze sounds
* with each uptick in wind speed the length of time it takes the the wind sound to pass across the array increases
* sound Pans across all six channels
* Fastest wind = 4 seconds to pass array?  10-15 seconds of silence between each pass.
* Slowest wind = 12 seconds to pass array?  20-25 seconds of silence between each pass.
* dynamically move from slowest to fastest as the wind speed changes
* wind Breeze sounds should phase against each other in randomized patterns

###Wind Ear Sound
* volume goes up and down and pans between two channels simultaneously


**average = 0.1mph-1mph**<br/>

**average = 1mph**<br/>
 and breeze 1 starts at -inf dB

**average = 2mph**<br/>
breeze 2 starts at -inf dB
ear wind starts at .1mph at -inf dB

**average = 3mph**<br/>
ear wind fades to volume position 1

**average = 5mph**<br/>
breeze 1 and 2 fade up to Volume position 1 

**average = 7mph**<br/>
breeze 3 starts at -inf dB

**average = 8mph**<br/>
breeze 3 arrives at volume position 1 and all clouds/sun sounds begin to fade out EXCEPT clouds 1 and Sun 1
ear wind fades to volume position 2

**average = 9mph**<br/>
breeze 3 at volume position 1

**average = 10mph**<br/>
breeze 4 starts at -inf dB

**average = 12mph**<br/>
breeze 1,2,3,4 land at top volume position  
 - clouds/sun are completely faded out EXCEPT clouds 1 and Sun 1 

##RAIN

**0.001**
* Notes - start at peak db (-20)  but more spread out in time
* Plucks - begins fading in from 0dB
* Climber - begins fading in from 0dB
* Light Crunch- begins fading in from 0dB

**0.02**
* Notes - happening faster
* All Clouds/Sun Sounds - begin fading down in volume
* Plucks - land at low volume Setting (-18dB)
* Climber - land at low volume Setting (-22dB)
* Light Crunch- land at low volume Setting (-18dB)
* Strums begin fading in from 0dB 

**0.05**
* Notes - happening faster
* All Clouds/Sun Sounds - have faded down to 0dB
* Strums- land at low volume Setting (-6dB)
* bigger strum - begins fading in from 0dB
* medium strum - begins fading in from 0dB
* Low Crunch- begins fading in from 0dB

**0.1**
* Notes - at their fastest
* bigger strum - land at low volume Setting (-7dB)
* Notes - begin to fade down in volume

**0.2**
* Notes - have faded down to 0dB
* medium strum - land at low volume Setting (-5dB)
* Low Crunch- land at low volume Setting (-11dB)
* high strum - begins fading in from 0dB
* jingle- begins fading in from 0dB

**0.24**
* high strums - land at low volume Setting (-7dB)
* jingle- land at low volume Setting (-11dB)

**0.25**
* drone - begins fading in from 0dB
* blur - begins fading in from 0dB
* Plucks - begin to fade up towards peak volume
* Climber - begin to fade up towards peak volume
* Light Crunch - begin to fade up towards peak volume
* Strums - begin to fade up towards peak volume
* bigger strums - begin to fade up towards peak volume
* medium strums - begin to fade up towards peak volume
* low crunch - begin to fade up towards peak volume
* high strums - begin to fade up towards peak volume
* Jingle - begin to fade up towards peak volume


**0.3**
* drone - lands at peak volume setting (+10dB)
* blur -  lands at peak volume setting (-11dB)
* Plucks -  lands at peak volume setting (-10dB)
* Climber - lands at peak volume setting (-10dB)
* Light Crunch -  lands at peak volume setting (-10dB)
* Strums -  lands at peak volume setting (2dB)
* bigger strums -  lands at peak volume setting (-1dB)
* medium strums -  lands at peak volume setting (0dB)
* low crunch -  lands at peak volume setting (6dB)
* high strums -  lands at peak volume setting (0dB)
* Jingle -  lands at peak volume setting (-8dB)

##Hail
* Hail hits Similar to Rain Notes ?
* Hail loop happens when more hail is falling?  
* Not sure what kind of averages we will get here.

