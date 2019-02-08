# Heroku package setup

1. `cd packages/<dir> && heroku create <app> --region eu`
2. `heroku buildpacks:set -a <app> https://github.com/Pagedraw/heroku-buildpack-select-subdir`
3. `heroku config:add BUILDPACK='packages/<dir>=https://github.com/heroku/heroku-buildpack-nodejs#v83' -a <app>`

# How to start development?

To be able to start development just run following in cli.

`$ yarn`

After changes please add changes to the repository using.

`$ git add .`

Instead of using `git commit` use following to have properly formatted commit message.

`$ yarn commit`

then send changes to server.

`$ git push`
