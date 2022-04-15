import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisualIdentityService {
  public constructor() { }

  public setVariables(
    primaryColor: string = '',
    secondaryColor: string = '',
    alertColor: string = '',
    errorColor: string = '',
    successColor: string = '',
  ) : void {
    const root: any = document.querySelector(':root');
    root.style.setProperty('--primary', primaryColor);
    root.style.setProperty('--secondary', secondaryColor);
    root.style.setProperty('--alert', alertColor);
    root.style.setProperty('--error', errorColor);
    root.style.setProperty('--success', successColor);
  }
}
