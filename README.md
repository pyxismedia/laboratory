# Heroku package setup

1. `cd packages/api && heroku create myproject-api`
2. `heroku buildpacks:set -a myproject-api https://github.com/Pagedraw/heroku-buildpack-select-subdir`
3. `heroku config:add BUILDPACK='packages/api=https://github.com/heroku/heroku-buildpack-nodejs#v83' -a myproject-api`
4. `heroku git:remote -a myproject-api`
5. `git push heroku master`