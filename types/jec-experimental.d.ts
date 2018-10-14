/*!
 * JEC Experiments Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <http://jecproject.org>
 */

declare module "jec-experimental" {

export interface MediaParams {    urlPatterns: string[];    cors?: string[];    cacheControl?: string;    rootPath?: string;    proxyPath?: string;    defaultLocale: string;    locales: string[];    rules: MediaRule[];    configPath?: string;}export function Media(params?: MediaParams): Function;export class AdaptiveError extends Error {    constructor(message: string);}export enum MediaConnectorRefs {    MEDIA_CONNECTOR_REF = "com.jec.experimental.adaptive.annotations.Media"}export interface MediaRule {    matchRef: string;    path: string;}}