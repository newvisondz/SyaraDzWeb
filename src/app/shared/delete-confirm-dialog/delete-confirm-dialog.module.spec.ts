import { DeleteConfirmDialogModule } from './delete-confirm-dialog.module';

describe('DeleteConfirmDialogModule', () => {
    let deleteConfirmDialogModule: DeleteConfirmDialogModule;

    beforeEach(() => {
        deleteConfirmDialogModule = new DeleteConfirmDialogModule();
    });

    it('should create an instance', () => {
        expect(deleteConfirmDialogModule).toBeTruthy();
    });
});
