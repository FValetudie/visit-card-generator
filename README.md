# Visit Card Generator

Author: Floris VALETUDIE

Date: 2021-02-10

## How to launch the project

The app is already deployed on vercel, if you wish to try it : https://visit-card-generator.vercel.app/. Otherwise, follow the steps described thereafter.

### Clone the repository
```
git clone git@github.com:FValetudie/visit-card-generator.git
```

### Launch Visit Card Generator
```
cd visit-card-generator
yarn install
yarn dev
```

### Test it
Go to http://localhost:3000

To create a visit card, you'll need to type in your information in the settings tab.

The settings also include ways to save a visit card, or load a previously save one.

Finally, the "Share" button will allow to to share the visit card.

For a quick start, you can also test this [example visit card](http://localhost:3000/?visitCard=eyJpc0dyYWRpZW50Ijp0cnVlLCJncmFkaWVudEFuZ2xlIjoxMzQsImRhdGEiOnsiZmlyc3RuYW1lIjoiSm9obiIsImxhc3RuYW1lIjoiRG9lIiwicG9zaXRpb24iOiJFbXBsb3llZSIsImNvbXBhbnkiOiJTT01FIENPTVBBTlkiLCJlbWFpbCI6Impkb2VAc29tZWNvbXBhbnkuY29tIiwidHdpdHRlciI6IkpvaG5Eb2U5MSIsInBob25lIjoiMDYwNjA2MDYwNiJ9LCJzdHlsZSI6eyJoZWlnaHQiOjMwMCwid2lkdGgiOjU1MCwiYmdDb2xvcjEiOiIjZTk2MzYzIiwiYmdDb2xvcjIiOiIjNTIzYmMwIn0sImZvbnRTdHlsZXMiOnsiZm5hbWUiOnsiY29sb3IiOiIjZmZmZmZmIn0sImNvbXBhbnkiOnsiY29sb3IiOiIjZmZmZmZmIn0sInR3aXR0ZXIiOnsiY29sb3IiOiIjMmU5ZmU1In0sImVtYWlsIjp7ImNvbG9yIjoiI2Y1ZjNmZSJ9LCJwb3NpdGlvbiI6eyJjb2xvciI6IiNkNWQ1ZWQifSwibG5hbWUiOnsiY29sb3IiOiIjZmZmZmZmIn0sInBob25lIjp7ImNvbG9yIjoiI2I4YjVkZCJ9fSwibG9nbyI6ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR1FBQUFCa0NBWUFBQUJ3NHBWVUFBQUJoR2xEUTFCSlEwTWdjSEp2Wm1sc1pRQUFLSkY5a1QxSXcwQWN4VjlUcFZJcURsYVE0aENoT2xrUUZYSFVLaFNoUXFrVlduVXd1ZlFMbWpRa0tTNk9nbXZCd1kvRnFvT0xzNjRPcm9JZytBSGk1dWFrNkNJbC9pOHB0SWp4NExnZjcrNDk3dDRCUXFQQ1ZMTnJIRkExeTBnbjRtSTJ0eW9HWGlFZ2lBRU1JeUl4VTU5THBaTHdIRi8zOFBIMUxzYXp2TS85T1hxVnZNa0FuMGc4eTNUREl0NGdudDYwZE03N3hHRldraFRpYytJeGd5NUkvTWgxMmVVM3prV0hCWjRaTmpMcGVlSXdzVmpzWUxtRFdjbFFpYWVJbzRxcVViNlFkVm5odk1WWnJkUlk2NTc4aGFHOHRyTE1kWnBEU0dBUlMwaEJoSXdheXFqQVFveFdqUlFUYWRxUGUvZ2pqajlGTHBsY1pUQnlMS0FLRlpMakIvK0QzOTJhaGNrSk55a1VCN3BmYlB0akJBanNBczI2Ylg4ZjIzYnpCUEEvQTFkYTIxOXRBRE9mcE5mYld2UUk2TnNHTHE3Ym1yd0hYTzRBZzArNlpFaU81S2NwRkFyQSt4bDlVdzdvdndXQ2EyNXZyWDJjUGdBWjZpcDVBeHdjQXFORnlsNzNlSGRQWjIvL25tbjE5d05TZEhLYUpSTUVLZ0FBQUFaaVMwZEVBQUFBQUFBQStVTzdmd0FBQUFsd1NGbHpBQUF1SXdBQUxpTUJlS1UvZGdBQUFBZDBTVTFGQitVQ0NoVWtPcklweWhvQUFBQVpkRVZZZEVOdmJXMWxiblFBUTNKbFlYUmxaQ0IzYVhSb0lFZEpUVkJYZ1E0WEFBQUNRRWxFUVZSNDJ1M2MwVzNiTUJTRjRVUEJBMmdFYldCdFVtL1FGYkpKUjhnSzZRUmR3WjRnNmdUUkJyY3ZURnNVUlV3cHBFbnEvaCtndDVqUTlRbEp3Nkt2QkFBQUFBQUFBUFFoOUh6elpqWkptaVNOOFpLa05WNUxDR0Voa1BJaGpKTG1lSjAvQ2tUU1RkSlYwaldFc0RML0Nzd0lNM3N5c3g5bTltYjN2Y1cvZllxekNSbkRtTTNzbTVtOTJuYXY4YlV6NzJTK01KNFRaOFZIcytXNTlWQk9uV3pjWHlWZC90b245aGpqR0t1WnJhMXUrRU1IRy9nbFF4ai9obktKWXhQSVJyT2tML0dUVkM1VEhITW1rSDJCekIyTmU5eEE0dDV4enJSVS9XL3BPcmY0VWJqbEdUSmxYcW9lUGY3aEFoa0x6WTVIalU4Z0JBSlhnYngvU2RqcitBUkNJR1V0OGVwMS9HTUZFcjlydWhYNkwxNGwzVnI4UHF2MVRmMGFyMTdHZFJISTk4eEx5eExISkpBZHk5WXE2U1ZlT1phdTMrUHhTUGNUUEQyZzZpMlV3ei9DUGZVU1NBamhhbWFycEovNjh6eGpURmlpM3ZlaGx4Nk9CWEVNaUVDeWhqUHBZQWZsQUFBQUFBQUFBQUFBQUFBQUFBQjVaVGtvNStuQVd1bGF3eWR1ekUxbnQrWnI5ZFRacmZsYVBYVjJhNzVXVHorY3FWWHJhY3ZVbFpQT2JqVnJIUkp2MEUxbnQ5cTFwdjdvMDFObnQ2cTFiZ25FUzJlM3FyVU9DVk40a3BQT2JpM1VPaVJPdDVKdldPbnhXN3FYdStNUGljbDZhU1JXdlZZQzZUQVFQRkJLSUo0YWlWV3ZsVUE2REdTUm44NXUxV3U5RzRpbnptNHQxSnE2cVh2cTdGYTExaTJCZU9uc1ZyWFdJWEVxdStuczFsV3RQS0Jxc0ZZZTRaYXQ5YlJqU3J2bzdGYXJWbzRCTlZZckIrV29GUUFBQUFBQUFOamxGMVpaVlFRK1FrTWxBQUFBQUVsRlRrU3VRbUNDIn0%3D)

## Improvements

### URL shortener for sharing
First improvement I would like to implement would be a prettier share URL.

To do that, the first step could be using a compression method to get a shorter visit card data to insert in the URL. Already existing librabries can help achieve this : [JSONCrush](https://github.com/KilledByAPixel/JSONCrush), [json-url](https://github.com/masotime/json-url) using lzma compression, etc.

Those compression methods can reduce the size of the data, but the gain stay marginal. Therefore, the actual solution to this problem would be to use  a URL shortener service. Some of them provide APIs to automatically create a short link (bitly, cuttly, tinyurl, etc.).

My choice would probably be google's [Firebase Dynamic Link](https://firebase.google.com/docs/dynamic-links/rest) which provides a rich API and monitoring.

### localStorage
Browser API allowing to save data directly on the browser and retrieve it.
It is used to save the visit cards.

It is extremely easy to use, but could probably be replaced with [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) which handles objects better and removes the necessity to serialize (stringify) our objects.

## Other ideas
### In-place editing
Directly allow the user to edit their texts on the visit card could be a lighter experience. It would also leave only the styles to edit in the settings (though some could probably also be edited right next to the text: options visible on focus, for example).
### Text size
Next to the color picker, a basic input allowing to change the font-size
### Persistent visit card
I would also like to finish my failed attempt to have an automatic save of the current visit card that could be retrieved even after a refresh of the page. The same concept use to save/load visit cards could be used.
### Background images
Allowing the user to choose a provided background image, or even to upload one (as done for the logo) would probably be simple to do. I did not take the time to implement it during this exercise, however. It would also be prefereable to have short URLs before as the image would be added to the visit card data.
### Tutorial
A simple tutorial showing the user where to open the settings, how to change colors, where to save, load or share a visit card, etc.
### Prettier visit card load popup
Each visit card available could have its own preview. This would need to save an image version of the visitCard, or creating modulable card preview

Also, this popup could be more user-friendly, prettier, better with user experience...

## What I would do differently is I started over

## Libraries and shortcuts
To work on this exercise, I used several libraries.

### classnames
I used this library to simplify the use of classs for my styles. Used with nextJS's style, it allows to activate or deactivate a class easily.

### Material icons
[material.io](https://material.io/) is a typical design and icon library with thousand of icons available.

### react-color
Package [react-color](https://github.com/casesandberg/react-color) is an easy way to add a color picker to a project.
I created a container to allow displaying the current color and showing the colorpicker only when needed.

### react-toast-notifications
Package [react-toast-notifications](https://github.com/jossmac/react-toast-notifications) is an implementation of toast-style notifications
