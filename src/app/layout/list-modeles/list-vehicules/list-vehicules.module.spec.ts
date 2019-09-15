import { ListVehiculeModule } from './list-vehicules.module';

describe('ListVehiculeModule', () => {
  let listeFabricantsModule: ListVehiculeModule;

  beforeEach(() => {
    listevehiculesModule = new ListVehiculeModule();
  });

  it('should create an instance', () => {
    expect(listevehiculesModule).toBeTruthy();
  });
});
