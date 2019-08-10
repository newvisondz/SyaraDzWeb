import { ContractFabricantDialogModule } from './contract-fabricant-dialog.module';

describe('ContractFabricantDialogModule', () => {
  let pageHeaderModule: ContractFabricantDialogModule;

  beforeEach(() => {
    pageHeaderModule = new ContractFabricantDialogModule();
  });

  it('should create an instance', () => {
    expect(pageHeaderModule).toBeTruthy();
  });
});
