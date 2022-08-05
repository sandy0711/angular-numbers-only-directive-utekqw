import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-module',
  templateUrl: './core-module.component.html',
  styleUrls: ['./core-module.component.css'],
})
export class CoreModuleComponent implements OnInit, AfterViewInit {
  trigger: number = 0;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // let injector = ReflectiveInjector.resolve([PermissionService]);
    // this.permission = injector.get(PermissionService);
    setTimeout(() => (this.trigger = Math.random()), 1000); //Kept this for manual triggering the pipe in html
  }

  //validating permission.
  isAllowed(permissionId: any) {
    //return this.permissionService.isAllowed(permissionId);
  }

  handleError(error: any) {
    console.log(error);
    // let log: ErrorService = Reflection.getModuleService().getService("AppModule", ErrorService);

    // // let injector = ReflectiveInjector.resolveAndCreate([ErrorService, MessagingService, SharedService]);
    // // let log = injector.get(ErrorService);
    // log.handleError(error);
  }
}
