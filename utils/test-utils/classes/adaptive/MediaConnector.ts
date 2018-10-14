
import {AbstractDecoratorConnector, Decorator} from "jec-commons";

export class MediaConnector extends AbstractDecoratorConnector {
  
  constructor(jcadReference:string, decorator:Decorator) {
    super(jcadReference, decorator)
  }
}