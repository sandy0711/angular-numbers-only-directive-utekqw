import { TemplateRef, ViewContainerRef, Input, Directive } from '@angular/core';
// import { PermissionService } from '@ttdas/core.abstractions';
// usage: *hasPermission="Perm.Code"

@Directive({
  selector: '[hasPermission]',
  inputs: ['hasPermission'],
})
export class HasPermissionDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef // private service: PermissionService
  ) {}

  @Input() set isAllowed(code: string) {
    if (code) {
      this.service.isAllowed(code).subscribe((allow) => {
        if (allow) {
          // If condition is true add template to DOM
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          // Else remove template from DOM
          this.viewContainer.clear();
        }
      });
    }
  }
}
