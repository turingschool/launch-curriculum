# launch-curriculum
launch.turing.edu website

# Turing School of Software and Design

## Site for the Launch Program

This site is built with Jekyll. Find the docs [here](https://jekyllrb.com/docs/usage/)

## Contributing

### General

The production branch for this repo is `gh-pages`.  Branches that you create need to be merged into `gh-pages`.

### Windows
1. Set Up [WSL](https://learn.microsoft.com/en-us/windows/wsl/)
    * In PowerShell `wsl --install`
    * Restart your machine
    * Ubuntu will startup on restart; create your username and password  
* From here, all commands are run in Ubuntu terminal.
2. Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
    * `sudo apt-get update`
    * `sudo apt-get install ruby-full`
    * `echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc`
    * `echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc`
    * `echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc`
    * `source ~/.bashrc`
3. Install Ubuntu Dev Tools
    * `sudo apt-get install ubuntu-dev-tools`
4. [Configure git SSH key](https://mod0.turing.edu/computer-setup#configure-github)
    * I think because I was on windows, I had to start the ssh-agent using `eval 'ssh-agent -s'` before running `ssh-add ~/.ssh/id_rsa.pub`
6. Set Up [Jekyll](https://jekyllrb.com/docs/installation/ubuntu/)
    * `gem install jekyll bundler`
7. Clone and Set Up Local Repo
    * Clone the repo: `git clone git@github.com:turingschool/launch-curriculum.git`
    * Open the repository: `cd launch-curriculum`
    * Bundle your gems: `bundle install`
    * To start the server: `bundle exec jekyll serve`
    * Navigate to `http://localhost:4000` to see the site.

### Mac
* Clone the repo `git clone git@github.com:turingschool/launch-curriculum.git`
* Install ruby, and run `bundle install`
* NOTE: you may need to first install eventmachine setting the `openssl-dir`:
```
gem install eventmachine -- --with-openssl-dir=/usr/local/opt/openssl@1.1
```
* You can now begin to edit the website.
* To start the server run `bundle exec jekyll serve`.
* Navigate to `http://localhost:4000` to see the site
* Make changes on the `gh-pages` branch.
* You can push changes to production by pushing the `gh-pages` branch to github. `git push origin gh-pages`.
* The changes may take a minute or two to be recognized on production. Please make sure you review your changes on production.

## Style Notes

### Instructor Notes

You can include 'hidden' instructor notes in your lessons by using the following syntax:

```html
<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Your Note.</p>
</aside>
```

These notes are available by calling `showInstructorNotes()` in console.

### Styling Your Lesson Plans

You can add styled boxes to your lesson plans for different areas of content.

#### Standard Box:

```html
<section class="call-to-action">
### In Your Notebook

What would you expect to be logged when we get to line 10? Why?
</section>
```

Will result in the following styled box:

![styled-box](https://user-images.githubusercontent.com/17582916/60548262-e75fd180-9cde-11e9-8964-03c4ee6152d9.png)

#### Answer/Solution Box:

The heading in the answer box *must be an h3*. You can include any text within the section after that

```html
<section class="answer">
### The Answer  

Here is an answer to the On Your Own section...
</section>
```

Will result in the following styled box:

![collapsed answer](https://user-images.githubusercontent.com/17582916/72355972-a725d680-36a5-11ea-8755-077ebf0d34dc.png)

![expanded answer](https://user-images.githubusercontent.com/17582916/72356019-be64c400-36a5-11ea-87e6-a5a7310db2bc.png)

#### Note Box:

```html
<section class="note">
### Note

This hoisting behavior adds some complexity to the JavaScript language, and is important to understand thoroughly in order to anticipate the values of your variables at any given time.
</section>
```

![note-box](https://user-images.githubusercontent.com/17582916/60548280-f2b2fd00-9cde-11e9-848c-6d58f4b6ebde.png)

#### CFU/Exit Ticket Box:

```html
<section class="checks-for-understanding">
### Exit Ticket

What are 3 easy and actionable accessibility steps you can take in all of your projects from here on out?
</section>
```

![cfu-box](https://user-images.githubusercontent.com/17582916/60548305-ff375580-9cde-11e9-9e06-739244d68973.png)

**DO NOT INDENT YOUR MARKDOWN** within the section tag, or else it will not work.

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.


