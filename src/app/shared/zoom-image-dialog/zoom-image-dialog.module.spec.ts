import { ZoomImageDialogModule } from './zoom-image-dialog.module';

describe('DeleteConfirmDialogModule', () => {
    let zoomImageDialogModule: ZoomImageDialogModule;

    beforeEach(() => {
        zoomImageDialogModule = new ZoomImageDialogModule();
    });

    it('should create an instance', () => {
        expect(zoomImageDialogModule).toBeTruthy();
    });
});
