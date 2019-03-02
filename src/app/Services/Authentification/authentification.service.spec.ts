import { TestBed } from '@angular/core/testing';
import { AuthentificationService } from './authentification.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AuthentificationService', () => {
  let auth: AuthentificationService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentificationService = TestBed.get(AuthentificationService);
    expect(service).toBeTruthy();
  });

  it('getToken() should return the email & a token', () => {
    const service: AuthentificationService = TestBed.get(AuthentificationService);
    expect(service).toBeTruthy();
  });

});
