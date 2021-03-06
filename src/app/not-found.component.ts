import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
  <style media="screen">
    body { background: #ECEFF1; color: rgba(0,0,0,0.87); font-family: Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; }
    #message { background: white; max-width: 360px; margin: 100px auto 16px; padding: 32px 24px 16px; border-radius: 3px; }
    #message h2 { color: #ffa100; font-weight: bold; font-size: 16px; margin: 0 0 8px; }
    #message h1 { font-size: 22px; font-weight: 300; color: rgba(0,0,0,0.6); margin: 0 0 16px;}
    @media (max-width: 600px) {
      body, #message { margin-top: 0; background: white; box-shadow: none; }
      body { border-top: 16px solid #ffa100; }
    }
  </style>
  <div id="message">
    <h2>404</h2>
    <h1>Página não encontrada</h1>
  </div>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
