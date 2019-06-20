import { ListFabricantsModule } from './list-fabricants.module';

describe('TablesModule', () => {
  let listeFabricantsModule: any;

  beforeEach(() => {
    listeFabricantsModule = new ListFabricantsModule();
  });

  it('should create an instance', () => {
    expect(listeFabricantsModule).toBeTruthy();
  });
});
