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
5. Set Up [Jekyll](https://jekyllrb.com/docs/installation/ubuntu/)
    * `gem install jekyll bundler`
6. Clone and Set Up Local Repo
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

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
