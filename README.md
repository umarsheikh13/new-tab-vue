# New Tab Vue

A component based new tab page chrome extension made with VueJS

![Screenshot](https://raw.githubusercontent.com/umarsheikh13/new-tab-vue/master/src/assets/img/screenshot.png)

## About

I used to use usepanda.com (pun intended) quite a lot to stay up to date with development/designer news and to get daily inspiration from Dribbble but it kept crashing for me so I thought it would be great to create something myself which I can fully customise to my needs so the New Tab Vue was born.

I really wanted to try out VueJS because I was interested in their way of creating components using `.vue` files so it was chosen as the framework of choice. A lot can be done with this extension as it's fully customisable and you could create any type of component you want, I was thinking of creating a component that gets my Monzo card's balance just so I know how much I have if I need to pop out, so the possibilities are endless. Feel free to fork and get creative.

## Roadmap and To-do

- Refactoring
- Speed up compilation
- Create more components

## Installation

1. Clone this repo
2. Create a config.json file (see below)
3. Run `yarn build`
4. In the Chrome menu go to More Tools > Extensions
5. Click on the `Load unpacked extension..` button
6. Open the repo location
7. Open the new tab page in Chrome and you should see the New Tab Vue page

## Config

This is currently powered by a `config.json` file (example given below) which should be added to the root of the repo. You can essentially create an infinite amount of variations of the page with an infinite number of components... well until the browser crashes! More information will be added soon hopefully to explain what each property does but feel free to figure it out until I can do that.

```json
{
    "userSettings": {
        "firstName": "Umar",
        "lastName": "Sheikh",
        "backgroundColor": "#fafafa"
    },
    "globalSettings": {
        "mediaQuery": {
            "s": 480,
            "m": 768,
            "l": 992,
            "xl": 1200
        }
    },
    "componentSettings": {},
    "gridSettings": {
        "padding": 24,
        "borderRadius": "5px",
        "boxShadow": "0 5px 20px rgba(0, 0, 0, 0.1)",
        "layout": [
            [
                [
                    {
                        "c": "FancyClock",
                        "s": {
                            "slideshowSpeed": 10000,
                            "slideshowPhotoset": "<the collection of photos from unsplash.com i.e. collection/218092>",
                            "owmApiKey": "<open weather map API key goes here>"
                        },
                        "x": 50,
                        "y": 50
                    }
                ],
                [
                    {
                        "c": "HelloWorld",
                        "x": 25,
                        "y": 50
                    },
                    {
                        "c": "PrayerTimes",
                        "x": 25,
                        "y": 50
                    }
                ]
            ],
            [
                [
                    {
                        "c": "Dribbble",
                        "x": 25,
                        "y": 100,
                        "s": {
                            "apiKey": "<dribbble api key goes here>"
                        }
                    }
                ]
            ],
            [
                [
                    {
                        "c": "RSS",
                        "x": 25,
                        "y": 50,
                        "s": {
                            "url": "https://www.designernews.co/?format=rss",
                            "headerBgColor": "#2d72d9",
                            "href": "description"
                        }
                    }
                ],
                [
                    {
                        "c": "RSS",
                        "x": 25,
                        "y": 50,
                        "s": {
                            "url": "http://www.echojs.com/rss"
                        }
                    }
                ]
            ]
        ]
    }
}

```

## Contributing

1. Fork it!
2. Create your feature/hotfix branch: `git checkout -b feature/my-super-feature`
3. Commit your changes: `git commit -m "Added some feature"`
4. Push to the branch: `git push origin feature/my-super-feature`
5. Submit a pull request

## License

[MIT License](http://opensource.org/licenses/MIT)
