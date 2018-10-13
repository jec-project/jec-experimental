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

import {MediaRule} from "../../media/MediaRule";

/**
 * The <code>MediaParams</code> interface defines the API you must implement to
 * create objects passed as parameter of the JEC <code>@Media<code> decorator.
 */
export interface MediaParams {

  /**
   * The list of URIs used to resolve media mapping.
   */
  urlPatterns:string[];

  /**
   * An optional list of URIs that can be used to set Cross-origin resource 
   * sharing (CORS).
   */
  cors?:string[];

  /**
   * An optional string that allows to specifie Cache-Control HTTP header
   * parameters.
   */
  cacheControl?:string;

  /**
   * The path to the media directory in the file system.
   */
  rootPath?: string;
  
  /**
   * The path to the next server when the <code>@Media</code> decorator is used
   * as a proxy server to access external media.
   */
  proxyPath?: string;

  /**
   * The reference to the default locale specified for the associated 
   * <code>@Media</code> decorator.
   */
  defaultLocale: string;

  /**
   * The list of available locales specified for the associated 
   * <code>@Media</code> decorator.
   */
  locales: string[];

  /**
   * The list of adaptive design rules specified for the associated 
   * <code>@Media</code> decorator.
   */
  rules: MediaRule[];

  /**
   * The path to an external JSON config file for the associated 
   * <code>@Media</code> decorator.
   */
  configPath?: string;
}