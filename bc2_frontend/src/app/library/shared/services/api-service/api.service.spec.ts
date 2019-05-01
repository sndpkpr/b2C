import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieModule } from 'ngx-cookie';
import { Injector } from '@angular/core';
import { ErrorHandlerService } from 'library-core/services/error-handler/error-handler.service';
import { NotificationService } from './../notification-service/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CookieModule.forRoot(),
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [ApiService, ErrorHandlerService, NotificationService]
    });
  });
  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
  // it('should be created', inject([ApiService], (service: ApiService) => {
  //   expect(service.getToken()).toBeTruthy();
  //   console.log(service.getToken())
  // }));  // it('should be created testgetUrl', inject([ApiService], (service: ApiService) => {
  //   expect(service.testgetUrl('abc')).toBeTruthy();
  // }));
});
