import { Field, List } from 'keystone';

const { Types } = Field;
const User = new List('User');

User.add({
  displayName: { type: String },
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true },
  password: { type: Types.Password, initial: true },
  canAccessKeystone: { type: Boolean, initial: true }
});

User.register();
