import 'reflect-metadata';
import { Methods } from './methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

interface RouteHandleDescriptor extends PropertyDescriptor{
  value?:RequestHandler;
}

function routeBinder(method: string){
    return function get(path: string) {
        return function(target: any, key: string, desc: RouteHandleDescriptor) {
          Reflect.defineMetadata(MetadataKeys.path, path, target, key);
          Reflect.defineMetadata(MetadataKeys.method, method, target, key);
        };
    }
}

export const get  = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
