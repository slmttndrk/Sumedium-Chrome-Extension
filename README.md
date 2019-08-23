
# 1. INTRODUCTION

<br>

In this project, I created a Chrome Extension that summarizes Medium Turkish pages. This help readers to 

gain time by preventing them reading long articles in Medium Turkish pages. I order to handle the summarization 

task, I used a [Text-Summarizer](http://aiaas.verius.com.tr/text_summarization) API. Please contact with [me](https://www.linkedin.com/in/selamettin-dirik/) for further info about API

<br>

# 2. IMPLEMENTATION

<br>

This project is mainly constructed on three sub files

* manifest.json

* jquery-3.4.1.min.js

* eventPage.js

<br>

## 2.1. manifest.json

<br>

* In this file, you define the version, name , description, icons, background scripts, permissions 

of your extension. And also, I added "browser_action" element, since our Chrome Extension is a 

[Browser Action](https://developer.chrome.com/extensions/browserAction) extension. In background scripts, I defined two scripts that will be running at the 

background when you activated the extension

<br>

## 2.2. jquery-3.4.1.min.js

<br>

* [Jquery](https://jquery.com/) is a fast and small javascript library. It makes things like HTML document traversal and 

manipulation, event handling, animation much simpler with an easy-to-use API that works across a 

multitude of browsers. So, it helps to run our extension on the browser

<br>

## 2.3.  eventPage.js

<br>

*   In this file, I use [Chrome Extension APIs](https://developer.chrome.com/extensions/api_index) in order to execute scripts. The codeflow starts with 

clicking extension button. After that the extension executes an embedded script that inspects the 

related [Medium Turkish](https://medium.com/turkce) page using jquery. Then, the script extracts the article and posts it to the

Text-Summarizer. When we got the response, our extension highlights the summarized part of article

<br>

## 3. IMPROVEMENTS

<br>

*   The extension can be permitted for different web pages after inspecting their page sources

<br>

## 4. CONCLUSION

<br>

*   In this project, I learned to build a Chrome Extension using dynamic API calls. I can post some 

data through our extension and get response from it. By creating this extension, I understand the 

concept of creating a service and converting it to an endpoint in order to respond outer API calls,

especially extension calls. I also added a [demo png](https://github.com/slmttndrk/Sumedium-Chrome-Extension/blob/master/demo.PNG) to visualize our extension's work.

<br>

## 5. RESOURCES/THANKS

<br>

*   I completed this project in cooperation with [Verius Technology Company](https://verius.com.tr/).The 

Text-Summarizer tool is provided me by them. I also used javascript, jquery and Chrome APIs.


<br>
