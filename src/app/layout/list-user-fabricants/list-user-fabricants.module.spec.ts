import { ListUserFabricantsModule } from './list-user-fabricants.module';

describe('TablesModule', () => {
  let listeUserFabricantsModule: ListUserFabricantsModule;

  beforeEach(() => {
    listeUserFabricantsModule = new ListUserFabricantsModule();
  });

  it('should create an instance', () => {
    expect(listeUserFabricantsModule).toBeTruthy();
  });
});
