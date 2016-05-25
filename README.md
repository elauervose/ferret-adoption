# ferret-adoption

To get Jekyll to work in heroku, run this command after creating the project in heroku:

Specifically, if you see this:
```
remote:  !     Push rejected, no Cedar-supported app detected
remote: HINT: This occurs when Heroku cannot detect the buildpack
remote:       to use for this application automatically.
remote: See https://devcenter.heroku.com/articles/buildpacks
```

Use this command:

```
heroku config:add BUILDPACK_URL=https://github.com/andycroll/heroku-buildpack-jekyll
```

And follow the rest of the comments in this blog post:

http://andycroll.com/ruby/serving-a-jekyll-blog-using-heroku/