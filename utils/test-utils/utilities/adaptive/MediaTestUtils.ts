//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {ClassLoader, JcadContextFactory, JcadContext, DecoratorConnectorManager,
        JcadContextManager, Decorator, DefaultClassLoader} from "jec-commons";
import {MediaConnector} from "../../classes/adaptive/MediaConnector";
import {MediaConnectorRefs} from "../../../../src/com/jec/experimental/adaptive/jcad/MediaConnectorRefs";
import {MediaParams} from "../../../../src/com/jec/experimental/adaptive/annotations/core/MediaParams";

/*!
* This module constains utilities used by the MediaTest test suite.
*/

// Utilities:
const LOADER:ClassLoader = new DefaultClassLoader();
const VALID_CLASS:string = process.cwd() + "/utils/test-utils/classes/adaptive/MediaTestClass";
export const buildClassRef:Function = function():any {
  const ClassRef:any = LOADER.loadClass(VALID_CLASS);
  return new ClassRef();
};
class InjectableDecorator implements Decorator {
  decorate(target:any, params:MediaParams):any { return target; }
}
export const MEDIA_DECORATOR:Decorator = new InjectableDecorator();
export const initContext:Function = function():JcadContext {
  const factory:JcadContextFactory = new JcadContextFactory();
  const connector = new MediaConnector(MediaConnectorRefs.MEDIA_CONNECTOR_REF, MEDIA_DECORATOR);
  const context:JcadContext = factory.create();
  DecoratorConnectorManager.getInstance().addConnector(connector, context);
  JcadContextManager.getInstance().addContext(MediaConnectorRefs.MEDIA_CONNECTOR_REF, context);
  return context;
}
export const resetContext:Function = function(context:JcadContext):void {
  JcadContextManager.getInstance().removeContext(MediaConnectorRefs.MEDIA_CONNECTOR_REF);
  DecoratorConnectorManager.getInstance().removeConnector(MediaConnectorRefs.MEDIA_CONNECTOR_REF, context);
  context = null;
}
