import Ember from 'ember';
import validator from './validator';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  validator,
  actions: {
    async loginUser(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Make better decisions with this form');
      }

      await changeset.save();

      try {
        await this.get('session').authenticate('authenticator:token', {
          identification: this.get('model.email'),
          password: this.get('model.password'),
        });
      } catch (reason) {
        console.log(reason);

        return this.set('errorMessage', reason.message);
      }

      this.transitionToRoute('user-dashboard');
    },
  }
});
