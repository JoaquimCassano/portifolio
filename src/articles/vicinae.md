---
title: "Vicinae: first impressions"
date: "2025-10-17"
---

Ever since [Raycast](https://www.raycast.com/) released, I've always loved the concept of having "one launcher to rule it all". That being said, as a former [Albert](https://albertlauncher.github.io/) user (**really** good btw), I really wanted to test raycast. However, there is one small problem: I'm a linux user.

## The road to an alternative

Desperate to find an alternative, I started looking for apps similar to raycast. The first one I found was [Flare](https://github.com/ByteAtATime/flare) (formerly _raycast-linux_), which was a really nice proof of concept, being the first linux launcher to be compatible with raycast extensions, but far from being a usable product. The problems I found with it were:

- performance
- performance again
- did I mention performance?
- 99% of raycast's extensions didn't work
- no developer-friendly way to create your own extensions
- wasn't compatbiel with PopOS! at the time (I had to switch distros just to try it)

## The discovery of Vicinae

Disappointed, I moved back to my good-old Albert, and kept using it until I finally discovered [Vicinae](docs.vicinae.com), the best launcher for Linux by a mile (imo).
![vicinae demo](https://docs.vicinae.com/demo.gif)

---

## Why I love it

- Performance
  > Unlike Flare, Vicinae is blazing fast: just hit the hotkey, type the first letters of what you were thinking, and let it magically guess what you want to do (trust me, it works).
- Themes/UI

  > Vicinae's just gorgeous. With support for custom themes (including [Catpuccin themes](https://catppuccin.com/), which I love) and subtle animations that make the experience better, the app is just fun and pleasing to use.

- Developer-friendly
  > Creating a extension for Vicinae is just so easy, that even I (_a developer who hates front-end and react with all my passion_) had fun developing [some things](https://github.com/JoaquimCassano/vicinae-extension-yt-download) with it.
- Shortcuts
  > [Shortcuts](https://docs.vicinae.com/shortcuts) allow me to quickly open apps and urls. In my case, I have one shorcut for google search and one for quickly finding sinonyms of words on https://www.sinonimos.com.br

## Problems

## Raycast extension's compatibility

Just like Flare, most Raycast extensions are unstable or simply don't work at all. The most common causes are:

- Login/OAuth is necessary
- It uses Raycast AI
- It requires AppleScript

This way, some of the most used raycast extensions like [Spotify](https://www.raycast.com/mattisssa/spotify-player), [Github](https://www.raycast.com/raycast/github) and [Google Chrome](https://www.raycast.com/Codely/google-chrome) are impossible to be run. Or are they?

### The workaround

Remember how I mentioned how easy it is to develop extensions to Vicinae? Well, tweaking/debugging existing raycast extensions is just as simple. Even the official docs have a guide on [how to do that](https://docs.vicinae.com/extensions/debug-raycast)!

That being said, if you have basic typescript knowledge (or money to spend on AI tokens),you can easily modify some of the extension's code to make it work on your system: most of the time, simply modifying the commands to linux commands and the function from `useAppleScript` to `exec` or refactoring the auth by using tokens stored on localstorage _(I know, I know, not the best idea. But you're the only user of your extension, so why do you care?)_ instead of PKCE is more than enough.

Per example, I tweaked the Spotify extension's auth to make it work on Vicinae in around 15 minutes, and it was really worth it!

> (you can get the tweaked code [here](https://github.com/JoaquimCassano/vicinae-spotify-extension) if you want)

![alt](/articles/spotify-demo.gif)

# Conclusion

Overall, Vicinae is incredible. Shout to all the developers that made this app possible. I really recommend at least trying it, and maybe developing something? I promise you it's fun.
