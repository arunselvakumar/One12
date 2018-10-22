import { HttpHeaders } from '@angular/common/http';

export class ApiConfig {

  static API_DEFAULT_URL = 'http://localhost:51422/';

  protected headers = {
    headers: this.setHeaders()
  };

  protected setHeaders(contentType: any = 'application/json'): HttpHeaders {
    const headersConfig = {
      'Accept': 'application/json',
    };

    if (contentType) {
      headersConfig['Content-Type'] = contentType;
    }

    return new HttpHeaders(headersConfig);
  }
}
