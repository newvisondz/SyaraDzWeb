import { FormUserModule } from './form-user.module';

describe('FormUserModule', () => {
  let formUserModule: FormUserModule;

  beforeEach(() => {
    formUserModule = new FormUserModule();
  });

  it('should create an instance', () => {
    expect(formUserModule).toBeTruthy();
  });
});
