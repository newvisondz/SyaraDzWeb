import { FormControl, FormGroup, NgForm, FormGroupDirective } from '@angular/forms';

export class PasswordValidator {
  static validate(registrationFormGroup: FormGroup) {
        let password = registrationFormGroup.controls.password.value;
        let repeatPassword = registrationFormGroup.controls.confirmPassword.value;

        if (repeatPassword.length <= 0) {
            return null;
        }

        if (repeatPassword !== password) {
            return {
                areEqual: true
            };
        }

        return null;

    }
}
