---
title: "Hotel Opening: Anthrocon 2019 Report"
author: "Guest User"
date: "2019-02-02T17:19:52-0500"
draft: false
aliases:
    - "/news/2019/2/2/hotel-opening-anthrocon-2019-report"

banner: "pittsburgh-at-night-small.jpg"
banner_author: ""
banner_url: ""
---

Yesterday, we [opened general hotel reservations](/hotel), and that resulted in a huge rush of members booking hotel rooms. **1,000 rooms were booked in the first 15 minutes!** This was completely expected, and we kept track of how things played out on social media, and also took a survey of members who booked hotel rooms to see how things went.  In this post, we’re going to share what we learned based on those survey results and Twitter activity.

## Hotel Bookings

First, did people who booked a hotel room get the hotel that they wanted?

{{< chart >}}
title:
    text: "Did you get the hotel you wanted?"

series:
    - type: "pie"
      data:
        - name: "No: 30.8%"
          value: 30.8
        - name: "Yes: 69.2%"
          value: 69.2
{{< /chart >}}

For nearly 70% of you, the answer is yes.  This makes us happy, but we would like to see the number higher—ideally 100% of our attendees would get a room in the hotel of their choice.  This is something we continue to work on each year by adding new hotels and getting bigger room blocks in existing hotels.

Now, what hotels did people book their rooms in?

{{< chart >}}
title:
    text: "Which hotel did you book?"

series:
    - type: "pie"
      data:
        - name: "Westin: 43.8%"
          value: 43.8
        - name: "Omni: 13.9%"
          value: 13.9
        - name: "AC Hotel: 8.3%"
          value: 8.3
        - name: "The Drury: 7.6%"
          value: 7.6
        - name: "Other: 26.4%"
          value: 26.4
{{< /chart >}}

One of these things is not like the other, and that would be the AC Hotel.  It was recently constructed and this is their first year as a partner hotel for us.  It was the 4th to sell out (at 11 minutes after hotels opened) and accounted for 8.3% of all bookings yesterday.  At 0.2 miles from the David L. Lawrence Convention Center, we think it will be a fine addition to our list of partner hotels for Anthrocon 2019, and hope that our attendees will enjoy staying there.

Next, where did people get the booking link from? [We published the link in a few different places](/news/2019/1/14/what-to-expect-when-hotels-open) at Noon, so that people could get the link from the place that was most convenient for them.  Here’s how that played out:

{{< chart >}}
title:
    text: "Where did you get the hotel link?"

series:
    - type: "pie"
      data:
        - name: "Our Website: 55.6%"
          value: 55.6
        - name: "Twitter: 23.8%"
          value: 23.8
        - name: "Telegram: 13.5%"
          value: 13.5
        - name: "Other: 7.1%"
          value: 7.1
{{< /chart >}}

This is actually very significant, because we did not think that nearly as many of you got the link from the website as you did.  But it turns out that the technique of “refresh the hotel page at Noon” was the most common one.  The good news here is that the combination of CloudFlare’s front end and SquareSpace’s back end were able to handle the load.  We monitor our website with [NodePing](https://nodeping.com/), and saw 100% uptime yesterday.  That’s great news, and we will continue to announce the link on the website first in coming years.

This is what traffic to our website looked like over the past month:

{{< img src="2019-hotel-website-visits.png" alt="2019-hotel-website-visits.png" hint="drawing" >}}

The spike on January 8th is when [we announced our first two Guests](/goh).  And that big spike on February 1st is of course when we opened hotel reservations.  (The exclamation points are SquareSpace’s way of letting us know that traffic was unusually high that day.)

## Twitter Activity

Since before last year’s convention, we have been pulling every tweet which mentions “Anthrocon” from Twitter’s API, [then performing sentiment analysis on those tweets](https://github.com/dmuth/twitter-sentiment-analysis).  This lets us see what people are talking about, and how happy (or unhappy) they are.

And this is what sentiment looked like on Twitter for February 1st:

{{< img src="2019-hotel-tweet-sentiment.png" alt="2019-hotel-tweet-sentiment.png" hint="drawing" >}}

There was of course a huge spike of tweets starting at Noon,which then dropped off.  But attendee sentiment remained overwhelmingly positive throughout the day, which is good to know.  While there is always room for improvement, the positive feelings outweigh the negative ones.

Finally, there is the raw volume of tweets.  Pictured below is the volume of tweets mentioning “Anthrocon” over the past week:

{{< img src="2019-hotel-tweet-volume.png" alt="2019-hotel-tweet-volume.png" hint="drawing >}}

The first hump is from last Monday, when we announced [Benjamin Diskin as a Guest](/goh).  The smaller hump from the middle of the week is when we opened hotel rooms to Supersponsors.  And that huge spike on the far right?  That’s when we opened general hotel reservations.

So that sums up how hotel openings went this year.  Remember, if you have any issues with your reservation, you can email **housing@visitpittsburgh.com** for assistance.

See you at the con!

— Giza
