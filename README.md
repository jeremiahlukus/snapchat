# CatChat

## CatChat is a Snapchat Clone built using React Native

# Contributing

1. Fork & create a branch

create a branch with a descriptive name ( Choose short and descriptive names add your initials to the beginning: `jlp-oauth-migration`, `jlp-issue-15` )
Write a good commit message ( The summary line (ie. the first line of the message) should be descriptive yet succinct. Ideally, it should be no longer than 50 characters. It should be capitalized and written in imperative present tense. It should not end with a period since it is effectively the commit title )

2. Implement your fix or feature
View your changes make sure to take a look at your changes.

3. Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with the master branch:
git remote add upstream `git@github.com:jeremiahlukus/snapchat`
`git checkout master`
`git pull upstream master`
Then update your feature branch from your local copy of master, and push it!
`git checkout jlp-oauth-migration`
`git rebase master`
`git push --set-upstream origin jlp-oauth-migration`
Finally, go to GitHub and make a Pull Request :D

4. Merging a PR

Make sure at least one other group member has looked over your code
It has no requested changes.
It is up to date with current master.


# Getting started

npm install yarn start react-native run-ios --simulator="iPhone 6" 

android simulator: Double tap R on your keyboard to reload,{'\n'} Shake or press menu button for dev menu

ios simulator command r to reload


# Who we is

Problem Statement:

CatChat will be a social media platform which enables users to share personalized videos and photos to the friends in their contact list or other users nearby using the “CatChat Story” feature. The implementation of this messaging app is proposed to be in fully functional and available for download in the Android app store by November 30th 2017.

What is expected by the new social media app?

Users will be provided a username of their choice, option to add a photo or avatar, and a profile that will allow users to add personal details such as their full name, email, location, and date of birth. Accounts will be password protected, in order to protect the user’s personal information.

CatChat shall provide the functionality to view and add/remove friends when the user chooses. Friends can be added via username and email. To remove the friend the user would click on the existing friend showing the friends profile showing their email username and a avatar a “delete friend” link will at the top right of the profile.

CatChat shall provide the ability for its users to send personalized pictures or videos (referred to as “snaps”) to one or more friends or to the general public. Users can add filters, stickers, or text to their snaps in order to personalize them. All snaps will only be visible to the recipient for the set time (up to 10 seconds) which is determined by the sender.

Users will have the option of sending one or many snaps to their intended viewers at a time. In addition, users will have the option of sending their snaps to a specific person, group of people, their entire friends list, or the general public using the “CatChat Story” feature. When the snaps are received by the recipient, the sender will be able to tell when it has been opened, replayed, or screenshotted. If the recipient elects to screenshot the snap, the sender will receive a notification alerting them.

CatChat shall provide the option to add text to their photos/videos by clicking on the text icon. Once clicked a text field will be displayed for you to type in your desired text then send it.

CatChat shall allow the user the option to draw on their photos/videos clicking on the pencil icon. Once clicked a you will be able to draw freely on your picture and send it.

CatChat shall allow the user to implement AR capabilities while taking pictures by long pressing on the user’s face. Once you long press, the app will recognize the user's face then you will be able to add a lense to your picture. Once you add a lense to your photo you will be able to send it.

CatChat shall allow the user to implement AR capabilities while taking videos by long pressing on the screen you will be able to choose between different objects to place on your screen CatChat is intended to be used by users of all ages, and will be available on all iOS and Android.The app will be available to download as well as more information about the app at: https://catschats.herokuapp.com/
