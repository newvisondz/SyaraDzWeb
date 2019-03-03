import { FormFabricantModule } from './form-fabricant.module';

describe('FormFabricantModule', () => {
    let formModule: FormFabricantModule;

    beforeEach(() => {
        formModule = new FormFabricantModule();
    });

    it('should create an instance', () => {
        expect(formFabricantModule).toBeTruthy();
    });
});
