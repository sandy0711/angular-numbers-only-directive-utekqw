import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LoadingComponent } from '../components/loading/loading.component';

@Directive({
  selector: '[dtLoading]',
})
export class DtLoadingDirective {
  loadingFactory: ComponentFactory<LoadingComponent>;
  loadingComponent: ComponentRef<LoadingComponent>;

  @Input() set dtLoading(data: Promise<any>) {
    this._containerRef.clear();
    this.loadingComponent = this._containerRef.createComponent(
      this.loadingFactory
    );
    data.then(() => {
      this._containerRef.clear();
      this._containerRef.createEmbeddedView(this._templateRef);
    });
  }

  constructor(
    private _containerRef: ViewContainerRef,
    private _templateRef: TemplateRef<any>,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.loadingFactory =
      this._componentFactoryResolver.resolveComponentFactory(LoadingComponent);
  }

  ngOnInit() {
    console.log(this.dtLoading);
  }
}
