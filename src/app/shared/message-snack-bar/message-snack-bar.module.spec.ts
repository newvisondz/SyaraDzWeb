import { MessageSnackBarModule } from './delete-confirm-dialog.module';

describe('MessageSnackBarModule', () => {
    let messageSnackBarModule: MessageSnackBarModule;

    beforeEach(() => {
        messageSnackBarModule = new MessageSnackBarModule();
    });

    it('should create an instance', () => {
        expect(messageSnackBarModule).toBeTruthy();
    });
});
