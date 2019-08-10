import { ListVersionsModule } from './list-versions.module';

describe('ListVersionsModule', () => {
  let listVersionsModule: ListVersionsModule;

  beforeEach(() => {
    listVersionsModule = new ListVersionsModule();
  });

  it('should create an instance', () => {
    expect(listVersionsModule).toBeTruthy();
  });
});
