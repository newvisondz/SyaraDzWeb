import { ListModelesModule } from './list-modeles.module';

describe('ListModelesModule', () => {
  let listModelesModule: ListModelesModule;

  beforeEach(() => {
    listModelesModule = new ListModelesModule();
  });

  it('should create an instance', () => {
    expect(listModelesModule).toBeTruthy();
  });
});
