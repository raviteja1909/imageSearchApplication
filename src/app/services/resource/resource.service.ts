import { Injectable } from '@angular/core';
import { ResourceConstants } from '../../constants/resource.constant';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() {
  }

  getConstValue(key: string): any {
    return ResourceConstants.RESOURCES[key];
  }
}
