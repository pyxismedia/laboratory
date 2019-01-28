import _ from 'underscore';
import keystone from 'keystone';

/**
 Initialises the standard view locals.
 Include anything that should be initialised before route controllers are executed.
 */
export const initLocals = ({ user }, { locals }, next) => {
    locals.user = user;
    // Add your own local variables here
    next();
};

/**
 Inits the error handler functions into `res`
 */
export const initErrorHandlers = (req, res, next) => {
  res.err = (err, title, message) => {
    res.status(500).render('errors/500', {
      err: err,
      errorTitle: title,
      errorMsg: message,
    });
  };

  res.notfound = (title, message) => {
    res.status(404).render('errors/404', {
      errorTitle: title,
      errorMsg: message,
    });
  };

  next();
};

/**
 Fetches and clears the flashMessages before a view is rendered
 */
export const flashMessages = (req, res, next) => {
  const flashes = {
    info: req.flash('info'),
    success: req.flash('success'),
    warning: req.flash('warning'),
    error: req.flash('error'),
  };
  res.locals.messages = _.any(
    flashes,
    ({ length }) => length,
  ) ? flashes : false;
  next();
};
