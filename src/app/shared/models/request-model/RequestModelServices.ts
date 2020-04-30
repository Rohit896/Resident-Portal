import Utils from 'src/app/app.util';
import * as appConstanst from '../../../app.constants';

export class RequestModelServices {
  version = appConstanst.VERSION1;
  requesttime = Utils.getCurrentDate();
  constructor(private id: string, private request: any, private metadata?: any) {}
}

