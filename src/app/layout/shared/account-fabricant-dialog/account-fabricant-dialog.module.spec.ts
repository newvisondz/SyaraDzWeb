import { AccountFabricantDialogModule } from './account-fabricant-dialog.module';

describe('AccountFabricantDialogModule', () => {
  let pageHeaderModule: AccountFabricantDialogModule;

  beforeEach(() => {
    pageHeaderModule = new AccountFabricantDialogModule();
  });

  it('should create an instance', () => {
    expect(pageHeaderModule).toBeTruthy();
  });
});
