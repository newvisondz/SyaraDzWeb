import { LoginAdminModule } from './login-admin.module';

describe('LoginAdminModule', () => {
    let loginAdminModule: LoginAdminModule;

    beforeEach(() => {
        loginAdminModule = new LoginAdminModule();
    });

    it('should create an instance', () => {
        expect(loginAdminModule).toBeTruthy();
    });
});
