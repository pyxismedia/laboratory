import React, { FunctionComponent } from 'react';

export const Form: FunctionComponent = () => (
  <form>
    <span className="btn-group" data-toggle="buttons">
      <label className="btn btn-primary">
        <input type="radio" name="shipping-method" id="shipping-personal" className="sr-only" />
        Personal handover
      </label>
      <label className="btn btn-primary">
        <input type="radio" name="shipping-method" id="shipping-post" className="sr-only" />
        Post delivery
      </label>
    </span>
  </form>
);