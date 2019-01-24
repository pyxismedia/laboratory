# Heroku package setup

1. `cd packages/<MYPROJECT> && heroku create <MYPROJECT>`
2. `heroku buildpacks:set -a <MYPROJECT> https://github.com/Pagedraw/heroku-buildpack-select-subdir`
3. `heroku config:add BUILDPACK='packages/api=https://github.com/heroku/heroku-buildpack-nodejs#v83' -a <MYPROJECT>`
4. `heroku git:remote -a <MYPROJECT>`
5. `git push heroku master`