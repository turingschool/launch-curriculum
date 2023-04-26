---
layout: page
title: How the Web Works Lab
---

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>This lab should be an individual or small group exploration.  Before breaking for worktime, show students how to open their Comman Prompt so that they can try out `curl`</p>
</aside>

## Lab Objectives
* Reinforce understanding of the HTTP request/response cycle
* Use a basic client to see the cycle in action

## Requests and Responses in Detail
## HTTP Requests and Responses

The HyperText Transfer Protocol gives us rules about how messages should be sent around the Internet. The system that initiates a connection sends a "request", and the system the answers sends a "response".

### HTTP Request

When a "client" (like a web browser) retrieves information, it sends a payload of data to a server as a "request". This request is made up of three main parts:

- A Request line, containing three piece of information:
  - the HTTP **verb** (also called an http method) for sending or retrieving information
  - the URI **path** of the resource where we're sending or retrieving information
  - the version of the HTTP protocol our "client" software is using, usually `HTTP/1.1`

- Headers, which are key/value pairs, which contain supplemental information about our request

- An optional body; we only send data to the server in the body when we are creating or modifying something

### HTTP Response

When the server or web application is finished processing our request, it will send back a response which is a payload of data, and is made up of three main parts:

- a Status line, containing three pieces of information:
  - The version of the HTTP protocol that this response is using
  - a 3-digit numeric "status code"
  - a user-friendly string description of what the "status code" means

- Headers, also sent as key/value pairs similar to the HTTP request

- An optional body; almost all responses will contain additional data in the body. In mod 2, our "body" payload will almost always be HTML.

## Seeing Request/Response in action
Let's open [Command Prompt](https://www.makeuseof.com/tag/a-beginners-guide-to-the-windows-command-line/) and run some commands to connect to Google's home page.

Enter `curl google.com -v` in a terminal window and review the output.

```
* Rebuilt URL to: google.com/
*   Trying 2607:f8b0:400f:800::200e...
* Connected to google.com (2607:f8b0:400f:800::200e) port 80 (#0)
> GET / HTTP/1.1
> Host: google.com
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Location: http://www.google.com/
< Content-Type: text/html; charset=UTF-8
< Date: Thu, 31 Aug 2017 01:09:30 GMT
< Expires: Sat, 30 Sep 2017 01:09:30 GMT
< Cache-Control: public, max-age=2592000
< Server: gws
< Content-Length: 219
< X-XSS-Protection: 1; mode=block
< X-Frame-Options: SAMEORIGIN
<
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.com/">here</A>.
</BODY></HTML>
* Connection #0 to host google.com left intact
```

The `>` symbols indicate part of the request being sent to the server. The `<` symbols indicate the response coming back to our system. Notice:

* Request
    * The request line with a verb, URI path, and HTTP protocol.
    * The headers providing a host, user agent (identifying the browser or client software), and an indication of the type of response the client will accept.
    * Empty body.
* Response
    * The status line with an HTTP protocol, the status code and reason phrase.
    * Headers.
    * A Body with HTML.

Sending a `curl` request to https://google.com will provide the actual site that is displayed when we visit google in a browser.

> Send a `curl` request to a web site of your choice. Note many of the same pieces from the request/response above, with **slightly** more HTML. 

## How do Users Create Requests?
A User doesn't need to know the inner workings of HTTP in order to use a website. They don't need to know they are sending a `POST` request to `/orders`. The requests they send are generated for them by the browser.

Requests are created by:

1. Typing a URL into a browser address bar
    * Always a `GET` request
    * Path is hand-typed
    * Can include Query Params that must be hand-typed
    * Does not include a body
1. Clicking Links or Buttons
    * The developer decides what Verb, Path and Query Params are included
    * Does not include a body
1. Form submission
    * Developer decides on Verb and Path
    * Can include query params but usually does not.
    * User inputs data into form fields. This data is included in the body of the request

## Diagram Process

> Imagine you are signing up as a new user of github.  Diagram the request/response cycle for the following sign-up steps:
> 1. Go to GitHub's home page
> 2. Click on the Sign Up link
> 3. Fill our the user form and click 'submit'
> 4. You are now logged in, looking at your own profile!
> 
> Be ready to share out your diagram before we wrap up for the day!

